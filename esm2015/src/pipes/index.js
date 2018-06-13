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
import { AsyncPipe } from './async_pipe';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from './case_conversion_pipes';
import { DatePipe } from './date_pipe';
import { I18nPluralPipe } from './i18n_plural_pipe';
import { I18nSelectPipe } from './i18n_select_pipe';
import { JsonPipe } from './json_pipe';
import { KeyValuePipe } from './keyvalue_pipe';
import { CurrencyPipe, DecimalPipe, PercentPipe } from './number_pipe';
import { SlicePipe } from './slice_pipe';
export { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe, };
/**
 * A collection of Angular pipes that are likely to be used in each and every application.
 */
export const /** @type {?} */ COMMON_PIPES = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL3BpcGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBYUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQVcsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFdkMsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osUUFBUSxFQUNSLFdBQVcsRUFFWCxZQUFZLEVBQ1osY0FBYyxFQUNkLGNBQWMsRUFDZCxRQUFRLEVBQ1IsYUFBYSxFQUNiLFdBQVcsRUFDWCxTQUFTLEVBQ1QsYUFBYSxFQUNiLGFBQWEsR0FDZCxDQUFDOzs7O0FBTUYsTUFBTSxDQUFDLHVCQUFNLFlBQVksR0FBRztJQUMxQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO0lBQ1IsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0NBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIGEgc2V0IG9mIGNvbW1vbiBQaXBlcy5cbiAqL1xuaW1wb3J0IHtBc3luY1BpcGV9IGZyb20gJy4vYXN5bmNfcGlwZSc7XG5pbXBvcnQge0xvd2VyQ2FzZVBpcGUsIFRpdGxlQ2FzZVBpcGUsIFVwcGVyQ2FzZVBpcGV9IGZyb20gJy4vY2FzZV9jb252ZXJzaW9uX3BpcGVzJztcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gJy4vZGF0ZV9waXBlJztcbmltcG9ydCB7STE4blBsdXJhbFBpcGV9IGZyb20gJy4vaTE4bl9wbHVyYWxfcGlwZSc7XG5pbXBvcnQge0kxOG5TZWxlY3RQaXBlfSBmcm9tICcuL2kxOG5fc2VsZWN0X3BpcGUnO1xuaW1wb3J0IHtKc29uUGlwZX0gZnJvbSAnLi9qc29uX3BpcGUnO1xuaW1wb3J0IHtLZXlWYWx1ZSwgS2V5VmFsdWVQaXBlfSBmcm9tICcuL2tleXZhbHVlX3BpcGUnO1xuaW1wb3J0IHtDdXJyZW5jeVBpcGUsIERlY2ltYWxQaXBlLCBQZXJjZW50UGlwZX0gZnJvbSAnLi9udW1iZXJfcGlwZSc7XG5pbXBvcnQge1NsaWNlUGlwZX0gZnJvbSAnLi9zbGljZV9waXBlJztcblxuZXhwb3J0IHtcbiAgQXN5bmNQaXBlLFxuICBDdXJyZW5jeVBpcGUsXG4gIERhdGVQaXBlLFxuICBEZWNpbWFsUGlwZSxcbiAgS2V5VmFsdWUsXG4gIEtleVZhbHVlUGlwZSxcbiAgSTE4blBsdXJhbFBpcGUsXG4gIEkxOG5TZWxlY3RQaXBlLFxuICBKc29uUGlwZSxcbiAgTG93ZXJDYXNlUGlwZSxcbiAgUGVyY2VudFBpcGUsXG4gIFNsaWNlUGlwZSxcbiAgVGl0bGVDYXNlUGlwZSxcbiAgVXBwZXJDYXNlUGlwZSxcbn07XG5cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgQW5ndWxhciBwaXBlcyB0aGF0IGFyZSBsaWtlbHkgdG8gYmUgdXNlZCBpbiBlYWNoIGFuZCBldmVyeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IENPTU1PTl9QSVBFUyA9IFtcbiAgQXN5bmNQaXBlLFxuICBVcHBlckNhc2VQaXBlLFxuICBMb3dlckNhc2VQaXBlLFxuICBKc29uUGlwZSxcbiAgU2xpY2VQaXBlLFxuICBEZWNpbWFsUGlwZSxcbiAgUGVyY2VudFBpcGUsXG4gIFRpdGxlQ2FzZVBpcGUsXG4gIEN1cnJlbmN5UGlwZSxcbiAgRGF0ZVBpcGUsXG4gIEkxOG5QbHVyYWxQaXBlLFxuICBJMThuU2VsZWN0UGlwZSxcbiAgS2V5VmFsdWVQaXBlLFxuXTtcbiJdfQ==