/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
export { HttpInterceptorHandler };
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
export var HTTP_INTERCEPTORS = new InjectionToken('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) { return new (t || NoopInterceptor)(); };
    NoopInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: NoopInterceptor, factory: NoopInterceptor.ɵfac });
    return NoopInterceptor;
}());
export { NoopInterceptor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NoopInterceptor, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vaHR0cC9zcmMvaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBRSxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBK0N6RDs7OztHQUlHO0FBQ0g7SUFDRSxnQ0FBb0IsSUFBaUIsRUFBVSxXQUE0QjtRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQUcsQ0FBQztJQUUvRSx1Q0FBTSxHQUFOLFVBQU8sR0FBcUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDSCw2QkFBQztBQUFELENBQUMsQUFORCxJQU1DOztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxjQUFjLENBQW9CLG1CQUFtQixDQUFDLENBQUM7QUFFNUY7SUFBQTtLQUtDO0lBSEMsbUNBQVMsR0FBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFDaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7a0ZBSFUsZUFBZTsyREFBZixlQUFlLFdBQWYsZUFBZTswQkE3RTVCO0NBaUZDLEFBTEQsSUFLQztTQUpZLGVBQWU7a0RBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdGlvblRva2VufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7SHR0cEhhbmRsZXJ9IGZyb20gJy4vYmFja2VuZCc7XG5pbXBvcnQge0h0dHBSZXF1ZXN0fSBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IHtIdHRwRXZlbnR9IGZyb20gJy4vcmVzcG9uc2UnO1xuXG4vKipcbiAqIEludGVyY2VwdHMgYW5kIGhhbmRsZXMgYW4gYEh0dHBSZXF1ZXN0YCBvciBgSHR0cFJlc3BvbnNlYC5cbiAqXG4gKiBNb3N0IGludGVyY2VwdG9ycyB0cmFuc2Zvcm0gdGhlIG91dGdvaW5nIHJlcXVlc3QgYmVmb3JlIHBhc3NpbmcgaXQgdG8gdGhlXG4gKiBuZXh0IGludGVyY2VwdG9yIGluIHRoZSBjaGFpbiwgYnkgY2FsbGluZyBgbmV4dC5oYW5kbGUodHJhbnNmb3JtZWRSZXEpYC5cbiAqIEFuIGludGVyY2VwdG9yIG1heSB0cmFuc2Zvcm0gdGhlXG4gKiByZXNwb25zZSBldmVudCBzdHJlYW0gYXMgd2VsbCwgYnkgYXBwbHlpbmcgYWRkaXRpb25hbCBSeEpTIG9wZXJhdG9ycyBvbiB0aGUgc3RyZWFtXG4gKiByZXR1cm5lZCBieSBgbmV4dC5oYW5kbGUoKWAuXG4gKlxuICogTW9yZSByYXJlbHksIGFuIGludGVyY2VwdG9yIG1heSBoYW5kbGUgdGhlIHJlcXVlc3QgZW50aXJlbHksXG4gKiBhbmQgY29tcG9zZSBhIG5ldyBldmVudCBzdHJlYW0gaW5zdGVhZCBvZiBpbnZva2luZyBgbmV4dC5oYW5kbGUoKWAuIFRoaXMgaXMgYW5cbiAqIGFjY2VwdGFibGUgYmVoYXZpb3IsIGJ1dCBrZWVwIGluIG1pbmQgdGhhdCBmdXJ0aGVyIGludGVyY2VwdG9ycyB3aWxsIGJlIHNraXBwZWQgZW50aXJlbHkuXG4gKlxuICogSXQgaXMgYWxzbyByYXJlIGJ1dCB2YWxpZCBmb3IgYW4gaW50ZXJjZXB0b3IgdG8gcmV0dXJuIG11bHRpcGxlIHJlc3BvbnNlcyBvbiB0aGVcbiAqIGV2ZW50IHN0cmVhbSBmb3IgYSBzaW5nbGUgcmVxdWVzdC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKlxuICogQHNlZSBbSFRUUCBHdWlkZV0oZ3VpZGUvaHR0cCNpbnRlcmNlcHRpbmctcmVxdWVzdHMtYW5kLXJlc3BvbnNlcylcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIFRvIHVzZSB0aGUgc2FtZSBpbnN0YW5jZSBvZiBgSHR0cEludGVyY2VwdG9yc2AgZm9yIHRoZSBlbnRpcmUgYXBwLCBpbXBvcnQgdGhlIGBIdHRwQ2xpZW50TW9kdWxlYFxuICogb25seSBpbiB5b3VyIGBBcHBNb2R1bGVgLCBhbmQgYWRkIHRoZSBpbnRlcmNlcHRvcnMgdG8gdGhlIHJvb3QgYXBwbGljYXRpb24gaW5qZWN0b3IgLlxuICogSWYgeW91IGltcG9ydCBgSHR0cENsaWVudE1vZHVsZWAgbXVsdGlwbGUgdGltZXMgYWNyb3NzIGRpZmZlcmVudCBtb2R1bGVzIChmb3IgZXhhbXBsZSwgaW4gbGF6eVxuICogbG9hZGluZyBtb2R1bGVzKSwgZWFjaCBpbXBvcnQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIHRoZSBgSHR0cENsaWVudE1vZHVsZWAsIHdoaWNoIG92ZXJ3cml0ZXMgdGhlXG4gKiBpbnRlcmNlcHRvcnMgcHJvdmlkZWQgaW4gdGhlIHJvb3QgbW9kdWxlLlxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIdHRwSW50ZXJjZXB0b3Ige1xuICAvKipcbiAgICogSWRlbnRpZmllcyBhbmQgaGFuZGxlcyBhIGdpdmVuIEhUVFAgcmVxdWVzdC5cbiAgICogQHBhcmFtIHJlcSBUaGUgb3V0Z29pbmcgcmVxdWVzdCBvYmplY3QgdG8gaGFuZGxlLlxuICAgKiBAcGFyYW0gbmV4dCBUaGUgbmV4dCBpbnRlcmNlcHRvciBpbiB0aGUgY2hhaW4sIG9yIHRoZSBiYWNrZW5kXG4gICAqIGlmIG5vIGludGVyY2VwdG9ycyByZW1haW4gaW4gdGhlIGNoYWluLlxuICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIG9mIHRoZSBldmVudCBzdHJlYW0uXG4gICAqL1xuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xufVxuXG4vKipcbiAqIGBIdHRwSGFuZGxlcmAgd2hpY2ggYXBwbGllcyBhbiBgSHR0cEludGVyY2VwdG9yYCB0byBhbiBgSHR0cFJlcXVlc3RgLlxuICpcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBIdHRwSW50ZXJjZXB0b3JIYW5kbGVyIGltcGxlbWVudHMgSHR0cEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5leHQ6IEh0dHBIYW5kbGVyLCBwcml2YXRlIGludGVyY2VwdG9yOiBIdHRwSW50ZXJjZXB0b3IpIHt9XG5cbiAgaGFuZGxlKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmNlcHRvci5pbnRlcmNlcHQocmVxLCB0aGlzLm5leHQpO1xuICB9XG59XG5cbi8qKlxuICogQSBtdWx0aS1wcm92aWRlciB0b2tlbiB0aGF0IHJlcHJlc2VudHMgdGhlIGFycmF5IG9mIHJlZ2lzdGVyZWRcbiAqIGBIdHRwSW50ZXJjZXB0b3JgIG9iamVjdHMuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgSFRUUF9JTlRFUkNFUFRPUlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48SHR0cEludGVyY2VwdG9yW10+KCdIVFRQX0lOVEVSQ0VQVE9SUycpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm9vcEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSk7XG4gIH1cbn1cbiJdfQ==