/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { COMMON_DIRECTIVES } from './directives/index';
import { DEPRECATED_PLURAL_FN, NgLocaleLocalization, NgLocalization, getPluralCase } from './i18n/localization';
import { COMMON_DEPRECATED_I18N_PIPES } from './pipes/deprecated/index';
import { COMMON_PIPES } from './pipes/index';
import * as i0 from "@angular/core";
import * as i1 from "./directives/ng_class";
import * as i2 from "./directives/ng_component_outlet";
import * as i3 from "./directives/ng_for_of";
import * as i4 from "./directives/ng_if";
import * as i5 from "./directives/ng_template_outlet";
import * as i6 from "./directives/ng_style";
import * as i7 from "./directives/ng_switch";
import * as i8 from "./directives/ng_plural";
import * as i9 from "./pipes/async_pipe";
import * as i10 from "./pipes/case_conversion_pipes";
import * as i11 from "./pipes/json_pipe";
import * as i12 from "./pipes/slice_pipe";
import * as i13 from "./pipes/number_pipe";
import * as i14 from "./pipes/date_pipe";
import * as i15 from "./pipes/i18n_plural_pipe";
import * as i16 from "./pipes/i18n_select_pipe";
import * as i17 from "./pipes/keyvalue_pipe";
import * as i18 from "./pipes/deprecated/number_pipe";
import * as i19 from "./pipes/deprecated/date_pipe";
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
    CommonModule.ngModuleDef = i0.ɵdefineNgModule({ type: CommonModule, bootstrap: [], declarations: [i1.NgClass, i2.NgComponentOutlet, i3.NgForOf, i4.NgIf, i5.NgTemplateOutlet, i6.NgStyle, i7.NgSwitch, i7.NgSwitchCase, i7.NgSwitchDefault, i8.NgPlural, i8.NgPluralCase, i9.AsyncPipe, i10.UpperCasePipe, i10.LowerCasePipe, i11.JsonPipe, i12.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i10.TitleCasePipe, i13.CurrencyPipe, i14.DatePipe, i15.I18nPluralPipe, i16.I18nSelectPipe, i17.KeyValuePipe], imports: [], exports: [i1.NgClass, i2.NgComponentOutlet, i3.NgForOf, i4.NgIf, i5.NgTemplateOutlet, i6.NgStyle, i7.NgSwitch, i7.NgSwitchCase, i7.NgSwitchDefault, i8.NgPlural, i8.NgPluralCase, i9.AsyncPipe, i10.UpperCasePipe, i10.LowerCasePipe, i11.JsonPipe, i12.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i10.TitleCasePipe, i13.CurrencyPipe, i14.DatePipe, i15.I18nPluralPipe, i16.I18nSelectPipe, i17.KeyValuePipe] });
    CommonModule.ngInjectorDef = i0.defineInjector({ factory: function CommonModule_Factory(t) { return new (t || CommonModule)(); }, providers: [
            { provide: NgLocalization, useClass: NgLocaleLocalization },
        ], imports: [[COMMON_DIRECTIVES, COMMON_PIPES]] });
    return CommonModule;
}());
export { CommonModule };
/**
 * A module that contains the deprecated i18n pipes.
 *
 * @deprecated from v5
 * @publicApi
 */
