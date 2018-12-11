/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
export * from './location/index';
export { formatDate } from './i18n/format_date';
export { formatCurrency, formatNumber, formatPercent } from './i18n/format_number';
export { NgLocaleLocalization, NgLocalization } from './i18n/localization';
export { registerLocaleData } from './i18n/locale_data';
export { Plural, NumberFormatStyle, FormStyle, TranslationWidth, FormatWidth, NumberSymbol, WeekDay, getNumberOfCurrencyDigits, getCurrencySymbol, getLocaleDayPeriods, getLocaleDayNames, getLocaleMonthNames, getLocaleId, getLocaleEraNames, getLocaleWeekEndRange, getLocaleFirstDayOfWeek, getLocaleDateFormat, getLocaleDateTimeFormat, getLocaleExtraDayPeriodRules, getLocaleExtraDayPeriods, getLocalePluralCase, getLocaleTimeFormat, getLocaleNumberSymbol, getLocaleNumberFormat, getLocaleCurrencyName, getLocaleCurrencySymbol } from './i18n/locale_data_api';
export { parseCookieValue as ɵparseCookieValue } from './cookie';
export { CommonModule, DeprecatedI18NPipesModule } from './common_module';
export { NgClass, NgForOf, NgForOfContext, NgIf, NgIfContext, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, NgComponentOutlet } from './directives/index';
export { DOCUMENT } from './dom_tokens';
export { AsyncPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, UpperCasePipe, TitleCasePipe, KeyValuePipe } from './pipes/index';
export { DeprecatedDatePipe, DeprecatedCurrencyPipe, DeprecatedDecimalPipe, DeprecatedPercentPipe } from './pipes/deprecated/index';
export { PLATFORM_BROWSER_ID as ɵPLATFORM_BROWSER_ID, PLATFORM_SERVER_ID as ɵPLATFORM_SERVER_ID, PLATFORM_WORKER_APP_ID as ɵPLATFORM_WORKER_APP_ID, PLATFORM_WORKER_UI_ID as ɵPLATFORM_WORKER_UI_ID, isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi } from './platform_id';
export { VERSION } from './version';
export { ViewportScroller, NullViewportScroller as ɵNullViewportScroller } from './viewport_scroller';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY29tbW9uL3NyYy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7R0FJRztBQUNILGNBQWMsa0JBQWtCLENBQUM7QUFDakMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBUSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNqakIsT0FBTyxFQUFDLGdCQUFnQixJQUFJLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxZQUFZLEVBQUUseUJBQXlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3RNLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDdEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBVyxNQUFNLGVBQWUsQ0FBQztBQUNwTixPQUFPLEVBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNsSSxPQUFPLEVBQUMsbUJBQW1CLElBQUksb0JBQW9CLEVBQUUsa0JBQWtCLElBQUksbUJBQW1CLEVBQUUsc0JBQXNCLElBQUksdUJBQXVCLEVBQUUscUJBQXFCLElBQUksc0JBQXNCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdlMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNsQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLElBQUkscUJBQXFCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIEVudHJ5IHBvaW50IGZvciBhbGwgcHVibGljIEFQSXMgb2YgdGhlIGNvbW1vbiBwYWNrYWdlLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2xvY2F0aW9uL2luZGV4JztcbmV4cG9ydCB7Zm9ybWF0RGF0ZX0gZnJvbSAnLi9pMThuL2Zvcm1hdF9kYXRlJztcbmV4cG9ydCB7Zm9ybWF0Q3VycmVuY3ksIGZvcm1hdE51bWJlciwgZm9ybWF0UGVyY2VudH0gZnJvbSAnLi9pMThuL2Zvcm1hdF9udW1iZXInO1xuZXhwb3J0IHtOZ0xvY2FsZUxvY2FsaXphdGlvbiwgTmdMb2NhbGl6YXRpb259IGZyb20gJy4vaTE4bi9sb2NhbGl6YXRpb24nO1xuZXhwb3J0IHtyZWdpc3RlckxvY2FsZURhdGF9IGZyb20gJy4vaTE4bi9sb2NhbGVfZGF0YSc7XG5leHBvcnQge1BsdXJhbCwgTnVtYmVyRm9ybWF0U3R5bGUsIEZvcm1TdHlsZSwgVGltZSwgVHJhbnNsYXRpb25XaWR0aCwgRm9ybWF0V2lkdGgsIE51bWJlclN5bWJvbCwgV2Vla0RheSwgZ2V0TnVtYmVyT2ZDdXJyZW5jeURpZ2l0cywgZ2V0Q3VycmVuY3lTeW1ib2wsIGdldExvY2FsZURheVBlcmlvZHMsIGdldExvY2FsZURheU5hbWVzLCBnZXRMb2NhbGVNb250aE5hbWVzLCBnZXRMb2NhbGVJZCwgZ2V0TG9jYWxlRXJhTmFtZXMsIGdldExvY2FsZVdlZWtFbmRSYW5nZSwgZ2V0TG9jYWxlRmlyc3REYXlPZldlZWssIGdldExvY2FsZURhdGVGb3JtYXQsIGdldExvY2FsZURhdGVUaW1lRm9ybWF0LCBnZXRMb2NhbGVFeHRyYURheVBlcmlvZFJ1bGVzLCBnZXRMb2NhbGVFeHRyYURheVBlcmlvZHMsIGdldExvY2FsZVBsdXJhbENhc2UsIGdldExvY2FsZVRpbWVGb3JtYXQsIGdldExvY2FsZU51bWJlclN5bWJvbCwgZ2V0TG9jYWxlTnVtYmVyRm9ybWF0LCBnZXRMb2NhbGVDdXJyZW5jeU5hbWUsIGdldExvY2FsZUN1cnJlbmN5U3ltYm9sfSBmcm9tICcuL2kxOG4vbG9jYWxlX2RhdGFfYXBpJztcbmV4cG9ydCB7cGFyc2VDb29raWVWYWx1ZSBhcyDJtXBhcnNlQ29va2llVmFsdWV9IGZyb20gJy4vY29va2llJztcbmV4cG9ydCB7Q29tbW9uTW9kdWxlLCBEZXByZWNhdGVkSTE4TlBpcGVzTW9kdWxlfSBmcm9tICcuL2NvbW1vbl9tb2R1bGUnO1xuZXhwb3J0IHtOZ0NsYXNzLCBOZ0Zvck9mLCBOZ0Zvck9mQ29udGV4dCwgTmdJZiwgTmdJZkNvbnRleHQsIE5nUGx1cmFsLCBOZ1BsdXJhbENhc2UsIE5nU3R5bGUsIE5nU3dpdGNoLCBOZ1N3aXRjaENhc2UsIE5nU3dpdGNoRGVmYXVsdCwgTmdUZW1wbGF0ZU91dGxldCwgTmdDb21wb25lbnRPdXRsZXR9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5leHBvcnQge0RPQ1VNRU5UfSBmcm9tICcuL2RvbV90b2tlbnMnO1xuZXhwb3J0IHtBc3luY1BpcGUsIERhdGVQaXBlLCBJMThuUGx1cmFsUGlwZSwgSTE4blNlbGVjdFBpcGUsIEpzb25QaXBlLCBMb3dlckNhc2VQaXBlLCBDdXJyZW5jeVBpcGUsIERlY2ltYWxQaXBlLCBQZXJjZW50UGlwZSwgU2xpY2VQaXBlLCBVcHBlckNhc2VQaXBlLCBUaXRsZUNhc2VQaXBlLCBLZXlWYWx1ZVBpcGUsIEtleVZhbHVlfSBmcm9tICcuL3BpcGVzL2luZGV4JztcbmV4cG9ydCB7RGVwcmVjYXRlZERhdGVQaXBlLCBEZXByZWNhdGVkQ3VycmVuY3lQaXBlLCBEZXByZWNhdGVkRGVjaW1hbFBpcGUsIERlcHJlY2F0ZWRQZXJjZW50UGlwZX0gZnJvbSAnLi9waXBlcy9kZXByZWNhdGVkL2luZGV4JztcbmV4cG9ydCB7UExBVEZPUk1fQlJPV1NFUl9JRCBhcyDJtVBMQVRGT1JNX0JST1dTRVJfSUQsIFBMQVRGT1JNX1NFUlZFUl9JRCBhcyDJtVBMQVRGT1JNX1NFUlZFUl9JRCwgUExBVEZPUk1fV09SS0VSX0FQUF9JRCBhcyDJtVBMQVRGT1JNX1dPUktFUl9BUFBfSUQsIFBMQVRGT1JNX1dPUktFUl9VSV9JRCBhcyDJtVBMQVRGT1JNX1dPUktFUl9VSV9JRCwgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIsIGlzUGxhdGZvcm1Xb3JrZXJBcHAsIGlzUGxhdGZvcm1Xb3JrZXJVaX0gZnJvbSAnLi9wbGF0Zm9ybV9pZCc7XG5leHBvcnQge1ZFUlNJT059IGZyb20gJy4vdmVyc2lvbic7XG5leHBvcnQge1ZpZXdwb3J0U2Nyb2xsZXIsIE51bGxWaWV3cG9ydFNjcm9sbGVyIGFzIMm1TnVsbFZpZXdwb3J0U2Nyb2xsZXJ9IGZyb20gJy4vdmlld3BvcnRfc2Nyb2xsZXInO1xuIl19