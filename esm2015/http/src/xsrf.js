/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT, ɵparseCookieValue as parseCookieValue } from '@angular/common';
import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';
import * as i0 from "@angular/core";
export const XSRF_COOKIE_NAME = new InjectionToken('XSRF_COOKIE_NAME');
export const XSRF_HEADER_NAME = new InjectionToken('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
export class HttpXsrfTokenExtractor {
}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
let HttpXsrfCookieExtractor = /** @class */ (() => {
    class HttpXsrfCookieExtractor {
        constructor(doc, platform, cookieName) {
            this.doc = doc;
            this.platform = platform;
            this.cookieName = cookieName;
            this.lastCookieString = '';
            this.lastToken = null;
            /**
             * @internal for testing
             */
            this.parseCount = 0;
        }
        getToken() {
            if (this.platform === 'server') {
                return null;
            }
            const cookieString = this.doc.cookie || '';
            if (cookieString !== this.lastCookieString) {
                this.parseCount++;
                this.lastToken = parseCookieValue(cookieString, this.cookieName);
                this.lastCookieString = cookieString;
            }
            return this.lastToken;
        }
    }
    HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) { return new (t || HttpXsrfCookieExtractor)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(XSRF_COOKIE_NAME)); };
    HttpXsrfCookieExtractor.ɵprov = i0.ɵɵdefineInjectable({ token: HttpXsrfCookieExtractor, factory: HttpXsrfCookieExtractor.ɵfac });
    return HttpXsrfCookieExtractor;
})();
export { HttpXsrfCookieExtractor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpXsrfCookieExtractor, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [XSRF_COOKIE_NAME]
            }] }]; }, null); })();
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
let HttpXsrfInterceptor = /** @class */ (() => {
    class HttpXsrfInterceptor {
        constructor(tokenService, headerName) {
            this.tokenService = tokenService;
            this.headerName = headerName;
        }
        intercept(req, next) {
            const lcUrl = req.url.toLowerCase();
            // Skip both non-mutating requests and absolute URLs.
            // Non-mutating requests don't require a token, and absolute URLs require special handling
            // anyway as the cookie set
            // on our origin is not the same as the token expected by another origin.
            if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
                lcUrl.startsWith('https://')) {
                return next.handle(req);
            }
            const token = this.tokenService.getToken();
            // Be careful not to overwrite an existing header of the same name.
            if (token !== null && !req.headers.has(this.headerName)) {
                req = req.clone({ headers: req.headers.set(this.headerName, token) });
            }
            return next.handle(req);
        }
    }
    HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) { return new (t || HttpXsrfInterceptor)(i0.ɵɵinject(HttpXsrfTokenExtractor), i0.ɵɵinject(XSRF_HEADER_NAME)); };
    HttpXsrfInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: HttpXsrfInterceptor, factory: HttpXsrfInterceptor.ɵfac });
    return HttpXsrfInterceptor;
})();
export { HttpXsrfInterceptor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HttpXsrfInterceptor, [{
        type: Injectable
    }], function () { return [{ type: HttpXsrfTokenExtractor }, { type: undefined, decorators: [{
                type: Inject,
                args: [XSRF_HEADER_NAME]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHNyZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9odHRwL3NyYy94c3JmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUUsaUJBQWlCLElBQUksZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQVE5RSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBUyxrQkFBa0IsQ0FBQyxDQUFDO0FBQy9FLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFTLGtCQUFrQixDQUFDLENBQUM7QUFFL0U7Ozs7R0FJRztBQUNILE1BQU0sT0FBZ0Isc0JBQXNCO0NBTzNDO0FBRUQ7O0dBRUc7QUFDSDtJQUFBLE1BQ2EsdUJBQXVCO1FBU2xDLFlBQzhCLEdBQVEsRUFBK0IsUUFBZ0IsRUFDL0MsVUFBa0I7WUFEMUIsUUFBRyxHQUFILEdBQUcsQ0FBSztZQUErQixhQUFRLEdBQVIsUUFBUSxDQUFRO1lBQy9DLGVBQVUsR0FBVixVQUFVLENBQVE7WUFWaEQscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1lBQzlCLGNBQVMsR0FBZ0IsSUFBSSxDQUFDO1lBRXRDOztlQUVHO1lBQ0gsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUlvQyxDQUFDO1FBRTVELFFBQVE7WUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1lBQzNDLElBQUksWUFBWSxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7YUFDdEM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7a0dBeEJVLHVCQUF1QixjQVV0QixRQUFRLGVBQTRCLFdBQVcsZUFDL0MsZ0JBQWdCO21FQVhqQix1QkFBdUIsV0FBdkIsdUJBQXVCO2tDQXRDcEM7S0ErREM7U0F6QlksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FEbkMsVUFBVTs7c0JBV0osTUFBTTt1QkFBQyxRQUFROztzQkFBcUIsTUFBTTt1QkFBQyxXQUFXOztzQkFDdEQsTUFBTTt1QkFBQyxnQkFBZ0I7O0FBZ0I5Qjs7R0FFRztBQUNIO0lBQUEsTUFDYSxtQkFBbUI7UUFDOUIsWUFDWSxZQUFvQyxFQUNWLFVBQWtCO1lBRDVDLGlCQUFZLEdBQVosWUFBWSxDQUF3QjtZQUNWLGVBQVUsR0FBVixVQUFVLENBQVE7UUFBRyxDQUFDO1FBRTVELFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1lBQ2hELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMscURBQXFEO1lBQ3JELDBGQUEwRjtZQUMxRiwyQkFBMkI7WUFDM0IseUVBQXlFO1lBQ3pFLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0JBQzVFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6QjtZQUNELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFM0MsbUVBQW1FO1lBQ25FLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDckU7WUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7MEZBdEJVLG1CQUFtQixjQUVKLHNCQUFzQixlQUNwQyxnQkFBZ0I7K0RBSGpCLG1CQUFtQixXQUFuQixtQkFBbUI7OEJBckVoQztLQTRGQztTQXZCWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUQvQixVQUFVO3NDQUdpQixzQkFBc0I7c0JBQzNDLE1BQU07dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlQsIMm1cGFyc2VDb29raWVWYWx1ZSBhcyBwYXJzZUNvb2tpZVZhbHVlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBQTEFURk9STV9JRH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge0h0dHBIYW5kbGVyfSBmcm9tICcuL2JhY2tlbmQnO1xuaW1wb3J0IHtIdHRwSW50ZXJjZXB0b3J9IGZyb20gJy4vaW50ZXJjZXB0b3InO1xuaW1wb3J0IHtIdHRwUmVxdWVzdH0gZnJvbSAnLi9yZXF1ZXN0JztcbmltcG9ydCB7SHR0cEV2ZW50fSBmcm9tICcuL3Jlc3BvbnNlJztcblxuZXhwb3J0IGNvbnN0IFhTUkZfQ09PS0lFX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignWFNSRl9DT09LSUVfTkFNRScpO1xuZXhwb3J0IGNvbnN0IFhTUkZfSEVBREVSX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPignWFNSRl9IRUFERVJfTkFNRScpO1xuXG4vKipcbiAqIFJldHJpZXZlcyB0aGUgY3VycmVudCBYU1JGIHRva2VuIHRvIHVzZSB3aXRoIHRoZSBuZXh0IG91dGdvaW5nIHJlcXVlc3QuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHR0cFhzcmZUb2tlbkV4dHJhY3RvciB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIFhTUkYgdG9rZW4gdG8gdXNlIHdpdGggYW4gb3V0Z29pbmcgcmVxdWVzdC5cbiAgICpcbiAgICogV2lsbCBiZSBjYWxsZWQgZm9yIGV2ZXJ5IHJlcXVlc3QsIHNvIHRoZSB0b2tlbiBtYXkgY2hhbmdlIGJldHdlZW4gcmVxdWVzdHMuXG4gICAqL1xuICBhYnN0cmFjdCBnZXRUb2tlbigpOiBzdHJpbmd8bnVsbDtcbn1cblxuLyoqXG4gKiBgSHR0cFhzcmZUb2tlbkV4dHJhY3RvcmAgd2hpY2ggcmV0cmlldmVzIHRoZSB0b2tlbiBmcm9tIGEgY29va2llLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cFhzcmZDb29raWVFeHRyYWN0b3IgaW1wbGVtZW50cyBIdHRwWHNyZlRva2VuRXh0cmFjdG9yIHtcbiAgcHJpdmF0ZSBsYXN0Q29va2llU3RyaW5nOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBsYXN0VG9rZW46IHN0cmluZ3xudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogQGludGVybmFsIGZvciB0ZXN0aW5nXG4gICAqL1xuICBwYXJzZUNvdW50OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybTogc3RyaW5nLFxuICAgICAgQEluamVjdChYU1JGX0NPT0tJRV9OQU1FKSBwcml2YXRlIGNvb2tpZU5hbWU6IHN0cmluZykge31cblxuICBnZXRUb2tlbigpOiBzdHJpbmd8bnVsbCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0gPT09ICdzZXJ2ZXInKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29va2llU3RyaW5nID0gdGhpcy5kb2MuY29va2llIHx8ICcnO1xuICAgIGlmIChjb29raWVTdHJpbmcgIT09IHRoaXMubGFzdENvb2tpZVN0cmluZykge1xuICAgICAgdGhpcy5wYXJzZUNvdW50Kys7XG4gICAgICB0aGlzLmxhc3RUb2tlbiA9IHBhcnNlQ29va2llVmFsdWUoY29va2llU3RyaW5nLCB0aGlzLmNvb2tpZU5hbWUpO1xuICAgICAgdGhpcy5sYXN0Q29va2llU3RyaW5nID0gY29va2llU3RyaW5nO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXN0VG9rZW47XG4gIH1cbn1cblxuLyoqXG4gKiBgSHR0cEludGVyY2VwdG9yYCB3aGljaCBhZGRzIGFuIFhTUkYgdG9rZW4gdG8gZWxpZ2libGUgb3V0Z29pbmcgcmVxdWVzdHMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwWHNyZkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHRva2VuU2VydmljZTogSHR0cFhzcmZUb2tlbkV4dHJhY3RvcixcbiAgICAgIEBJbmplY3QoWFNSRl9IRUFERVJfTkFNRSkgcHJpdmF0ZSBoZWFkZXJOYW1lOiBzdHJpbmcpIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgbGNVcmwgPSByZXEudXJsLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gU2tpcCBib3RoIG5vbi1tdXRhdGluZyByZXF1ZXN0cyBhbmQgYWJzb2x1dGUgVVJMcy5cbiAgICAvLyBOb24tbXV0YXRpbmcgcmVxdWVzdHMgZG9uJ3QgcmVxdWlyZSBhIHRva2VuLCBhbmQgYWJzb2x1dGUgVVJMcyByZXF1aXJlIHNwZWNpYWwgaGFuZGxpbmdcbiAgICAvLyBhbnl3YXkgYXMgdGhlIGNvb2tpZSBzZXRcbiAgICAvLyBvbiBvdXIgb3JpZ2luIGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgdG9rZW4gZXhwZWN0ZWQgYnkgYW5vdGhlciBvcmlnaW4uXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnIHx8IHJlcS5tZXRob2QgPT09ICdIRUFEJyB8fCBsY1VybC5zdGFydHNXaXRoKCdodHRwOi8vJykgfHxcbiAgICAgICAgbGNVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gICAgfVxuICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlblNlcnZpY2UuZ2V0VG9rZW4oKTtcblxuICAgIC8vIEJlIGNhcmVmdWwgbm90IHRvIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBoZWFkZXIgb2YgdGhlIHNhbWUgbmFtZS5cbiAgICBpZiAodG9rZW4gIT09IG51bGwgJiYgIXJlcS5oZWFkZXJzLmhhcyh0aGlzLmhlYWRlck5hbWUpKSB7XG4gICAgICByZXEgPSByZXEuY2xvbmUoe2hlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCh0aGlzLmhlYWRlck5hbWUsIHRva2VuKX0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKTtcbiAgfVxufVxuIl19