import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpEventType, HttpResponse } from './response';
import * as i0 from "@angular/core";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
/** @type {?} */
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
/** @type {?} */
export const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
/** @type {?} */
export const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
/** @type {?} */
export const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 * @abstract
 */
export class JsonpCallbackContext {
}
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * \@publicApi
 */
export class JsonpClientBackend {
    /**
     * @param {?} callbackMap
     * @param {?} document
     */
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    nextCallback() { return `ng_jsonp_callback_${nextRequestId++}`; }
    /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new Observable((observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            /** @type {?} */
            const callback = this.nextCallback();
            /** @type {?} */
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            /** @type {?} */
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            /** @type {?} */
            let body = null;
            // Whether the response callback has been called.
            /** @type {?} */
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            /** @type {?} */
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            /** @type {?} */
            const cleanup = () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            /** @type {?} */
            const onLoad = (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body,
                    status: 200,
                    statusText: 'OK', url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            /** @type {?} */
            const onError = (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error', url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    }
}
JsonpClientBackend.decorators = [
    { type: Injectable },
];
/** @nocollapse */
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
JsonpClientBackend.ngInjectableDef = i0.defineInjectable({ token: JsonpClientBackend, factory: function JsonpClientBackend_Factory(t) { return new (t || JsonpClientBackend)(i0.inject(JsonpCallbackContext), i0.inject(DOCUMENT)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(JsonpClientBackend, [{
        type: Injectable
    }], [{
        type: JsonpCallbackContext
    }, {
        type: undefined,
        decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }]
    }], null);
if (false) {
    /** @type {?} */
    JsonpClientBackend.prototype.callbackMap;
    /** @type {?} */
    JsonpClientBackend.prototype.document;
}
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * \@publicApi
 */
export class JsonpInterceptor {
    /**
     * @param {?} jsonp
     */
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle((/** @type {?} */ (req)));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];
JsonpInterceptor.ngInjectableDef = i0.defineInjectable({ token: JsonpInterceptor, factory: function JsonpInterceptor_Factory(t) { return new (t || JsonpInterceptor)(i0.inject(JsonpClientBackend)); }, providedIn: null });
/*@__PURE__*/ i0.ɵsetClassMetadata(JsonpInterceptor, [{
        type: Injectable
    }], [{
        type: JsonpClientBackend
    }], null);
if (false) {
    /** @type {?} */
    JsonpInterceptor.prototype.jsonp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbnAuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb21tb24vaHR0cC9zcmMvanNvbnAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFJMUMsT0FBTyxFQUFDLGlCQUFpQixFQUFhLGFBQWEsRUFBRSxZQUFZLEVBQUMsTUFBTSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1qRixhQUFhLEdBQVcsQ0FBQzs7OztBQUk3QixNQUFNLE9BQU8scUJBQXFCLEdBQUcsZ0RBQWdEOzs7O0FBSXJGLE1BQU0sT0FBTyxzQkFBc0IsR0FBRywrQ0FBK0M7O0FBQ3JGLE1BQU0sT0FBTyw2QkFBNkIsR0FBRyw2Q0FBNkM7Ozs7Ozs7OztBQVMxRixNQUFNLE9BQWdCLG9CQUFvQjtDQUF3Qzs7Ozs7OztBQVNsRixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM3QixZQUFvQixXQUFpQyxFQUE0QixRQUFhO1FBQTFFLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQzs7Ozs7SUFLMUYsWUFBWSxLQUFhLE9BQU8scUJBQXFCLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFLakYsTUFBTSxDQUFDLEdBQXVCO1FBQzVCLDRFQUE0RTtRQUM1RSxxRUFBcUU7UUFDckUsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDekM7YUFBTSxJQUFJLEdBQUcsQ0FBQyxZQUFZLEtBQUssTUFBTSxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxL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QUFDLG1CQUFBLEdBQUcsRUFBc0IsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QseUNBQXlDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUFWRixVQUFVOzs7O1lBRWtCLGtCQUFrQjs7Z0VBRGxDLGdCQUFnQixtRUFBaEIsZ0JBQWdCLFlBQ0Esa0JBQWtCO21DQURsQyxnQkFBZ0I7Y0FENUIsVUFBVTs7Y0FFa0Isa0JBQWtCOzs7O0lBQWpDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge0h0dHBCYWNrZW5kLCBIdHRwSGFuZGxlcn0gZnJvbSAnLi9iYWNrZW5kJztcbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZX0gZnJvbSAnLi9yZXNwb25zZSc7XG5cbi8vIEV2ZXJ5IHJlcXVlc3QgbWFkZSB0aHJvdWdoIEpTT05QIG5lZWRzIGEgY2FsbGJhY2sgbmFtZSB0aGF0J3MgdW5pcXVlIGFjcm9zcyB0aGVcbi8vIHdob2xlIHBhZ2UuIEVhY2ggcmVxdWVzdCBpcyBhc3NpZ25lZCBhbiBpZCBhbmQgdGhlIGNhbGxiYWNrIG5hbWUgaXMgY29uc3RydWN0ZWRcbi8vIGZyb20gdGhhdC4gVGhlIG5leHQgaWQgdG8gYmUgYXNzaWduZWQgaXMgdHJhY2tlZCBpbiBhIGdsb2JhbCB2YXJpYWJsZSBoZXJlIHRoYXRcbi8vIGlzIHNoYXJlZCBhbW9uZyBhbGwgYXBwbGljYXRpb25zIG9uIHRoZSBwYWdlLlxubGV0IG5leHRSZXF1ZXN0SWQ6IG51bWJlciA9IDA7XG5cbi8vIEVycm9yIHRleHQgZ2l2ZW4gd2hlbiBhIEpTT05QIHNjcmlwdCBpcyBpbmplY3RlZCwgYnV0IGRvZXNuJ3QgaW52b2tlIHRoZSBjYWxsYmFja1xuLy8gcGFzc2VkIGluIGl0cyBVUkwuXG5leHBvcnQgY29uc3QgSlNPTlBfRVJSX05PX0NBTExCQUNLID0gJ0pTT05QIGluamVjdGVkIHNjcmlwdCBkaWQgbm90IGludm9rZSBjYWxsYmFjay4nO1xuXG4vLyBFcnJvciB0ZXh0IGdpdmVuIHdoZW4gYSByZXF1ZXN0IGlzIHBhc3NlZCB0byB0aGUgSnNvbnBDbGllbnRCYWNrZW5kIHRoYXQgZG9lc24ndFxuLy8gaGF2ZSBhIHJlcXVlc3QgbWV0aG9kIEpTT05QLlxuZXhwb3J0IGNvbnN0IEpTT05QX0VSUl9XUk9OR19NRVRIT0QgPSAnSlNPTlAgcmVxdWVzdHMgbXVzdCB1c2UgSlNPTlAgcmVxdWVzdCBtZXRob2QuJztcbmV4cG9ydCBjb25zdCBKU09OUF9FUlJfV1JPTkdfUkVTUE9OU0VfVFlQRSA9ICdKU09OUCByZXF1ZXN0cyBtdXN0IHVzZSBKc29uIHJlc3BvbnNlIHR5cGUuJztcblxuLyoqXG4gKiBESSB0b2tlbi9hYnN0cmFjdCB0eXBlIHJlcHJlc2VudGluZyBhIG1hcCBvZiBKU09OUCBjYWxsYmFja3MuXG4gKlxuICogSW4gdGhlIGJyb3dzZXIsIHRoaXMgc2hvdWxkIGFsd2F5cyBiZSB0aGUgYHdpbmRvd2Agb2JqZWN0LlxuICpcbiAqXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBKc29ucENhbGxiYWNrQ29udGV4dCB7IFtrZXk6IHN0cmluZ106IChkYXRhOiBhbnkpID0+IHZvaWQ7IH1cblxuLyoqXG4gKiBgSHR0cEJhY2tlbmRgIHRoYXQgb25seSBwcm9jZXNzZXMgYEh0dHBSZXF1ZXN0YCB3aXRoIHRoZSBKU09OUCBtZXRob2QsXG4gKiBieSBwZXJmb3JtaW5nIEpTT05QIHN0eWxlIHJlcXVlc3RzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpzb25wQ2xpZW50QmFja2VuZCBpbXBsZW1lbnRzIEh0dHBCYWNrZW5kIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsYmFja01hcDogSnNvbnBDYWxsYmFja0NvbnRleHQsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge31cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSBuZXh0IGNhbGxiYWNrIG1ldGhvZCwgYnkgaW5jcmVtZW50aW5nIHRoZSBnbG9iYWwgYG5leHRSZXF1ZXN0SWRgLlxuICAgKi9cbiAgcHJpdmF0ZSBuZXh0Q2FsbGJhY2soKTogc3RyaW5nIHsgcmV0dXJuIGBuZ19qc29ucF9jYWxsYmFja18ke25leHRSZXF1ZXN0SWQrK31gOyB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgYSBKU09OUCByZXF1ZXN0IGFuZCByZXR1cm4gYW4gZXZlbnQgc3RyZWFtIG9mIHRoZSByZXN1bHRzLlxuICAgKi9cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8bmV2ZXI+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIC8vIEZpcnN0bHksIGNoZWNrIGJvdGggdGhlIG1ldGhvZCBhbmQgcmVzcG9uc2UgdHlwZS4gSWYgZWl0aGVyIGRvZXNuJ3QgbWF0Y2hcbiAgICAvLyB0aGVuIHRoZSByZXF1ZXN0IHdhcyBpbXByb3Blcmx5IHJvdXRlZCBoZXJlIGFuZCBjYW5ub3QgYmUgaGFuZGxlZC5cbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ0pTT05QJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKEpTT05QX0VSUl9XUk9OR19NRVRIT0QpO1xuICAgIH0gZWxzZSBpZiAocmVxLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoSlNPTlBfRVJSX1dST05HX1JFU1BPTlNFX1RZUEUpO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5dGhpbmcgZWxzZSBoYXBwZW5zIGluc2lkZSB0aGUgT2JzZXJ2YWJsZSBib3VuZGFyeS5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+KChvYnNlcnZlcjogT2JzZXJ2ZXI8SHR0cEV2ZW50PGFueT4+KSA9PiB7XG4gICAgICAvLyBUaGUgZmlyc3Qgc3RlcCB0byBtYWtlIGEgcmVxdWVzdCBpcyB0byBnZW5lcmF0ZSB0aGUgY2FsbGJhY2sgbmFtZSwgYW5kIHJlcGxhY2UgdGhlXG4gICAgICAvLyBjYWxsYmFjayBwbGFjZWhvbGRlciBpbiB0aGUgVVJMIHdpdGggdGhlIG5hbWUuIENhcmUgaGFzIHRvIGJlIHRha2VuIGhlcmUgdG8gZW5zdXJlXG4gICAgICAvLyBhIHRyYWlsaW5nICYsIGlmIG1hdGNoZWQsIGdldHMgaW5zZXJ0ZWQgYmFjayBpbnRvIHRoZSBVUkwgaW4gdGhlIGNvcnJlY3QgcGxhY2UuXG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMubmV4dENhbGxiYWNrKCk7XG4gICAgICBjb25zdCB1cmwgPSByZXEudXJsV2l0aFBhcmFtcy5yZXBsYWNlKC89SlNPTlBfQ0FMTEJBQ0soJnwkKS8sIGA9JHtjYWxsYmFja30kMWApO1xuXG4gICAgICAvLyBDb25zdHJ1Y3QgdGhlIDxzY3JpcHQ+IHRhZyBhbmQgcG9pbnQgaXQgYXQgdGhlIFVSTC5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgbm9kZS5zcmMgPSB1cmw7XG5cbiAgICAgIC8vIEEgSlNPTlAgcmVxdWVzdCByZXF1aXJlcyB3YWl0aW5nIGZvciBtdWx0aXBsZSBjYWxsYmFja3MuIFRoZXNlIHZhcmlhYmxlc1xuICAgICAgLy8gYXJlIGNsb3NlZCBvdmVyIGFuZCB0cmFjayBzdGF0ZSBhY3Jvc3MgdGhvc2UgY2FsbGJhY2tzLlxuXG4gICAgICAvLyBUaGUgcmVzcG9uc2Ugb2JqZWN0LCBpZiBvbmUgaGFzIGJlZW4gcmVjZWl2ZWQsIG9yIG51bGwgb3RoZXJ3aXNlLlxuICAgICAgbGV0IGJvZHk6IGFueXxudWxsID0gbnVsbDtcblxuICAgICAgLy8gV2hldGhlciB0aGUgcmVzcG9uc2UgY2FsbGJhY2sgaGFzIGJlZW4gY2FsbGVkLlxuICAgICAgbGV0IGZpbmlzaGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgIC8vIFdoZXRoZXIgdGhlIHJlcXVlc3QgaGFzIGJlZW4gY2FuY2VsbGVkIChhbmQgdGh1cyBhbnkgb3RoZXIgY2FsbGJhY2tzKVxuICAgICAgLy8gc2hvdWxkIGJlIGlnbm9yZWQuXG4gICAgICBsZXQgY2FuY2VsbGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgIC8vIFNldCB0aGUgcmVzcG9uc2UgY2FsbGJhY2sgaW4gdGhpcy5jYWxsYmFja01hcCAod2hpY2ggd2lsbCBiZSB0aGUgd2luZG93XG4gICAgICAvLyBvYmplY3QgaW4gdGhlIGJyb3dzZXIuIFRoZSBzY3JpcHQgYmVpbmcgbG9hZGVkIHZpYSB0aGUgPHNjcmlwdD4gdGFnIHdpbGxcbiAgICAgIC8vIGV2ZW50dWFsbHkgY2FsbCB0aGlzIGNhbGxiYWNrLlxuICAgICAgdGhpcy5jYWxsYmFja01hcFtjYWxsYmFja10gPSAoZGF0YT86IGFueSkgPT4ge1xuICAgICAgICAvLyBEYXRhIGhhcyBiZWVuIHJlY2VpdmVkIGZyb20gdGhlIEpTT05QIHNjcmlwdC4gRmlyc3RseSwgZGVsZXRlIHRoaXMgY2FsbGJhY2suXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrTWFwW2NhbGxiYWNrXTtcblxuICAgICAgICAvLyBOZXh0LCBtYWtlIHN1cmUgdGhlIHJlcXVlc3Qgd2Fzbid0IGNhbmNlbGxlZCBpbiB0aGUgbWVhbnRpbWUuXG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgc3RhdGUgdG8gaW5kaWNhdGUgZGF0YSB3YXMgcmVjZWl2ZWQuXG4gICAgICAgIGJvZHkgPSBkYXRhO1xuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICB9O1xuXG4gICAgICAvLyBjbGVhbnVwKCkgaXMgYSB1dGlsaXR5IGNsb3N1cmUgdGhhdCByZW1vdmVzIHRoZSA8c2NyaXB0PiBmcm9tIHRoZSBwYWdlIGFuZFxuICAgICAgLy8gdGhlIHJlc3BvbnNlIGNhbGxiYWNrIGZyb20gdGhlIHdpbmRvdy4gVGhpcyBsb2dpYyBpcyB1c2VkIGluIGJvdGggdGhlXG4gICAgICAvLyBzdWNjZXNzLCBlcnJvciwgYW5kIGNhbmNlbGxhdGlvbiBwYXRocywgc28gaXQncyBleHRyYWN0ZWQgb3V0IGZvciBjb252ZW5pZW5jZS5cbiAgICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgPHNjcmlwdD4gdGFnIGlmIGl0J3Mgc3RpbGwgb24gdGhlIHBhZ2UuXG4gICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIHJlc3BvbnNlIGNhbGxiYWNrIGZyb20gdGhlIGNhbGxiYWNrTWFwICh3aW5kb3cgb2JqZWN0IGluIHRoZVxuICAgICAgICAvLyBicm93c2VyKS5cbiAgICAgICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tNYXBbY2FsbGJhY2tdO1xuICAgICAgfTtcblxuICAgICAgLy8gb25Mb2FkKCkgaXMgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgd2hpY2ggcnVucyBhZnRlciB0aGUgcmVzcG9uc2UgY2FsbGJhY2tcbiAgICAgIC8vIGlmIHRoZSBKU09OUCBzY3JpcHQgbG9hZHMgc3VjY2Vzc2Z1bGx5LiBUaGUgZXZlbnQgaXRzZWxmIGlzIHVuaW1wb3J0YW50LlxuICAgICAgLy8gSWYgc29tZXRoaW5nIHdlbnQgd3JvbmcsIG9uTG9hZCgpIG1heSBydW4gd2l0aG91dCB0aGUgcmVzcG9uc2UgY2FsbGJhY2tcbiAgICAgIC8vIGhhdmluZyBiZWVuIGludm9rZWQuXG4gICAgICBjb25zdCBvbkxvYWQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlIHJlcXVlc3QgaGFzIGJlZW4gY2FuY2VsbGVkLlxuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xlYW51cCB0aGUgcGFnZS5cbiAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIHJlc3BvbnNlIGNhbGxiYWNrIGhhcyBydW4uXG4gICAgICAgIGlmICghZmluaXNoZWQpIHtcbiAgICAgICAgICAvLyBJdCBoYXNuJ3QsIHNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIHJlcXVlc3QuIFJldHVybiBhbiBlcnJvciB2aWFcbiAgICAgICAgICAvLyB0aGUgT2JzZXJ2YWJsZSBlcnJvciBwYXRoLiBBbGwgSlNPTlAgZXJyb3JzIGhhdmUgc3RhdHVzIDAuXG4gICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIHN0YXR1czogMCxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6ICdKU09OUCBFcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKEpTT05QX0VSUl9OT19DQUxMQkFDSyksXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN1Y2Nlc3MuIGJvZHkgZWl0aGVyIGNvbnRhaW5zIHRoZSByZXNwb25zZSBib2R5IG9yIG51bGwgaWYgbm9uZSB3YXNcbiAgICAgICAgLy8gcmV0dXJuZWQuXG4gICAgICAgIG9ic2VydmVyLm5leHQobmV3IEh0dHBSZXNwb25zZSh7XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICBzdGF0dXNUZXh0OiAnT0snLCB1cmwsXG4gICAgICAgIH0pKTtcblxuICAgICAgICAvLyBDb21wbGV0ZSB0aGUgc3RyZWFtLCB0aGUgcmVzcG9uc2UgaXMgb3Zlci5cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIG9uRXJyb3IoKSBpcyB0aGUgZXJyb3IgY2FsbGJhY2ssIHdoaWNoIHJ1bnMgaWYgdGhlIHNjcmlwdCByZXR1cm5lZCBnZW5lcmF0ZXNcbiAgICAgIC8vIGEgSmF2YXNjcmlwdCBlcnJvci4gSXQgZW1pdHMgdGhlIGVycm9yIHZpYSB0aGUgT2JzZXJ2YWJsZSBlcnJvciBjaGFubmVsIGFzXG4gICAgICAvLyBhIEh0dHBFcnJvclJlc3BvbnNlLlxuICAgICAgY29uc3Qgb25FcnJvcjogYW55ID0gKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgYWxyZWFkeSBjYW5jZWxsZWQsIG5vIG5lZWQgdG8gZW1pdCBhbnl0aGluZy5cbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgLy8gV3JhcCB0aGUgZXJyb3IgaW4gYSBIdHRwRXJyb3JSZXNwb25zZS5cbiAgICAgICAgb2JzZXJ2ZXIuZXJyb3IobmV3IEh0dHBFcnJvclJlc3BvbnNlKHtcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBzdGF0dXM6IDAsXG4gICAgICAgICAgc3RhdHVzVGV4dDogJ0pTT05QIEVycm9yJywgdXJsLFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBTdWJzY3JpYmUgdG8gYm90aCB0aGUgc3VjY2VzcyAobG9hZCkgYW5kIGVycm9yIGV2ZW50cyBvbiB0aGUgPHNjcmlwdD4gdGFnLFxuICAgICAgLy8gYW5kIGFkZCBpdCB0byB0aGUgcGFnZS5cbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZCk7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGhhcyBub3cgYmVlbiBzdWNjZXNzZnVsbHkgc2VudC5cbiAgICAgIG9ic2VydmVyLm5leHQoe3R5cGU6IEh0dHBFdmVudFR5cGUuU2VudH0pO1xuXG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFuZGxlci5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIC8vIFRyYWNrIHRoZSBjYW5jZWxsYXRpb24gc28gZXZlbnQgbGlzdGVuZXJzIHdvbid0IGRvIGFueXRoaW5nIGV2ZW4gaWYgYWxyZWFkeSBzY2hlZHVsZWQuXG4gICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lcnMgc28gdGhleSB3b24ndCBydW4gaWYgdGhlIGV2ZW50cyBsYXRlciBmaXJlLlxuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG5cbiAgICAgICAgLy8gQW5kIGZpbmFsbHksIGNsZWFuIHVwIHRoZSBwYWdlLlxuICAgICAgICBjbGVhbnVwKCk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQW4gYEh0dHBJbnRlcmNlcHRvcmAgd2hpY2ggaWRlbnRpZmllcyByZXF1ZXN0cyB3aXRoIHRoZSBtZXRob2QgSlNPTlAgYW5kXG4gKiBzaGlmdHMgdGhlbSB0byB0aGUgYEpzb25wQ2xpZW50QmFja2VuZGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnNvbnBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbnA6IEpzb25wQ2xpZW50QmFja2VuZCkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0pTT05QJykge1xuICAgICAgcmV0dXJuIHRoaXMuanNvbnAuaGFuZGxlKHJlcSBhcyBIdHRwUmVxdWVzdDxuZXZlcj4pO1xuICAgIH1cbiAgICAvLyBGYWxsIHRocm91Z2ggZm9yIG5vcm1hbCBIVFRQIHJlcXVlc3RzLlxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXX0=