/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, Injectable } from '@angular/core';
import { LocationStrategy } from './location_strategy';
/**
 * \@experimental
 * @record
 */
export function PopStateEvent() { }
function PopStateEvent_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    PopStateEvent.prototype.pop;
    /** @type {?|undefined} */
    PopStateEvent.prototype.state;
    /** @type {?|undefined} */
    PopStateEvent.prototype.type;
    /** @type {?|undefined} */
    PopStateEvent.prototype.url;
}
/**
 * \@description
 *
 * A service that applications can use to interact with a browser's URL.
 *
 * Depending on which {\@link LocationStrategy} is used, `Location` will either persist
 * to the URL's path or the URL's hash segment.
 *
 * Note: it's better to use {\@link Router#navigate} service to trigger route changes. Use
 * `Location` only if you need to interact with or create normalized URLs outside of
 * routing.
 *
 * `Location` is responsible for normalizing the URL against the application's base href.
 * A normalized URL is absolute from the URL host, includes the application's base href, and has no
 * trailing slash:
 * - `/my/app/user/123` is normalized
 * - `my/app/user/123` **is not** normalized
 * - `/my/app/user/123/` **is not** normalized
 *
 * ### Example
 * {\@example common/location/ts/path_location_component.ts region='LocationComponent'}
 * \@stable
 */
export class Location {
    /**
     * @param {?} platformStrategy
     */
    constructor(platformStrategy) {
        /**
         * \@internal
         */
        this._subject = new EventEmitter();
        this._platformStrategy = platformStrategy;
        const /** @type {?} */ browserBaseHref = this._platformStrategy.getBaseHref();
        this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
        this._platformStrategy.onPopState((ev) => {
            this._subject.emit({
                'url': this.path(true),
                'pop': true,
                'state': ev.state,
                'type': ev.type,
            });
        });
    }
    /**
     * Returns the normalized URL path.
     * @param {?=} includeHash
     * @return {?}
     */
    path(includeHash = false) {
        return this.normalize(this._platformStrategy.path(includeHash));
    }
    /**
     * Normalizes the given path and compares to the current normalized path.
     * @param {?} path
     * @param {?=} query
     * @return {?}
     */
    isCurrentPathEqualTo(path, query = '') {
        return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
    }
    /**
     * Given a string representing a URL, returns the normalized URL path without leading or
     * trailing slashes.
     * @param {?} url
     * @return {?}
     */
    normalize(url) {
        return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
    }
    /**
     * Given a string representing a URL, returns the platform-specific external URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
     * before normalizing. This method will also add a hash if `HashLocationStrategy` is
     * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
     * @param {?} url
     * @return {?}
     */
    prepareExternalUrl(url) {
        if (url && url[0] !== '/') {
            url = '/' + url;
        }
        return this._platformStrategy.prepareExternalUrl(url);
    }
    /**
     * Changes the browsers URL to the normalized version of the given URL, and pushes a
     * new item onto the platform's history.
     * @param {?} path
     * @param {?=} query
     * @param {?=} state
     * @return {?}
     */
    go(path, query = '', state = null) {
        this._platformStrategy.pushState(state, '', path, query);
    }
    /**
     * Changes the browsers URL to the normalized version of the given URL, and replaces
     * the top item on the platform's history stack.
     * @param {?} path
     * @param {?=} query
     * @param {?=} state
     * @return {?}
     */
    replaceState(path, query = '', state = null) {
        this._platformStrategy.replaceState(state, '', path, query);
    }
    /**
     * Navigates forward in the platform's history.
     * @return {?}
     */
    forward() { this._platformStrategy.forward(); }
    /**
     * Navigates back in the platform's history.
     * @return {?}
     */
    back() { this._platformStrategy.back(); }
    /**
     * Subscribe to the platform's `popState` events.
     * @param {?} onNext
     * @param {?=} onThrow
     * @param {?=} onReturn
     * @return {?}
     */
    subscribe(onNext, onThrow, onReturn) {
        return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
    }
    /**
     * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
     * is.
     * @param {?} params
     * @return {?}
     */
    static normalizeQueryParams(params) {
        return params && params[0] !== '?' ? '?' + params : params;
    }
    /**
     * Given 2 parts of a url, join them with a slash if needed.
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    static joinWithSlash(start, end) {
        if (start.length == 0) {
            return end;
        }
        if (end.length == 0) {
            return start;
        }
        let /** @type {?} */ slashes = 0;
        if (start.endsWith('/')) {
            slashes++;
        }
        if (end.startsWith('/')) {
            slashes++;
        }
        if (slashes == 2) {
            return start + end.substring(1);
        }
        if (slashes == 1) {
            return start + end;
        }
        return start + '/' + end;
    }
    /**
     * If url has a trailing slash, remove it, otherwise return url as is. This
     * method looks for the first occurrence of either #, ?, or the end of the
     * line as `/` characters after any of these should not be replaced.
     * @param {?} url
     * @return {?}
     */
    static stripTrailingSlash(url) {
        const /** @type {?} */ match = url.match(/#|\?|$/);
        const /** @type {?} */ pathEndIdx = match && match.index || url.length;
        const /** @type {?} */ droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
        return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
    }
}
Location.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Location.ctorParameters = () => [
    { type: LocationStrategy, },
];
function Location_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    Location.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    Location.ctorParameters;
    /**
     * \@internal
     * @type {?}
     */
    Location.prototype._subject;
    /**
     * \@internal
     * @type {?}
     */
    Location.prototype._baseHref;
    /**
     * \@internal
     * @type {?}
     */
    Location.prototype._platformStrategy;
}
/**
 * @param {?} baseHref
 * @param {?} url
 * @return {?}
 */
function _stripBaseHref(baseHref, url) {
    return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
}
/**
 * @param {?} url
 * @return {?}
 */
function _stripIndexHtml(url) {
    return url.replace(/\/index.html$/, '');
}
//# sourceMappingURL=location.js.map