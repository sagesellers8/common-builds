/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Pipe } from '@angular/core';
import { NgLocalization, getPluralCategory } from '../i18n/localization';
import { invalidPipeArgumentError } from './invalid_pipe_argument_error';
import * as i0 from "@angular/core";
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
export { I18nPluralPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bl9wbHVyYWxfcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvcGlwZXMvaTE4bl9wbHVyYWxfcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQVksSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0JBQStCLENBQUM7O0FBRXZFLElBQU0scUJBQXFCLEdBQVcsSUFBSSxDQUFDO0FBRTNDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSDtJQUVFLHdCQUFvQixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBRyxDQUFDO0lBRXJEOzs7Ozs7T0FNRztJQUNILGtDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsU0FBb0MsRUFBRSxNQUFlO1FBQzVFLElBQUksS0FBSyxJQUFJLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUU3QixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3ZELE1BQU0sd0JBQXdCLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBTSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV6RixPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQzswRUFwQlUsY0FBYyxpRUFBZCxjQUFjLHNCQUNVLGNBQWM7eUJBOUJuRDtDQWtEQyxBQXRCRCxJQXNCQztTQXJCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0xPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nTG9jYWxpemF0aW9uLCBnZXRQbHVyYWxDYXRlZ29yeX0gZnJvbSAnLi4vaTE4bi9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtpbnZhbGlkUGlwZUFyZ3VtZW50RXJyb3J9IGZyb20gJy4vaW52YWxpZF9waXBlX2FyZ3VtZW50X2Vycm9yJztcblxuY29uc3QgX0lOVEVSUE9MQVRJT05fUkVHRVhQOiBSZWdFeHAgPSAvIy9nO1xuXG4vKipcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIE1hcHMgYSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IHBsdXJhbGl6ZXMgdGhlIHZhbHVlIGFjY29yZGluZyB0byBsb2NhbGUgcnVsZXMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvaTE4bl9waXBlLnRzIHJlZ2lvbj0nSTE4blBsdXJhbFBpcGVDb21wb25lbnQnfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQFBpcGUoe25hbWU6ICdpMThuUGx1cmFsJywgcHVyZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgSTE4blBsdXJhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9jYWxpemF0aW9uOiBOZ0xvY2FsaXphdGlvbikge31cblxuICAvKipcbiAgICogQHBhcmFtIHZhbHVlIHRoZSBudW1iZXIgdG8gYmUgZm9ybWF0dGVkXG4gICAqIEBwYXJhbSBwbHVyYWxNYXAgYW4gb2JqZWN0IHRoYXQgbWltaWNzIHRoZSBJQ1UgZm9ybWF0LCBzZWVcbiAgICogaHR0cDovL3VzZXJndWlkZS5pY3UtcHJvamVjdC5vcmcvZm9ybWF0cGFyc2UvbWVzc2FnZXMuXG4gICAqIEBwYXJhbSBsb2NhbGUgYSBgc3RyaW5nYCBkZWZpbmluZyB0aGUgbG9jYWxlIHRvIHVzZSAodXNlcyB0aGUgY3VycmVudCB7QGxpbmsgTE9DQUxFX0lEfSBieVxuICAgKiBkZWZhdWx0KS5cbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBwbHVyYWxNYXA6IHtbY291bnQ6IHN0cmluZ106IHN0cmluZ30sIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiAnJztcblxuICAgIGlmICh0eXBlb2YgcGx1cmFsTWFwICE9PSAnb2JqZWN0JyB8fCBwbHVyYWxNYXAgPT09IG51bGwpIHtcbiAgICAgIHRocm93IGludmFsaWRQaXBlQXJndW1lbnRFcnJvcihJMThuUGx1cmFsUGlwZSwgcGx1cmFsTWFwKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBnZXRQbHVyYWxDYXRlZ29yeSh2YWx1ZSwgT2JqZWN0LmtleXMocGx1cmFsTWFwKSwgdGhpcy5fbG9jYWxpemF0aW9uLCBsb2NhbGUpO1xuXG4gICAgcmV0dXJuIHBsdXJhbE1hcFtrZXldLnJlcGxhY2UoX0lOVEVSUE9MQVRJT05fUkVHRVhQLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgfVxufVxuIl19