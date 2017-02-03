/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { COMMON_DEPRECATED_DIRECTIVES, COMMON_DIRECTIVES } from './directives/index';
import { NgLocaleLocalization, NgLocalization } from './localization';
import { COMMON_PIPES } from './pipes/index';
/**
 * The module that includes all the basic Angular directives like {\@link NgIf}, {\@link NgForOf}, ...
 *
 * \@stable
 */
export var CommonModule = (function () {
    function CommonModule() {
    }
    CommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [COMMON_DIRECTIVES, COMMON_PIPES],
                    exports: [COMMON_DIRECTIVES, COMMON_PIPES],
                    providers: [
                        { provide: NgLocalization, useClass: NgLocaleLocalization },
                    ],
                },] },
    ];
    /** @nocollapse */
    CommonModule.ctorParameters = function () { return []; };
    return CommonModule;
}());
function CommonModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CommonModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CommonModule.ctorParameters;
}
/**
 * A module to contain deprecated directives.
 */
export var CommonDeprecatedModule = (function () {
    function CommonDeprecatedModule() {
    }
    CommonDeprecatedModule.decorators = [
        { type: NgModule, args: [{ declarations: [COMMON_DEPRECATED_DIRECTIVES], exports: [COMMON_DEPRECATED_DIRECTIVES] },] },
    ];
    /** @nocollapse */
    CommonDeprecatedModule.ctorParameters = function () { return []; };
    return CommonDeprecatedModule;
}());
function CommonDeprecatedModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CommonDeprecatedModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CommonDeprecatedModule.ctorParameters;
}
//# sourceMappingURL=common_module.js.map