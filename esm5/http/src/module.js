/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, Injector, NgModule } from '@angular/core';
import { HttpBackend, HttpHandler } from './backend';
import { HttpClient } from './client';
import { HTTP_INTERCEPTORS, HttpInterceptorHandler, NoopInterceptor } from './interceptor';
import { JsonpCallbackContext, JsonpClientBackend, JsonpInterceptor } from './jsonp';
import { BrowserXhr, HttpXhrBackend, XhrFactory } from './xhr';
import { HttpXsrfCookieExtractor, HttpXsrfInterceptor, HttpXsrfTokenExtractor, XSRF_COOKIE_NAME, XSRF_HEADER_NAME } from './xsrf';
import * as i0 from "@angular/core";
import * as i1 from "./backend";
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    HttpInterceptingHandler.prototype.handle = function (req) {
        if (this.chain === null) {
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) { return new (t || HttpInterceptingHandler)(i0.ɵɵinject(i1.HttpBackend), i0.ɵɵinject(i0.Injector)); };
    HttpInterceptingHandler.ɵprov = i0.ɵɵdefineInjectable({ token: HttpInterceptingHandler, factory: HttpInterceptingHandler.ɵfac });
    return HttpInterceptingHandler;
}());
export { HttpInterceptingHandler };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpInterceptingHandler, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpBackend }, { type: i0.Injector }]; }, null); })();
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */
export function interceptingHandler(backend, interceptors) {
    if (interceptors === void 0) { interceptors = []; }
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
export function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    /**
     * Disable the default XSRF protection.
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    HttpClientXsrfModule.ɵmod = i0.ɵɵdefineNgModule({ type: HttpClientXsrfModule });
    HttpClientXsrfModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HttpClientXsrfModule_Factory(t) { return new (t || HttpClientXsrfModule)(); }, providers: [
            HttpXsrfInterceptor,
            { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
            { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
            { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
            { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
        ] });
    return HttpClientXsrfModule;
}());
export { HttpClientXsrfModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpClientXsrfModule, [{
        type: NgModule,
        args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ],
            }]
    }], null, null); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
    HttpClientModule.ɵmod = i0.ɵɵdefineNgModule({ type: HttpClientModule });
    HttpClientModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HttpClientModule_Factory(t) { return new (t || HttpClientModule)(); }, providers: [
            HttpClient,
            { provide: HttpHandler, useClass: HttpInterceptingHandler },
            HttpXhrBackend,
            { provide: HttpBackend, useExisting: HttpXhrBackend },
            BrowserXhr,
            { provide: XhrFactory, useExisting: BrowserXhr },
        ], imports: [[
                HttpClientXsrfModule.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                }),
            ]] });
    return HttpClientModule;
}());
export { HttpClientModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HttpClientModule, { imports: [HttpClientXsrfModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpClientModule, [{
        type: NgModule,
        args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ],
            }]
    }], null, null); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule.ɵmod = i0.ɵɵdefineNgModule({ type: HttpClientJsonpModule });
    HttpClientJsonpModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HttpClientJsonpModule_Factory(t) { return new (t || HttpClientJsonpModule)(); }, providers: [
            JsonpClientBackend,
            { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
            { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
        ] });
    return HttpClientJsonpModule;
}());
export { HttpClientJsonpModule };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpClientJsonpModule, [{
        type: NgModule,
        args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2h0dHAvc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2xGLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ25ELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFDLGlCQUFpQixFQUFtQixzQkFBc0IsRUFBRSxlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFDLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sU0FBUyxDQUFDO0FBR25GLE9BQU8sRUFBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUM3RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxRQUFRLENBQUM7OztBQUVoSTs7Ozs7Ozs7R0FRRztBQUNIO0lBSUUsaUNBQW9CLE9BQW9CLEVBQVUsUUFBa0I7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGNUQsVUFBSyxHQUFxQixJQUFJLENBQUM7SUFFZ0MsQ0FBQztJQUV4RSx3Q0FBTSxHQUFOLFVBQU8sR0FBcUI7UUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2QixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5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LFdBQVcsRUFBRSxVQUFVLEVBQUM7aUJBQy9DO2FBQ0Y7O0FBSUQ7Ozs7Ozs7Ozs7R0FVRztBQUNIO0lBQUE7S0FRQzs2REFEWSxxQkFBcUI7NkhBQXJCLHFCQUFxQixtQkFOckI7WUFDVCxrQkFBa0I7WUFDbEIsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFDO1lBQ2pFLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO1NBQ3RFO2dDQXhMSDtDQTJMQyxBQVJELElBUUM7U0FEWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQVBqQyxRQUFRO2VBQUM7Z0JBQ1IsU0FBUyxFQUFFO29CQUNULGtCQUFrQjtvQkFDbEIsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFDO29CQUNqRSxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztpQkFDdEU7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3RvciwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtIdHRwQmFja2VuZCwgSHR0cEhhbmRsZXJ9IGZyb20gJy4vYmFja2VuZCc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJy4vY2xpZW50JztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBJbnRlcmNlcHRvciwgSHR0cEludGVyY2VwdG9ySGFuZGxlciwgTm9vcEludGVyY2VwdG9yfSBmcm9tICcuL2ludGVyY2VwdG9yJztcbmltcG9ydCB7SnNvbnBDYWxsYmFja0NvbnRleHQsIEpzb25wQ2xpZW50QmFja2VuZCwgSnNvbnBJbnRlcmNlcHRvcn0gZnJvbSAnLi9qc29ucCc7XG5pbXBvcnQge0h0dHBSZXF1ZXN0fSBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IHtIdHRwRXZlbnR9IGZyb20gJy4vcmVzcG9uc2UnO1xuaW1wb3J0IHtCcm93c2VyWGhyLCBIdHRwWGhyQmFja2VuZCwgWGhyRmFjdG9yeX0gZnJvbSAnLi94aHInO1xuaW1wb3J0IHtIdHRwWHNyZkNvb2tpZUV4dHJhY3RvciwgSHR0cFhzcmZJbnRlcmNlcHRvciwgSHR0cFhzcmZUb2tlbkV4dHJhY3RvciwgWFNSRl9DT09LSUVfTkFNRSwgWFNSRl9IRUFERVJfTkFNRX0gZnJvbSAnLi94c3JmJztcblxuLyoqXG4gKiBBbiBpbmplY3RhYmxlIGBIdHRwSGFuZGxlcmAgdGhhdCBhcHBsaWVzIG11bHRpcGxlIGludGVyY2VwdG9yc1xuICogdG8gYSByZXF1ZXN0IGJlZm9yZSBwYXNzaW5nIGl0IHRvIHRoZSBnaXZlbiBgSHR0cEJhY2tlbmRgLlxuICpcbiAqIFRoZSBpbnRlcmNlcHRvcnMgYXJlIGxvYWRlZCBsYXppbHkgZnJvbSB0aGUgaW5qZWN0b3IsIHRvIGFsbG93XG4gKiBpbnRlcmNlcHRvcnMgdG8gdGhlbXNlbHZlcyBpbmplY3QgY2xhc3NlcyBkZXBlbmRpbmcgaW5kaXJlY3RseVxuICogb24gYEh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyYCBpdHNlbGYuXG4gKiBAc2VlIGBIdHRwSW50ZXJjZXB0b3JgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwSW50ZXJjZXB0aW5nSGFuZGxlciBpbXBsZW1lbnRzIEh0dHBIYW5kbGVyIHtcbiAgcHJpdmF0ZSBjaGFpbjogSHR0cEhhbmRsZXJ8bnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZW5kOiBIdHRwQmFja2VuZCwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAodGhpcy5jaGFpbiA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgaW50ZXJjZXB0b3JzID0gdGhpcy5pbmplY3Rvci5nZXQoSFRUUF9JTlRFUkNFUFRPUlMsIFtdKTtcbiAgICAgIHRoaXMuY2hhaW4gPSBpbnRlcmNlcHRvcnMucmVkdWNlUmlnaHQoXG4gICAgICAgICAgKG5leHQsIGludGVyY2VwdG9yKSA9PiBuZXcgSHR0cEludGVyY2VwdG9ySGFuZGxlcihuZXh0LCBpbnRlcmNlcHRvciksIHRoaXMuYmFja2VuZCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNoYWluLmhhbmRsZShyZXEpO1xuICB9XG59XG5cbi8qKlxuICogQ29uc3RydWN0cyBhbiBgSHR0cEhhbmRsZXJgIHRoYXQgYXBwbGllcyBpbnRlcmNlcHRvcnNcbiAqIHRvIGEgcmVxdWVzdCBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGUgZ2l2ZW4gYEh0dHBCYWNrZW5kYC5cbiAqXG4gKiBVc2UgYXMgYSBmYWN0b3J5IGZ1bmN0aW9uIHdpdGhpbiBgSHR0cENsaWVudE1vZHVsZWAuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyY2VwdGluZ0hhbmRsZXIoXG4gICAgYmFja2VuZDogSHR0cEJhY2tlbmQsIGludGVyY2VwdG9yczogSHR0cEludGVyY2VwdG9yW118bnVsbCA9IFtdKTogSHR0cEhhbmRsZXIge1xuICBpZiAoIWludGVyY2VwdG9ycykge1xuICAgIHJldHVybiBiYWNrZW5kO1xuICB9XG4gIHJldHVybiBpbnRlcmNlcHRvcnMucmVkdWNlUmlnaHQoXG4gICAgICAobmV4dCwgaW50ZXJjZXB0b3IpID0+IG5ldyBIdHRwSW50ZXJjZXB0b3JIYW5kbGVyKG5leHQsIGludGVyY2VwdG9yKSwgYmFja2VuZCk7XG59XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hlcmUgdG8gc3RvcmUgSlNPTlAgY2FsbGJhY2tzLlxuICpcbiAqIE9yZGluYXJpbHkgSlNPTlAgY2FsbGJhY2tzIGFyZSBzdG9yZWQgb24gdGhlIGB3aW5kb3dgIG9iamVjdCwgYnV0IHRoaXMgbWF5IG5vdCBleGlzdFxuICogaW4gdGVzdCBlbnZpcm9ubWVudHMuIEluIHRoYXQgY2FzZSwgY2FsbGJhY2tzIGFyZSBzdG9yZWQgb24gYW4gYW5vbnltb3VzIG9iamVjdCBpbnN0ZWFkLlxuICpcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBqc29ucENhbGxiYWNrQ29udGV4dCgpOiBPYmplY3Qge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIFhTUkYgcHJvdGVjdGlvbiBzdXBwb3J0IGZvciBvdXRnb2luZyByZXF1ZXN0cy5cbiAqXG4gKiBGb3IgYSBzZXJ2ZXIgdGhhdCBzdXBwb3J0cyBhIGNvb2tpZS1iYXNlZCBYU1JGIHByb3RlY3Rpb24gc3lzdGVtLFxuICogdXNlIGRpcmVjdGx5IHRvIGNvbmZpZ3VyZSBYU1JGIHByb3RlY3Rpb24gd2l0aCB0aGUgY29ycmVjdFxuICogY29va2llIGFuZCBoZWFkZXIgbmFtZXMuXG4gKlxuICogSWYgbm8gbmFtZXMgYXJlIHN1cHBsaWVkLCB0aGUgZGVmYXVsdCBjb29raWUgbmFtZSBpcyBgWFNSRi1UT0tFTmBcbiAqIGFuZCB0aGUgZGVmYXVsdCBoZWFkZXIgbmFtZSBpcyBgWC1YU1JGLVRPS0VOYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIEh0dHBYc3JmSW50ZXJjZXB0b3IsXG4gICAge3Byb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VFeGlzdGluZzogSHR0cFhzcmZJbnRlcmNlcHRvciwgbXVsdGk6IHRydWV9LFxuICAgIHtwcm92aWRlOiBIdHRwWHNyZlRva2VuRXh0cmFjdG9yLCB1c2VDbGFzczogSHR0cFhzcmZDb29raWVFeHRyYWN0b3J9LFxuICAgIHtwcm92aWRlOiBYU1JGX0NPT0tJRV9OQU1FLCB1c2VWYWx1ZTogJ1hTUkYtVE9LRU4nfSxcbiAgICB7cHJvdmlkZTogWFNSRl9IRUFERVJfTkFNRSwgdXNlVmFsdWU6ICdYLVhTUkYtVE9LRU4nfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudFhzcmZNb2R1bGUge1xuICAvKipcbiAgICogRGlzYWJsZSB0aGUgZGVmYXVsdCBYU1JGIHByb3RlY3Rpb24uXG4gICAqL1xuICBzdGF0aWMgZGlzYWJsZSgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEh0dHBDbGllbnRYc3JmTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBIdHRwQ2xpZW50WHNyZk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7cHJvdmlkZTogSHR0cFhzcmZJbnRlcmNlcHRvciwgdXNlQ2xhc3M6IE5vb3BJbnRlcmNlcHRvcn0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlIFhTUkYgcHJvdGVjdGlvbi5cbiAgICogQHBhcmFtIG9wdGlvbnMgQW4gb2JqZWN0IHRoYXQgY2FuIHNwZWNpZnkgZWl0aGVyIG9yIGJvdGhcbiAgICogY29va2llIG5hbWUgb3IgaGVhZGVyIG5hbWUuXG4gICAqIC0gQ29va2llIG5hbWUgZGVmYXVsdCBpcyBgWFNSRi1UT0tFTmAuXG4gICAqIC0gSGVhZGVyIG5hbWUgZGVmYXVsdCBpcyBgWC1YU1JGLVRPS0VOYC5cbiAgICpcbiAgICovXG4gIHN0YXRpYyB3aXRoT3B0aW9ucyhvcHRpb25zOiB7XG4gICAgY29va2llTmFtZT86IHN0cmluZyxcbiAgICBoZWFkZXJOYW1lPzogc3RyaW5nLFxuICB9ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEh0dHBDbGllbnRYc3JmTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBIdHRwQ2xpZW50WHNyZk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBvcHRpb25zLmNvb2tpZU5hbWUgPyB7cHJvdmlkZTogWFNSRl9DT09LSUVfTkFNRSwgdXNlVmFsdWU6IG9wdGlvbnMuY29va2llTmFtZX0gOiBbXSxcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJOYW1lID8ge3Byb3ZpZGU6IFhTUkZfSEVBREVSX05BTUUsIHVzZVZhbHVlOiBvcHRpb25zLmhlYWRlck5hbWV9IDogW10sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBbZGVwZW5kZW5jeSBpbmplY3Rvcl0oZ3VpZGUvZ2xvc3NhcnkjaW5qZWN0b3IpIGZvciBgSHR0cENsaWVudGBcbiAqIHdpdGggc3VwcG9ydGluZyBzZXJ2aWNlcyBmb3IgWFNSRi4gQXV0b21hdGljYWxseSBpbXBvcnRlZCBieSBgSHR0cENsaWVudE1vZHVsZWAuXG4gKlxuICogWW91IGNhbiBhZGQgaW50ZXJjZXB0b3JzIHRvIHRoZSBjaGFpbiBiZWhpbmQgYEh0dHBDbGllbnRgIGJ5IGJpbmRpbmcgdGhlbSB0byB0aGVcbiAqIG11bHRpcHJvdmlkZXIgZm9yIGJ1aWx0LWluIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkjZGktdG9rZW4pIGBIVFRQX0lOVEVSQ0VQVE9SU2AuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe1xuICAvKipcbiAgICogT3B0aW9uYWwgY29uZmlndXJhdGlvbiBmb3IgWFNSRiBwcm90ZWN0aW9uLlxuICAgKi9cbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRYc3JmTW9kdWxlLndpdGhPcHRpb25zKHtcbiAgICAgIGNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgICAgIGhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuICAgIH0pLFxuICBdLFxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgW2RlcGVuZGVuY3kgaW5qZWN0b3JdKGd1aWRlL2dsb3NzYXJ5I2luamVjdG9yKSB3aGVyZSBpdCBpcyBpbXBvcnRlZFxuICAgKiB3aXRoIHN1cHBvcnRpbmcgc2VydmljZXMgZm9yIEhUVFAgY29tbXVuaWNhdGlvbnMuXG4gICAqL1xuICBwcm92aWRlcnM6IFtcbiAgICBIdHRwQ2xpZW50LFxuICAgIHtwcm92aWRlOiBIdHRwSGFuZGxlciwgdXNlQ2xhc3M6IEh0dHBJbnRlcmNlcHRpbmdIYW5kbGVyfSxcbiAgICBIdHRwWGhyQmFja2VuZCxcbiAgICB7cHJvdmlkZTogSHR0cEJhY2tlbmQsIHVzZUV4aXN0aW5nOiBIdHRwWGhyQmFja2VuZH0sXG4gICAgQnJvd3NlclhocixcbiAgICB7cHJvdmlkZTogWGhyRmFjdG9yeSwgdXNlRXhpc3Rpbmc6IEJyb3dzZXJYaHJ9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBIdHRwQ2xpZW50TW9kdWxlIHtcbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBbZGVwZW5kZW5jeSBpbmplY3Rvcl0oZ3VpZGUvZ2xvc3NhcnkjaW5qZWN0b3IpIGZvciBgSHR0cENsaWVudGBcbiAqIHdpdGggc3VwcG9ydGluZyBzZXJ2aWNlcyBmb3IgSlNPTlAuXG4gKiBXaXRob3V0IHRoaXMgbW9kdWxlLCBKc29ucCByZXF1ZXN0cyByZWFjaCB0aGUgYmFja2VuZFxuICogd2l0aCBtZXRob2QgSlNPTlAsIHdoZXJlIHRoZXkgYXJlIHJlamVjdGVkLlxuICpcbiAqIFlvdSBjYW4gYWRkIGludGVyY2VwdG9ycyB0byB0aGUgY2hhaW4gYmVoaW5kIGBIdHRwQ2xpZW50YCBieSBiaW5kaW5nIHRoZW0gdG8gdGhlXG4gKiBtdWx0aXByb3ZpZGVyIGZvciBidWlsdC1pbiBbREkgdG9rZW5dKGd1aWRlL2dsb3NzYXJ5I2RpLXRva2VuKSBgSFRUUF9JTlRFUkNFUFRPUlNgLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgSnNvbnBDbGllbnRCYWNrZW5kLFxuICAgIHtwcm92aWRlOiBKc29ucENhbGxiYWNrQ29udGV4dCwgdXNlRmFjdG9yeToganNvbnBDYWxsYmFja0NvbnRleHR9LFxuICAgIHtwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEpzb25wSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSHR0cENsaWVudEpzb25wTW9kdWxlIHtcbn1cbiJdfQ==