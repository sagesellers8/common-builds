/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/**
 * `LocationStrategy` is responsible for representing and reading route state
 * from the browser's URL. Angular provides two strategies:
 * {@link HashLocationStrategy} and {@link PathLocationStrategy}.
 *
 * This is used under the hood of the {@link Location} service.
 *
 * Applications should use the {@link Router} or {@link Location} services to
 * interact with application route state.
 *
 * For instance, {@link HashLocationStrategy} produces URLs like
 * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
 * `http://example.com/foo` as an equivalent URL.
 *
 * See these two classes for more.
 *
 * @publicApi
 */
var LocationStrategy = /** @class */ (function () {
    function LocationStrategy() {
    }
    return LocationStrategy;
}());
export { LocationStrategy };
/**
 * A predefined [DI token](guide/glossary#di-token) for the base href
 * to be used with the `PathLocationStrategy`.
 * The base href is the URL prefix that should be preserved when generating
 * and recognizing URLs.
 *
 * @usageNotes
 *
 * The following example shows how to use this token to configure the root app injector
 * with a base href value, so that the DI framework can supply the dependency anywhere in the app.
 *
 * ```typescript
 * import {Component, NgModule} from '@angular/core';
 * import {APP_BASE_HREF} from '@angular/common';
 *
 * @NgModule({
 *   providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
 * })
 * class AppModule {}
 * ```
 *
 * @publicApi
 */
export var APP_BASE_HREF = new InjectionToken('appBaseHref');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25fc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2xvY2F0aW9uL2xvY2F0aW9uX3N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0g7SUFBQTtJQVNBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFURCxJQVNDOztBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JHO0FBQ0gsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFTLGFBQWEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9jYXRpb25DaGFuZ2VMaXN0ZW5lcn0gZnJvbSAnLi9wbGF0Zm9ybV9sb2NhdGlvbic7XG5cbi8qKlxuICogYExvY2F0aW9uU3RyYXRlZ3lgIGlzIHJlc3BvbnNpYmxlIGZvciByZXByZXNlbnRpbmcgYW5kIHJlYWRpbmcgcm91dGUgc3RhdGVcbiAqIGZyb20gdGhlIGJyb3dzZXIncyBVUkwuIEFuZ3VsYXIgcHJvdmlkZXMgdHdvIHN0cmF0ZWdpZXM6XG4gKiB7QGxpbmsgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGFuZCB7QGxpbmsgUGF0aExvY2F0aW9uU3RyYXRlZ3l9LlxuICpcbiAqIFRoaXMgaXMgdXNlZCB1bmRlciB0aGUgaG9vZCBvZiB0aGUge0BsaW5rIExvY2F0aW9ufSBzZXJ2aWNlLlxuICpcbiAqIEFwcGxpY2F0aW9ucyBzaG91bGQgdXNlIHRoZSB7QGxpbmsgUm91dGVyfSBvciB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2VzIHRvXG4gKiBpbnRlcmFjdCB3aXRoIGFwcGxpY2F0aW9uIHJvdXRlIHN0YXRlLlxuICpcbiAqIEZvciBpbnN0YW5jZSwge0BsaW5rIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBwcm9kdWNlcyBVUkxzIGxpa2VcbiAqIGBodHRwOi8vZXhhbXBsZS5jb20jL2Zvb2AsIGFuZCB7QGxpbmsgUGF0aExvY2F0aW9uU3RyYXRlZ3l9IHByb2R1Y2VzXG4gKiBgaHR0cDovL2V4YW1wbGUuY29tL2Zvb2AgYXMgYW4gZXF1aXZhbGVudCBVUkwuXG4gKlxuICogU2VlIHRoZXNlIHR3byBjbGFzc2VzIGZvciBtb3JlLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExvY2F0aW9uU3RyYXRlZ3kge1xuICBhYnN0cmFjdCBwYXRoKGluY2x1ZGVIYXNoPzogYm9vbGVhbik6IHN0cmluZztcbiAgYWJzdHJhY3QgcHJlcGFyZUV4dGVybmFsVXJsKGludGVybmFsOiBzdHJpbmcpOiBzdHJpbmc7XG4gIGFic3RyYWN0IHB1c2hTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZyk6IHZvaWQ7XG4gIGFic3RyYWN0IHJlcGxhY2VTdGF0ZShzdGF0ZTogYW55LCB0aXRsZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcXVlcnlQYXJhbXM6IHN0cmluZyk6IHZvaWQ7XG4gIGFic3RyYWN0IGZvcndhcmQoKTogdm9pZDtcbiAgYWJzdHJhY3QgYmFjaygpOiB2b2lkO1xuICBhYnN0cmFjdCBvblBvcFN0YXRlKGZuOiBMb2NhdGlvbkNoYW5nZUxpc3RlbmVyKTogdm9pZDtcbiAgYWJzdHJhY3QgZ2V0QmFzZUhyZWYoKTogc3RyaW5nO1xufVxuXG5cbi8qKlxuICogQSBwcmVkZWZpbmVkIFtESSB0b2tlbl0oZ3VpZGUvZ2xvc3NhcnkjZGktdG9rZW4pIGZvciB0aGUgYmFzZSBocmVmXG4gKiB0byBiZSB1c2VkIHdpdGggdGhlIGBQYXRoTG9jYXRpb25TdHJhdGVneWAuXG4gKiBUaGUgYmFzZSBocmVmIGlzIHRoZSBVUkwgcHJlZml4IHRoYXQgc2hvdWxkIGJlIHByZXNlcnZlZCB3aGVuIGdlbmVyYXRpbmdcbiAqIGFuZCByZWNvZ25pemluZyBVUkxzLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHNob3dzIGhvdyB0byB1c2UgdGhpcyB0b2tlbiB0byBjb25maWd1cmUgdGhlIHJvb3QgYXBwIGluamVjdG9yXG4gKiB3aXRoIGEgYmFzZSBocmVmIHZhbHVlLCBzbyB0aGF0IHRoZSBESSBmcmFtZXdvcmsgY2FuIHN1cHBseSB0aGUgZGVwZW5kZW5jeSBhbnl3aGVyZSBpbiB0aGUgYXBwLlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7Q29tcG9uZW50LCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKiBpbXBvcnQge0FQUF9CQVNFX0hSRUZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEFQUF9CQVNFX0hSRUYsIHVzZVZhbHVlOiAnL215L2FwcCd9XVxuICogfSlcbiAqIGNsYXNzIEFwcE1vZHVsZSB7fVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgQVBQX0JBU0VfSFJFRiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdhcHBCYXNlSHJlZicpO1xuIl19