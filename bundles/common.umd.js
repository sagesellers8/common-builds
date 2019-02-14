/**
 * @license Angular v8.0.0-beta.3+175.sha-627cecd
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular/common', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.common = {}), global.ng.core));
}(this, function (exports, i0) { 'use strict';

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * This class should not be used directly by an application developer. Instead, use
     * {@link Location}.
     *
     * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
     * agnostic.
     * This means that we can have different implementation of `PlatformLocation` for the different
     * platforms that angular supports. For example, `@angular/platform-browser` provides an
     * implementation specific to the browser environment, while `@angular/platform-webworker` provides
     * one suitable for use with web workers.
     *
     * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
     * when they need to interact with the DOM apis like pushState, popState, etc...
     *
     * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
     * by the {@link Router} in order to navigate between routes. Since all interactions between {@link
     * Router} /
     * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
     * class they are all platform independent.
     *
     * @publicApi
     */
    var PlatformLocation = /** @class */ (function () {
        function PlatformLocation() {
        }
        return PlatformLocation;
    }());
    /**
     * @description
     * Indicates when a location is initialized.
     *
     * @publicApi
     */
    var LOCATION_INITIALIZED = new i0.InjectionToken('Location Initialized');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
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
    var APP_BASE_HREF = new i0.InjectionToken('appBaseHref');

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @description
     *
     * A service that applications can use to interact with a browser's URL.
     *
     * Depending on which {@link LocationStrategy} is used, `Location` will either persist
     * to the URL's path or the URL's hash segment.
     *
     * @usageNotes
     *
     * It's better to use {@link Router#navigate} service to trigger route changes. Use
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
     *
     * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
     *
     * @publicApi
     */
    var Location = /** @class */ (function () {
        function Location(platformStrategy) {
            var _this = this;
            /** @internal */
            this._subject = new i0.EventEmitter();
            this._platformStrategy = platformStrategy;
            var browserBaseHref = this._platformStrategy.getBaseHref();
            this._baseHref = Location.stripTrailingSlash(_stripIndexHtml(browserBaseHref));
            this._platformStrategy.onPopState(function (ev) {
                _this._subject.emit({
                    'url': _this.path(true),
                    'pop': true,
                    'state': ev.state,
                    'type': ev.type,
                });
            });
        }
        /**
         * Returns the normalized URL path.
         */
        // TODO: vsavkin. Remove the boolean flag and always include hash once the deprecated router is
        // removed.
        Location.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            return this.normalize(this._platformStrategy.path(includeHash));
        };
        /**
         * Normalizes the given path and compares to the current normalized path.
         */
        Location.prototype.isCurrentPathEqualTo = function (path, query) {
            if (query === void 0) { query = ''; }
            return this.path() == this.normalize(path + Location.normalizeQueryParams(query));
        };
        /**
         * Given a string representing a URL, returns the normalized URL path without leading or
         * trailing slashes.
         */
        Location.prototype.normalize = function (url) {
            return Location.stripTrailingSlash(_stripBaseHref(this._baseHref, _stripIndexHtml(url)));
        };
        /**
         * Given a string representing a URL, returns the platform-specific external URL path.
         * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
         * before normalizing. This method will also add a hash if `HashLocationStrategy` is
         * used, or the `APP_BASE_HREF` if the `PathLocationStrategy` is in use.
         */
        Location.prototype.prepareExternalUrl = function (url) {
            if (url && url[0] !== '/') {
                url = '/' + url;
            }
            return this._platformStrategy.prepareExternalUrl(url);
        };
        // TODO: rename this method to pushState
        /**
         * Changes the browsers URL to the normalized version of the given URL, and pushes a
         * new item onto the platform's history.
         */
        Location.prototype.go = function (path, query, state) {
            if (query === void 0) { query = ''; }
            if (state === void 0) { state = null; }
            this._platformStrategy.pushState(state, '', path, query);
        };
        /**
         * Changes the browsers URL to the normalized version of the given URL, and replaces
         * the top item on the platform's history stack.
         */
        Location.prototype.replaceState = function (path, query, state) {
            if (query === void 0) { query = ''; }
            if (state === void 0) { state = null; }
            this._platformStrategy.replaceState(state, '', path, query);
        };
        /**
         * Navigates forward in the platform's history.
         */
        Location.prototype.forward = function () { this._platformStrategy.forward(); };
        /**
         * Navigates back in the platform's history.
         */
        Location.prototype.back = function () { this._platformStrategy.back(); };
        /**
         * Subscribe to the platform's `popState` events.
         */
        Location.prototype.subscribe = function (onNext, onThrow, onReturn) {
            return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
        };
        /**
         * Given a string of url parameters, prepend with '?' if needed, otherwise return parameters as
         * is.
         */
        Location.normalizeQueryParams = function (params) {
            return params && params[0] !== '?' ? '?' + params : params;
        };
        /**
         * Given 2 parts of a url, join them with a slash if needed.
         */
        Location.joinWithSlash = function (start, end) {
            if (start.length == 0) {
                return end;
            }
            if (end.length == 0) {
                return start;
            }
            var slashes = 0;
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
        };
        /**
         * If url has a trailing slash, remove it, otherwise return url as is. This
         * method looks for the first occurrence of either #, ?, or the end of the
         * line as `/` characters after any of these should not be replaced.
         */
        Location.stripTrailingSlash = function (url) {
            var match = url.match(/#|\?|$/);
            var pathEndIdx = match && match.index || url.length;
            var droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
            return url.slice(0, droppedSlashIdx) + url.slice(pathEndIdx);
        };
        Location.ngInjectableDef = i0.defineInjectable({ token: Location, factory: function Location_Factory(t) { return new (t || Location)(i0.inject(LocationStrategy)); }, providedIn: null });
        return Location;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(Location, [{
            type: i0.Injectable
        }], function () { return [{
            type: LocationStrategy
        }]; }, null);
    function _stripBaseHref(baseHref, url) {
        return baseHref && url.startsWith(baseHref) ? url.substring(baseHref.length) : url;
    }
    function _stripIndexHtml(url) {
        return url.replace(/\/index.html$/, '');
    }

    /**
     * @description
     * A {@link LocationStrategy} used to configure the {@link Location} service to
     * represent its state in the
     * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
     * of the browser's URL.
     *
     * For instance, if you call `location.go('/foo')`, the browser's URL will become
     * `example.com#/foo`.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/location/ts/hash_location_component.ts region='LocationComponent'}
     *
     * @publicApi
     */
    var HashLocationStrategy = /** @class */ (function (_super) {
        __extends(HashLocationStrategy, _super);
        function HashLocationStrategy(_platformLocation, _baseHref) {
            var _this = _super.call(this) || this;
            _this._platformLocation = _platformLocation;
            _this._baseHref = '';
            if (_baseHref != null) {
                _this._baseHref = _baseHref;
            }
            return _this;
        }
        HashLocationStrategy.prototype.onPopState = function (fn) {
            this._platformLocation.onPopState(fn);
            this._platformLocation.onHashChange(fn);
        };
        HashLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
        HashLocationStrategy.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            // the hash value is always prefixed with a `#`
            // and if it is empty then it will stay empty
            var path = this._platformLocation.hash;
            if (path == null)
                path = '#';
            return path.length > 0 ? path.substring(1) : path;
        };
        HashLocationStrategy.prototype.prepareExternalUrl = function (internal) {
            var url = Location.joinWithSlash(this._baseHref, internal);
            return url.length > 0 ? ('#' + url) : url;
        };
        HashLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
            var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
            if (url.length == 0) {
                url = this._platformLocation.pathname;
            }
            this._platformLocation.pushState(state, title, url);
        };
        HashLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
            var url = this.prepareExternalUrl(path + Location.normalizeQueryParams(queryParams));
            if (url.length == 0) {
                url = this._platformLocation.pathname;
            }
            this._platformLocation.replaceState(state, title, url);
        };
        HashLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
        HashLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
        HashLocationStrategy.ngInjectableDef = i0.defineInjectable({ token: HashLocationStrategy, factory: function HashLocationStrategy_Factory(t) { return new (t || HashLocationStrategy)(i0.inject(PlatformLocation), i0.inject(APP_BASE_HREF, 8)); }, providedIn: null });
        return HashLocationStrategy;
    }(LocationStrategy));
    /*@__PURE__*/ i0.ɵsetClassMetadata(HashLocationStrategy, [{
            type: i0.Injectable
        }], function () { return [{
            type: PlatformLocation
        }, {
            type: undefined,
            decorators: [{
                    type: i0.Optional
                }, {
                    type: i0.Inject,
                    args: [APP_BASE_HREF]
                }]
        }]; }, null);

    /**
     * @description
     * A {@link LocationStrategy} used to configure the {@link Location} service to
     * represent its state in the
     * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
     * browser's URL.
     *
     * If you're using `PathLocationStrategy`, you must provide a {@link APP_BASE_HREF}
     * or add a base element to the document. This URL prefix that will be preserved
     * when generating and recognizing URLs.
     *
     * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * Similarly, if you add `<base href='/my/app'/>` to the document and call
     * `location.go('/foo')`, the browser's URL will become
     * `example.com/my/app/foo`.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/location/ts/path_location_component.ts region='LocationComponent'}
     *
     * @publicApi
     */
    var PathLocationStrategy = /** @class */ (function (_super) {
        __extends(PathLocationStrategy, _super);
        function PathLocationStrategy(_platformLocation, href) {
            var _this = _super.call(this) || this;
            _this._platformLocation = _platformLocation;
            if (href == null) {
                href = _this._platformLocation.getBaseHrefFromDOM();
            }
            if (href == null) {
                throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
            }
            _this._baseHref = href;
            return _this;
        }
        PathLocationStrategy.prototype.onPopState = function (fn) {
            this._platformLocation.onPopState(fn);
            this._platformLocation.onHashChange(fn);
        };
        PathLocationStrategy.prototype.getBaseHref = function () { return this._baseHref; };
        PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
            return Location.joinWithSlash(this._baseHref, internal);
        };
        PathLocationStrategy.prototype.path = function (includeHash) {
            if (includeHash === void 0) { includeHash = false; }
            var pathname = this._platformLocation.pathname +
                Location.normalizeQueryParams(this._platformLocation.search);
            var hash = this._platformLocation.hash;
            return hash && includeHash ? "" + pathname + hash : pathname;
        };
        PathLocationStrategy.prototype.pushState = function (state, title, url, queryParams) {
            var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
            this._platformLocation.pushState(state, title, externalUrl);
        };
        PathLocationStrategy.prototype.replaceState = function (state, title, url, queryParams) {
            var externalUrl = this.prepareExternalUrl(url + Location.normalizeQueryParams(queryParams));
            this._platformLocation.replaceState(state, title, externalUrl);
        };
        PathLocationStrategy.prototype.forward = function () { this._platformLocation.forward(); };
        PathLocationStrategy.prototype.back = function () { this._platformLocation.back(); };
        PathLocationStrategy.ngInjectableDef = i0.defineInjectable({ token: PathLocationStrategy, factory: function PathLocationStrategy_Factory(t) { return new (t || PathLocationStrategy)(i0.inject(PlatformLocation), i0.inject(APP_BASE_HREF, 8)); }, providedIn: null });
        return PathLocationStrategy;
    }(LocationStrategy));
    /*@__PURE__*/ i0.ɵsetClassMetadata(PathLocationStrategy, [{
            type: i0.Injectable
        }], function () { return [{
            type: PlatformLocation
        }, {
            type: undefined,
            decorators: [{
                    type: i0.Optional
                }, {
                    type: i0.Inject,
                    args: [APP_BASE_HREF]
                }]
        }]; }, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    var localeEn = [
        'en', [['a', 'p'], ['AM', 'PM'], u], [['AM', 'PM'], u, u],
        [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        u,
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            [
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'
            ]
        ],
        u, [['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']], 0, [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'], ['{1}, {0}', u, '{1} \'at\' {0}', u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], '$', 'US Dollar', {}, plural
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var LOCALE_DATA = {};
    /**
     * Register global data to be used internally by Angular. See the
     * ["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale data.
     *
     * @publicApi
     */
    // The signature registerLocaleData(data: any, extraData?: any) is deprecated since v5.1
    function registerLocaleData(data, localeId, extraData) {
        if (typeof localeId !== 'string') {
            extraData = localeId;
            localeId = data[0 /* LocaleId */];
        }
        localeId = localeId.toLowerCase().replace(/_/g, '-');
        LOCALE_DATA[localeId] = data;
        if (extraData) {
            LOCALE_DATA[localeId][19 /* ExtraData */] = extraData;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** @internal */
    var CURRENCIES_EN = {
        'ADP': [undefined, undefined, 0],
        'AFN': [undefined, undefined, 0],
        'ALL': [undefined, undefined, 0],
        'AMD': [undefined, undefined, 0],
        'AOA': [undefined, 'Kz'],
        'ARS': [undefined, '$'],
        'AUD': ['A$', '$'],
        'BAM': [undefined, 'KM'],
        'BBD': [undefined, '$'],
        'BDT': [undefined, '৳'],
        'BHD': [undefined, undefined, 3],
        'BIF': [undefined, undefined, 0],
        'BMD': [undefined, '$'],
        'BND': [undefined, '$'],
        'BOB': [undefined, 'Bs'],
        'BRL': ['R$'],
        'BSD': [undefined, '$'],
        'BWP': [undefined, 'P'],
        'BYN': [undefined, 'р.', 2],
        'BYR': [undefined, undefined, 0],
        'BZD': [undefined, '$'],
        'CAD': ['CA$', '$', 2],
        'CHF': [undefined, undefined, 2],
        'CLF': [undefined, undefined, 4],
        'CLP': [undefined, '$', 0],
        'CNY': ['CN¥', '¥'],
        'COP': [undefined, '$', 0],
        'CRC': [undefined, '₡', 2],
        'CUC': [undefined, '$'],
        'CUP': [undefined, '$'],
        'CZK': [undefined, 'Kč', 2],
        'DJF': [undefined, undefined, 0],
        'DKK': [undefined, 'kr', 2],
        'DOP': [undefined, '$'],
        'EGP': [undefined, 'E£'],
        'ESP': [undefined, '₧', 0],
        'EUR': ['€'],
        'FJD': [undefined, '$'],
        'FKP': [undefined, '£'],
        'GBP': ['£'],
        'GEL': [undefined, '₾'],
        'GIP': [undefined, '£'],
        'GNF': [undefined, 'FG', 0],
        'GTQ': [undefined, 'Q'],
        'GYD': [undefined, '$', 0],
        'HKD': ['HK$', '$'],
        'HNL': [undefined, 'L'],
        'HRK': [undefined, 'kn'],
        'HUF': [undefined, 'Ft', 2],
        'IDR': [undefined, 'Rp', 0],
        'ILS': ['₪'],
        'INR': ['₹'],
        'IQD': [undefined, undefined, 0],
        'IRR': [undefined, undefined, 0],
        'ISK': [undefined, 'kr', 0],
        'ITL': [undefined, undefined, 0],
        'JMD': [undefined, '$'],
        'JOD': [undefined, undefined, 3],
        'JPY': ['¥', undefined, 0],
        'KHR': [undefined, '៛'],
        'KMF': [undefined, 'CF', 0],
        'KPW': [undefined, '₩', 0],
        'KRW': ['₩', undefined, 0],
        'KWD': [undefined, undefined, 3],
        'KYD': [undefined, '$'],
        'KZT': [undefined, '₸'],
        'LAK': [undefined, '₭', 0],
        'LBP': [undefined, 'L£', 0],
        'LKR': [undefined, 'Rs'],
        'LRD': [undefined, '$'],
        'LTL': [undefined, 'Lt'],
        'LUF': [undefined, undefined, 0],
        'LVL': [undefined, 'Ls'],
        'LYD': [undefined, undefined, 3],
        'MGA': [undefined, 'Ar', 0],
        'MGF': [undefined, undefined, 0],
        'MMK': [undefined, 'K', 0],
        'MNT': [undefined, '₮', 0],
        'MRO': [undefined, undefined, 0],
        'MUR': [undefined, 'Rs', 0],
        'MXN': ['MX$', '$'],
        'MYR': [undefined, 'RM'],
        'NAD': [undefined, '$'],
        'NGN': [undefined, '₦'],
        'NIO': [undefined, 'C$'],
        'NOK': [undefined, 'kr', 2],
        'NPR': [undefined, 'Rs'],
        'NZD': ['NZ$', '$'],
        'OMR': [undefined, undefined, 3],
        'PHP': [undefined, '₱'],
        'PKR': [undefined, 'Rs', 0],
        'PLN': [undefined, 'zł'],
        'PYG': [undefined, '₲', 0],
        'RON': [undefined, 'lei'],
        'RSD': [undefined, undefined, 0],
        'RUB': [undefined, '₽'],
        'RUR': [undefined, 'р.'],
        'RWF': [undefined, 'RF', 0],
        'SBD': [undefined, '$'],
        'SEK': [undefined, 'kr', 2],
        'SGD': [undefined, '$'],
        'SHP': [undefined, '£'],
        'SLL': [undefined, undefined, 0],
        'SOS': [undefined, undefined, 0],
        'SRD': [undefined, '$'],
        'SSP': [undefined, '£'],
        'STD': [undefined, undefined, 0],
        'STN': [undefined, 'Db'],
        'SYP': [undefined, '£', 0],
        'THB': [undefined, '฿'],
        'TMM': [undefined, undefined, 0],
        'TND': [undefined, undefined, 3],
        'TOP': [undefined, 'T$'],
        'TRL': [undefined, undefined, 0],
        'TRY': [undefined, '₺'],
        'TTD': [undefined, '$'],
        'TWD': ['NT$', '$', 2],
        'TZS': [undefined, undefined, 0],
        'UAH': [undefined, '₴'],
        'UGX': [undefined, undefined, 0],
        'USD': ['$'],
        'UYI': [undefined, undefined, 0],
        'UYU': [undefined, '$'],
        'UZS': [undefined, undefined, 0],
        'VEF': [undefined, 'Bs'],
        'VND': ['₫', undefined, 0],
        'VUV': [undefined, undefined, 0],
        'XAF': ['FCFA', undefined, 0],
        'XCD': ['EC$', '$'],
        'XOF': ['CFA', undefined, 0],
        'XPF': ['CFPF', undefined, 0],
        'YER': [undefined, undefined, 0],
        'ZAR': [undefined, 'R'],
        'ZMK': [undefined, undefined, 0],
        'ZMW': [undefined, 'ZK'],
        'ZWD': [undefined, undefined, 0]
    };

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    (function (NumberFormatStyle) {
        NumberFormatStyle[NumberFormatStyle["Decimal"] = 0] = "Decimal";
        NumberFormatStyle[NumberFormatStyle["Percent"] = 1] = "Percent";
        NumberFormatStyle[NumberFormatStyle["Currency"] = 2] = "Currency";
        NumberFormatStyle[NumberFormatStyle["Scientific"] = 3] = "Scientific";
    })(exports.NumberFormatStyle || (exports.NumberFormatStyle = {}));
    (function (Plural) {
        Plural[Plural["Zero"] = 0] = "Zero";
        Plural[Plural["One"] = 1] = "One";
        Plural[Plural["Two"] = 2] = "Two";
        Plural[Plural["Few"] = 3] = "Few";
        Plural[Plural["Many"] = 4] = "Many";
        Plural[Plural["Other"] = 5] = "Other";
    })(exports.Plural || (exports.Plural = {}));
    (function (FormStyle) {
        FormStyle[FormStyle["Format"] = 0] = "Format";
        FormStyle[FormStyle["Standalone"] = 1] = "Standalone";
    })(exports.FormStyle || (exports.FormStyle = {}));
    (function (TranslationWidth) {
        TranslationWidth[TranslationWidth["Narrow"] = 0] = "Narrow";
        TranslationWidth[TranslationWidth["Abbreviated"] = 1] = "Abbreviated";
        TranslationWidth[TranslationWidth["Wide"] = 2] = "Wide";
        TranslationWidth[TranslationWidth["Short"] = 3] = "Short";
    })(exports.TranslationWidth || (exports.TranslationWidth = {}));
    (function (FormatWidth) {
        FormatWidth[FormatWidth["Short"] = 0] = "Short";
        FormatWidth[FormatWidth["Medium"] = 1] = "Medium";
        FormatWidth[FormatWidth["Long"] = 2] = "Long";
        FormatWidth[FormatWidth["Full"] = 3] = "Full";
    })(exports.FormatWidth || (exports.FormatWidth = {}));
    (function (NumberSymbol) {
        NumberSymbol[NumberSymbol["Decimal"] = 0] = "Decimal";
        NumberSymbol[NumberSymbol["Group"] = 1] = "Group";
        NumberSymbol[NumberSymbol["List"] = 2] = "List";
        NumberSymbol[NumberSymbol["PercentSign"] = 3] = "PercentSign";
        NumberSymbol[NumberSymbol["PlusSign"] = 4] = "PlusSign";
        NumberSymbol[NumberSymbol["MinusSign"] = 5] = "MinusSign";
        NumberSymbol[NumberSymbol["Exponential"] = 6] = "Exponential";
        NumberSymbol[NumberSymbol["SuperscriptingExponent"] = 7] = "SuperscriptingExponent";
        NumberSymbol[NumberSymbol["PerMille"] = 8] = "PerMille";
        NumberSymbol[NumberSymbol["Infinity"] = 9] = "Infinity";
        NumberSymbol[NumberSymbol["NaN"] = 10] = "NaN";
        NumberSymbol[NumberSymbol["TimeSeparator"] = 11] = "TimeSeparator";
        NumberSymbol[NumberSymbol["CurrencyDecimal"] = 12] = "CurrencyDecimal";
        NumberSymbol[NumberSymbol["CurrencyGroup"] = 13] = "CurrencyGroup";
    })(exports.NumberSymbol || (exports.NumberSymbol = {}));
    (function (WeekDay) {
        WeekDay[WeekDay["Sunday"] = 0] = "Sunday";
        WeekDay[WeekDay["Monday"] = 1] = "Monday";
        WeekDay[WeekDay["Tuesday"] = 2] = "Tuesday";
        WeekDay[WeekDay["Wednesday"] = 3] = "Wednesday";
        WeekDay[WeekDay["Thursday"] = 4] = "Thursday";
        WeekDay[WeekDay["Friday"] = 5] = "Friday";
        WeekDay[WeekDay["Saturday"] = 6] = "Saturday";
    })(exports.WeekDay || (exports.WeekDay = {}));
    /**
     * The locale id for the chosen locale (e.g `en-GB`).
     *
     * @publicApi
     */
    function getLocaleId(locale) {
        return findLocaleData(locale)[0 /* LocaleId */];
    }
    /**
     * Periods of the day (e.g. `[AM, PM]` for en-US).
     *
     * @publicApi
     */
    function getLocaleDayPeriods(locale, formStyle, width) {
        var data = findLocaleData(locale);
        var amPmData = [data[1 /* DayPeriodsFormat */], data[2 /* DayPeriodsStandalone */]];
        var amPm = getLastDefinedValue(amPmData, formStyle);
        return getLastDefinedValue(amPm, width);
    }
    /**
     * Days of the week for the Gregorian calendar (e.g. `[Sunday, Monday, ... Saturday]` for en-US).
     *
     * @publicApi
     */
    function getLocaleDayNames(locale, formStyle, width) {
        var data = findLocaleData(locale);
        var daysData = [data[3 /* DaysFormat */], data[4 /* DaysStandalone */]];
        var days = getLastDefinedValue(daysData, formStyle);
        return getLastDefinedValue(days, width);
    }
    /**
     * Months of the year for the Gregorian calendar (e.g. `[January, February, ...]` for en-US).
     *
     * @publicApi
     */
    function getLocaleMonthNames(locale, formStyle, width) {
        var data = findLocaleData(locale);
        var monthsData = [data[5 /* MonthsFormat */], data[6 /* MonthsStandalone */]];
        var months = getLastDefinedValue(monthsData, formStyle);
        return getLastDefinedValue(months, width);
    }
    /**
     * Eras for the Gregorian calendar (e.g. AD/BC).
     *
     * @publicApi
     */
    function getLocaleEraNames(locale, width) {
        var data = findLocaleData(locale);
        var erasData = data[7 /* Eras */];
        return getLastDefinedValue(erasData, width);
    }
    /**
     * First day of the week for this locale, based on english days (Sunday = 0, Monday = 1, ...).
     * For example in french the value would be 1 because the first day of the week is Monday.
     *
     * @publicApi
     */
    function getLocaleFirstDayOfWeek(locale) {
        var data = findLocaleData(locale);
        return data[8 /* FirstDayOfWeek */];
    }
    /**
     * Range of days in the week that represent the week-end for this locale, based on english days
     * (Sunday = 0, Monday = 1, ...).
     * For example in english the value would be [6,0] for Saturday to Sunday.
     *
     * @publicApi
     */
    function getLocaleWeekEndRange(locale) {
        var data = findLocaleData(locale);
        return data[9 /* WeekendRange */];
    }
    /**
     * Date format that depends on the locale.
     *
     * There are four basic date formats:
     * - `full` should contain long-weekday (EEEE), year (y), long-month (MMMM), day (d).
     *
     *  For example, English uses `EEEE, MMMM d, y`, corresponding to a date like
     *  "Tuesday, September 14, 1999".
     *
     * - `long` should contain year, long-month, day.
     *
     *  For example, `MMMM d, y`, corresponding to a date like "September 14, 1999".
     *
     * - `medium` should contain year, abbreviated-month (MMM), day.
     *
     *  For example, `MMM d, y`, corresponding to a date like "Sep 14, 1999".
     *  For languages that do not use abbreviated months, use the numeric month (MM/M). For example,
     *  `y/MM/dd`, corresponding to a date like "1999/09/14".
     *
     * - `short` should contain year, numeric-month (MM/M), and day.
     *
     *  For example, `M/d/yy`, corresponding to a date like "9/14/99".
     *
     * @publicApi
     */
    function getLocaleDateFormat(locale, width) {
        var data = findLocaleData(locale);
        return getLastDefinedValue(data[10 /* DateFormat */], width);
    }
    /**
     * Time format that depends on the locale.
     *
     * The standard formats include four basic time formats:
     * - `full` should contain hour (h/H), minute (mm), second (ss), and zone (zzzz).
     * - `long` should contain hour, minute, second, and zone (z)
     * - `medium` should contain hour, minute, second.
     * - `short` should contain hour, minute.
     *
     * Note: The patterns depend on whether the main country using your language uses 12-hour time or
     * not:
     * - For 12-hour time, use a pattern like `hh:mm a` using h to mean a 12-hour clock cycle running
     * 1 through 12 (midnight plus 1 minute is 12:01), or using K to mean a 12-hour clock cycle
     * running 0 through 11 (midnight plus 1 minute is 0:01).
     * - For 24-hour time, use a pattern like `HH:mm` using H to mean a 24-hour clock cycle running 0
     * through 23 (midnight plus 1 minute is 0:01), or using k to mean a 24-hour clock cycle running
     * 1 through 24 (midnight plus 1 minute is 24:01).
     *
     * @publicApi
     */
    function getLocaleTimeFormat(locale, width) {
        var data = findLocaleData(locale);
        return getLastDefinedValue(data[11 /* TimeFormat */], width);
    }
    /**
     * Date-time format that depends on the locale.
     *
     * The date-time pattern shows how to combine separate patterns for date (represented by {1})
     * and time (represented by {0}) into a single pattern. It usually doesn't need to be changed.
     * What you want to pay attention to are:
     * - possibly removing a space for languages that don't use it, such as many East Asian languages
     * - possibly adding a comma, other punctuation, or a combining word
     *
     * For example:
     * - English uses `{1} 'at' {0}` or `{1}, {0}` (depending on date style), while Japanese uses
     *  `{1}{0}`.
     * - An English formatted date-time using the combining pattern `{1}, {0}` could be
     *  `Dec 10, 2010, 3:59:49 PM`. Notice the comma and space between the date portion and the time
     *  portion.
     *
     * There are four formats (`full`, `long`, `medium`, `short`); the determination of which to use
     * is normally based on the date style. For example, if the date has a full month and weekday
     * name, the full combining pattern will be used to combine that with a time. If the date has
     * numeric month, the short version of the combining pattern will be used to combine that with a
     * time. English uses `{1} 'at' {0}` for full and long styles, and `{1}, {0}` for medium and short
     * styles.
     *
     * @publicApi
     */
    function getLocaleDateTimeFormat(locale, width) {
        var data = findLocaleData(locale);
        var dateTimeFormatData = data[12 /* DateTimeFormat */];
        return getLastDefinedValue(dateTimeFormatData, width);
    }
    /**
     * Number symbol that can be used to replace placeholders in number formats.
     * See {@link NumberSymbol} for more information.
     *
     * @publicApi
     */
    function getLocaleNumberSymbol(locale, symbol) {
        var data = findLocaleData(locale);
        var res = data[13 /* NumberSymbols */][symbol];
        if (typeof res === 'undefined') {
            if (symbol === exports.NumberSymbol.CurrencyDecimal) {
                return data[13 /* NumberSymbols */][exports.NumberSymbol.Decimal];
            }
            else if (symbol === exports.NumberSymbol.CurrencyGroup) {
                return data[13 /* NumberSymbols */][exports.NumberSymbol.Group];
            }
        }
        return res;
    }
    /**
     * Number format that depends on the locale.
     *
     * Numbers are formatted using patterns, like `#,###.00`. For example, the pattern `#,###.00`
     * when used to format the number 12345.678 could result in "12'345,67". That would happen if the
     * grouping separator for your language is an apostrophe, and the decimal separator is a comma.
     *
     * <b>Important:</b> The characters `.` `,` `0` `#` (and others below) are special placeholders;
     * they stand for the decimal separator, and so on, and are NOT real characters.
     * You must NOT "translate" the placeholders; for example, don't change `.` to `,` even though in
     * your language the decimal point is written with a comma. The symbols should be replaced by the
     * local equivalents, using the Number Symbols for your language.
     *
     * Here are the special characters used in number patterns:
     *
     * | Symbol | Meaning |
     * |--------|---------|
     * | . | Replaced automatically by the character used for the decimal point. |
     * | , | Replaced by the "grouping" (thousands) separator. |
     * | 0 | Replaced by a digit (or zero if there aren't enough digits). |
     * | # | Replaced by a digit (or nothing if there aren't enough). |
     * | ¤ | This will be replaced by a currency symbol, such as $ or USD. |
     * | % | This marks a percent format. The % symbol may change position, but must be retained. |
     * | E | This marks a scientific format. The E symbol may change position, but must be retained. |
     * | ' | Special characters used as literal characters are quoted with ASCII single quotes. |
     *
     * You can find more information
     * [on the CLDR website](http://cldr.unicode.org/translation/number-patterns)
     *
     * @publicApi
     */
    function getLocaleNumberFormat(locale, type) {
        var data = findLocaleData(locale);
        return data[14 /* NumberFormats */][type];
    }
    /**
     * The symbol used to represent the currency for the main country using this locale (e.g. $ for
     * the locale en-US).
     * The symbol will be `null` if the main country cannot be determined.
     *
     * @publicApi
     */
    function getLocaleCurrencySymbol(locale) {
        var data = findLocaleData(locale);
        return data[15 /* CurrencySymbol */] || null;
    }
    /**
     * The name of the currency for the main country using this locale (e.g. 'US Dollar' for the locale
     * en-US).
     * The name will be `null` if the main country cannot be determined.
     *
     * @publicApi
     */
    function getLocaleCurrencyName(locale) {
        var data = findLocaleData(locale);
        return data[16 /* CurrencyName */] || null;
    }
    /**
     * Returns the currency values for the locale
     */
    function getLocaleCurrencies(locale) {
        var data = findLocaleData(locale);
        return data[17 /* Currencies */];
    }
    /**
     * The locale plural function used by ICU expressions to determine the plural case to use.
     * See {@link NgPlural} for more information.
     *
     * @publicApi
     */
    function getLocalePluralCase(locale) {
        var data = findLocaleData(locale);
        return data[18 /* PluralCase */];
    }
    function checkFullData(data) {
        if (!data[19 /* ExtraData */]) {
            throw new Error("Missing extra locale data for the locale \"" + data[0 /* LocaleId */] + "\". Use \"registerLocaleData\" to load new data. See the \"I18n guide\" on angular.io to know more.");
        }
    }
    /**
     * Rules used to determine which day period to use (See `dayPeriods` below).
     * The rules can either be an array or a single value. If it's an array, consider it as "from"
     * and "to". If it's a single value then it means that the period is only valid at this exact
     * value.
     * There is always the same number of rules as the number of day periods, which means that the
     * first rule is applied to the first day period and so on.
     * You should fallback to AM/PM when there are no rules available.
     *
     * Note: this is only available if you load the full locale data.
     * See the ["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale
     * data.
     *
     * @publicApi
     */
    function getLocaleExtraDayPeriodRules(locale) {
        var data = findLocaleData(locale);
        checkFullData(data);
        var rules = data[19 /* ExtraData */][2 /* ExtraDayPeriodsRules */] || [];
        return rules.map(function (rule) {
            if (typeof rule === 'string') {
                return extractTime(rule);
            }
            return [extractTime(rule[0]), extractTime(rule[1])];
        });
    }
    /**
     * Day Periods indicate roughly how the day is broken up in different languages (e.g. morning,
     * noon, afternoon, midnight, ...).
     * You should use the function {@link getLocaleExtraDayPeriodRules} to determine which period to
     * use.
     * You should fallback to AM/PM when there are no day periods available.
     *
     * Note: this is only available if you load the full locale data.
     * See the ["I18n guide"](guide/i18n#i18n-pipes) to know how to import additional locale
     * data.
     *
     * @publicApi
     */
    function getLocaleExtraDayPeriods(locale, formStyle, width) {
        var data = findLocaleData(locale);
        checkFullData(data);
        var dayPeriodsData = [
            data[19 /* ExtraData */][0 /* ExtraDayPeriodFormats */],
            data[19 /* ExtraData */][1 /* ExtraDayPeriodStandalone */]
        ];
        var dayPeriods = getLastDefinedValue(dayPeriodsData, formStyle) || [];
        return getLastDefinedValue(dayPeriods, width) || [];
    }
    /**
     * Returns the first value that is defined in an array, going backwards.
     *
     * To avoid repeating the same data (e.g. when "format" and "standalone" are the same) we only
     * add the first one to the locale data arrays, the other ones are only defined when different.
     * We use this function to retrieve the first defined value.
     *
     * @publicApi
     */
    function getLastDefinedValue(data, index) {
        for (var i = index; i > -1; i--) {
            if (typeof data[i] !== 'undefined') {
                return data[i];
            }
        }
        throw new Error('Locale data API: locale data undefined');
    }
    /**
     * Extract the hours and minutes from a string like "15:45"
     */
    function extractTime(time) {
        var _a = __read(time.split(':'), 2), h = _a[0], m = _a[1];
        return { hours: +h, minutes: +m };
    }
    /**
     * Finds the locale data for a locale id
     *
     * @publicApi
     */
    function findLocaleData(locale) {
        var normalizedLocale = locale.toLowerCase().replace(/_/g, '-');
        var match = LOCALE_DATA[normalizedLocale];
        if (match) {
            return match;
        }
        // let's try to find a parent locale
        var parentLocale = normalizedLocale.split('-')[0];
        match = LOCALE_DATA[parentLocale];
        if (match) {
            return match;
        }
        if (parentLocale === 'en') {
            return localeEn;
        }
        throw new Error("Missing locale data for the locale \"" + locale + "\".");
    }
    /**
     * Returns the currency symbol for a given currency code, or the code if no symbol available
     * (e.g.: format narrow = $, format wide = US$, code = USD)
     * If no locale is provided, it uses the locale "en" by default
     *
     * @publicApi
     */
    function getCurrencySymbol(code, format, locale) {
        if (locale === void 0) { locale = 'en'; }
        var currency = getLocaleCurrencies(locale)[code] || CURRENCIES_EN[code] || [];
        var symbolNarrow = currency[1 /* SymbolNarrow */];
        if (format === 'narrow' && typeof symbolNarrow === 'string') {
            return symbolNarrow;
        }
        return currency[0 /* Symbol */] || code;
    }
    // Most currencies have cents, that's why the default is 2
    var DEFAULT_NB_OF_CURRENCY_DIGITS = 2;
    /**
     * Returns the number of decimal digits for the given currency.
     * Its value depends upon the presence of cents in that particular currency.
     *
     * @publicApi
     */
    function getNumberOfCurrencyDigits(code) {
        var digits;
        var currency = CURRENCIES_EN[code];
        if (currency) {
            digits = currency[2 /* NbOfDigits */];
        }
        return typeof digits === 'number' ? digits : DEFAULT_NB_OF_CURRENCY_DIGITS;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ISO8601_DATE_REGEX = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    //    1        2       3         4          5          6          7          8  9     10      11
    var NAMED_FORMATS = {};
    var DATE_FORMATS_SPLIT = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
    var ZoneWidth;
    (function (ZoneWidth) {
        ZoneWidth[ZoneWidth["Short"] = 0] = "Short";
        ZoneWidth[ZoneWidth["ShortGMT"] = 1] = "ShortGMT";
        ZoneWidth[ZoneWidth["Long"] = 2] = "Long";
        ZoneWidth[ZoneWidth["Extended"] = 3] = "Extended";
    })(ZoneWidth || (ZoneWidth = {}));
    var DateType;
    (function (DateType) {
        DateType[DateType["FullYear"] = 0] = "FullYear";
        DateType[DateType["Month"] = 1] = "Month";
        DateType[DateType["Date"] = 2] = "Date";
        DateType[DateType["Hours"] = 3] = "Hours";
        DateType[DateType["Minutes"] = 4] = "Minutes";
        DateType[DateType["Seconds"] = 5] = "Seconds";
        DateType[DateType["FractionalSeconds"] = 6] = "FractionalSeconds";
        DateType[DateType["Day"] = 7] = "Day";
    })(DateType || (DateType = {}));
    var TranslationType;
    (function (TranslationType) {
        TranslationType[TranslationType["DayPeriods"] = 0] = "DayPeriods";
        TranslationType[TranslationType["Days"] = 1] = "Days";
        TranslationType[TranslationType["Months"] = 2] = "Months";
        TranslationType[TranslationType["Eras"] = 3] = "Eras";
    })(TranslationType || (TranslationType = {}));
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a date according to locale rules.
     *
     * Where:
     * - `value` is a Date, a number (milliseconds since UTC epoch) or an ISO string
     *   (https://www.w3.org/TR/NOTE-datetime).
     * - `format` indicates which date/time components to include. See {@link DatePipe} for more
     *   details.
     * - `locale` is a `string` defining the locale to use.
     * - `timezone` to be used for formatting. It understands UTC/GMT and the continental US time zone
     *   abbreviations, but for general use, use a time zone offset (e.g. `'+0430'`).
     *   If not specified, host system settings are used.
     *
     * See {@link DatePipe} for more details.
     *
     * @publicApi
     */
    function formatDate(value, format, locale, timezone) {
        var date = toDate(value);
        var namedFormat = getNamedFormat(locale, format);
        format = namedFormat || format;
        var parts = [];
        var match;
        while (format) {
            match = DATE_FORMATS_SPLIT.exec(format);
            if (match) {
                parts = parts.concat(match.slice(1));
                var part = parts.pop();
                if (!part) {
                    break;
                }
                format = part;
            }
            else {
                parts.push(format);
                break;
            }
        }
        var dateTimezoneOffset = date.getTimezoneOffset();
        if (timezone) {
            dateTimezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
            date = convertTimezoneToLocal(date, timezone, true);
        }
        var text = '';
        parts.forEach(function (value) {
            var dateFormatter = getDateFormatter(value);
            text += dateFormatter ?
                dateFormatter(date, locale, dateTimezoneOffset) :
                value === '\'\'' ? '\'' : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
        });
        return text;
    }
    function getNamedFormat(locale, format) {
        var localeId = getLocaleId(locale);
        NAMED_FORMATS[localeId] = NAMED_FORMATS[localeId] || {};
        if (NAMED_FORMATS[localeId][format]) {
            return NAMED_FORMATS[localeId][format];
        }
        var formatValue = '';
        switch (format) {
            case 'shortDate':
                formatValue = getLocaleDateFormat(locale, exports.FormatWidth.Short);
                break;
            case 'mediumDate':
                formatValue = getLocaleDateFormat(locale, exports.FormatWidth.Medium);
                break;
            case 'longDate':
                formatValue = getLocaleDateFormat(locale, exports.FormatWidth.Long);
                break;
            case 'fullDate':
                formatValue = getLocaleDateFormat(locale, exports.FormatWidth.Full);
                break;
            case 'shortTime':
                formatValue = getLocaleTimeFormat(locale, exports.FormatWidth.Short);
                break;
            case 'mediumTime':
                formatValue = getLocaleTimeFormat(locale, exports.FormatWidth.Medium);
                break;
            case 'longTime':
                formatValue = getLocaleTimeFormat(locale, exports.FormatWidth.Long);
                break;
            case 'fullTime':
                formatValue = getLocaleTimeFormat(locale, exports.FormatWidth.Full);
                break;
            case 'short':
                var shortTime = getNamedFormat(locale, 'shortTime');
                var shortDate = getNamedFormat(locale, 'shortDate');
                formatValue = formatDateTime(getLocaleDateTimeFormat(locale, exports.FormatWidth.Short), [shortTime, shortDate]);
                break;
            case 'medium':
                var mediumTime = getNamedFormat(locale, 'mediumTime');
                var mediumDate = getNamedFormat(locale, 'mediumDate');
                formatValue = formatDateTime(getLocaleDateTimeFormat(locale, exports.FormatWidth.Medium), [mediumTime, mediumDate]);
                break;
            case 'long':
                var longTime = getNamedFormat(locale, 'longTime');
                var longDate = getNamedFormat(locale, 'longDate');
                formatValue =
                    formatDateTime(getLocaleDateTimeFormat(locale, exports.FormatWidth.Long), [longTime, longDate]);
                break;
            case 'full':
                var fullTime = getNamedFormat(locale, 'fullTime');
                var fullDate = getNamedFormat(locale, 'fullDate');
                formatValue =
                    formatDateTime(getLocaleDateTimeFormat(locale, exports.FormatWidth.Full), [fullTime, fullDate]);
                break;
        }
        if (formatValue) {
            NAMED_FORMATS[localeId][format] = formatValue;
        }
        return formatValue;
    }
    function formatDateTime(str, opt_values) {
        if (opt_values) {
            str = str.replace(/\{([^}]+)}/g, function (match, key) {
                return (opt_values != null && key in opt_values) ? opt_values[key] : match;
            });
        }
        return str;
    }
    function padNumber(num, digits, minusSign, trim, negWrap) {
        if (minusSign === void 0) { minusSign = '-'; }
        var neg = '';
        if (num < 0 || (negWrap && num <= 0)) {
            if (negWrap) {
                num = -num + 1;
            }
            else {
                num = -num;
                neg = minusSign;
            }
        }
        var strNum = String(num);
        while (strNum.length < digits) {
            strNum = '0' + strNum;
        }
        if (trim) {
            strNum = strNum.substr(strNum.length - digits);
        }
        return neg + strNum;
    }
    function formatFractionalSeconds(milliseconds, digits) {
        var strMs = padNumber(milliseconds, 3);
        return strMs.substr(0, digits);
    }
    /**
     * Returns a date formatter that transforms a date into its locale digit representation
     */
    function dateGetter(name, size, offset, trim, negWrap) {
        if (offset === void 0) { offset = 0; }
        if (trim === void 0) { trim = false; }
        if (negWrap === void 0) { negWrap = false; }
        return function (date, locale) {
            var part = getDatePart(name, date);
            if (offset > 0 || part > -offset) {
                part += offset;
            }
            if (name === DateType.Hours) {
                if (part === 0 && offset === -12) {
                    part = 12;
                }
            }
            else if (name === DateType.FractionalSeconds) {
                return formatFractionalSeconds(part, size);
            }
            var localeMinus = getLocaleNumberSymbol(locale, exports.NumberSymbol.MinusSign);
            return padNumber(part, size, localeMinus, trim, negWrap);
        };
    }
    function getDatePart(part, date) {
        switch (part) {
            case DateType.FullYear:
                return date.getFullYear();
            case DateType.Month:
                return date.getMonth();
            case DateType.Date:
                return date.getDate();
            case DateType.Hours:
                return date.getHours();
            case DateType.Minutes:
                return date.getMinutes();
            case DateType.Seconds:
                return date.getSeconds();
            case DateType.FractionalSeconds:
                return date.getMilliseconds();
            case DateType.Day:
                return date.getDay();
            default:
                throw new Error("Unknown DateType value \"" + part + "\".");
        }
    }
    /**
     * Returns a date formatter that transforms a date into its locale string representation
     */
    function dateStrGetter(name, width, form, extended) {
        if (form === void 0) { form = exports.FormStyle.Format; }
        if (extended === void 0) { extended = false; }
        return function (date, locale) {
            return getDateTranslation(date, locale, name, width, form, extended);
        };
    }
    /**
     * Returns the locale translation of a date for a given form, type and width
     */
    function getDateTranslation(date, locale, name, width, form, extended) {
        switch (name) {
            case TranslationType.Months:
                return getLocaleMonthNames(locale, form, width)[date.getMonth()];
            case TranslationType.Days:
                return getLocaleDayNames(locale, form, width)[date.getDay()];
            case TranslationType.DayPeriods:
                var currentHours_1 = date.getHours();
                var currentMinutes_1 = date.getMinutes();
                if (extended) {
                    var rules = getLocaleExtraDayPeriodRules(locale);
                    var dayPeriods_1 = getLocaleExtraDayPeriods(locale, form, width);
                    var result_1;
                    rules.forEach(function (rule, index) {
                        if (Array.isArray(rule)) {
                            // morning, afternoon, evening, night
                            var _a = rule[0], hoursFrom = _a.hours, minutesFrom = _a.minutes;
                            var _b = rule[1], hoursTo = _b.hours, minutesTo = _b.minutes;
                            if (currentHours_1 >= hoursFrom && currentMinutes_1 >= minutesFrom &&
                                (currentHours_1 < hoursTo ||
                                    (currentHours_1 === hoursTo && currentMinutes_1 < minutesTo))) {
                                result_1 = dayPeriods_1[index];
                            }
                        }
                        else { // noon or midnight
                            var hours = rule.hours, minutes = rule.minutes;
                            if (hours === currentHours_1 && minutes === currentMinutes_1) {
                                result_1 = dayPeriods_1[index];
                            }
                        }
                    });
                    if (result_1) {
                        return result_1;
                    }
                }
                // if no rules for the day periods, we use am/pm by default
                return getLocaleDayPeriods(locale, form, width)[currentHours_1 < 12 ? 0 : 1];
            case TranslationType.Eras:
                return getLocaleEraNames(locale, width)[date.getFullYear() <= 0 ? 0 : 1];
            default:
                // This default case is not needed by TypeScript compiler, as the switch is exhaustive.
                // However Closure Compiler does not understand that and reports an error in typed mode.
                // The `throw new Error` below works around the problem, and the unexpected: never variable
                // makes sure tsc still checks this code is unreachable.
                var unexpected = name;
                throw new Error("unexpected translation type " + unexpected);
        }
    }
    /**
     * Returns a date formatter that transforms a date and an offset into a timezone with ISO8601 or
     * GMT format depending on the width (eg: short = +0430, short:GMT = GMT+4, long = GMT+04:30,
     * extended = +04:30)
     */
    function timeZoneGetter(width) {
        return function (date, locale, offset) {
            var zone = -1 * offset;
            var minusSign = getLocaleNumberSymbol(locale, exports.NumberSymbol.MinusSign);
            var hours = zone > 0 ? Math.floor(zone / 60) : Math.ceil(zone / 60);
            switch (width) {
                case ZoneWidth.Short:
                    return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) +
                        padNumber(Math.abs(zone % 60), 2, minusSign);
                case ZoneWidth.ShortGMT:
                    return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 1, minusSign);
                case ZoneWidth.Long:
                    return 'GMT' + ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                        padNumber(Math.abs(zone % 60), 2, minusSign);
                case ZoneWidth.Extended:
                    if (offset === 0) {
                        return 'Z';
                    }
                    else {
                        return ((zone >= 0) ? '+' : '') + padNumber(hours, 2, minusSign) + ':' +
                            padNumber(Math.abs(zone % 60), 2, minusSign);
                    }
                default:
                    throw new Error("Unknown zone width \"" + width + "\"");
            }
        };
    }
    var JANUARY = 0;
    var THURSDAY = 4;
    function getFirstThursdayOfYear(year) {
        var firstDayOfYear = (new Date(year, JANUARY, 1)).getDay();
        return new Date(year, 0, 1 + ((firstDayOfYear <= THURSDAY) ? THURSDAY : THURSDAY + 7) - firstDayOfYear);
    }
    function getThursdayThisWeek(datetime) {
        return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate() + (THURSDAY - datetime.getDay()));
    }
    function weekGetter(size, monthBased) {
        if (monthBased === void 0) { monthBased = false; }
        return function (date, locale) {
            var result;
            if (monthBased) {
                var nbDaysBefore1stDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
                var today = date.getDate();
                result = 1 + Math.floor((today + nbDaysBefore1stDayOfMonth) / 7);
            }
            else {
                var firstThurs = getFirstThursdayOfYear(date.getFullYear());
                var thisThurs = getThursdayThisWeek(date);
                var diff = thisThurs.getTime() - firstThurs.getTime();
                result = 1 + Math.round(diff / 6.048e8); // 6.048e8 ms per week
            }
            return padNumber(result, size, getLocaleNumberSymbol(locale, exports.NumberSymbol.MinusSign));
        };
    }
    var DATE_FORMATS = {};
    // Based on CLDR formats:
    // See complete list: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
    // See also explanations: http://cldr.unicode.org/translation/date-time
    // TODO(ocombe): support all missing cldr formats: Y, U, Q, D, F, e, c, j, J, C, A, v, V, X, x
    function getDateFormatter(format) {
        if (DATE_FORMATS[format]) {
            return DATE_FORMATS[format];
        }
        var formatter;
        switch (format) {
            // Era name (AD/BC)
            case 'G':
            case 'GG':
            case 'GGG':
                formatter = dateStrGetter(TranslationType.Eras, exports.TranslationWidth.Abbreviated);
                break;
            case 'GGGG':
                formatter = dateStrGetter(TranslationType.Eras, exports.TranslationWidth.Wide);
                break;
            case 'GGGGG':
                formatter = dateStrGetter(TranslationType.Eras, exports.TranslationWidth.Narrow);
                break;
            // 1 digit representation of the year, e.g. (AD 1 => 1, AD 199 => 199)
            case 'y':
                formatter = dateGetter(DateType.FullYear, 1, 0, false, true);
                break;
            // 2 digit representation of the year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
            case 'yy':
                formatter = dateGetter(DateType.FullYear, 2, 0, true, true);
                break;
            // 3 digit representation of the year, padded (000-999). (e.g. AD 2001 => 01, AD 2010 => 10)
            case 'yyy':
                formatter = dateGetter(DateType.FullYear, 3, 0, false, true);
                break;
            // 4 digit representation of the year (e.g. AD 1 => 0001, AD 2010 => 2010)
            case 'yyyy':
                formatter = dateGetter(DateType.FullYear, 4, 0, false, true);
                break;
            // Month of the year (1-12), numeric
            case 'M':
            case 'L':
                formatter = dateGetter(DateType.Month, 1, 1);
                break;
            case 'MM':
            case 'LL':
                formatter = dateGetter(DateType.Month, 2, 1);
                break;
            // Month of the year (January, ...), string, format
            case 'MMM':
                formatter = dateStrGetter(TranslationType.Months, exports.TranslationWidth.Abbreviated);
                break;
            case 'MMMM':
                formatter = dateStrGetter(TranslationType.Months, exports.TranslationWidth.Wide);
                break;
            case 'MMMMM':
                formatter = dateStrGetter(TranslationType.Months, exports.TranslationWidth.Narrow);
                break;
            // Month of the year (January, ...), string, standalone
            case 'LLL':
                formatter =
                    dateStrGetter(TranslationType.Months, exports.TranslationWidth.Abbreviated, exports.FormStyle.Standalone);
                break;
            case 'LLLL':
                formatter =
                    dateStrGetter(TranslationType.Months, exports.TranslationWidth.Wide, exports.FormStyle.Standalone);
                break;
            case 'LLLLL':
                formatter =
                    dateStrGetter(TranslationType.Months, exports.TranslationWidth.Narrow, exports.FormStyle.Standalone);
                break;
            // Week of the year (1, ... 52)
            case 'w':
                formatter = weekGetter(1);
                break;
            case 'ww':
                formatter = weekGetter(2);
                break;
            // Week of the month (1, ...)
            case 'W':
                formatter = weekGetter(1, true);
                break;
            // Day of the month (1-31)
            case 'd':
                formatter = dateGetter(DateType.Date, 1);
                break;
            case 'dd':
                formatter = dateGetter(DateType.Date, 2);
                break;
            // Day of the Week
            case 'E':
            case 'EE':
            case 'EEE':
                formatter = dateStrGetter(TranslationType.Days, exports.TranslationWidth.Abbreviated);
                break;
            case 'EEEE':
                formatter = dateStrGetter(TranslationType.Days, exports.TranslationWidth.Wide);
                break;
            case 'EEEEE':
                formatter = dateStrGetter(TranslationType.Days, exports.TranslationWidth.Narrow);
                break;
            case 'EEEEEE':
                formatter = dateStrGetter(TranslationType.Days, exports.TranslationWidth.Short);
                break;
            // Generic period of the day (am-pm)
            case 'a':
            case 'aa':
            case 'aaa':
                formatter = dateStrGetter(TranslationType.DayPeriods, exports.TranslationWidth.Abbreviated);
                break;
            case 'aaaa':
                formatter = dateStrGetter(TranslationType.DayPeriods, exports.TranslationWidth.Wide);
                break;
            case 'aaaaa':
                formatter = dateStrGetter(TranslationType.DayPeriods, exports.TranslationWidth.Narrow);
                break;
            // Extended period of the day (midnight, at night, ...), standalone
            case 'b':
            case 'bb':
            case 'bbb':
                formatter = dateStrGetter(TranslationType.DayPeriods, exports.TranslationWidth.Abbreviated, exports.FormStyle.Standalone, true);
                break;
            case 'bbbb':
                formatter = dateStrGetter(TranslationType.DayPeriods, exports.TranslationWidth.Wide, exports.FormStyle.Standalone, true);
                break;
            case 'bbbbb':
                formatter = dateStrGetter(TranslationType.DayPeriods, exports.TranslationWidth.Narrow, exports.FormStyle.Standalone, true);
                break;
            // Extended period of the day (midnight, night, ...), standalone
            case 'B':
            case 'BB':
            case 'BBB':
                formatter = dateStrGetter(TranslationType.DayPeriods, exports.TranslationWidth.Abbreviated, exports.FormStyle.Format, true);
                break;
            case 'BBBB':
                formatter =
                    dateStrGetter(TranslationType.DayPeriods, exports.TranslationWidth.Wide, exports.FormStyle.Format, true);
                break;
            case 'BBBBB':
                formatter = dateStrGetter(TranslationType.DayPeriods, exports.TranslationWidth.Narrow, exports.FormStyle.Format, true);
                break;
            // Hour in AM/PM, (1-12)
            case 'h':
                formatter = dateGetter(DateType.Hours, 1, -12);
                break;
            case 'hh':
                formatter = dateGetter(DateType.Hours, 2, -12);
                break;
            // Hour of the day (0-23)
            case 'H':
                formatter = dateGetter(DateType.Hours, 1);
                break;
            // Hour in day, padded (00-23)
            case 'HH':
                formatter = dateGetter(DateType.Hours, 2);
                break;
            // Minute of the hour (0-59)
            case 'm':
                formatter = dateGetter(DateType.Minutes, 1);
                break;
            case 'mm':
                formatter = dateGetter(DateType.Minutes, 2);
                break;
            // Second of the minute (0-59)
            case 's':
                formatter = dateGetter(DateType.Seconds, 1);
                break;
            case 'ss':
                formatter = dateGetter(DateType.Seconds, 2);
                break;
            // Fractional second
            case 'S':
                formatter = dateGetter(DateType.FractionalSeconds, 1);
                break;
            case 'SS':
                formatter = dateGetter(DateType.FractionalSeconds, 2);
                break;
            case 'SSS':
                formatter = dateGetter(DateType.FractionalSeconds, 3);
                break;
            // Timezone ISO8601 short format (-0430)
            case 'Z':
            case 'ZZ':
            case 'ZZZ':
                formatter = timeZoneGetter(ZoneWidth.Short);
                break;
            // Timezone ISO8601 extended format (-04:30)
            case 'ZZZZZ':
                formatter = timeZoneGetter(ZoneWidth.Extended);
                break;
            // Timezone GMT short format (GMT+4)
            case 'O':
            case 'OO':
            case 'OOO':
            // Should be location, but fallback to format O instead because we don't have the data yet
            case 'z':
            case 'zz':
            case 'zzz':
                formatter = timeZoneGetter(ZoneWidth.ShortGMT);
                break;
            // Timezone GMT long format (GMT+0430)
            case 'OOOO':
            case 'ZZZZ':
            // Should be location, but fallback to format O instead because we don't have the data yet
            case 'zzzz':
                formatter = timeZoneGetter(ZoneWidth.Long);
                break;
            default:
                return null;
        }
        DATE_FORMATS[format] = formatter;
        return formatter;
    }
    function timezoneToOffset(timezone, fallback) {
        // Support: IE 9-11 only, Edge 13-15+
        // IE/Edge do not "understand" colon (`:`) in timezone
        timezone = timezone.replace(/:/g, '');
        var requestedTimezoneOffset = Date.parse('Jan 01, 1970 00:00:00 ' + timezone) / 60000;
        return isNaN(requestedTimezoneOffset) ? fallback : requestedTimezoneOffset;
    }
    function addDateMinutes(date, minutes) {
        date = new Date(date.getTime());
        date.setMinutes(date.getMinutes() + minutes);
        return date;
    }
    function convertTimezoneToLocal(date, timezone, reverse) {
        var reverseValue = reverse ? -1 : 1;
        var dateTimezoneOffset = date.getTimezoneOffset();
        var timezoneOffset = timezoneToOffset(timezone, dateTimezoneOffset);
        return addDateMinutes(date, reverseValue * (timezoneOffset - dateTimezoneOffset));
    }
    /**
     * Converts a value to date.
     *
     * Supported input formats:
     * - `Date`
     * - number: timestamp
     * - string: numeric (e.g. "1234"), ISO and date strings in a format supported by
     *   [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
     *   Note: ISO strings without time return a date without timeoffset.
     *
     * Throws if unable to convert to a date.
     */
    function toDate(value) {
        if (isDate(value)) {
            return value;
        }
        if (typeof value === 'number' && !isNaN(value)) {
            return new Date(value);
        }
        if (typeof value === 'string') {
            value = value.trim();
            var parsedNb = parseFloat(value);
            // any string that only contains numbers, like "1234" but not like "1234hello"
            if (!isNaN(value - parsedNb)) {
                return new Date(parsedNb);
            }
            if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
                /* For ISO Strings without time the day, month and year must be extracted from the ISO String
                before Date creation to avoid time offset and errors in the new Date.
                If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
                date, some browsers (e.g. IE 9) will throw an invalid Date error.
                If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the timeoffset
                is applied.
                Note: ISO months are 0 for January, 1 for February, ... */
                var _a = __read(value.split('-').map(function (val) { return +val; }), 3), y = _a[0], m = _a[1], d = _a[2];
                return new Date(y, m - 1, d);
            }
            var match = void 0;
            if (match = value.match(ISO8601_DATE_REGEX)) {
                return isoStringToDate(match);
            }
        }
        var date = new Date(value);
        if (!isDate(date)) {
            throw new Error("Unable to convert \"" + value + "\" into a date");
        }
        return date;
    }
    /**
     * Converts a date in ISO8601 to a Date.
     * Used instead of `Date.parse` because of browser discrepancies.
     */
    function isoStringToDate(match) {
        var date = new Date(0);
        var tzHour = 0;
        var tzMin = 0;
        // match[8] means that the string contains "Z" (UTC) or a timezone like "+01:00" or "+0100"
        var dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear;
        var timeSetter = match[8] ? date.setUTCHours : date.setHours;
        // if there is a timezone defined like "+01:00" or "+0100"
        if (match[9]) {
            tzHour = Number(match[9] + match[10]);
            tzMin = Number(match[9] + match[11]);
        }
        dateSetter.call(date, Number(match[1]), Number(match[2]) - 1, Number(match[3]));
        var h = Number(match[4] || 0) - tzHour;
        var m = Number(match[5] || 0) - tzMin;
        var s = Number(match[6] || 0);
        var ms = Math.round(parseFloat('0.' + (match[7] || 0)) * 1000);
        timeSetter.call(date, h, m, s, ms);
        return date;
    }
    function isDate(value) {
        return value instanceof Date && !isNaN(value.valueOf());
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
    var MAX_DIGITS = 22;
    var DECIMAL_SEP = '.';
    var ZERO_CHAR = '0';
    var PATTERN_SEP = ';';
    var GROUP_SEP = ',';
    var DIGIT_CHAR = '#';
    var CURRENCY_CHAR = '¤';
    var PERCENT_CHAR = '%';
    /**
     * Transforms a number to a locale string based on a style and a format
     */
    function formatNumberToLocaleString(value, pattern, locale, groupSymbol, decimalSymbol, digitsInfo, isPercent) {
        if (isPercent === void 0) { isPercent = false; }
        var formattedText = '';
        var isZero = false;
        if (!isFinite(value)) {
            formattedText = getLocaleNumberSymbol(locale, exports.NumberSymbol.Infinity);
        }
        else {
            var parsedNumber = parseNumber(value);
            if (isPercent) {
                parsedNumber = toPercent(parsedNumber);
            }
            var minInt = pattern.minInt;
            var minFraction = pattern.minFrac;
            var maxFraction = pattern.maxFrac;
            if (digitsInfo) {
                var parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);
                if (parts === null) {
                    throw new Error(digitsInfo + " is not a valid digit info");
                }
                var minIntPart = parts[1];
                var minFractionPart = parts[3];
                var maxFractionPart = parts[5];
                if (minIntPart != null) {
                    minInt = parseIntAutoRadix(minIntPart);
                }
                if (minFractionPart != null) {
                    minFraction = parseIntAutoRadix(minFractionPart);
                }
                if (maxFractionPart != null) {
                    maxFraction = parseIntAutoRadix(maxFractionPart);
                }
                else if (minFractionPart != null && minFraction > maxFraction) {
                    maxFraction = minFraction;
                }
            }
            roundNumber(parsedNumber, minFraction, maxFraction);
            var digits = parsedNumber.digits;
            var integerLen = parsedNumber.integerLen;
            var exponent = parsedNumber.exponent;
            var decimals = [];
            isZero = digits.every(function (d) { return !d; });
            // pad zeros for small numbers
            for (; integerLen < minInt; integerLen++) {
                digits.unshift(0);
            }
            // pad zeros for small numbers
            for (; integerLen < 0; integerLen++) {
                digits.unshift(0);
            }
            // extract decimals digits
            if (integerLen > 0) {
                decimals = digits.splice(integerLen, digits.length);
            }
            else {
                decimals = digits;
                digits = [0];
            }
            // format the integer digits with grouping separators
            var groups = [];
            if (digits.length >= pattern.lgSize) {
                groups.unshift(digits.splice(-pattern.lgSize, digits.length).join(''));
            }
            while (digits.length > pattern.gSize) {
                groups.unshift(digits.splice(-pattern.gSize, digits.length).join(''));
            }
            if (digits.length) {
                groups.unshift(digits.join(''));
            }
            formattedText = groups.join(getLocaleNumberSymbol(locale, groupSymbol));
            // append the decimal digits
            if (decimals.length) {
                formattedText += getLocaleNumberSymbol(locale, decimalSymbol) + decimals.join('');
            }
            if (exponent) {
                formattedText += getLocaleNumberSymbol(locale, exports.NumberSymbol.Exponential) + '+' + exponent;
            }
        }
        if (value < 0 && !isZero) {
            formattedText = pattern.negPre + formattedText + pattern.negSuf;
        }
        else {
            formattedText = pattern.posPre + formattedText + pattern.posSuf;
        }
        return formattedText;
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as currency using locale rules.
     *
     * Use `currency` to format a number as currency.
     *
     * Where:
     * - `value` is a number.
     * - `locale` is a `string` defining the locale to use.
     * - `currency` is the string that represents the currency, it can be its symbol or its name.
     * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
     *    as `USD` for the US dollar and `EUR` for the euro.
     * - `digitInfo` See {@link DecimalPipe} for more details.
     *
     * @publicApi
     */
    function formatCurrency(value, locale, currency, currencyCode, digitsInfo) {
        var format = getLocaleNumberFormat(locale, exports.NumberFormatStyle.Currency);
        var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, exports.NumberSymbol.MinusSign));
        pattern.minFrac = getNumberOfCurrencyDigits(currencyCode);
        pattern.maxFrac = pattern.minFrac;
        var res = formatNumberToLocaleString(value, pattern, locale, exports.NumberSymbol.CurrencyGroup, exports.NumberSymbol.CurrencyDecimal, digitsInfo);
        return res
            .replace(CURRENCY_CHAR, currency)
            // if we have 2 time the currency character, the second one is ignored
            .replace(CURRENCY_CHAR, '');
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as a percentage according to locale rules.
     *
     * Where:
     * - `value` is a number.
     * - `locale` is a `string` defining the locale to use.
     * - `digitInfo` See {@link DecimalPipe} for more details.
     *
     * @publicApi
     */
    function formatPercent(value, locale, digitsInfo) {
        var format = getLocaleNumberFormat(locale, exports.NumberFormatStyle.Percent);
        var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, exports.NumberSymbol.MinusSign));
        var res = formatNumberToLocaleString(value, pattern, locale, exports.NumberSymbol.Group, exports.NumberSymbol.Decimal, digitsInfo, true);
        return res.replace(new RegExp(PERCENT_CHAR, 'g'), getLocaleNumberSymbol(locale, exports.NumberSymbol.PercentSign));
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as text. Group sizing and separator and other locale-specific
     * configurations are based on the locale.
     *
     * Where:
     * - `value` is a number.
     * - `locale` is a `string` defining the locale to use.
     * - `digitInfo` See {@link DecimalPipe} for more details.
     *
     * @publicApi
     */
    function formatNumber(value, locale, digitsInfo) {
        var format = getLocaleNumberFormat(locale, exports.NumberFormatStyle.Decimal);
        var pattern = parseNumberFormat(format, getLocaleNumberSymbol(locale, exports.NumberSymbol.MinusSign));
        return formatNumberToLocaleString(value, pattern, locale, exports.NumberSymbol.Group, exports.NumberSymbol.Decimal, digitsInfo);
    }
    function parseNumberFormat(format, minusSign) {
        if (minusSign === void 0) { minusSign = '-'; }
        var p = {
            minInt: 1,
            minFrac: 0,
            maxFrac: 0,
            posPre: '',
            posSuf: '',
            negPre: '',
            negSuf: '',
            gSize: 0,
            lgSize: 0
        };
        var patternParts = format.split(PATTERN_SEP);
        var positive = patternParts[0];
        var negative = patternParts[1];
        var positiveParts = positive.indexOf(DECIMAL_SEP) !== -1 ?
            positive.split(DECIMAL_SEP) :
            [
                positive.substring(0, positive.lastIndexOf(ZERO_CHAR) + 1),
                positive.substring(positive.lastIndexOf(ZERO_CHAR) + 1)
            ], integer = positiveParts[0], fraction = positiveParts[1] || '';
        p.posPre = integer.substr(0, integer.indexOf(DIGIT_CHAR));
        for (var i = 0; i < fraction.length; i++) {
            var ch = fraction.charAt(i);
            if (ch === ZERO_CHAR) {
                p.minFrac = p.maxFrac = i + 1;
            }
            else if (ch === DIGIT_CHAR) {
                p.maxFrac = i + 1;
            }
            else {
                p.posSuf += ch;
            }
        }
        var groups = integer.split(GROUP_SEP);
        p.gSize = groups[1] ? groups[1].length : 0;
        p.lgSize = (groups[2] || groups[1]) ? (groups[2] || groups[1]).length : 0;
        if (negative) {
            var trunkLen = positive.length - p.posPre.length - p.posSuf.length, pos = negative.indexOf(DIGIT_CHAR);
            p.negPre = negative.substr(0, pos).replace(/'/g, '');
            p.negSuf = negative.substr(pos + trunkLen).replace(/'/g, '');
        }
        else {
            p.negPre = minusSign + p.posPre;
            p.negSuf = p.posSuf;
        }
        return p;
    }
    // Transforms a parsed number into a percentage by multiplying it by 100
    function toPercent(parsedNumber) {
        // if the number is 0, don't do anything
        if (parsedNumber.digits[0] === 0) {
            return parsedNumber;
        }
        // Getting the current number of decimals
        var fractionLen = parsedNumber.digits.length - parsedNumber.integerLen;
        if (parsedNumber.exponent) {
            parsedNumber.exponent += 2;
        }
        else {
            if (fractionLen === 0) {
                parsedNumber.digits.push(0, 0);
            }
            else if (fractionLen === 1) {
                parsedNumber.digits.push(0);
            }
            parsedNumber.integerLen += 2;
        }
        return parsedNumber;
    }
    /**
     * Parses a number.
     * Significant bits of this parse algorithm came from https://github.com/MikeMcl/big.js/
     */
    function parseNumber(num) {
        var numStr = Math.abs(num) + '';
        var exponent = 0, digits, integerLen;
        var i, j, zeros;
        // Decimal point?
        if ((integerLen = numStr.indexOf(DECIMAL_SEP)) > -1) {
            numStr = numStr.replace(DECIMAL_SEP, '');
        }
        // Exponential form?
        if ((i = numStr.search(/e/i)) > 0) {
            // Work out the exponent.
            if (integerLen < 0)
                integerLen = i;
            integerLen += +numStr.slice(i + 1);
            numStr = numStr.substring(0, i);
        }
        else if (integerLen < 0) {
            // There was no decimal point or exponent so it is an integer.
            integerLen = numStr.length;
        }
        // Count the number of leading zeros.
        for (i = 0; numStr.charAt(i) === ZERO_CHAR; i++) { /* empty */
        }
        if (i === (zeros = numStr.length)) {
            // The digits are all zero.
            digits = [0];
            integerLen = 1;
        }
        else {
            // Count the number of trailing zeros
            zeros--;
            while (numStr.charAt(zeros) === ZERO_CHAR)
                zeros--;
            // Trailing zeros are insignificant so ignore them
            integerLen -= i;
            digits = [];
            // Convert string to array of digits without leading/trailing zeros.
            for (j = 0; i <= zeros; i++, j++) {
                digits[j] = Number(numStr.charAt(i));
            }
        }
        // If the number overflows the maximum allowed digits then use an exponent.
        if (integerLen > MAX_DIGITS) {
            digits = digits.splice(0, MAX_DIGITS - 1);
            exponent = integerLen - 1;
            integerLen = 1;
        }
        return { digits: digits, exponent: exponent, integerLen: integerLen };
    }
    /**
     * Round the parsed number to the specified number of decimal places
     * This function changes the parsedNumber in-place
     */
    function roundNumber(parsedNumber, minFrac, maxFrac) {
        if (minFrac > maxFrac) {
            throw new Error("The minimum number of digits after fraction (" + minFrac + ") is higher than the maximum (" + maxFrac + ").");
        }
        var digits = parsedNumber.digits;
        var fractionLen = digits.length - parsedNumber.integerLen;
        var fractionSize = Math.min(Math.max(minFrac, fractionLen), maxFrac);
        // The index of the digit to where rounding is to occur
        var roundAt = fractionSize + parsedNumber.integerLen;
        var digit = digits[roundAt];
        if (roundAt > 0) {
            // Drop fractional digits beyond `roundAt`
            digits.splice(Math.max(parsedNumber.integerLen, roundAt));
            // Set non-fractional digits beyond `roundAt` to 0
            for (var j = roundAt; j < digits.length; j++) {
                digits[j] = 0;
            }
        }
        else {
            // We rounded to zero so reset the parsedNumber
            fractionLen = Math.max(0, fractionLen);
            parsedNumber.integerLen = 1;
            digits.length = Math.max(1, roundAt = fractionSize + 1);
            digits[0] = 0;
            for (var i = 1; i < roundAt; i++)
                digits[i] = 0;
        }
        if (digit >= 5) {
            if (roundAt - 1 < 0) {
                for (var k = 0; k > roundAt; k--) {
                    digits.unshift(0);
                    parsedNumber.integerLen++;
                }
                digits.unshift(1);
                parsedNumber.integerLen++;
            }
            else {
                digits[roundAt - 1]++;
            }
        }
        // Pad out with zeros to get the required fraction length
        for (; fractionLen < Math.max(0, fractionSize); fractionLen++)
            digits.push(0);
        var dropTrailingZeros = fractionSize !== 0;
        // Minimal length = nb of decimals required + current nb of integers
        // Any number besides that is optional and can be removed if it's a trailing 0
        var minLen = minFrac + parsedNumber.integerLen;
        // Do any carrying, e.g. a digit was rounded up to 10
        var carry = digits.reduceRight(function (carry, d, i, digits) {
            d = d + carry;
            digits[i] = d < 10 ? d : d - 10; // d % 10
            if (dropTrailingZeros) {
                // Do not keep meaningless fractional trailing zeros (e.g. 15.52000 --> 15.52)
                if (digits[i] === 0 && i >= minLen) {
                    digits.pop();
                }
                else {
                    dropTrailingZeros = false;
                }
            }
            return d >= 10 ? 1 : 0; // Math.floor(d / 10);
        }, 0);
        if (carry) {
            digits.unshift(carry);
            parsedNumber.integerLen++;
        }
    }
    function parseIntAutoRadix(text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    }

    /**
     * @deprecated from v5
     */
    var DEPRECATED_PLURAL_FN = new i0.InjectionToken('UseV4Plurals');
    /**
     * @publicApi
     */
    var NgLocalization = /** @class */ (function () {
        function NgLocalization() {
        }
        return NgLocalization;
    }());
    /**
     * Returns the plural category for a given value.
     * - "=value" when the case exists,
     * - the plural category otherwise
     */
    function getPluralCategory(value, cases, ngLocalization, locale) {
        var key = "=" + value;
        if (cases.indexOf(key) > -1) {
            return key;
        }
        key = ngLocalization.getPluralCategory(value, locale);
        if (cases.indexOf(key) > -1) {
            return key;
        }
        if (cases.indexOf('other') > -1) {
            return 'other';
        }
        throw new Error("No plural message found for value \"" + value + "\"");
    }
    /**
     * Returns the plural case based on the locale
     *
     * @publicApi
     */
    var NgLocaleLocalization = /** @class */ (function (_super) {
        __extends(NgLocaleLocalization, _super);
        function NgLocaleLocalization(locale, 
        /** @deprecated from v5 */
        deprecatedPluralFn) {
            var _this = _super.call(this) || this;
            _this.locale = locale;
            _this.deprecatedPluralFn = deprecatedPluralFn;
            return _this;
        }
        NgLocaleLocalization.prototype.getPluralCategory = function (value, locale) {
            var plural = this.deprecatedPluralFn ? this.deprecatedPluralFn(locale || this.locale, value) :
                getLocalePluralCase(locale || this.locale)(value);
            switch (plural) {
                case exports.Plural.Zero:
                    return 'zero';
                case exports.Plural.One:
                    return 'one';
                case exports.Plural.Two:
                    return 'two';
                case exports.Plural.Few:
                    return 'few';
                case exports.Plural.Many:
                    return 'many';
                default:
                    return 'other';
            }
        };
        NgLocaleLocalization.ngInjectableDef = i0.defineInjectable({ token: NgLocaleLocalization, factory: function NgLocaleLocalization_Factory(t) { return new (t || NgLocaleLocalization)(i0.inject(i0.LOCALE_ID), i0.inject(DEPRECATED_PLURAL_FN, 8)); }, providedIn: null });
        return NgLocaleLocalization;
    }(NgLocalization));
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgLocaleLocalization, [{
            type: i0.Injectable
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Inject,
                    args: [i0.LOCALE_ID]
                }]
        }, {
            type: undefined,
            decorators: [{
                    type: i0.Optional
                }, {
                    type: i0.Inject,
                    args: [DEPRECATED_PLURAL_FN]
                }]
        }]; }, null);
    /**
     * Returns the plural case based on the locale
     *
     * @deprecated from v5 the plural case function is in locale data files common/locales/*.ts
     * @publicApi
     */
    function getPluralCase(locale, nLike) {
        // TODO(vicb): lazy compute
        if (typeof nLike === 'string') {
            nLike = parseInt(nLike, 10);
        }
        var n = nLike;
        var nDecimal = n.toString().replace(/^[^.]*\.?/, '');
        var i = Math.floor(Math.abs(n));
        var v = nDecimal.length;
        var f = parseInt(nDecimal, 10);
        var t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ''), 10) || 0;
        var lang = locale.split('-')[0].toLowerCase();
        switch (lang) {
            case 'af':
            case 'asa':
            case 'az':
            case 'bem':
            case 'bez':
            case 'bg':
            case 'brx':
            case 'ce':
            case 'cgg':
            case 'chr':
            case 'ckb':
            case 'ee':
            case 'el':
            case 'eo':
            case 'es':
            case 'eu':
            case 'fo':
            case 'fur':
            case 'gsw':
            case 'ha':
            case 'haw':
            case 'hu':
            case 'jgo':
            case 'jmc':
            case 'ka':
            case 'kk':
            case 'kkj':
            case 'kl':
            case 'ks':
            case 'ksb':
            case 'ky':
            case 'lb':
            case 'lg':
            case 'mas':
            case 'mgo':
            case 'ml':
            case 'mn':
            case 'nb':
            case 'nd':
            case 'ne':
            case 'nn':
            case 'nnh':
            case 'nyn':
            case 'om':
            case 'or':
            case 'os':
            case 'ps':
            case 'rm':
            case 'rof':
            case 'rwk':
            case 'saq':
            case 'seh':
            case 'sn':
            case 'so':
            case 'sq':
            case 'ta':
            case 'te':
            case 'teo':
            case 'tk':
            case 'tr':
            case 'ug':
            case 'uz':
            case 'vo':
            case 'vun':
            case 'wae':
            case 'xog':
                if (n === 1)
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'ak':
            case 'ln':
            case 'mg':
            case 'pa':
            case 'ti':
                if (n === Math.floor(n) && n >= 0 && n <= 1)
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'am':
            case 'as':
            case 'bn':
            case 'fa':
            case 'gu':
            case 'hi':
            case 'kn':
            case 'mr':
            case 'zu':
                if (i === 0 || n === 1)
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'ar':
                if (n === 0)
                    return exports.Plural.Zero;
                if (n === 1)
                    return exports.Plural.One;
                if (n === 2)
                    return exports.Plural.Two;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
                    return exports.Plural.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'ast':
            case 'ca':
            case 'de':
            case 'en':
            case 'et':
            case 'fi':
            case 'fy':
            case 'gl':
            case 'it':
            case 'nl':
            case 'sv':
            case 'sw':
            case 'ur':
            case 'yi':
                if (i === 1 && v === 0)
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'be':
                if (n % 10 === 1 && !(n % 100 === 11))
                    return exports.Plural.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
                    !(n % 100 >= 12 && n % 100 <= 14))
                    return exports.Plural.Few;
                if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
                    n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'br':
                if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
                    return exports.Plural.One;
                if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
                    return exports.Plural.Two;
                if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
                    !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
                        n % 100 >= 90 && n % 100 <= 99))
                    return exports.Plural.Few;
                if (!(n === 0) && n % 1e6 === 0)
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'bs':
            case 'hr':
            case 'sr':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
                    return exports.Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14) ||
                    f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
                        !(f % 100 >= 12 && f % 100 <= 14))
                    return exports.Plural.Few;
                return exports.Plural.Other;
            case 'cs':
            case 'sk':
                if (i === 1 && v === 0)
                    return exports.Plural.One;
                if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0)
                    return exports.Plural.Few;
                if (!(v === 0))
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'cy':
                if (n === 0)
                    return exports.Plural.Zero;
                if (n === 1)
                    return exports.Plural.One;
                if (n === 2)
                    return exports.Plural.Two;
                if (n === 3)
                    return exports.Plural.Few;
                if (n === 6)
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'da':
                if (n === 1 || !(t === 0) && (i === 0 || i === 1))
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'dsb':
            case 'hsb':
                if (v === 0 && i % 100 === 1 || f % 100 === 1)
                    return exports.Plural.One;
                if (v === 0 && i % 100 === 2 || f % 100 === 2)
                    return exports.Plural.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
                    f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
                    return exports.Plural.Few;
                return exports.Plural.Other;
            case 'ff':
            case 'fr':
            case 'hy':
            case 'kab':
                if (i === 0 || i === 1)
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'fil':
                if (v === 0 && (i === 1 || i === 2 || i === 3) ||
                    v === 0 && !(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) ||
                    !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9))
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'ga':
                if (n === 1)
                    return exports.Plural.One;
                if (n === 2)
                    return exports.Plural.Two;
                if (n === Math.floor(n) && n >= 3 && n <= 6)
                    return exports.Plural.Few;
                if (n === Math.floor(n) && n >= 7 && n <= 10)
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'gd':
                if (n === 1 || n === 11)
                    return exports.Plural.One;
                if (n === 2 || n === 12)
                    return exports.Plural.Two;
                if (n === Math.floor(n) && (n >= 3 && n <= 10 || n >= 13 && n <= 19))
                    return exports.Plural.Few;
                return exports.Plural.Other;
            case 'gv':
                if (v === 0 && i % 10 === 1)
                    return exports.Plural.One;
                if (v === 0 && i % 10 === 2)
                    return exports.Plural.Two;
                if (v === 0 &&
                    (i % 100 === 0 || i % 100 === 20 || i % 100 === 40 || i % 100 === 60 || i % 100 === 80))
                    return exports.Plural.Few;
                if (!(v === 0))
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'he':
                if (i === 1 && v === 0)
                    return exports.Plural.One;
                if (i === 2 && v === 0)
                    return exports.Plural.Two;
                if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'is':
                if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0))
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'ksh':
                if (n === 0)
                    return exports.Plural.Zero;
                if (n === 1)
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'kw':
            case 'naq':
            case 'se':
            case 'smn':
                if (n === 1)
                    return exports.Plural.One;
                if (n === 2)
                    return exports.Plural.Two;
                return exports.Plural.Other;
            case 'lag':
                if (n === 0)
                    return exports.Plural.Zero;
                if ((i === 0 || i === 1) && !(n === 0))
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'lt':
                if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19))
                    return exports.Plural.One;
                if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 &&
                    !(n % 100 >= 11 && n % 100 <= 19))
                    return exports.Plural.Few;
                if (!(f === 0))
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'lv':
            case 'prg':
                if (n % 10 === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19 ||
                    v === 2 && f % 100 === Math.floor(f % 100) && f % 100 >= 11 && f % 100 <= 19)
                    return exports.Plural.Zero;
                if (n % 10 === 1 && !(n % 100 === 11) || v === 2 && f % 10 === 1 && !(f % 100 === 11) ||
                    !(v === 2) && f % 10 === 1)
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'mk':
                if (v === 0 && i % 10 === 1 || f % 10 === 1)
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'mt':
                if (n === 1)
                    return exports.Plural.One;
                if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
                    return exports.Plural.Few;
                if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'pl':
                if (i === 1 && v === 0)
                    return exports.Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14))
                    return exports.Plural.Few;
                if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'pt':
                if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2))
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'ro':
                if (i === 1 && v === 0)
                    return exports.Plural.One;
                if (!(v === 0) || n === 0 ||
                    !(n === 1) && n % 100 === Math.floor(n % 100) && n % 100 >= 1 && n % 100 <= 19)
                    return exports.Plural.Few;
                return exports.Plural.Other;
            case 'ru':
            case 'uk':
                if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
                    return exports.Plural.One;
                if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                    !(i % 100 >= 12 && i % 100 <= 14))
                    return exports.Plural.Few;
                if (v === 0 && i % 10 === 0 ||
                    v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
                    v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
                    return exports.Plural.Many;
                return exports.Plural.Other;
            case 'shi':
                if (i === 0 || n === 1)
                    return exports.Plural.One;
                if (n === Math.floor(n) && n >= 2 && n <= 10)
                    return exports.Plural.Few;
                return exports.Plural.Other;
            case 'si':
                if (n === 0 || n === 1 || i === 0 && f === 1)
                    return exports.Plural.One;
                return exports.Plural.Other;
            case 'sl':
                if (v === 0 && i % 100 === 1)
                    return exports.Plural.One;
                if (v === 0 && i % 100 === 2)
                    return exports.Plural.Two;
                if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 || !(v === 0))
                    return exports.Plural.Few;
                return exports.Plural.Other;
            case 'tzm':
                if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99)
                    return exports.Plural.One;
                return exports.Plural.Other;
            // When there is no specification, the default is always "other"
            // Spec: http://cldr.unicode.org/index/cldr-spec/plural-rules
            // > other (required—general plural form — also used if the language only has a single form)
            default:
                return exports.Plural.Other;
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function parseCookieValue(cookieStr, name) {
        var e_1, _a;
        name = encodeURIComponent(name);
        try {
            for (var _b = __values(cookieStr.split(';')), _c = _b.next(); !_c.done; _c = _b.next()) {
                var cookie = _c.value;
                var eqIndex = cookie.indexOf('=');
                var _d = __read(eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)], 2), cookieName = _d[0], cookieValue = _d[1];
                if (cookieName.trim() === name) {
                    return decodeURIComponent(cookieValue);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @usageNotes
     * ```
     *     <some-element [ngClass]="'first second'">...</some-element>
     *
     *     <some-element [ngClass]="['first', 'second']">...</some-element>
     *
     *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
     *
     *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
     *
     *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
     * ```
     *
     * @description
     *
     * Adds and removes CSS classes on an HTML element.
     *
     * The CSS classes are updated as follows, depending on the type of the expression evaluation:
     * - `string` - the CSS classes listed in the string (space delimited) are added,
     * - `Array` - the CSS classes declared as Array elements are added,
     * - `Object` - keys are CSS classes that get added when the expression given in the value
     *              evaluates to a truthy value, otherwise they are removed.
     *
     * @publicApi
     */
    var NgClass = /** @class */ (function () {
        function NgClass(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
            this._iterableDiffers = _iterableDiffers;
            this._keyValueDiffers = _keyValueDiffers;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
            this._initialClasses = [];
        }
        Object.defineProperty(NgClass.prototype, "klass", {
            set: function (value) {
                this._removeClasses(this._initialClasses);
                this._initialClasses = typeof value === 'string' ? value.split(/\s+/) : [];
                this._applyClasses(this._initialClasses);
                this._applyClasses(this._rawClass);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgClass.prototype, "ngClass", {
            set: function (value) {
                this._removeClasses(this._rawClass);
                this._applyClasses(this._initialClasses);
                this._iterableDiffer = null;
                this._keyValueDiffer = null;
                this._rawClass = typeof value === 'string' ? value.split(/\s+/) : value;
                if (this._rawClass) {
                    if (i0.ɵisListLikeIterable(this._rawClass)) {
                        this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
                    }
                    else {
                        this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        NgClass.prototype.ngDoCheck = function () {
            if (this._iterableDiffer) {
                var iterableChanges = this._iterableDiffer.diff(this._rawClass);
                if (iterableChanges) {
                    this._applyIterableChanges(iterableChanges);
                }
            }
            else if (this._keyValueDiffer) {
                var keyValueChanges = this._keyValueDiffer.diff(this._rawClass);
                if (keyValueChanges) {
                    this._applyKeyValueChanges(keyValueChanges);
                }
            }
        };
        NgClass.prototype._applyKeyValueChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
            changes.forEachRemovedItem(function (record) {
                if (record.previousValue) {
                    _this._toggleClass(record.key, false);
                }
            });
        };
        NgClass.prototype._applyIterableChanges = function (changes) {
            var _this = this;
            changes.forEachAddedItem(function (record) {
                if (typeof record.item === 'string') {
                    _this._toggleClass(record.item, true);
                }
                else {
                    throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + i0.ɵstringify(record.item));
                }
            });
            changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
        };
        /**
         * Applies a collection of CSS classes to the DOM element.
         *
         * For argument of type Set and Array CSS class names contained in those collections are always
         * added.
         * For argument of type Map CSS class name in the map's key is toggled based on the value (added
         * for truthy and removed for falsy).
         */
        NgClass.prototype._applyClasses = function (rawClassVal) {
            var _this = this;
            if (rawClassVal) {
                if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                    rawClassVal.forEach(function (klass) { return _this._toggleClass(klass, true); });
                }
                else {
                    Object.keys(rawClassVal).forEach(function (klass) { return _this._toggleClass(klass, !!rawClassVal[klass]); });
                }
            }
        };
        /**
         * Removes a collection of CSS classes from the DOM element. This is mostly useful for cleanup
         * purposes.
         */
        NgClass.prototype._removeClasses = function (rawClassVal) {
            var _this = this;
            if (rawClassVal) {
                if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                    rawClassVal.forEach(function (klass) { return _this._toggleClass(klass, false); });
                }
                else {
                    Object.keys(rawClassVal).forEach(function (klass) { return _this._toggleClass(klass, false); });
                }
            }
        };
        NgClass.prototype._toggleClass = function (klass, enabled) {
            var _this = this;
            klass = klass.trim();
            if (klass) {
                klass.split(/\s+/g).forEach(function (klass) {
                    if (enabled) {
                        _this._renderer.addClass(_this._ngEl.nativeElement, klass);
                    }
                    else {
                        _this._renderer.removeClass(_this._ngEl.nativeElement, klass);
                    }
                });
            }
        };
        NgClass.ngDirectiveDef = i0.ɵdefineDirective({ type: NgClass, selectors: [["", "ngClass", ""]], factory: function NgClass_Factory(t) { return new (t || NgClass)(i0.ɵdirectiveInject(i0.IterableDiffers), i0.ɵdirectiveInject(i0.KeyValueDiffers), i0.ɵdirectiveInject(i0.ElementRef), i0.ɵdirectiveInject(i0.Renderer2)); }, inputs: { klass: ["class", "klass"], ngClass: "ngClass" } });
        return NgClass;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgClass, [{
            type: i0.Directive,
            args: [{ selector: '[ngClass]' }]
        }], function () { return [{
            type: i0.IterableDiffers
        }, {
            type: i0.KeyValueDiffers
        }, {
            type: i0.ElementRef
        }, {
            type: i0.Renderer2
        }]; }, { klass: [{
                type: i0.Input,
                args: ['class']
            }], ngClass: [{
                type: i0.Input
            }] });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Instantiates a single {@link Component} type and inserts its Host View into current View.
     * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
     *
     * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
     * any existing component will get destroyed.
     *
     * @usageNotes
     *
     * ### Fine tune control
     *
     * You can control the component creation process by using the following optional attributes:
     *
     * * `ngComponentOutletInjector`: Optional custom {@link Injector} that will be used as parent for
     * the Component. Defaults to the injector of the current view container.
     *
     * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
     * section of the component, if exists.
     *
     * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
     * module, then load a component from that module.
     *
     * ### Syntax
     *
     * Simple
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
     * ```
     *
     * Customized injector/content
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   injector: injectorExpression;
     *                                   content: contentNodesExpression;">
     * </ng-container>
     * ```
     *
     * Customized ngModuleFactory
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   ngModuleFactory: moduleFactory;">
     * </ng-container>
     * ```
     *
     * ### A simple example
     *
     * {@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
     *
     * A more complete example with additional options:
     *
     * {@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}

     * A more complete example with ngModuleFactory:
     *
     * {@example common/ngComponentOutlet/ts/module.ts region='NgModuleFactoryExample'}
     *
     * @publicApi
     * @ngModule CommonModule
     */
    var NgComponentOutlet = /** @class */ (function () {
        function NgComponentOutlet(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
            this._componentRef = null;
            this._moduleRef = null;
        }
        NgComponentOutlet.prototype.ngOnChanges = function (changes) {
            this._viewContainerRef.clear();
            this._componentRef = null;
            if (this.ngComponentOutlet) {
                var elInjector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
                if (changes['ngComponentOutletNgModuleFactory']) {
                    if (this._moduleRef)
                        this._moduleRef.destroy();
                    if (this.ngComponentOutletNgModuleFactory) {
                        var parentModule = elInjector.get(i0.NgModuleRef);
                        this._moduleRef = this.ngComponentOutletNgModuleFactory.create(parentModule.injector);
                    }
                    else {
                        this._moduleRef = null;
                    }
                }
                var componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver :
                    elInjector.get(i0.ComponentFactoryResolver);
                var componentFactory = componentFactoryResolver.resolveComponentFactory(this.ngComponentOutlet);
                this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, this.ngComponentOutletContent);
            }
        };
        NgComponentOutlet.prototype.ngOnDestroy = function () {
            if (this._moduleRef)
                this._moduleRef.destroy();
        };
        NgComponentOutlet.ngDirectiveDef = i0.ɵdefineDirective({ type: NgComponentOutlet, selectors: [["", "ngComponentOutlet", ""]], factory: function NgComponentOutlet_Factory(t) { return new (t || NgComponentOutlet)(i0.ɵdirectiveInject(i0.ViewContainerRef)); }, inputs: { ngComponentOutlet: "ngComponentOutlet", ngComponentOutletInjector: "ngComponentOutletInjector", ngComponentOutletContent: "ngComponentOutletContent", ngComponentOutletNgModuleFactory: "ngComponentOutletNgModuleFactory" }, features: [i0.ɵNgOnChangesFeature()] });
        return NgComponentOutlet;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgComponentOutlet, [{
            type: i0.Directive,
            args: [{ selector: '[ngComponentOutlet]' }]
        }], function () { return [{
            type: i0.ViewContainerRef
        }]; }, { ngComponentOutlet: [{
                type: i0.Input
            }], ngComponentOutletInjector: [{
                type: i0.Input
            }], ngComponentOutletContent: [{
                type: i0.Input
            }], ngComponentOutletNgModuleFactory: [{
                type: i0.Input
            }] });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var NgForOfContext = /** @class */ (function () {
        function NgForOfContext($implicit, ngForOf, index, count) {
            this.$implicit = $implicit;
            this.ngForOf = ngForOf;
            this.index = index;
            this.count = count;
        }
        Object.defineProperty(NgForOfContext.prototype, "first", {
            get: function () { return this.index === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "last", {
            get: function () { return this.index === this.count - 1; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "even", {
            get: function () { return this.index % 2 === 0; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOfContext.prototype, "odd", {
            get: function () { return !this.even; },
            enumerable: true,
            configurable: true
        });
        return NgForOfContext;
    }());
    /**
     * A [structural directive](guide/structural-directives) that renders
     * a template for each item in a collection.
     * The directive is placed on an element, which becomes the parent
     * of the cloned templates.
     *
     * The `ngForOf` directive is generally used in the
     * [shorthand form](guide/structural-directives#the-asterisk--prefix) `*ngFor`.
     * In this form, the template to be rendered for each iteration is the content
     * of an anchor element containing the directive.
     *
     * The following example shows the shorthand syntax with some options,
     * contained in an `<li>` element.
     *
     * ```
     * <li *ngFor="let item of items; index as i; trackBy: trackByFn">...</li>
     * ```
     *
     * The shorthand form expands into a long form that uses the `ngForOf` selector
     * on an `<ng-template>` element.
     * The content of the `<ng-template>` element is the `<li>` element that held the
     * short-form directive.
     *
     * Here is the expanded version of the short-form example.
     *
     * ```
     * <ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByFn">
     *   <li>...</li>
     * </ng-template>
     * ```
     *
     * Angular automatically expands the shorthand syntax as it compiles the template.
     * The context for each embedded view is logically merged to the current component
     * context according to its lexical position.
     *
     * When using the shorthand syntax, Angular allows only [one structural directive
     * on an element](guide/structural-directives#one-structural-directive-per-host-element).
     * If you want to iterate conditionally, for example,
     * put the `*ngIf` on a container element that wraps the `*ngFor` element.
     * For futher discussion, see
     * [Structural Directives](guide/structural-directives#one-per-element).
     *
     * @usageNotes
     *
     * ### Local variables
     *
     * `NgForOf` provides exported values that can be aliased to local variables.
     * For example:
     *
     *  ```
     * <li *ngFor="let user of userObservable | async as users; index as i; first as isFirst">
     *    {{i}}/{{users.length}}. {{user}} <span *ngIf="isFirst">default</span>
     * </li>
     * ```
     *
     * The following exported values can be aliased to local variables:
     *
     * - `$implicit: T`: The value of the individual items in the iterable (`ngForOf`).
     * - `ngForOf: NgIterable<T>`: The value of the iterable expression. Useful when the expression is
     * more complex then a property access, for example when using the async pipe (`userStreams |
     * async`).
     * - `index: number`: The index of the current item in the iterable.
     * - `first: boolean`: True when the item is the first item in the iterable.
     * - `last: boolean`: True when the item is the last item in the iterable.
     * - `even: boolean`: True when the item has an even index in the iterable.
     * - `odd: boolean`: True when the item has an odd index in the iterable.
     *
     * ### Change propagation
     *
     * When the contents of the iterator changes, `NgForOf` makes the corresponding changes to the DOM:
     *
     * * When an item is added, a new instance of the template is added to the DOM.
     * * When an item is removed, its template instance is removed from the DOM.
     * * When items are reordered, their respective templates are reordered in the DOM.
     *
     * Angular uses object identity to track insertions and deletions within the iterator and reproduce
     * those changes in the DOM. This has important implications for animations and any stateful
     * controls that are present, such as `<input>` elements that accept user input. Inserted rows can
     * be animated in, deleted rows can be animated out, and unchanged rows retain any unsaved state
     * such as user input.
     * For more on animations, see [Transitions and Triggers](guide/transition-and-triggers).
     *
     * The identities of elements in the iterator can change while the data does not.
     * This can happen, for example, if the iterator is produced from an RPC to the server, and that
     * RPC is re-run. Even if the data hasn't changed, the second response produces objects with
     * different identities, and Angular must tear down the entire DOM and rebuild it (as if all old
     * elements were deleted and all new elements inserted).
     *
     * To avoid this expensive operation, you can customize the default tracking algorithm.
     * by supplying the `trackBy` option to `NgForOf`.
     * `trackBy` takes a function that has two arguments: `index` and `item`.
     * If `trackBy` is given, Angular tracks changes by the return value of the function.
     *
     * @see [Structural Directives](guide/structural-directives)
     * @ngModule CommonModule
     * @publicApi
     */
    var NgForOf = /** @class */ (function () {
        function NgForOf(_viewContainer, _template, _differs) {
            this._viewContainer = _viewContainer;
            this._template = _template;
            this._differs = _differs;
            this._ngForOfDirty = true;
            this._differ = null;
        }
        Object.defineProperty(NgForOf.prototype, "ngForOf", {
            /**
             * The value of the iterable expression, which can be used as a
             * [template input variable](guide/structural-directives#template-input-variable).
             */
            set: function (ngForOf) {
                this._ngForOf = ngForOf;
                this._ngForOfDirty = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOf.prototype, "ngForTrackBy", {
            get: function () { return this._trackByFn; },
            /**
             * A function that defines how to track changes for items in the iterable.
             *
             * When items are added, moved, or removed in the iterable,
             * the directive must re-render the appropriate DOM nodes.
             * To minimize churn in the DOM, only nodes that have changed
             * are re-rendered.
             *
             * By default, the change detector assumes that
             * the object instance identifies the node in the iterable.
             * When this function is supplied, the directive uses
             * the result of calling this function to identify the item node,
             * rather than the identity of the object itself.
             *
             * The function receives two inputs,
             * the iteration index and the node object ID.
             */
            set: function (fn) {
                if (i0.isDevMode() && fn != null && typeof fn !== 'function') {
                    // TODO(vicb): use a log service once there is a public one available
                    if (console && console.warn) {
                        console.warn("trackBy must be a function, but received " + JSON.stringify(fn) + ". " +
                            "See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.");
                    }
                }
                this._trackByFn = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgForOf.prototype, "ngForTemplate", {
            /**
             * A reference to the template that is stamped out for each item in the iterable.
             * @see [template reference variable](guide/template-syntax#template-reference-variables--var-)
             */
            set: function (value) {
                // TODO(TS2.1): make TemplateRef<Partial<NgForRowOf<T>>> once we move to TS v2.1
                // The current type is too restrictive; a template that just uses index, for example,
                // should be acceptable.
                if (value) {
                    this._template = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Applies the changes when needed.
         */
        NgForOf.prototype.ngDoCheck = function () {
            if (this._ngForOfDirty) {
                this._ngForOfDirty = false;
                // React on ngForOf changes only once all inputs have been initialized
                var value = this._ngForOf;
                if (!this._differ && value) {
                    try {
                        this._differ = this._differs.find(value).create(this.ngForTrackBy);
                    }
                    catch (_a) {
                        throw new Error("Cannot find a differ supporting object '" + value + "' of type '" + getTypeName(value) + "'. NgFor only supports binding to Iterables such as Arrays.");
                    }
                }
            }
            if (this._differ) {
                var changes = this._differ.diff(this._ngForOf);
                if (changes)
                    this._applyChanges(changes);
            }
        };
        NgForOf.prototype._applyChanges = function (changes) {
            var _this = this;
            var insertTuples = [];
            changes.forEachOperation(function (item, adjustedPreviousIndex, currentIndex) {
                if (item.previousIndex == null) {
                    var view = _this._viewContainer.createEmbeddedView(_this._template, new NgForOfContext(null, _this._ngForOf, -1, -1), currentIndex);
                    var tuple = new RecordViewTuple(item, view);
                    insertTuples.push(tuple);
                }
                else if (currentIndex == null) {
                    _this._viewContainer.remove(adjustedPreviousIndex);
                }
                else {
                    var view = _this._viewContainer.get(adjustedPreviousIndex);
                    _this._viewContainer.move(view, currentIndex);
                    var tuple = new RecordViewTuple(item, view);
                    insertTuples.push(tuple);
                }
            });
            for (var i = 0; i < insertTuples.length; i++) {
                this._perViewChange(insertTuples[i].view, insertTuples[i].record);
            }
            for (var i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
                var viewRef = this._viewContainer.get(i);
                viewRef.context.index = i;
                viewRef.context.count = ilen;
                viewRef.context.ngForOf = this._ngForOf;
            }
            changes.forEachIdentityChange(function (record) {
                var viewRef = _this._viewContainer.get(record.currentIndex);
                viewRef.context.$implicit = record.item;
            });
        };
        NgForOf.prototype._perViewChange = function (view, record) {
            view.context.$implicit = record.item;
        };
        /**
         * Asserts the correct type of the context for the template that `NgForOf` will render.
         *
         * The presence of this method is a signal to the Ivy template type-check compiler that the
         * `NgForOf` structural directive renders its template with a specific context type.
         */
        NgForOf.ngTemplateContextGuard = function (dir, ctx) {
            return true;
        };
        NgForOf.ngDirectiveDef = i0.ɵdefineDirective({ type: NgForOf, selectors: [["", "ngFor", "", "ngForOf", ""]], factory: function NgForOf_Factory(t) { return new (t || NgForOf)(i0.ɵdirectiveInject(i0.ViewContainerRef), i0.ɵdirectiveInject(i0.TemplateRef), i0.ɵdirectiveInject(i0.IterableDiffers)); }, inputs: { ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate" } });
        return NgForOf;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgForOf, [{
            type: i0.Directive,
            args: [{ selector: '[ngFor][ngForOf]' }]
        }], function () { return [{
            type: i0.ViewContainerRef
        }, {
            type: i0.TemplateRef
        }, {
            type: i0.IterableDiffers
        }]; }, { ngForOf: [{
                type: i0.Input
            }], ngForTrackBy: [{
                type: i0.Input
            }], ngForTemplate: [{
                type: i0.Input
            }] });
    var RecordViewTuple = /** @class */ (function () {
        function RecordViewTuple(record, view) {
            this.record = record;
            this.view = view;
        }
        return RecordViewTuple;
    }());
    function getTypeName(type) {
        return type['name'] || typeof type;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A structural directive that conditionally includes a template based on the value of
     * an expression coerced to Boolean.
     * When the expression evaluates to true, Angular renders the template
     * provided in a `then` clause, and when  false or null,
     * Angular renders the template provided in an optional `else` clause. The default
     * template for the `else` clause is blank.
     *
     * A [shorthand form](guide/structural-directives#the-asterisk--prefix) of the directive,
     * `*ngIf="condition"`, is generally used, provided
     * as an attribute of the anchor element for the inserted template.
     * Angular expands this into a more explicit version, in which the anchor element
     * is contained in an `<ng-template>` element.
     *
     * Simple form with shorthand syntax:
     *
     * ```
     * <div *ngIf="condition">Content to render when condition is true.</div>
     * ```
     *
     * Simple form with expanded syntax:
     *
     * ```
     * <ng-template [ngIf]="condition"><div>Content to render when condition is
     * true.</div></ng-template>
     * ```
     *
     * Form with an "else" block:
     *
     * ```
     * <div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
     * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
     * ```
     *
     * Shorthand form with "then" and "else" blocks:
     *
     * ```
     * <div *ngIf="condition; then thenBlock else elseBlock"></div>
     * <ng-template #thenBlock>Content to render when condition is true.</ng-template>
     * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
     * ```
     *
     * Form with storing the value locally:
     *
     * ```
     * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
     * <ng-template #elseBlock>Content to render when value is null.</ng-template>
     * ```
     *
     * @usageNotes
     *
     * The `*ngIf` directive is most commonly used to conditionally show an inline template,
     * as seen in the following  example.
     * The default `else` template is blank.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfSimple'}
     *
     * ### Showing an alternative template using `else`
     *
     * To display a template when `expression` evaluates to false, use an `else` template
     * binding as shown in the following example.
     * The `else` binding points to an `<ng-template>`  element labeled `#elseBlock`.
     * The template can be defined anywhere in the component view, but is typically placed right after
     * `ngIf` for readability.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfElse'}
     *
     * ### Using an external `then` template
     *
     * In the previous example, the then-clause template is specified inline, as the content of the
     * tag that contains the `ngIf` directive. You can also specify a template that is defined
     * externally, by referencing a labeled `<ng-template>` element. When you do this, you can
     * change which template to use at runtime, as shown in the following example.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfThenElse'}
     *
     * ### Storing a conditional result in a variable
     *
     * You might want to show a set of properties from the same object. If you are waiting
     * for asynchronous data, the object can be undefined.
     * In this case, you can use `ngIf` and store the result of the condition in a local
     * variable as shown in the the following example.
     *
     * {@example common/ngIf/ts/module.ts region='NgIfAs'}
     *
     * This code uses only one `AsyncPipe`, so only one subscription is created.
     * The conditional statement stores the result of `userStream|async` in the local variable `user`.
     * You can then bind the local `user` repeatedly.
     *
     * The conditional displays the data only if `userStream` returns a value,
     * so you don't need to use the
     * [safe-navigation-operator](guide/template-syntax#safe-navigation-operator) (`?.`)
     * to guard against null values when accessing properties.
     * You can display an alternative template while waiting for the data.
     *
     * ### Shorthand syntax
     *
     * The shorthand syntax `*ngIf` expands into two separate template specifications
     * for the "then" and "else" clauses. For example, consider the following shorthand statement,
     * that is meant to show a loading page while waiting for data to be loaded.
     *
     * ```
     * <div class="hero-list" *ngIf="heroes else loading">
     *  ...
     * </div>
     *
     * <ng-template #loading>
     *  <div>Loading...</div>
     * </ng-template>
     * ```
     *
     * You can see that the "else" clause references the `<ng-template>`
     * with the `#loading` label, and the template for the "then" clause
     * is provided as the content of the anchor element.
     *
     * However, when Angular expands the shorthand syntax, it creates
     * another `<ng-template>` tag, with `ngIf` and `ngIfElse` directives.
     * The anchor element containing the template for the "then" clause becomes
     * the content of this unlabeled `<ng-template>` tag.
     *
     * ```
     * <ng-template [ngIf]="hero-list" [ngIfElse]="loading">
     *  <div class="hero-list">
     *   ...
     *  </div>
     * </ng-template>
     *
     * <ng-template #loading>
     *  <div>Loading...</div>
     * </ng-template>
     * ```
     *
     * The presence of the implicit template object has implications for the nesting of
     * structural directives. For more on this subject, see
     * [Structural Directives](https://angular.io/guide/structural-directives#one-per-element).
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var NgIf = /** @class */ (function () {
        function NgIf(_viewContainer, templateRef) {
            this._viewContainer = _viewContainer;
            this._context = new NgIfContext();
            this._thenTemplateRef = null;
            this._elseTemplateRef = null;
            this._thenViewRef = null;
            this._elseViewRef = null;
            this._thenTemplateRef = templateRef;
        }
        Object.defineProperty(NgIf.prototype, "ngIf", {
            /**
             * The Boolean expression to evaluate as the condition for showing a template.
             */
            set: function (condition) {
                this._context.$implicit = this._context.ngIf = condition;
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgIf.prototype, "ngIfThen", {
            /**
             * A template to show if the condition expression evaluates to true.
             */
            set: function (templateRef) {
                assertTemplate('ngIfThen', templateRef);
                this._thenTemplateRef = templateRef;
                this._thenViewRef = null; // clear previous view if any.
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgIf.prototype, "ngIfElse", {
            /**
             * A template to show if the condition expression evaluates to false.
             */
            set: function (templateRef) {
                assertTemplate('ngIfElse', templateRef);
                this._elseTemplateRef = templateRef;
                this._elseViewRef = null; // clear previous view if any.
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        NgIf.prototype._updateView = function () {
            if (this._context.$implicit) {
                if (!this._thenViewRef) {
                    this._viewContainer.clear();
                    this._elseViewRef = null;
                    if (this._thenTemplateRef) {
                        this._thenViewRef =
                            this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
                    }
                }
            }
            else {
                if (!this._elseViewRef) {
                    this._viewContainer.clear();
                    this._thenViewRef = null;
                    if (this._elseTemplateRef) {
                        this._elseViewRef =
                            this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
                    }
                }
            }
        };
        /**
         * Assert the correct type of the expression bound to the `ngIf` input within the template.
         *
         * The presence of this method is a signal to the Ivy template type check compiler that when the
         * `NgIf` structural directive renders its template, the type of the expression bound to `ngIf`
         * should be narrowed in some way. For `NgIf`, it is narrowed to be non-null, which allows the
         * strictNullChecks feature of TypeScript to work with `NgIf`.
         */
        NgIf.ngTemplateGuard_ngIf = function (dir, expr) { return true; };
        NgIf.ngDirectiveDef = i0.ɵdefineDirective({ type: NgIf, selectors: [["", "ngIf", ""]], factory: function NgIf_Factory(t) { return new (t || NgIf)(i0.ɵdirectiveInject(i0.ViewContainerRef), i0.ɵdirectiveInject(i0.TemplateRef)); }, inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" } });
        return NgIf;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgIf, [{
            type: i0.Directive,
            args: [{ selector: '[ngIf]' }]
        }], function () { return [{
            type: i0.ViewContainerRef
        }, {
            type: i0.TemplateRef
        }]; }, { ngIf: [{
                type: i0.Input
            }], ngIfThen: [{
                type: i0.Input
            }], ngIfElse: [{
                type: i0.Input
            }] });
    /**
     * @publicApi
     */
    var NgIfContext = /** @class */ (function () {
        function NgIfContext() {
            this.$implicit = null;
            this.ngIf = null;
        }
        return NgIfContext;
    }());
    function assertTemplate(property, templateRef) {
        var isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
        if (!isTemplateRefOrNull) {
            throw new Error(property + " must be a TemplateRef, but received '" + i0.ɵstringify(templateRef) + "'.");
        }
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var SwitchView = /** @class */ (function () {
        function SwitchView(_viewContainerRef, _templateRef) {
            this._viewContainerRef = _viewContainerRef;
            this._templateRef = _templateRef;
            this._created = false;
        }
        SwitchView.prototype.create = function () {
            this._created = true;
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        };
        SwitchView.prototype.destroy = function () {
            this._created = false;
            this._viewContainerRef.clear();
        };
        SwitchView.prototype.enforceState = function (created) {
            if (created && !this._created) {
                this.create();
            }
            else if (!created && this._created) {
                this.destroy();
            }
        };
        return SwitchView;
    }());
    /**
     * @ngModule CommonModule
     *
     * @description A structural directive that adds or removes templates (displaying or hiding views)
     * when the next match expression matches the switch expression.
     *
     * The `[ngSwitch]` directive on a container specifies an expression to match against.
     * The expressions to match are provided by `ngSwitchCase` directives on views within the container.
     * - Every view that matches is rendered.
     * - If there are no matches, a view with the `ngSwitchDefault` directive is rendered.
     * - Elements within the `[NgSwitch]` statement but outside of any `NgSwitchCase`
     * or `ngSwitchDefault` directive are preserved at the location.
     *
     * @usageNotes
     * Define a container element for the directive, and specify the switch expression
     * to match against as an attribute:
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     * ```
     *
     * Within the container, `*ngSwitchCase` statements specify the match expressions
     * as attributes. Include `*ngSwitchDefault` as the final case.
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *    <some-element *ngSwitchCase="match_expression_1">...</some-element>
     * ...
     *    <some-element *ngSwitchDefault>...</some-element>
     * </container-element>
     * ```
     *
     * ### Usage Examples
     *
     * The following example shows how to use more than one case to display the same view:
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <!-- the same view can be shown in more than one case -->
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *   <some-element *ngSwitchCase="match_expression_2">...</some-element>
     *   <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
     *   <!--default case when there are no matches -->
     *   <some-element *ngSwitchDefault>...</some-element>
     * </container-element>
     * ```
     *
     * The following example shows how cases can be nested:
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
     *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
     *       <ng-container *ngSwitchCase="match_expression_3">
     *         <!-- use a ng-container to group multiple root nodes -->
     *         <inner-element></inner-element>
     *         <inner-other-element></inner-other-element>
     *       </ng-container>
     *       <some-element *ngSwitchDefault>...</some-element>
     *     </container-element>
     * ```
     *
     * @publicApi
     * @see `NgSwitchCase`
     * @see `NgSwitchDefault`
     * @see [Stuctural Directives](guide/structural-directives)
     *
     */
    var NgSwitch = /** @class */ (function () {
        function NgSwitch() {
            this._defaultUsed = false;
            this._caseCount = 0;
            this._lastCaseCheckIndex = 0;
            this._lastCasesMatched = false;
        }
        Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
            set: function (newValue) {
                this._ngSwitch = newValue;
                if (this._caseCount === 0) {
                    this._updateDefaultCases(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @internal */
        NgSwitch.prototype._addCase = function () { return this._caseCount++; };
        /** @internal */
        NgSwitch.prototype._addDefault = function (view) {
            if (!this._defaultViews) {
                this._defaultViews = [];
            }
            this._defaultViews.push(view);
        };
        /** @internal */
        NgSwitch.prototype._matchCase = function (value) {
            var matched = value == this._ngSwitch;
            this._lastCasesMatched = this._lastCasesMatched || matched;
            this._lastCaseCheckIndex++;
            if (this._lastCaseCheckIndex === this._caseCount) {
                this._updateDefaultCases(!this._lastCasesMatched);
                this._lastCaseCheckIndex = 0;
                this._lastCasesMatched = false;
            }
            return matched;
        };
        NgSwitch.prototype._updateDefaultCases = function (useDefault) {
            if (this._defaultViews && useDefault !== this._defaultUsed) {
                this._defaultUsed = useDefault;
                for (var i = 0; i < this._defaultViews.length; i++) {
                    var defaultView = this._defaultViews[i];
                    defaultView.enforceState(useDefault);
                }
            }
        };
        NgSwitch.ngDirectiveDef = i0.ɵdefineDirective({ type: NgSwitch, selectors: [["", "ngSwitch", ""]], factory: function NgSwitch_Factory(t) { return new (t || NgSwitch)(); }, inputs: { ngSwitch: "ngSwitch" } });
        return NgSwitch;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgSwitch, [{
            type: i0.Directive,
            args: [{ selector: '[ngSwitch]' }]
        }], null, { ngSwitch: [{
                type: i0.Input
            }] });
    /**
     * @ngModule CommonModule
     *
     * @description
     * Provides a switch case expression to match against an enclosing `ngSwitch` expression.
     * When the expressions match, the given `NgSwitchCase` template is rendered.
     * If multiple match expressions match the switch expression value, all of them are displayed.
     *
     * @usageNotes
     *
     * Within a switch container, `*ngSwitchCase` statements specify the match expressions
     * as attributes. Include `*ngSwitchDefault` as the final case.
     *
     * ```
     * <container-element [ngSwitch]="switch_expression">
     *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
     *   ...
     *   <some-element *ngSwitchDefault>...</some-element>
     * </container-element>
     * ```
     *
     * Each switch-case statement contains an in-line HTML template or template reference
     * that defines the subtree to be selected if the value of the match expression
     * matches the value of the switch expression.
     *
     * Unlike JavaScript, which uses strict equality, Angular uses loose equality.
     * This means that the empty string, `""` matches 0.
     *
     * @publicApi
     * @see `NgSwitch`
     * @see `NgSwitchDefault`
     *
     */
    var NgSwitchCase = /** @class */ (function () {
        function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
            this.ngSwitch = ngSwitch;
            ngSwitch._addCase();
            this._view = new SwitchView(viewContainer, templateRef);
        }
        /**
         * Performs case matching. For internal use only.
         */
        NgSwitchCase.prototype.ngDoCheck = function () { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); };
        NgSwitchCase.ngDirectiveDef = i0.ɵdefineDirective({ type: NgSwitchCase, selectors: [["", "ngSwitchCase", ""]], factory: function NgSwitchCase_Factory(t) { return new (t || NgSwitchCase)(i0.ɵdirectiveInject(i0.ViewContainerRef), i0.ɵdirectiveInject(i0.TemplateRef), i0.ɵdirectiveInject(NgSwitch, 1)); }, inputs: { ngSwitchCase: "ngSwitchCase" } });
        return NgSwitchCase;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgSwitchCase, [{
            type: i0.Directive,
            args: [{ selector: '[ngSwitchCase]' }]
        }], function () { return [{
            type: i0.ViewContainerRef
        }, {
            type: i0.TemplateRef
        }, {
            type: NgSwitch,
            decorators: [{
                    type: i0.Host
                }]
        }]; }, { ngSwitchCase: [{
                type: i0.Input
            }] });
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Creates a view that is rendered when no `NgSwitchCase` expressions
     * match the `NgSwitch` expression.
     * This statement should be the final case in an `NgSwitch`.
     *
     * @publicApi
     * @see `NgSwitch`
     * @see `NgSwitchCase`
     *
     */
    var NgSwitchDefault = /** @class */ (function () {
        function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
            ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
        }
        NgSwitchDefault.ngDirectiveDef = i0.ɵdefineDirective({ type: NgSwitchDefault, selectors: [["", "ngSwitchDefault", ""]], factory: function NgSwitchDefault_Factory(t) { return new (t || NgSwitchDefault)(i0.ɵdirectiveInject(i0.ViewContainerRef), i0.ɵdirectiveInject(i0.TemplateRef), i0.ɵdirectiveInject(NgSwitch, 1)); } });
        return NgSwitchDefault;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgSwitchDefault, [{
            type: i0.Directive,
            args: [{ selector: '[ngSwitchDefault]' }]
        }], function () { return [{
            type: i0.ViewContainerRef
        }, {
            type: i0.TemplateRef
        }, {
            type: NgSwitch,
            decorators: [{
                    type: i0.Host
                }]
        }]; }, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     *
     * @usageNotes
     * ```
     * <some-element [ngPlural]="value">
     *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
     *   <ng-template ngPluralCase="=1">there is one</ng-template>
     *   <ng-template ngPluralCase="few">there are a few</ng-template>
     * </some-element>
     * ```
     *
     * @description
     *
     * Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
     *
     * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
     * that match the switch expression's pluralization category.
     *
     * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
     * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
     * expression:
     * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
     *   matches the switch expression exactly,
     * - otherwise, the view will be treated as a "category match", and will only display if exact
     *   value matches aren't found and the value maps to its category for the defined locale.
     *
     * See http://cldr.unicode.org/index/cldr-spec/plural-rules
     *
     * @publicApi
     */
    var NgPlural = /** @class */ (function () {
        function NgPlural(_localization) {
            this._localization = _localization;
            this._caseViews = {};
        }
        Object.defineProperty(NgPlural.prototype, "ngPlural", {
            set: function (value) {
                this._switchValue = value;
                this._updateView();
            },
            enumerable: true,
            configurable: true
        });
        NgPlural.prototype.addCase = function (value, switchView) { this._caseViews[value] = switchView; };
        NgPlural.prototype._updateView = function () {
            this._clearViews();
            var cases = Object.keys(this._caseViews);
            var key = getPluralCategory(this._switchValue, cases, this._localization);
            this._activateView(this._caseViews[key]);
        };
        NgPlural.prototype._clearViews = function () {
            if (this._activeView)
                this._activeView.destroy();
        };
        NgPlural.prototype._activateView = function (view) {
            if (view) {
                this._activeView = view;
                this._activeView.create();
            }
        };
        NgPlural.ngDirectiveDef = i0.ɵdefineDirective({ type: NgPlural, selectors: [["", "ngPlural", ""]], factory: function NgPlural_Factory(t) { return new (t || NgPlural)(i0.ɵdirectiveInject(NgLocalization)); }, inputs: { ngPlural: "ngPlural" } });
        return NgPlural;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgPlural, [{
            type: i0.Directive,
            args: [{ selector: '[ngPlural]' }]
        }], function () { return [{
            type: NgLocalization
        }]; }, { ngPlural: [{
                type: i0.Input
            }] });
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Creates a view that will be added/removed from the parent {@link NgPlural} when the
     * given expression matches the plural expression according to CLDR rules.
     *
     * @usageNotes
     * ```
     * <some-element [ngPlural]="value">
     *   <ng-template ngPluralCase="=0">...</ng-template>
     *   <ng-template ngPluralCase="other">...</ng-template>
     * </some-element>
     *```
     *
     * See {@link NgPlural} for more details and example.
     *
     * @publicApi
     */
    var NgPluralCase = /** @class */ (function () {
        function NgPluralCase(value, template, viewContainer, ngPlural) {
            this.value = value;
            var isANumber = !isNaN(Number(value));
            ngPlural.addCase(isANumber ? "=" + value : value, new SwitchView(viewContainer, template));
        }
        NgPluralCase.ngDirectiveDef = i0.ɵdefineDirective({ type: NgPluralCase, selectors: [["", "ngPluralCase", ""]], factory: function NgPluralCase_Factory(t) { return new (t || NgPluralCase)(i0.ɵinjectAttribute('ngPluralCase'), i0.ɵdirectiveInject(i0.TemplateRef), i0.ɵdirectiveInject(i0.ViewContainerRef), i0.ɵdirectiveInject(NgPlural, 1)); } });
        return NgPluralCase;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgPluralCase, [{
            type: i0.Directive,
            args: [{ selector: '[ngPluralCase]' }]
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Attribute,
                    args: ['ngPluralCase']
                }]
        }, {
            type: i0.TemplateRef
        }, {
            type: i0.ViewContainerRef
        }, {
            type: NgPlural,
            decorators: [{
                    type: i0.Host
                }]
        }]; }, null);

    /**
     * @ngModule CommonModule
     *
     * @usageNotes
     *
     * Set the font of the containing element to the result of an expression.
     *
     * ```
     * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
     * ```
     *
     * Set the width of the containing element to a pixel value returned by an expression.
     *
     * ```
     * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
     * ```
     *
     * Set a collection of style values using an expression that returns key-value pairs.
     *
     * ```
     * <some-element [ngStyle]="objExp">...</some-element>
     * ```
     *
     * @description
     *
     * An attribute directive that updates styles for the containing HTML element.
     * Sets one or more style properties, specified as colon-separated key-value pairs.
     * The key is a style name, with an optional `.<unit>` suffix
     * (such as 'top.px', 'font-style.em').
     * The value is an expression to be evaluated.
     * The resulting non-null value, expressed in the given unit,
     * is assigned to the given style property.
     * If the result of evaluation is null, the corresponding style is removed.
     *
     * @publicApi
     */
    var NgStyle = /** @class */ (function () {
        function NgStyle(_differs, _ngEl, _renderer) {
            this._differs = _differs;
            this._ngEl = _ngEl;
            this._renderer = _renderer;
        }
        Object.defineProperty(NgStyle.prototype, "ngStyle", {
            set: function (
            /**
             * A map of style properties, specified as colon-separated
             * key-value pairs.
             * * The key is a style name, with an optional `.<unit>` suffix
             *    (such as 'top.px', 'font-style.em').
             * * The value is an expression to be evaluated.
             */
            values) {
                this._ngStyle = values;
                if (!this._differ && values) {
                    this._differ = this._differs.find(values).create();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Applies the new styles if needed.
         */
        NgStyle.prototype.ngDoCheck = function () {
            if (this._differ) {
                var changes = this._differ.diff(this._ngStyle);
                if (changes) {
                    this._applyChanges(changes);
                }
            }
        };
        NgStyle.prototype._applyChanges = function (changes) {
            var _this = this;
            changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
            changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
            changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
        };
        NgStyle.prototype._setStyle = function (nameAndUnit, value) {
            var _a = __read(nameAndUnit.split('.'), 2), name = _a[0], unit = _a[1];
            value = value != null && unit ? "" + value + unit : value;
            if (value != null) {
                this._renderer.setStyle(this._ngEl.nativeElement, name, value);
            }
            else {
                this._renderer.removeStyle(this._ngEl.nativeElement, name);
            }
        };
        NgStyle.ngDirectiveDef = i0.ɵdefineDirective({ type: NgStyle, selectors: [["", "ngStyle", ""]], factory: function NgStyle_Factory(t) { return new (t || NgStyle)(i0.ɵdirectiveInject(i0.KeyValueDiffers), i0.ɵdirectiveInject(i0.ElementRef), i0.ɵdirectiveInject(i0.Renderer2)); }, inputs: { ngStyle: "ngStyle" } });
        return NgStyle;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgStyle, [{
            type: i0.Directive,
            args: [{ selector: '[ngStyle]' }]
        }], function () { return [{
            type: i0.KeyValueDiffers
        }, {
            type: i0.ElementRef
        }, {
            type: i0.Renderer2
        }]; }, { ngStyle: [{
                type: i0.Input
            }] });

    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Inserts an embedded view from a prepared `TemplateRef`.
     *
     * You can attach a context object to the `EmbeddedViewRef` by setting `[ngTemplateOutletContext]`.
     * `[ngTemplateOutletContext]` should be an object, the object's keys will be available for binding
     * by the local template `let` declarations.
     *
     * @usageNotes
     * ```
     * <ng-container *ngTemplateOutlet="templateRefExp; context: contextExp"></ng-container>
     * ```
     *
     * Using the key `$implicit` in the context object will set its value as default.
     *
     * ### Example
     *
     * {@example common/ngTemplateOutlet/ts/module.ts region='NgTemplateOutlet'}
     *
     * @publicApi
     */
    var NgTemplateOutlet = /** @class */ (function () {
        function NgTemplateOutlet(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
            this._viewRef = null;
            /**
             * A context object to attach to the {@link EmbeddedViewRef}. This should be an
             * object, the object's keys will be available for binding by the local template `let`
             * declarations.
             * Using the key `$implicit` in the context object will set its value as default.
             */
            this.ngTemplateOutletContext = null;
            /**
             * A string defining the template reference and optionally the context object for the template.
             */
            this.ngTemplateOutlet = null;
        }
        NgTemplateOutlet.prototype.ngOnChanges = function (changes) {
            var recreateView = this._shouldRecreateView(changes);
            if (recreateView) {
                if (this._viewRef) {
                    this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._viewRef));
                }
                if (this.ngTemplateOutlet) {
                    this._viewRef = this._viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext);
                }
            }
            else {
                if (this._viewRef && this.ngTemplateOutletContext) {
                    this._updateExistingContext(this.ngTemplateOutletContext);
                }
            }
        };
        /**
         * We need to re-create existing embedded view if:
         * - templateRef has changed
         * - context has changes
         *
         * We mark context object as changed when the corresponding object
         * shape changes (new properties are added or existing properties are removed).
         * In other words we consider context with the same properties as "the same" even
         * if object reference changes (see https://github.com/angular/angular/issues/13407).
         */
        NgTemplateOutlet.prototype._shouldRecreateView = function (changes) {
            var ctxChange = changes['ngTemplateOutletContext'];
            return !!changes['ngTemplateOutlet'] || (ctxChange && this._hasContextShapeChanged(ctxChange));
        };
        NgTemplateOutlet.prototype._hasContextShapeChanged = function (ctxChange) {
            var e_1, _a;
            var prevCtxKeys = Object.keys(ctxChange.previousValue || {});
            var currCtxKeys = Object.keys(ctxChange.currentValue || {});
            if (prevCtxKeys.length === currCtxKeys.length) {
                try {
                    for (var currCtxKeys_1 = __values(currCtxKeys), currCtxKeys_1_1 = currCtxKeys_1.next(); !currCtxKeys_1_1.done; currCtxKeys_1_1 = currCtxKeys_1.next()) {
                        var propName = currCtxKeys_1_1.value;
                        if (prevCtxKeys.indexOf(propName) === -1) {
                            return true;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (currCtxKeys_1_1 && !currCtxKeys_1_1.done && (_a = currCtxKeys_1.return)) _a.call(currCtxKeys_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return false;
            }
            else {
                return true;
            }
        };
        NgTemplateOutlet.prototype._updateExistingContext = function (ctx) {
            var e_2, _a;
            try {
                for (var _b = __values(Object.keys(ctx)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var propName = _c.value;
                    this._viewRef.context[propName] = this.ngTemplateOutletContext[propName];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        NgTemplateOutlet.ngDirectiveDef = i0.ɵdefineDirective({ type: NgTemplateOutlet, selectors: [["", "ngTemplateOutlet", ""]], factory: function NgTemplateOutlet_Factory(t) { return new (t || NgTemplateOutlet)(i0.ɵdirectiveInject(i0.ViewContainerRef)); }, inputs: { ngTemplateOutletContext: "ngTemplateOutletContext", ngTemplateOutlet: "ngTemplateOutlet" }, features: [i0.ɵNgOnChangesFeature()] });
        return NgTemplateOutlet;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(NgTemplateOutlet, [{
            type: i0.Directive,
            args: [{ selector: '[ngTemplateOutlet]' }]
        }], function () { return [{
            type: i0.ViewContainerRef
        }]; }, { ngTemplateOutletContext: [{
                type: i0.Input
            }], ngTemplateOutlet: [{
                type: i0.Input
            }] });

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of Angular directives that are likely to be used in each and every Angular
     * application.
     */
    var COMMON_DIRECTIVES = [
        NgClass,
        NgComponentOutlet,
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        NgStyle,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        NgPlural,
        NgPluralCase,
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function invalidPipeArgumentError(type, value) {
        return Error("InvalidPipeArgument: '" + value + "' for pipe '" + i0.ɵstringify(type) + "'");
    }

    var NumberFormatter = /** @class */ (function () {
        function NumberFormatter() {
        }
        NumberFormatter.format = function (num, locale, style, opts) {
            if (opts === void 0) { opts = {}; }
            var minimumIntegerDigits = opts.minimumIntegerDigits, minimumFractionDigits = opts.minimumFractionDigits, maximumFractionDigits = opts.maximumFractionDigits, currency = opts.currency, _a = opts.currencyAsSymbol, currencyAsSymbol = _a === void 0 ? false : _a;
            var options = {
                minimumIntegerDigits: minimumIntegerDigits,
                minimumFractionDigits: minimumFractionDigits,
                maximumFractionDigits: maximumFractionDigits,
                style: exports.NumberFormatStyle[style].toLowerCase()
            };
            if (style == exports.NumberFormatStyle.Currency) {
                options.currency = typeof currency == 'string' ? currency : undefined;
                options.currencyDisplay = currencyAsSymbol ? 'symbol' : 'code';
            }
            return new Intl.NumberFormat(locale, options).format(num);
        };
        return NumberFormatter;
    }());
    var DATE_FORMATS_SPLIT$1 = /((?:[^yMLdHhmsazZEwGjJ']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|J+|j+|m+|s+|a|z|Z|G+|w+))(.*)/;
    var PATTERN_ALIASES = {
        // Keys are quoted so they do not get renamed during closure compilation.
        'yMMMdjms': datePartGetterFactory(combine([
            digitCondition('year', 1),
            nameCondition('month', 3),
            digitCondition('day', 1),
            digitCondition('hour', 1),
            digitCondition('minute', 1),
            digitCondition('second', 1),
        ])),
        'yMdjm': datePartGetterFactory(combine([
            digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1),
            digitCondition('hour', 1), digitCondition('minute', 1)
        ])),
        'yMMMMEEEEd': datePartGetterFactory(combine([
            digitCondition('year', 1), nameCondition('month', 4), nameCondition('weekday', 4),
            digitCondition('day', 1)
        ])),
        'yMMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 4), digitCondition('day', 1)])),
        'yMMMd': datePartGetterFactory(combine([digitCondition('year', 1), nameCondition('month', 3), digitCondition('day', 1)])),
        'yMd': datePartGetterFactory(combine([digitCondition('year', 1), digitCondition('month', 1), digitCondition('day', 1)])),
        'jms': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('second', 1), digitCondition('minute', 1)])),
        'jm': datePartGetterFactory(combine([digitCondition('hour', 1), digitCondition('minute', 1)]))
    };
    var DATE_FORMATS$1 = {
        // Keys are quoted so they do not get renamed.
        'yyyy': datePartGetterFactory(digitCondition('year', 4)),
        'yy': datePartGetterFactory(digitCondition('year', 2)),
        'y': datePartGetterFactory(digitCondition('year', 1)),
        'MMMM': datePartGetterFactory(nameCondition('month', 4)),
        'MMM': datePartGetterFactory(nameCondition('month', 3)),
        'MM': datePartGetterFactory(digitCondition('month', 2)),
        'M': datePartGetterFactory(digitCondition('month', 1)),
        'LLLL': datePartGetterFactory(nameCondition('month', 4)),
        'L': datePartGetterFactory(nameCondition('month', 1)),
        'dd': datePartGetterFactory(digitCondition('day', 2)),
        'd': datePartGetterFactory(digitCondition('day', 1)),
        'HH': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), false)))),
        'H': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), false))),
        'hh': digitModifier(hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 2), true)))),
        'h': hourExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        'jj': datePartGetterFactory(digitCondition('hour', 2)),
        'j': datePartGetterFactory(digitCondition('hour', 1)),
        'mm': digitModifier(datePartGetterFactory(digitCondition('minute', 2))),
        'm': datePartGetterFactory(digitCondition('minute', 1)),
        'ss': digitModifier(datePartGetterFactory(digitCondition('second', 2))),
        's': datePartGetterFactory(digitCondition('second', 1)),
        // while ISO 8601 requires fractions to be prefixed with `.` or `,`
        // we can be just safely rely on using `sss` since we currently don't support single or two digit
        // fractions
        'sss': datePartGetterFactory(digitCondition('second', 3)),
        'EEEE': datePartGetterFactory(nameCondition('weekday', 4)),
        'EEE': datePartGetterFactory(nameCondition('weekday', 3)),
        'EE': datePartGetterFactory(nameCondition('weekday', 2)),
        'E': datePartGetterFactory(nameCondition('weekday', 1)),
        'a': hourClockExtractor(datePartGetterFactory(hour12Modify(digitCondition('hour', 1), true))),
        'Z': timeZoneGetter$1('short'),
        'z': timeZoneGetter$1('long'),
        'ww': datePartGetterFactory({}),
        // first Thursday of the year. not support ?
        'w': datePartGetterFactory({}),
        // of the year not support ?
        'G': datePartGetterFactory(nameCondition('era', 1)),
        'GG': datePartGetterFactory(nameCondition('era', 2)),
        'GGG': datePartGetterFactory(nameCondition('era', 3)),
        'GGGG': datePartGetterFactory(nameCondition('era', 4))
    };
    function digitModifier(inner) {
        return function (date, locale) {
            var result = inner(date, locale);
            return result.length == 1 ? '0' + result : result;
        };
    }
    function hourClockExtractor(inner) {
        return function (date, locale) { return inner(date, locale).split(' ')[1]; };
    }
    function hourExtractor(inner) {
        return function (date, locale) { return inner(date, locale).split(' ')[0]; };
    }
    function intlDateFormat(date, locale, options) {
        return new Intl.DateTimeFormat(locale, options).format(date).replace(/[\u200e\u200f]/g, '');
    }
    function timeZoneGetter$1(timezone) {
        // To workaround `Intl` API restriction for single timezone let format with 24 hours
        var options = { hour: '2-digit', hour12: false, timeZoneName: timezone };
        return function (date, locale) {
            var result = intlDateFormat(date, locale, options);
            // Then extract first 3 letters that related to hours
            return result ? result.substring(3) : '';
        };
    }
    function hour12Modify(options, value) {
        options.hour12 = value;
        return options;
    }
    function digitCondition(prop, len) {
        var result = {};
        result[prop] = len === 2 ? '2-digit' : 'numeric';
        return result;
    }
    function nameCondition(prop, len) {
        var result = {};
        if (len < 4) {
            result[prop] = len > 1 ? 'short' : 'narrow';
        }
        else {
            result[prop] = 'long';
        }
        return result;
    }
    function combine(options) {
        return options.reduce(function (merged, opt) { return (__assign({}, merged, opt)); }, {});
    }
    function datePartGetterFactory(ret) {
        return function (date, locale) { return intlDateFormat(date, locale, ret); };
    }
    var DATE_FORMATTER_CACHE = new Map();
    function dateFormatter(format, date, locale) {
        var fn = PATTERN_ALIASES[format];
        if (fn)
            return fn(date, locale);
        var cacheKey = format;
        var parts = DATE_FORMATTER_CACHE.get(cacheKey);
        if (!parts) {
            parts = [];
            var match = void 0;
            DATE_FORMATS_SPLIT$1.exec(format);
            var _format = format;
            while (_format) {
                match = DATE_FORMATS_SPLIT$1.exec(_format);
                if (match) {
                    parts = parts.concat(match.slice(1));
                    _format = parts.pop();
                }
                else {
                    parts.push(_format);
                    _format = null;
                }
            }
            DATE_FORMATTER_CACHE.set(cacheKey, parts);
        }
        return parts.reduce(function (text, part) {
            var fn = DATE_FORMATS$1[part];
            return text + (fn ? fn(date, locale) : partToTime(part));
        }, '');
    }
    function partToTime(part) {
        return part === '\'\'' ? '\'' : part.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
    }
    var DateFormatter = /** @class */ (function () {
        function DateFormatter() {
        }
        DateFormatter.format = function (date, locale, pattern) {
            return dateFormatter(pattern, date, locale);
        };
        return DateFormatter;
    }());

    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a date according to locale rules.
     *
     * Where:
     * - `expression` is a date object or a number (milliseconds since UTC epoch) or an ISO string
     * (https://www.w3.org/TR/NOTE-datetime).
     * - `format` indicates which date/time components to include. The format can be predefined as
     *   shown below or custom as shown in the table.
     *   - `'medium'`: equivalent to `'yMMMdjms'` (e.g. `Sep 3, 2010, 12:05:08 PM` for `en-US`)
     *   - `'short'`: equivalent to `'yMdjm'` (e.g. `9/3/2010, 12:05 PM` for `en-US`)
     *   - `'fullDate'`: equivalent to `'yMMMMEEEEd'` (e.g. `Friday, September 3, 2010` for `en-US`)
     *   - `'longDate'`: equivalent to `'yMMMMd'` (e.g. `September 3, 2010` for `en-US`)
     *   - `'mediumDate'`: equivalent to `'yMMMd'` (e.g. `Sep 3, 2010` for `en-US`)
     *   - `'shortDate'`: equivalent to `'yMd'` (e.g. `9/3/2010` for `en-US`)
     *   - `'mediumTime'`: equivalent to `'jms'` (e.g. `12:05:08 PM` for `en-US`)
     *   - `'shortTime'`: equivalent to `'jm'` (e.g. `12:05 PM` for `en-US`)
     *
     *
     *  | Component | Symbol | Narrow | Short Form   | Long Form         | Numeric   | 2-digit   |
     *  |-----------|:------:|--------|--------------|-------------------|-----------|-----------|
     *  | era       |   G    | G (A)  | GGG (AD)     | GGGG (Anno Domini)| -         | -         |
     *  | year      |   y    | -      | -            | -                 | y (2015)  | yy (15)   |
     *  | month     |   M    | L (S)  | MMM (Sep)    | MMMM (September)  | M (9)     | MM (09)   |
     *  | day       |   d    | -      | -            | -                 | d (3)     | dd (03)   |
     *  | weekday   |   E    | E (S)  | EEE (Sun)    | EEEE (Sunday)     | -         | -         |
     *  | hour      |   j    | -      | -            | -                 | j (13)    | jj (13)   |
     *  | hour12    |   h    | -      | -            | -                 | h (1 PM)  | hh (01 PM)|
     *  | hour24    |   H    | -      | -            | -                 | H (13)    | HH (13)   |
     *  | minute    |   m    | -      | -            | -                 | m (5)     | mm (05)   |
     *  | second    |   s    | -      | -            | -                 | s (9)     | ss (09)   |
     *  | timezone  |   z    | -      | -            | z (Pacific Standard Time)| -  | -         |
     *  | timezone  |   Z    | -      | Z (GMT-8:00) | -                 | -         | -         |
     *  | timezone  |   a    | -      | a (PM)       | -                 | -         | -         |
     *
     * In javascript, only the components specified will be respected (not the ordering,
     * punctuations, ...) and details of the formatting will be dependent on the locale.
     *
     * Timezone of the formatted text will be the local system timezone of the end-user's machine.
     *
     * When the expression is a ISO string without time (e.g. 2016-09-19) the time zone offset is not
     * applied and the formatted text will have the same day, month and year of the expression.
     *
     * WARNINGS:
     * - this pipe is marked as pure hence it will not be re-evaluated when the input is mutated.
     *   Instead users should treat the date as an immutable object and change the reference when the
     *   pipe needs to re-run (this is to avoid reformatting the date on every change detection run
     *   which would be an expensive operation).
     * - this pipe uses the Internationalization API. Therefore it is only reliable in Chrome and Opera
     *   browsers.
     *
     * @usageNotes
     *
     * ### Examples
     *
     * Assuming `dateObj` is (year: 2010, month: 9, day: 3, hour: 12 PM, minute: 05, second: 08)
     * in the _local_ time and locale is 'en-US':
     *
     * {@example common/pipes/ts/date_pipe.ts region='DeprecatedDatePipe'}
     *
     * @publicApi
     */
    var DeprecatedDatePipe = /** @class */ (function () {
        function DeprecatedDatePipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedDatePipe.prototype.transform = function (value, pattern) {
            if (pattern === void 0) { pattern = 'mediumDate'; }
            if (value == null || value === '' || value !== value)
                return null;
            var date;
            if (typeof value === 'string') {
                value = value.trim();
            }
            if (isDate$1(value)) {
                date = value;
            }
            else if (!isNaN(value - parseFloat(value))) {
                date = new Date(parseFloat(value));
            }
            else if (typeof value === 'string' && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(value)) {
                /**
                 * For ISO Strings without time the day, month and year must be extracted from the ISO String
                 * before Date creation to avoid time offset and errors in the new Date.
                 * If we only replace '-' with ',' in the ISO String ("2015,01,01"), and try to create a new
                 * date, some browsers (e.g. IE 9) will throw an invalid Date error
                 * If we leave the '-' ("2015-01-01") and try to create a new Date("2015-01-01") the
                 * timeoffset
                 * is applied
                 * Note: ISO months are 0 for January, 1 for February, ...
                 */
                var _a = __read(value.split('-').map(function (val) { return parseInt(val, 10); }), 3), y = _a[0], m = _a[1], d = _a[2];
                date = new Date(y, m - 1, d);
            }
            else {
                date = new Date(value);
            }
            if (!isDate$1(date)) {
                var match = void 0;
                if ((typeof value === 'string') && (match = value.match(ISO8601_DATE_REGEX))) {
                    date = isoStringToDate(match);
                }
                else {
                    throw invalidPipeArgumentError(DeprecatedDatePipe, value);
                }
            }
            return DateFormatter.format(date, this._locale, DeprecatedDatePipe._ALIASES[pattern] || pattern);
        };
        /** @internal */
        DeprecatedDatePipe._ALIASES = {
            'medium': 'yMMMdjms',
            'short': 'yMdjm',
            'fullDate': 'yMMMMEEEEd',
            'longDate': 'yMMMMd',
            'mediumDate': 'yMMMd',
            'shortDate': 'yMd',
            'mediumTime': 'jms',
            'shortTime': 'jm'
        };
        DeprecatedDatePipe.ngPipeDef = i0.ɵdefinePipe({ name: "date", type: DeprecatedDatePipe, factory: function DeprecatedDatePipe_Factory(t) { return new (t || DeprecatedDatePipe)(i0.ɵdirectiveInject(i0.LOCALE_ID)); }, pure: true });
        return DeprecatedDatePipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(DeprecatedDatePipe, [{
            type: i0.Pipe,
            args: [{ name: 'date', pure: true }]
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Inject,
                    args: [i0.LOCALE_ID]
                }]
        }]; }, null);
    function isDate$1(value) {
        return value instanceof Date && !isNaN(value.valueOf());
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function formatNumber$1(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
        if (currency === void 0) { currency = null; }
        if (currencyAsSymbol === void 0) { currencyAsSymbol = false; }
        if (value == null)
            return null;
        // Convert strings to numbers
        value = typeof value === 'string' && !isNaN(+value - parseFloat(value)) ? +value : value;
        if (typeof value !== 'number') {
            throw invalidPipeArgumentError(pipe, value);
        }
        var minInt;
        var minFraction;
        var maxFraction;
        if (style !== exports.NumberFormatStyle.Currency) {
            // rely on Intl default for currency
            minInt = 1;
            minFraction = 0;
            maxFraction = 3;
        }
        if (digits) {
            var parts = digits.match(NUMBER_FORMAT_REGEXP);
            if (parts === null) {
                throw new Error(digits + " is not a valid digit info for number pipes");
            }
            if (parts[1] != null) { // min integer digits
                minInt = parseIntAutoRadix(parts[1]);
            }
            if (parts[3] != null) { // min fraction digits
                minFraction = parseIntAutoRadix(parts[3]);
            }
            if (parts[5] != null) { // max fraction digits
                maxFraction = parseIntAutoRadix(parts[5]);
            }
        }
        return NumberFormatter.format(value, locale, style, {
            minimumIntegerDigits: minInt,
            minimumFractionDigits: minFraction,
            maximumFractionDigits: maxFraction,
            currency: currency,
            currencyAsSymbol: currencyAsSymbol,
        });
    }
    /**
     * Formats a number as text. Group sizing and separator and other locale-specific
     * configurations are based on the active locale.
     *
     * where `expression` is a number:
     *  - `digitInfo` is a `string` which has a following format: <br>
     *     <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>
     *   - `minIntegerDigits` is the minimum number of integer digits to use. Defaults to `1`.
     *   - `minFractionDigits` is the minimum number of digits after fraction. Defaults to `0`.
     *   - `maxFractionDigits` is the maximum number of digits after fraction. Defaults to `3`.
     *
     * For more information on the acceptable range for each of these numbers and other
     * details see your native internationalization library.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/number_pipe.ts region='DeprecatedNumberPipe'}
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var DeprecatedDecimalPipe = /** @class */ (function () {
        function DeprecatedDecimalPipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedDecimalPipe.prototype.transform = function (value, digits) {
            return formatNumber$1(DeprecatedDecimalPipe, this._locale, value, exports.NumberFormatStyle.Decimal, digits);
        };
        DeprecatedDecimalPipe.ngPipeDef = i0.ɵdefinePipe({ name: "number", type: DeprecatedDecimalPipe, factory: function DeprecatedDecimalPipe_Factory(t) { return new (t || DeprecatedDecimalPipe)(i0.ɵdirectiveInject(i0.LOCALE_ID)); }, pure: true });
        return DeprecatedDecimalPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(DeprecatedDecimalPipe, [{
            type: i0.Pipe,
            args: [{ name: 'number' }]
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Inject,
                    args: [i0.LOCALE_ID]
                }]
        }]; }, null);
    /**
     * @ngModule CommonModule
     *
     * @description
     *
     * Formats a number as percentage according to locale rules.
     *
     * - `digitInfo` See {@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/percent_pipe.ts region='DeprecatedPercentPipe'}
     *
     * @publicApi
     */
    var DeprecatedPercentPipe = /** @class */ (function () {
        function DeprecatedPercentPipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedPercentPipe.prototype.transform = function (value, digits) {
            return formatNumber$1(DeprecatedPercentPipe, this._locale, value, exports.NumberFormatStyle.Percent, digits);
        };
        DeprecatedPercentPipe.ngPipeDef = i0.ɵdefinePipe({ name: "percent", type: DeprecatedPercentPipe, factory: function DeprecatedPercentPipe_Factory(t) { return new (t || DeprecatedPercentPipe)(i0.ɵdirectiveInject(i0.LOCALE_ID)); }, pure: true });
        return DeprecatedPercentPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(DeprecatedPercentPipe, [{
            type: i0.Pipe,
            args: [{ name: 'percent' }]
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Inject,
                    args: [i0.LOCALE_ID]
                }]
        }]; }, null);
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a number as currency using locale rules.
     *
     * Use `currency` to format a number as currency.
     *
     * - `currencyCode` is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code, such
     *    as `USD` for the US dollar and `EUR` for the euro.
     * - `symbolDisplay` is a boolean indicating whether to use the currency symbol or code.
     *   - `true`: use symbol (e.g. `$`).
     *   - `false`(default): use code (e.g. `USD`).
     * - `digitInfo` See {@link DecimalPipe} for detailed description.
     *
     * WARNING: this pipe uses the Internationalization API which is not yet available in all browsers
     * and may require a polyfill. See [Browser Support](guide/browser-support) for details.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/currency_pipe.ts region='DeprecatedCurrencyPipe'}
     *
     * @publicApi
     */
    var DeprecatedCurrencyPipe = /** @class */ (function () {
        function DeprecatedCurrencyPipe(_locale) {
            this._locale = _locale;
        }
        DeprecatedCurrencyPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
            if (currencyCode === void 0) { currencyCode = 'USD'; }
            if (symbolDisplay === void 0) { symbolDisplay = false; }
            return formatNumber$1(DeprecatedCurrencyPipe, this._locale, value, exports.NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
        };
        DeprecatedCurrencyPipe.ngPipeDef = i0.ɵdefinePipe({ name: "currency", type: DeprecatedCurrencyPipe, factory: function DeprecatedCurrencyPipe_Factory(t) { return new (t || DeprecatedCurrencyPipe)(i0.ɵdirectiveInject(i0.LOCALE_ID)); }, pure: true });
        return DeprecatedCurrencyPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(DeprecatedCurrencyPipe, [{
            type: i0.Pipe,
            args: [{ name: 'currency' }]
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Inject,
                    args: [i0.LOCALE_ID]
                }]
        }]; }, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of deprecated i18n pipes that require intl api
     *
     * @deprecated from v5
     */
    var COMMON_DEPRECATED_I18N_PIPES = [DeprecatedDecimalPipe, DeprecatedPercentPipe, DeprecatedCurrencyPipe, DeprecatedDatePipe];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ObservableStrategy = /** @class */ (function () {
        function ObservableStrategy() {
        }
        ObservableStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return async.subscribe({ next: updateLatestValue, error: function (e) { throw e; } });
        };
        ObservableStrategy.prototype.dispose = function (subscription) { subscription.unsubscribe(); };
        ObservableStrategy.prototype.onDestroy = function (subscription) { subscription.unsubscribe(); };
        return ObservableStrategy;
    }());
    var PromiseStrategy = /** @class */ (function () {
        function PromiseStrategy() {
        }
        PromiseStrategy.prototype.createSubscription = function (async, updateLatestValue) {
            return async.then(updateLatestValue, function (e) { throw e; });
        };
        PromiseStrategy.prototype.dispose = function (subscription) { };
        PromiseStrategy.prototype.onDestroy = function (subscription) { };
        return PromiseStrategy;
    }());
    var _promiseStrategy = new PromiseStrategy();
    var _observableStrategy = new ObservableStrategy();
    /**
     * @ngModule CommonModule
     * @description
     *
     * Unwraps a value from an asynchronous primitive.
     *
     * The `async` pipe subscribes to an `Observable` or `Promise` and returns the latest value it has
     * emitted. When a new value is emitted, the `async` pipe marks the component to be checked for
     * changes. When the component gets destroyed, the `async` pipe unsubscribes automatically to avoid
     * potential memory leaks.
     *
     * @usageNotes
     *
     * ### Examples
     *
     * This example binds a `Promise` to the view. Clicking the `Resolve` button resolves the
     * promise.
     *
     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipePromise'}
     *
     * It's also possible to use `async` with Observables. The example below binds the `time` Observable
     * to the view. The Observable continuously updates the view with the current time.
     *
     * {@example common/pipes/ts/async_pipe.ts region='AsyncPipeObservable'}
     *
     * @publicApi
     */
    var AsyncPipe = /** @class */ (function () {
        function AsyncPipe(_ref) {
            this._ref = _ref;
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
            this._strategy = null;
        }
        AsyncPipe.prototype.ngOnDestroy = function () {
            if (this._subscription) {
                this._dispose();
            }
        };
        AsyncPipe.prototype.transform = function (obj) {
            if (!this._obj) {
                if (obj) {
                    this._subscribe(obj);
                }
                this._latestReturnedValue = this._latestValue;
                return this._latestValue;
            }
            if (obj !== this._obj) {
                this._dispose();
                return this.transform(obj);
            }
            if (this._latestValue === this._latestReturnedValue) {
                return this._latestReturnedValue;
            }
            this._latestReturnedValue = this._latestValue;
            return i0.WrappedValue.wrap(this._latestValue);
        };
        AsyncPipe.prototype._subscribe = function (obj) {
            var _this = this;
            this._obj = obj;
            this._strategy = this._selectStrategy(obj);
            this._subscription = this._strategy.createSubscription(obj, function (value) { return _this._updateLatestValue(obj, value); });
        };
        AsyncPipe.prototype._selectStrategy = function (obj) {
            if (i0.ɵisPromise(obj)) {
                return _promiseStrategy;
            }
            if (i0.ɵisObservable(obj)) {
                return _observableStrategy;
            }
            throw invalidPipeArgumentError(AsyncPipe, obj);
        };
        AsyncPipe.prototype._dispose = function () {
            this._strategy.dispose(this._subscription);
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._obj = null;
        };
        AsyncPipe.prototype._updateLatestValue = function (async, value) {
            if (async === this._obj) {
                this._latestValue = value;
                this._ref.markForCheck();
            }
        };
        AsyncPipe.ngPipeDef = i0.ɵdefinePipe({ name: "async", type: AsyncPipe, factory: function AsyncPipe_Factory(t) { return new (t || AsyncPipe)(i0.ɵdirectiveInject(i0.ChangeDetectorRef)); }, pure: false });
        return AsyncPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(AsyncPipe, [{
            type: i0.Pipe,
            args: [{ name: 'async', pure: false }]
        }], function () { return [{
            type: i0.ChangeDetectorRef
        }]; }, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Transforms text to all lower case.
     *
     * @see `UpperCasePipe`
     * @see `TitleCasePipe`
     * @usageNotes
     *
     * The following example defines a view that allows the user to enter
     * text, and then uses the pipe to convert the input text to all lower case.
     *
     * <code-example path="common/pipes/ts/lowerupper_pipe.ts" region='LowerUpperPipe'></code-example>
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var LowerCasePipe = /** @class */ (function () {
        function LowerCasePipe() {
        }
        /**
         * @param value The string to transform to lower case.
         */
        LowerCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError(LowerCasePipe, value);
            }
            return value.toLowerCase();
        };
        LowerCasePipe.ngPipeDef = i0.ɵdefinePipe({ name: "lowercase", type: LowerCasePipe, factory: function LowerCasePipe_Factory(t) { return new (t || LowerCasePipe)(); }, pure: true });
        return LowerCasePipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(LowerCasePipe, [{
            type: i0.Pipe,
            args: [{ name: 'lowercase' }]
        }], null, null);
    //
    // Regex below matches any Unicode word and compatible with ES5. In ES2018 the same result
    // can be achieved by using /\p{L}\S*/gu and also known as Unicode Property Escapes
    // (http://2ality.com/2017/07/regexp-unicode-property-escapes.html). Since there is no
    // transpilation of this functionality down to ES5 without external tool, the only solution is
    // to use already transpiled form. Example can be found here -
    // https://mothereff.in/regexpu#input=var+regex+%3D+/%5Cp%7BL%7D/u%3B&unicodePropertyEscape=1
    //
    var unicodeWordMatch = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;
    /**
     * Transforms text to title case.
     * Capitalizes the first letter of each word, and transforms the
     * rest of the word to lower case.
     * Words are delimited by any whitespace character, such as a space, tab, or line-feed character.
     *
     * @see `LowerCasePipe`
     * @see `UpperCasePipe`
     *
     * @usageNotes
     * The following example shows the result of transforming various strings into title case.
     *
     * <code-example path="common/pipes/ts/titlecase_pipe.ts" region='TitleCasePipe'></code-example>
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var TitleCasePipe = /** @class */ (function () {
        function TitleCasePipe() {
        }
        /**
         * @param value The string to transform to title case.
         */
        TitleCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError(TitleCasePipe, value);
            }
            return value.replace(unicodeWordMatch, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
        };
        TitleCasePipe.ngPipeDef = i0.ɵdefinePipe({ name: "titlecase", type: TitleCasePipe, factory: function TitleCasePipe_Factory(t) { return new (t || TitleCasePipe)(); }, pure: true });
        return TitleCasePipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(TitleCasePipe, [{
            type: i0.Pipe,
            args: [{ name: 'titlecase' }]
        }], null, null);
    /**
     * Transforms text to all upper case.
     * @see `LowerCasePipe`
     * @see `TitleCasePipe`
     *
     * @ngModule CommonModule
     * @publicApi
     */
    var UpperCasePipe = /** @class */ (function () {
        function UpperCasePipe() {
        }
        /**
         * @param value The string to transform to upper case.
         */
        UpperCasePipe.prototype.transform = function (value) {
            if (!value)
                return value;
            if (typeof value !== 'string') {
                throw invalidPipeArgumentError(UpperCasePipe, value);
            }
            return value.toUpperCase();
        };
        UpperCasePipe.ngPipeDef = i0.ɵdefinePipe({ name: "uppercase", type: UpperCasePipe, factory: function UpperCasePipe_Factory(t) { return new (t || UpperCasePipe)(); }, pure: true });
        return UpperCasePipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(UpperCasePipe, [{
            type: i0.Pipe,
            args: [{ name: 'uppercase' }]
        }], null, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // clang-format off
    /**
     * @ngModule CommonModule
     * @description
     *
     * Formats a date value according to locale rules.
     *
     * Only the `en-US` locale data comes with Angular. To localize dates
     * in another language, you must import the corresponding locale data.
     * See the [I18n guide](guide/i18n#i18n-pipes) for more information.
     *
     * @see `formatDate()`
     *
     *
     * @usageNotes
     *
     * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to
     * reformat the date on every change-detection cycle, treat the date as an immutable object
     * and change the reference when the pipe needs to run again.
     *
     * ### Pre-defined format options
     *
     * Examples are given in `en-US` locale.
     *
     * - `'short'`: equivalent to `'M/d/yy, h:mm a'` (`6/15/15, 9:03 AM`).
     * - `'medium'`: equivalent to `'MMM d, y, h:mm:ss a'` (`Jun 15, 2015, 9:03:01 AM`).
     * - `'long'`: equivalent to `'MMMM d, y, h:mm:ss a z'` (`June 15, 2015 at 9:03:01 AM
     * GMT+1`).
     * - `'full'`: equivalent to `'EEEE, MMMM d, y, h:mm:ss a zzzz'` (`Monday, June 15, 2015 at
     * 9:03:01 AM GMT+01:00`).
     * - `'shortDate'`: equivalent to `'M/d/yy'` (`6/15/15`).
     * - `'mediumDate'`: equivalent to `'MMM d, y'` (`Jun 15, 2015`).
     * - `'longDate'`: equivalent to `'MMMM d, y'` (`June 15, 2015`).
     * - `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` (`Monday, June 15, 2015`).
     * - `'shortTime'`: equivalent to `'h:mm a'` (`9:03 AM`).
     * - `'mediumTime'`: equivalent to `'h:mm:ss a'` (`9:03:01 AM`).
     * - `'longTime'`: equivalent to `'h:mm:ss a z'` (`9:03:01 AM GMT+1`).
     * - `'fullTime'`: equivalent to `'h:mm:ss a zzzz'` (`9:03:01 AM GMT+01:00`).
     *
     * ### Custom format options
     *
     * You can construct a format string using symbols to specify the components
     * of a date-time value, as described in the following table.
     * Format details depend on the locale.
     * Fields marked with (*) are only available in the extra data set for the given locale.
     *
     *  | Field type         | Format      | Description                                                   | Example Value                                              |
     *  |--------------------|-------------|---------------------------------------------------------------|------------------------------------------------------------|
     *  | Era                | G, GG & GGG | Abbreviated                                                   | AD                                                         |
     *  |                    | GGGG        | Wide                                                          | Anno Domini                                                |
     *  |                    | GGGGG       | Narrow                                                        | A                                                          |
     *  | Year               | y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
     *  |                    | yy          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
     *  |                    | yyy         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
     *  |                    | yyyy        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
     *  | Month              | M           | Numeric: 1 digit                                              | 9, 12                                                      |
     *  |                    | MM          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
     *  |                    | MMM         | Abbreviated                                                   | Sep                                                        |
     *  |                    | MMMM        | Wide                                                          | September                                                  |
     *  |                    | MMMMM       | Narrow                                                        | S                                                          |
     *  | Month standalone   | L           | Numeric: 1 digit                                              | 9, 12                                                      |
     *  |                    | LL          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
     *  |                    | LLL         | Abbreviated                                                   | Sep                                                        |
     *  |                    | LLLL        | Wide                                                          | September                                                  |
     *  |                    | LLLLL       | Narrow                                                        | S                                                          |
     *  | Week of year       | w           | Numeric: minimum digits                                       | 1... 53                                                    |
     *  |                    | ww          | Numeric: 2 digits + zero padded                               | 01... 53                                                   |
     *  | Week of month      | W           | Numeric: 1 digit                                              | 1... 5                                                     |
     *  | Day of month       | d           | Numeric: minimum digits                                       | 1                                                          |
     *  |                    | dd          | Numeric: 2 digits + zero padded                               | 01                                                          |
     *  | Week day           | E, EE & EEE | Abbreviated                                                   | Tue                                                        |
     *  |                    | EEEE        | Wide                                                          | Tuesday                                                    |
     *  |                    | EEEEE       | Narrow                                                        | T                                                          |
     *  |                    | EEEEEE      | Short                                                         | Tu                                                         |
     *  | Period             | a, aa & aaa | Abbreviated                                                   | am/pm or AM/PM                                             |
     *  |                    | aaaa        | Wide (fallback to `a` when missing)                           | ante meridiem/post meridiem                                |
     *  |                    | aaaaa       | Narrow                                                        | a/p                                                        |
     *  | Period*            | B, BB & BBB | Abbreviated                                                   | mid.                                                       |
     *  |                    | BBBB        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
     *  |                    | BBBBB       | Narrow                                                        | md                                                         |
     *  | Period standalone* | b, bb & bbb | Abbreviated                                                   | mid.                                                       |
     *  |                    | bbbb        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
     *  |                    | bbbbb       | Narrow                                                        | md                                                         |
     *  | Hour 1-12          | h           | Numeric: minimum digits                                       | 1, 12                                                      |
     *  |                    | hh          | Numeric: 2 digits + zero padded                               | 01, 12                                                     |
     *  | Hour 0-23          | H           | Numeric: minimum digits                                       | 0, 23                                                      |
     *  |                    | HH          | Numeric: 2 digits + zero padded                               | 00, 23                                                     |
     *  | Minute             | m           | Numeric: minimum digits                                       | 8, 59                                                      |
     *  |                    | mm          | Numeric: 2 digits + zero padded                               | 08, 59                                                     |
     *  | Second             | s           | Numeric: minimum digits                                       | 0... 59                                                    |
     *  |                    | ss          | Numeric: 2 digits + zero padded                               | 00... 59                                                   |
     *  | Fractional seconds | S           | Numeric: 1 digit                                              | 0... 9                                                     |
     *  |                    | SS          | Numeric: 2 digits + zero padded                               | 00... 99                                                   |
     *  |                    | SSS         | Numeric: 3 digits + zero padded (= milliseconds)              | 000... 999                                                 |
     *  | Zone               | z, zz & zzz | Short specific non location format (fallback to O)            | GMT-8                                                      |
     *  |                    | zzzz        | Long specific non location format (fallback to OOOO)          | GMT-08:00                                                  |
     *  |                    | Z, ZZ & ZZZ | ISO8601 basic format                                          | -0800                                                      |
     *  |                    | ZZZZ        | Long localized GMT format                                     | GMT-8:00                                                   |
     *  |                    | ZZZZZ       | ISO8601 extended format + Z indicator for offset 0 (= XXXXX)  | -08:00                                                     |
     *  |                    | O, OO & OOO | Short localized GMT format                                    | GMT-8                                                      |
     *  |                    | OOOO        | Long localized GMT format                                     | GMT-08:00                                                  |
     *
     * Note that timezone correction is not applied to an ISO string that has no time component, such as "2016-09-19"
     *
     * ### Format examples
     *
     * These examples transform a date into various formats,
     * assuming that `dateObj` is a JavaScript `Date` object for
     * year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11,
     * given in the local time for the `en-US` locale.
     *
     * ```
     * {{ dateObj | date }}               // output is 'Jun 15, 2015'
     * {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
     * {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
     * {{ dateObj | date:'mmss' }}        // output is '43:11'
     * ```
     *
     * ### Usage example
     *
     * The following component uses a date pipe to display the current date in different formats.
     *
     * ```
     * @Component({
     *  selector: 'date-pipe',
     *  template: `<div>
     *    <p>Today is {{today | date}}</p>
     *    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
     *    <p>The time is {{today | date:'h:mm a z'}}</p>
     *  </div>`
     * })
     * // Get the current date and time as a date-time value.
     * export class DatePipeComponent {
     *   today: number = Date.now();
     * }
     * ```
     *
     * @publicApi
     */
    // clang-format on
    var DatePipe = /** @class */ (function () {
        function DatePipe(locale) {
            this.locale = locale;
        }
        /**
         * @param value The date expression: a `Date` object,  a number
         * (milliseconds since UTC epoch), or an ISO string (https://www.w3.org/TR/NOTE-datetime).
         * @param format The date/time components to include, using predefined options or a
         * custom format string.
         * @param timezone A timezone offset (such as `'+0430'`), or a standard
         * UTC/GMT or continental US timezone abbreviation. Default is
         * the local system timezone of the end-user's machine.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         * @returns A date string in the desired format.
         */
        DatePipe.prototype.transform = function (value, format, timezone, locale) {
            if (format === void 0) { format = 'mediumDate'; }
            if (value == null || value === '' || value !== value)
                return null;
            try {
                return formatDate(value, format, locale || this.locale, timezone);
            }
            catch (error) {
                throw invalidPipeArgumentError(DatePipe, error.message);
            }
        };
        DatePipe.ngPipeDef = i0.ɵdefinePipe({ name: "date", type: DatePipe, factory: function DatePipe_Factory(t) { return new (t || DatePipe)(i0.ɵdirectiveInject(i0.LOCALE_ID)); }, pure: true });
        return DatePipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(DatePipe, [{
            type: i0.Pipe,
            args: [{ name: 'date', pure: true }]
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Inject,
                    args: [i0.LOCALE_ID]
                }]
        }]; }, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var _INTERPOLATION_REGEXP = /#/g;
    /**
     * @ngModule CommonModule
     * @description
     *
     * Maps a value to a string that pluralizes the value according to locale rules.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
     *
     * @publicApi
     */
    var I18nPluralPipe = /** @class */ (function () {
        function I18nPluralPipe(_localization) {
            this._localization = _localization;
        }
        /**
         * @param value the number to be formatted
         * @param pluralMap an object that mimics the ICU format, see
         * http://userguide.icu-project.org/formatparse/messages.
         * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
         * default).
         */
        I18nPluralPipe.prototype.transform = function (value, pluralMap, locale) {
            if (value == null)
                return '';
            if (typeof pluralMap !== 'object' || pluralMap === null) {
                throw invalidPipeArgumentError(I18nPluralPipe, pluralMap);
            }
            var key = getPluralCategory(value, Object.keys(pluralMap), this._localization, locale);
            return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
        };
        I18nPluralPipe.ngPipeDef = i0.ɵdefinePipe({ name: "i18nPlural", type: I18nPluralPipe, factory: function I18nPluralPipe_Factory(t) { return new (t || I18nPluralPipe)(i0.ɵdirectiveInject(NgLocalization)); }, pure: true });
        return I18nPluralPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(I18nPluralPipe, [{
            type: i0.Pipe,
            args: [{ name: 'i18nPlural', pure: true }]
        }], function () { return [{
            type: NgLocalization
        }]; }, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Generic selector that displays the string that matches the current value.
     *
     * If none of the keys of the `mapping` match the `value`, then the content
     * of the `other` key is returned when present, otherwise an empty string is returned.
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example common/pipes/ts/i18n_pipe.ts region='I18nSelectPipeComponent'}
     *
     * @publicApi
     */
    var I18nSelectPipe = /** @class */ (function () {
        function I18nSelectPipe() {
        }
        /**
         * @param value a string to be internationalized.
         * @param mapping an object that indicates the text that should be displayed
         * for different values of the provided `value`.
         */
        I18nSelectPipe.prototype.transform = function (value, mapping) {
            if (value == null)
                return '';
            if (typeof mapping !== 'object' || typeof value !== 'string') {
                throw invalidPipeArgumentError(I18nSelectPipe, mapping);
            }
            if (mapping.hasOwnProperty(value)) {
                return mapping[value];
            }
            if (mapping.hasOwnProperty('other')) {
                return mapping['other'];
            }
            return '';
        };
        I18nSelectPipe.ngPipeDef = i0.ɵdefinePipe({ name: "i18nSelect", type: I18nSelectPipe, factory: function I18nSelectPipe_Factory(t) { return new (t || I18nSelectPipe)(); }, pure: true });
        return I18nSelectPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(I18nSelectPipe, [{
            type: i0.Pipe,
            args: [{ name: 'i18nSelect', pure: true }]
        }], null, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Converts a value into its JSON-format representation.  Useful for debugging.
     *
     * @usageNotes
     *
     * The following component uses a JSON pipe to convert an object
     * to JSON format, and displays the string in both formats for comparison.
     *
     * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
     *
     * @publicApi
     */
    var JsonPipe = /** @class */ (function () {
        function JsonPipe() {
        }
        /**
         * @param value A value of any type to convert into a JSON-format string.
         */
        JsonPipe.prototype.transform = function (value) { return JSON.stringify(value, null, 2); };
        JsonPipe.ngPipeDef = i0.ɵdefinePipe({ name: "json", type: JsonPipe, factory: function JsonPipe_Factory(t) { return new (t || JsonPipe)(); }, pure: false });
        return JsonPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(JsonPipe, [{
            type: i0.Pipe,
            args: [{ name: 'json', pure: false }]
        }], null, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function makeKeyValuePair(key, value) {
        return { key: key, value: value };
    }
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms Object or Map into an array of key value pairs.
     *
     * The output array will be ordered by keys.
     * By default the comparator will be by Unicode point value.
     * You can optionally pass a compareFn if your keys are complex types.
     *
     * @usageNotes
     * ### Examples
     *
     * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
     * pipe.
     *
     * {@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
     *
     * @publicApi
     */
    var KeyValuePipe = /** @class */ (function () {
        function KeyValuePipe(differs) {
            this.differs = differs;
            this.keyValues = [];
        }
        KeyValuePipe.prototype.transform = function (input, compareFn) {
            var _this = this;
            if (compareFn === void 0) { compareFn = defaultComparator; }
            if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
                return null;
            }
            if (!this.differ) {
                // make a differ for whatever type we've been passed in
                this.differ = this.differs.find(input).create();
            }
            var differChanges = this.differ.diff(input);
            if (differChanges) {
                this.keyValues = [];
                differChanges.forEachItem(function (r) {
                    _this.keyValues.push(makeKeyValuePair(r.key, r.currentValue));
                });
                this.keyValues.sort(compareFn);
            }
            return this.keyValues;
        };
        KeyValuePipe.ngPipeDef = i0.ɵdefinePipe({ name: "keyvalue", type: KeyValuePipe, factory: function KeyValuePipe_Factory(t) { return new (t || KeyValuePipe)(i0.ɵdirectiveInject(i0.KeyValueDiffers)); }, pure: false });
        return KeyValuePipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(KeyValuePipe, [{
            type: i0.Pipe,
            args: [{ name: 'keyvalue', pure: false }]
        }], function () { return [{
            type: i0.KeyValueDiffers
        }]; }, null);
    function defaultComparator(keyValueA, keyValueB) {
        var a = keyValueA.key;
        var b = keyValueB.key;
        // if same exit with 0;
        if (a === b)
            return 0;
        // make sure that undefined are at the end of the sort.
        if (a === undefined)
            return 1;
        if (b === undefined)
            return -1;
        // make sure that nulls are at the end of the sort.
        if (a === null)
            return 1;
        if (b === null)
            return -1;
        if (typeof a == 'string' && typeof b == 'string') {
            return a < b ? -1 : 1;
        }
        if (typeof a == 'number' && typeof b == 'number') {
            return a - b;
        }
        if (typeof a == 'boolean' && typeof b == 'boolean') {
            return a < b ? -1 : 1;
        }
        // `a` and `b` are of different types. Compare their string values.
        var aString = String(a);
        var bString = String(b);
        return aString == bString ? 0 : aString < bString ? -1 : 1;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms a number into a string,
     * formatted according to locale rules that determine group sizing and
     * separator, decimal-point character, and other locale-specific
     * configurations.
     *
     * If no parameters are specified, the function rounds off to the nearest value using this
     * [rounding method](https://en.wikibooks.org/wiki/Arithmetic/Rounding).
     * The behavior differs from that of the JavaScript ```Math.round()``` function.
     * In the following case for example, the pipe rounds down where
     * ```Math.round()``` rounds up:
     *
     * ```html
     * -2.5 | number:'1.0-0'
     * > -3
     * Math.round(-2.5)
     * > -2
     * ```
     *
     * @see `formatNumber()`
     *
     * @usageNotes
     * The following code shows how the pipe transforms numbers
     * into text strings, according to various format specifications,
     * where the caller's default locale is `en-US`.
     *
     * ### Example
     *
     * <code-example path="common/pipes/ts/number_pipe.ts" region='NumberPipe'></code-example>
     *
     * @publicApi
     */
    var DecimalPipe = /** @class */ (function () {
        function DecimalPipe(_locale) {
            this._locale = _locale;
        }
        /**
         * @param value The number to be formatted.
         * @param digitsInfo Decimal representation options, specified by a string
         * in the following format:<br>
         * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
         *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
         * Default is `1`.
         *   - `minFractionDigits`: The minimum number of digits after the decimal point.
         * Default is `0`.
         *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
         * Default is `3`.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         */
        DecimalPipe.prototype.transform = function (value, digitsInfo, locale) {
            if (isEmpty(value))
                return null;
            locale = locale || this._locale;
            try {
                var num = strToNumber(value);
                return formatNumber(num, locale, digitsInfo);
            }
            catch (error) {
                throw invalidPipeArgumentError(DecimalPipe, error.message);
            }
        };
        DecimalPipe.ngPipeDef = i0.ɵdefinePipe({ name: "number", type: DecimalPipe, factory: function DecimalPipe_Factory(t) { return new (t || DecimalPipe)(i0.ɵdirectiveInject(i0.LOCALE_ID)); }, pure: true });
        return DecimalPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(DecimalPipe, [{
            type: i0.Pipe,
            args: [{ name: 'number' }]
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Inject,
                    args: [i0.LOCALE_ID]
                }]
        }]; }, null);
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms a number to a percentage
     * string, formatted according to locale rules that determine group sizing and
     * separator, decimal-point character, and other locale-specific
     * configurations.
     *
     * @see `formatPercent()`
     *
     * @usageNotes
     * The following code shows how the pipe transforms numbers
     * into text strings, according to various format specifications,
     * where the caller's default locale is `en-US`.
     *
     * <code-example path="common/pipes/ts/percent_pipe.ts" region='PercentPipe'></code-example>
     *
     * @publicApi
     */
    var PercentPipe = /** @class */ (function () {
        function PercentPipe(_locale) {
            this._locale = _locale;
        }
        /**
         *
         * @param value The number to be formatted as a percentage.
         * @param digitsInfo Decimal representation options, specified by a string
         * in the following format:<br>
         * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
         *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
         * Default is `1`.
         *   - `minFractionDigits`: The minimum number of digits after the decimal point.
         * Default is `0`.
         *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
         * Default is `0`.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         */
        PercentPipe.prototype.transform = function (value, digitsInfo, locale) {
            if (isEmpty(value))
                return null;
            locale = locale || this._locale;
            try {
                var num = strToNumber(value);
                return formatPercent(num, locale, digitsInfo);
            }
            catch (error) {
                throw invalidPipeArgumentError(PercentPipe, error.message);
            }
        };
        PercentPipe.ngPipeDef = i0.ɵdefinePipe({ name: "percent", type: PercentPipe, factory: function PercentPipe_Factory(t) { return new (t || PercentPipe)(i0.ɵdirectiveInject(i0.LOCALE_ID)); }, pure: true });
        return PercentPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(PercentPipe, [{
            type: i0.Pipe,
            args: [{ name: 'percent' }]
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Inject,
                    args: [i0.LOCALE_ID]
                }]
        }]; }, null);
    /**
     * @ngModule CommonModule
     * @description
     *
     * Transforms a number to a currency string, formatted according to locale rules
     * that determine group sizing and separator, decimal-point character,
     * and other locale-specific configurations.
     *
     * @see `getCurrencySymbol()`
     * @see `formatCurrency()`
     *
     * @usageNotes
     * The following code shows how the pipe transforms numbers
     * into text strings, according to various format specifications,
     * where the caller's default locale is `en-US`.
     *
     * <code-example path="common/pipes/ts/currency_pipe.ts" region='CurrencyPipe'></code-example>
     *
     * @publicApi
     */
    var CurrencyPipe = /** @class */ (function () {
        function CurrencyPipe(_locale) {
            this._locale = _locale;
        }
        /**
         *
         * @param value The number to be formatted as currency.
         * @param currencyCode The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code,
         * such as `USD` for the US dollar and `EUR` for the euro.
         * @param display The format for the currency indicator. One of the following:
         *   - `code`: Show the code (such as `USD`).
         *   - `symbol`(default): Show the symbol (such as `$`).
         *   - `symbol-narrow`: Use the narrow symbol for locales that have two symbols for their
         * currency.
         * For example, the Canadian dollar CAD has the symbol `CA$` and the symbol-narrow `$`. If the
         * locale has no narrow symbol, uses the standard symbol for the locale.
         *   - String: Use the given string value instead of a code or a symbol.
         * For example, an empty string will suppress the currency & symbol.
         *   - Boolean (marked deprecated in v5): `true` for symbol and false for `code`.
         *
         * @param digitsInfo Decimal representation options, specified by a string
         * in the following format:<br>
         * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
         *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
         * Default is `1`.
         *   - `minFractionDigits`: The minimum number of digits after the decimal point.
         * Default is `2`.
         *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
         * Default is `2`.
         * If not provided, the number will be formatted with the proper amount of digits,
         * depending on what the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) specifies.
         * For example, the Canadian dollar has 2 digits, whereas the Chilean peso has none.
         * @param locale A locale code for the locale format rules to use.
         * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
         * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
         */
        CurrencyPipe.prototype.transform = function (value, currencyCode, display, digitsInfo, locale) {
            if (display === void 0) { display = 'symbol'; }
            if (isEmpty(value))
                return null;
            locale = locale || this._locale;
            if (typeof display === 'boolean') {
                if (console && console.warn) {
                    console.warn("Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are \"code\", \"symbol\" or \"symbol-narrow\".");
                }
                display = display ? 'symbol' : 'code';
            }
            var currency = currencyCode || 'USD';
            if (display !== 'code') {
                if (display === 'symbol' || display === 'symbol-narrow') {
                    currency = getCurrencySymbol(currency, display === 'symbol' ? 'wide' : 'narrow', locale);
                }
                else {
                    currency = display;
                }
            }
            try {
                var num = strToNumber(value);
                return formatCurrency(num, locale, currency, currencyCode, digitsInfo);
            }
            catch (error) {
                throw invalidPipeArgumentError(CurrencyPipe, error.message);
            }
        };
        CurrencyPipe.ngPipeDef = i0.ɵdefinePipe({ name: "currency", type: CurrencyPipe, factory: function CurrencyPipe_Factory(t) { return new (t || CurrencyPipe)(i0.ɵdirectiveInject(i0.LOCALE_ID)); }, pure: true });
        return CurrencyPipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(CurrencyPipe, [{
            type: i0.Pipe,
            args: [{ name: 'currency' }]
        }], function () { return [{
            type: undefined,
            decorators: [{
                    type: i0.Inject,
                    args: [i0.LOCALE_ID]
                }]
        }]; }, null);
    function isEmpty(value) {
        return value == null || value === '' || value !== value;
    }
    /**
     * Transforms a string into a number (if needed).
     */
    function strToNumber(value) {
        // Convert strings to numbers
        if (typeof value === 'string' && !isNaN(Number(value) - parseFloat(value))) {
            return Number(value);
        }
        if (typeof value !== 'number') {
            throw new Error(value + " is not a number");
        }
        return value;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @ngModule CommonModule
     * @description
     *
     * Creates a new `Array` or `String` containing a subset (slice) of the elements.
     *
     * @usageNotes
     *
     * All behavior is based on the expected behavior of the JavaScript API `Array.prototype.slice()`
     * and `String.prototype.slice()`.
     *
     * When operating on an `Array`, the returned `Array` is always a copy even when all
     * the elements are being returned.
     *
     * When operating on a blank value, the pipe returns the blank value.
     *
     * ### List Example
     *
     * This `ngFor` example:
     *
     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_list'}
     *
     * produces the following:
     *
     * ```html
     * <li>b</li>
     * <li>c</li>
     * ```
     *
     * ### String Examples
     *
     * {@example common/pipes/ts/slice_pipe.ts region='SlicePipe_string'}
     *
     * @publicApi
     */
    var SlicePipe = /** @class */ (function () {
        function SlicePipe() {
        }
        /**
         * @param value a list or a string to be sliced.
         * @param start the starting index of the subset to return:
         *   - **a positive integer**: return the item at `start` index and all items after
         *     in the list or string expression.
         *   - **a negative integer**: return the item at `start` index from the end and all items after
         *     in the list or string expression.
         *   - **if positive and greater than the size of the expression**: return an empty list or
         * string.
         *   - **if negative and greater than the size of the expression**: return entire list or string.
         * @param end the ending index of the subset to return:
         *   - **omitted**: return all items until the end.
         *   - **if positive**: return all items before `end` index of the list or string.
         *   - **if negative**: return all items before `end` index from the end of the list or string.
         */
        SlicePipe.prototype.transform = function (value, start, end) {
            if (value == null)
                return value;
            if (!this.supports(value)) {
                throw invalidPipeArgumentError(SlicePipe, value);
            }
            return value.slice(start, end);
        };
        SlicePipe.prototype.supports = function (obj) { return typeof obj === 'string' || Array.isArray(obj); };
        SlicePipe.ngPipeDef = i0.ɵdefinePipe({ name: "slice", type: SlicePipe, factory: function SlicePipe_Factory(t) { return new (t || SlicePipe)(); }, pure: false });
        return SlicePipe;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(SlicePipe, [{
            type: i0.Pipe,
            args: [{ name: 'slice', pure: false }]
        }], null, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A collection of Angular pipes that are likely to be used in each and every application.
     */
    var COMMON_PIPES = [
        AsyncPipe,
        UpperCasePipe,
        LowerCasePipe,
        JsonPipe,
        SlicePipe,
        DecimalPipe,
        PercentPipe,
        TitleCasePipe,
        CurrencyPipe,
        DatePipe,
        I18nPluralPipe,
        I18nSelectPipe,
        KeyValuePipe,
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Note: This does not contain the location providers,
    // as they need some platform specific implementations to work.
    /**
     * Exports all the basic Angular directives and pipes,
     * such as `NgIf`, `NgForOf`, `DecimalPipe`, and so on.
     * Re-exported by `BrowserModule`, which is included automatically in the root
     * `AppModule` when you create a new app with the CLI `new` command.
     *
     * * The `providers` options configure the NgModule's injector to provide
     * localization dependencies to members.
     * * The `exports` options make the declared directives and pipes available for import
     * by other NgModules.
     *
     * @publicApi
     */
    var CommonModule = /** @class */ (function () {
        function CommonModule() {
        }
        CommonModule.ngModuleDef = i0.ɵdefineNgModule({ type: CommonModule, declarations: [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe], exports: [NgClass, NgComponentOutlet, NgForOf, NgIf, NgTemplateOutlet, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgPlural, NgPluralCase, AsyncPipe, UpperCasePipe, LowerCasePipe, JsonPipe, SlicePipe, DecimalPipe, PercentPipe, TitleCasePipe, CurrencyPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, KeyValuePipe] });
        CommonModule.ngInjectorDef = i0.defineInjector({ factory: function CommonModule_Factory(t) { return new (t || CommonModule)(); }, providers: [
                { provide: NgLocalization, useClass: NgLocaleLocalization },
            ], imports: [[COMMON_DIRECTIVES, COMMON_PIPES]] });
        return CommonModule;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(CommonModule, [{
            type: i0.NgModule,
            args: [{
                    declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
                    exports: [COMMON_DIRECTIVES, COMMON_PIPES],
                    providers: [
                        { provide: NgLocalization, useClass: NgLocaleLocalization },
                    ],
                }]
        }], null, null);
    /**
     * A module that contains the deprecated i18n pipes.
     *
     * @deprecated from v5
     * @publicApi
     */
    var DeprecatedI18NPipesModule = /** @class */ (function () {
        function DeprecatedI18NPipesModule() {
        }
        DeprecatedI18NPipesModule.ngModuleDef = i0.ɵdefineNgModule({ type: DeprecatedI18NPipesModule, declarations: [DeprecatedDecimalPipe, DeprecatedPercentPipe, DeprecatedCurrencyPipe, DeprecatedDatePipe], exports: [DeprecatedDecimalPipe, DeprecatedPercentPipe, DeprecatedCurrencyPipe, DeprecatedDatePipe] });
        DeprecatedI18NPipesModule.ngInjectorDef = i0.defineInjector({ factory: function DeprecatedI18NPipesModule_Factory(t) { return new (t || DeprecatedI18NPipesModule)(); }, providers: [{ provide: DEPRECATED_PLURAL_FN, useValue: getPluralCase }], imports: [[COMMON_DEPRECATED_I18N_PIPES]] });
        return DeprecatedI18NPipesModule;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(DeprecatedI18NPipesModule, [{
            type: i0.NgModule,
            args: [{
                    declarations: [COMMON_DEPRECATED_I18N_PIPES],
                    exports: [COMMON_DEPRECATED_I18N_PIPES],
                    providers: [{ provide: DEPRECATED_PLURAL_FN, useValue: getPluralCase }],
                }]
        }], null, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A DI Token representing the main rendering context. In a browser this is the DOM Document.
     *
     * Note: Document might not be available in the Application Context when Application and Rendering
     * Contexts are not the same (e.g. when running the application into a Web Worker).
     *
     * @publicApi
     */
    var DOCUMENT = new i0.InjectionToken('DocumentToken');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var PLATFORM_BROWSER_ID = 'browser';
    var PLATFORM_SERVER_ID = 'server';
    var PLATFORM_WORKER_APP_ID = 'browserWorkerApp';
    var PLATFORM_WORKER_UI_ID = 'browserWorkerUi';
    /**
     * Returns whether a platform id represents a browser platform.
     * @publicApi
     */
    function isPlatformBrowser(platformId) {
        return platformId === PLATFORM_BROWSER_ID;
    }
    /**
     * Returns whether a platform id represents a server platform.
     * @publicApi
     */
    function isPlatformServer(platformId) {
        return platformId === PLATFORM_SERVER_ID;
    }
    /**
     * Returns whether a platform id represents a web worker app platform.
     * @publicApi
     */
    function isPlatformWorkerApp(platformId) {
        return platformId === PLATFORM_WORKER_APP_ID;
    }
    /**
     * Returns whether a platform id represents a web worker UI platform.
     * @publicApi
     */
    function isPlatformWorkerUi(platformId) {
        return platformId === PLATFORM_WORKER_UI_ID;
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION = new i0.Version('8.0.0-beta.3+175.sha-627cecd');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Defines a scroll position manager. Implemented by `BrowserViewportScroller`.
     *
     * @publicApi
     */
    var ViewportScroller = /** @class */ (function () {
        function ViewportScroller() {
        }
        // De-sugared tree-shakable injection
        // See #23917
        /** @nocollapse */
        ViewportScroller.ngInjectableDef = i0.defineInjectable({ providedIn: 'root', factory: function () { return new BrowserViewportScroller(i0.inject(DOCUMENT), window); } });
        return ViewportScroller;
    }());
    /**
     * Manages the scroll position for a browser window.
     */
    var BrowserViewportScroller = /** @class */ (function () {
        function BrowserViewportScroller(document, window) {
            this.document = document;
            this.window = window;
            this.offset = function () { return [0, 0]; };
        }
        /**
         * Configures the top offset used when scrolling to an anchor.
         * @param offset A position in screen coordinates (a tuple with x and y values)
         * or a function that returns the top offset position.
         *
         */
        BrowserViewportScroller.prototype.setOffset = function (offset) {
            if (Array.isArray(offset)) {
                this.offset = function () { return offset; };
            }
            else {
                this.offset = offset;
            }
        };
        /**
         * Retrieves the current scroll position.
         * @returns The position in screen coordinates.
         */
        BrowserViewportScroller.prototype.getScrollPosition = function () {
            if (this.supportScrollRestoration()) {
                return [this.window.scrollX, this.window.scrollY];
            }
            else {
                return [0, 0];
            }
        };
        /**
         * Sets the scroll position.
         * @param position The new position in screen coordinates.
         */
        BrowserViewportScroller.prototype.scrollToPosition = function (position) {
            if (this.supportScrollRestoration()) {
                this.window.scrollTo(position[0], position[1]);
            }
        };
        /**
         * Scrolls to an anchor element.
         * @param anchor The ID of the anchor element.
         */
        BrowserViewportScroller.prototype.scrollToAnchor = function (anchor) {
            if (this.supportScrollRestoration()) {
                var elSelectedById = this.document.querySelector("#" + anchor);
                if (elSelectedById) {
                    this.scrollToElement(elSelectedById);
                    return;
                }
                var elSelectedByName = this.document.querySelector("[name='" + anchor + "']");
                if (elSelectedByName) {
                    this.scrollToElement(elSelectedByName);
                    return;
                }
            }
        };
        /**
         * Disables automatic scroll restoration provided by the browser.
         */
        BrowserViewportScroller.prototype.setHistoryScrollRestoration = function (scrollRestoration) {
            if (this.supportScrollRestoration()) {
                var history_1 = this.window.history;
                if (history_1 && history_1.scrollRestoration) {
                    history_1.scrollRestoration = scrollRestoration;
                }
            }
        };
        BrowserViewportScroller.prototype.scrollToElement = function (el) {
            var rect = el.getBoundingClientRect();
            var left = rect.left + this.window.pageXOffset;
            var top = rect.top + this.window.pageYOffset;
            var offset = this.offset();
            this.window.scrollTo(left - offset[0], top - offset[1]);
        };
        /**
         * We only support scroll restoration when we can get a hold of window.
         * This means that we do not support this behavior when running in a web worker.
         *
         * Lifting this restriction right now would require more changes in the dom adapter.
         * Since webworkers aren't widely used, we will lift it once RouterScroller is
         * battle-tested.
         */
        BrowserViewportScroller.prototype.supportScrollRestoration = function () {
            try {
                return !!this.window && !!this.window.scrollTo;
            }
            catch (_a) {
                return false;
            }
        };
        return BrowserViewportScroller;
    }());
    /**
     * Provides an empty implementation of the viewport scroller. This will
     * live in @angular/common as it will be used by both platform-server and platform-webworker.
     */
    var NullViewportScroller = /** @class */ (function () {
        function NullViewportScroller() {
        }
        /**
         * Empty implementation
         */
        NullViewportScroller.prototype.setOffset = function (offset) { };
        /**
         * Empty implementation
         */
        NullViewportScroller.prototype.getScrollPosition = function () { return [0, 0]; };
        /**
         * Empty implementation
         */
        NullViewportScroller.prototype.scrollToPosition = function (position) { };
        /**
         * Empty implementation
         */
        NullViewportScroller.prototype.scrollToAnchor = function (anchor) { };
        /**
         * Empty implementation
         */
        NullViewportScroller.prototype.setHistoryScrollRestoration = function (scrollRestoration) { };
        return NullViewportScroller;
    }());

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only reexports content of the `src` folder. Keep it that way.

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    exports.ɵregisterLocaleData = registerLocaleData;
    exports.registerLocaleData = registerLocaleData;
    exports.formatDate = formatDate;
    exports.formatCurrency = formatCurrency;
    exports.formatNumber = formatNumber;
    exports.formatPercent = formatPercent;
    exports.NgLocaleLocalization = NgLocaleLocalization;
    exports.NgLocalization = NgLocalization;
    exports.getNumberOfCurrencyDigits = getNumberOfCurrencyDigits;
    exports.getCurrencySymbol = getCurrencySymbol;
    exports.getLocaleDayPeriods = getLocaleDayPeriods;
    exports.getLocaleDayNames = getLocaleDayNames;
    exports.getLocaleMonthNames = getLocaleMonthNames;
    exports.getLocaleId = getLocaleId;
    exports.getLocaleEraNames = getLocaleEraNames;
    exports.getLocaleWeekEndRange = getLocaleWeekEndRange;
    exports.getLocaleFirstDayOfWeek = getLocaleFirstDayOfWeek;
    exports.getLocaleDateFormat = getLocaleDateFormat;
    exports.getLocaleDateTimeFormat = getLocaleDateTimeFormat;
    exports.getLocaleExtraDayPeriodRules = getLocaleExtraDayPeriodRules;
    exports.getLocaleExtraDayPeriods = getLocaleExtraDayPeriods;
    exports.getLocalePluralCase = getLocalePluralCase;
    exports.getLocaleTimeFormat = getLocaleTimeFormat;
    exports.getLocaleNumberSymbol = getLocaleNumberSymbol;
    exports.getLocaleNumberFormat = getLocaleNumberFormat;
    exports.getLocaleCurrencyName = getLocaleCurrencyName;
    exports.getLocaleCurrencySymbol = getLocaleCurrencySymbol;
    exports.ɵparseCookieValue = parseCookieValue;
    exports.CommonModule = CommonModule;
    exports.DeprecatedI18NPipesModule = DeprecatedI18NPipesModule;
    exports.NgClass = NgClass;
    exports.NgForOf = NgForOf;
    exports.NgForOfContext = NgForOfContext;
    exports.NgIf = NgIf;
    exports.NgIfContext = NgIfContext;
    exports.NgPlural = NgPlural;
    exports.NgPluralCase = NgPluralCase;
    exports.NgStyle = NgStyle;
    exports.NgSwitch = NgSwitch;
    exports.NgSwitchCase = NgSwitchCase;
    exports.NgSwitchDefault = NgSwitchDefault;
    exports.NgTemplateOutlet = NgTemplateOutlet;
    exports.NgComponentOutlet = NgComponentOutlet;
    exports.DOCUMENT = DOCUMENT;
    exports.AsyncPipe = AsyncPipe;
    exports.DatePipe = DatePipe;
    exports.I18nPluralPipe = I18nPluralPipe;
    exports.I18nSelectPipe = I18nSelectPipe;
    exports.JsonPipe = JsonPipe;
    exports.LowerCasePipe = LowerCasePipe;
    exports.CurrencyPipe = CurrencyPipe;
    exports.DecimalPipe = DecimalPipe;
    exports.PercentPipe = PercentPipe;
    exports.SlicePipe = SlicePipe;
    exports.UpperCasePipe = UpperCasePipe;
    exports.TitleCasePipe = TitleCasePipe;
    exports.KeyValuePipe = KeyValuePipe;
    exports.DeprecatedDatePipe = DeprecatedDatePipe;
    exports.DeprecatedCurrencyPipe = DeprecatedCurrencyPipe;
    exports.DeprecatedDecimalPipe = DeprecatedDecimalPipe;
    exports.DeprecatedPercentPipe = DeprecatedPercentPipe;
    exports.ɵPLATFORM_BROWSER_ID = PLATFORM_BROWSER_ID;
    exports.ɵPLATFORM_SERVER_ID = PLATFORM_SERVER_ID;
    exports.ɵPLATFORM_WORKER_APP_ID = PLATFORM_WORKER_APP_ID;
    exports.ɵPLATFORM_WORKER_UI_ID = PLATFORM_WORKER_UI_ID;
    exports.isPlatformBrowser = isPlatformBrowser;
    exports.isPlatformServer = isPlatformServer;
    exports.isPlatformWorkerApp = isPlatformWorkerApp;
    exports.isPlatformWorkerUi = isPlatformWorkerUi;
    exports.VERSION = VERSION;
    exports.ViewportScroller = ViewportScroller;
    exports.ɵNullViewportScroller = NullViewportScroller;
    exports.PlatformLocation = PlatformLocation;
    exports.LOCATION_INITIALIZED = LOCATION_INITIALIZED;
    exports.LocationStrategy = LocationStrategy;
    exports.APP_BASE_HREF = APP_BASE_HREF;
    exports.HashLocationStrategy = HashLocationStrategy;
    exports.PathLocationStrategy = PathLocationStrategy;
    exports.Location = Location;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=common.umd.js.map
