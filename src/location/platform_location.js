/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core/index';
/**
 * This class should not be used directly by an application developer. Instead, use
 * {\@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
 * agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms
 * that angular supports. For example, the default `PlatformLocation` is {\@link
 * BrowserPlatformLocation},
 * however when you run your app in a WebWorker you use {\@link WebWorkerPlatformLocation}.
 *
 * The `PlatformLocation` class is used directly by all implementations of {\@link LocationStrategy}
 * when
 * they need to interact with the DOM apis like pushState, popState, etc...
 *
 * {\@link LocationStrategy} in turn is used by the {\@link Location} service which is used directly
 * by
 * the {\@link Router} in order to navigate between routes. Since all interactions between {\@link
 * Router} /
 * {\@link Location} / {\@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
 * class
 * they are all platform independent.
 *
 * \@stable
 * @abstract
 */
export class PlatformLocation {
    /**
     * @abstract
     * @return {?}
     */
    getBaseHrefFromDOM() { }
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    onPopState(fn) { }
    /**
     * @abstract
     * @param {?} fn
     * @return {?}
     */
    onHashChange(fn) { }
    /**
     * @return {?}
     */
    get pathname() { return null; }
    /**
     * @return {?}
     */
    get search() { return null; }
    /**
     * @return {?}
     */
    get hash() { return null; }
    /**
     * @abstract
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    replaceState(state, title, url) { }
    /**
     * @abstract
     * @param {?} state
     * @param {?} title
     * @param {?} url
     * @return {?}
     */
    pushState(state, title, url) { }
    /**
     * @abstract
     * @return {?}
     */
    forward() { }
    /**
     * @abstract
     * @return {?}
     */
    back() { }
}
/**
 * @whatItDoes indicates when a location is initialized
 * @experimental
 */
export const /** @type {?} */ LOCATION_INITIALIZED = new InjectionToken('Location Initialized');
//# sourceMappingURL=platform_location.js.map