var DeprecatedI18NPipesModule = /** @class */ (function () {
    function DeprecatedI18NPipesModule() {
    }
    DeprecatedI18NPipesModule.ngModuleDef = i0.ɵdefineNgModule({ type: DeprecatedI18NPipesModule, bootstrap: [], declarations: [i18.DeprecatedDecimalPipe, i18.DeprecatedPercentPipe, i18.DeprecatedCurrencyPipe, i19.DeprecatedDatePipe], imports: [], exports: [i18.DeprecatedDecimalPipe, i18.DeprecatedPercentPipe, i18.DeprecatedCurrencyPipe, i19.DeprecatedDatePipe] });
    DeprecatedI18NPipesModule.ngInjectorDef = i0.defineInjector({ factory: function DeprecatedI18NPipesModule_Factory(t) { return new (t || DeprecatedI18NPipesModule)(); }, providers: [{ provide: DEPRECATED_PLURAL_FN, useValue: getPluralCase }], imports: [[COMMON_DEPRECATED_I18N_PIPES]] });
    return DeprecatedI18NPipesModule;
}());
export { DeprecatedI18NPipesModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uX21vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvY29tbW9uX21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDOUcsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzNDLHNEQUFzRDtBQUN0RCwrREFBK0Q7QUFDL0Q7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0g7SUFBQTtLQVFDOzBEQURZLFlBQVk7a0hBQVosWUFBWSxtQkFKWjtZQUNULEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7U0FDMUQsWUFIUSxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQzt1QkFoQzVDO0NBc0NDLEFBUkQsSUFRQztTQURZLFlBQVk7QUFHekI7Ozs7O0dBS0c7QUFDSDtJQUFBO0tBTUM7dUVBRFkseUJBQXlCOzRJQUF6Qix5QkFBeUIsbUJBRnpCLENBQUMsRUFBQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDLFlBRDVELENBQUMsNEJBQTRCLENBQUM7b0NBaER6QztDQW9EQyxBQU5ELElBTUM7U0FEWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDT01NT05fRElSRUNUSVZFU30gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcbmltcG9ydCB7REVQUkVDQVRFRF9QTFVSQUxfRk4sIE5nTG9jYWxlTG9jYWxpemF0aW9uLCBOZ0xvY2FsaXphdGlvbiwgZ2V0UGx1cmFsQ2FzZX0gZnJvbSAnLi9pMThuL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge0NPTU1PTl9ERVBSRUNBVEVEX0kxOE5fUElQRVN9IGZyb20gJy4vcGlwZXMvZGVwcmVjYXRlZC9pbmRleCc7XG5pbXBvcnQge0NPTU1PTl9QSVBFU30gZnJvbSAnLi9waXBlcy9pbmRleCc7XG5cblxuLy8gTm90ZTogVGhpcyBkb2VzIG5vdCBjb250YWluIHRoZSBsb2NhdGlvbiBwcm92aWRlcnMsXG4vLyBhcyB0aGV5IG5lZWQgc29tZSBwbGF0Zm9ybSBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbnMgdG8gd29yay5cbi8qKlxuICogRXhwb3J0cyBhbGwgdGhlIGJhc2ljIEFuZ3VsYXIgZGlyZWN0aXZlcyBhbmQgcGlwZXMsXG4gKiBzdWNoIGFzIGBOZ0lmYCwgYE5nRm9yT2ZgLCBgRGVjaW1hbFBpcGVgLCBhbmQgc28gb24uXG4gKiBSZS1leHBvcnRlZCBieSBgQnJvd3Nlck1vZHVsZWAsIHdoaWNoIGlzIGluY2x1ZGVkIGF1dG9tYXRpY2FsbHkgaW4gdGhlIHJvb3RcbiAqIGBBcHBNb2R1bGVgIHdoZW4geW91IGNyZWF0ZSBhIG5ldyBhcHAgd2l0aCB0aGUgQ0xJIGBuZXdgIGNvbW1hbmQuXG4gKlxuICogKiBUaGUgYHByb3ZpZGVyc2Agb3B0aW9ucyBjb25maWd1cmUgdGhlIE5nTW9kdWxlJ3MgaW5qZWN0b3IgdG8gcHJvdmlkZVxuICogbG9jYWxpemF0aW9uIGRlcGVuZGVuY2llcyB0byBtZW1iZXJzLlxuICogKiBUaGUgYGV4cG9ydHNgIG9wdGlvbnMgbWFrZSB0aGUgZGVjbGFyZWQgZGlyZWN0aXZlcyBhbmQgcGlwZXMgYXZhaWxhYmxlIGZvciBpbXBvcnRcbiAqIGJ5IG90aGVyIE5nTW9kdWxlcy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NPTU1PTl9ESVJFQ1RJVkVTLCBDT01NT05fUElQRVNdLFxuICBleHBvcnRzOiBbQ09NTU9OX0RJUkVDVElWRVMsIENPTU1PTl9QSVBFU10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBOZ0xvY2FsaXphdGlvbiwgdXNlQ2xhc3M6IE5nTG9jYWxlTG9jYWxpemF0aW9ufSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kdWxlIHtcbn1cblxuLyoqXG4gKiBBIG1vZHVsZSB0aGF0IGNvbnRhaW5zIHRoZSBkZXByZWNhdGVkIGkxOG4gcGlwZXMuXG4gKlxuICogQGRlcHJlY2F0ZWQgZnJvbSB2NVxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDT01NT05fREVQUkVDQVRFRF9JMThOX1BJUEVTXSxcbiAgZXhwb3J0czogW0NPTU1PTl9ERVBSRUNBVEVEX0kxOE5fUElQRVNdLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogREVQUkVDQVRFRF9QTFVSQUxfRk4sIHVzZVZhbHVlOiBnZXRQbHVyYWxDYXNlfV0sXG59KVxuZXhwb3J0IGNsYXNzIERlcHJlY2F0ZWRJMThOUGlwZXNNb2R1bGUge1xufVxuIl19