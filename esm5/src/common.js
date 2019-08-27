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
export { NgClass, NgClassBase, NgForOf, NgForOfContext, NgIf, NgIfContext, NgPlural, NgPluralCase, NgStyle, NgStyleBase, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, NgComponentOutlet } from './directives/index';
export { DOCUMENT } from './dom_tokens';
export { AsyncPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, UpperCasePipe, TitleCasePipe, KeyValuePipe } from './pipes/index';
export { DeprecatedDatePipe, DeprecatedCurrencyPipe, DeprecatedDecimalPipe, DeprecatedPercentPipe } from './pipes/deprecated/index';
export { PLATFORM_BROWSER_ID as ɵPLATFORM_BROWSER_ID, PLATFORM_SERVER_ID as ɵPLATFORM_SERVER_ID, PLATFORM_WORKER_APP_ID as ɵPLATFORM_WORKER_APP_ID, PLATFORM_WORKER_UI_ID as ɵPLATFORM_WORKER_UI_ID, isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi } from './platform_id';
export { VERSION } from './version';
export { ViewportScroller, NullViewportScroller as ɵNullViewportScroller } from './viewport_scroller';
export { NgClassImplProvider__POST_R3__ as ɵNgClassImplProvider__POST_R3__, NgClassR2Impl as ɵNgClassR2Impl, NgClassImpl as ɵNgClassImpl } from './directives/ng_class_impl';
export { NgStyleImplProvider__POST_R3__ as ɵNgStyleImplProvider__POST_R3__, NgStyleR2Impl as ɵNgStyleR2Impl, NgStyleImpl as ɵNgStyleImpl } from './directives/ng_style_impl';
export { ngStyleDirectiveDef__POST_R3__ as ɵngStyleDirectiveDef__POST_R3__, ngStyleFactoryDef__POST_R3__ as ɵngStyleFactoryDef__POST_R3__ } from './directives/ng_style';
export { ngClassDirectiveDef__POST_R3__ as ɵngClassDirectiveDef__POST_R3__, ngClassFactoryDef__POST_R3__ as ɵngClassFactoryDef__POST_R3__ } from './directives/ng_class';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7R0FJRztBQUNILGNBQWMsa0JBQWtCLENBQUM7QUFDakMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxjQUFjLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBUSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNqakIsT0FBTyxFQUFDLGdCQUFnQixJQUFJLGlCQUFpQixFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQy9ELE9BQU8sRUFBQyxZQUFZLEVBQUUseUJBQXlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RSxPQUFPLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDaE8sT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN0QyxPQUFPLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFXLE1BQU0sZUFBZSxDQUFDO0FBQ3BOLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ2xJLE9BQU8sRUFBQyxtQkFBbUIsSUFBSSxvQkFBb0IsRUFBRSxrQkFBa0IsSUFBSSxtQkFBbUIsRUFBRSxzQkFBc0IsSUFBSSx1QkFBdUIsRUFBRSxxQkFBcUIsSUFBSSxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2UyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsSUFBSSxxQkFBcUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXBHLE9BQU8sRUFBQyw4QkFBOEIsSUFBSSwrQkFBK0IsRUFBRSxhQUFhLElBQUksY0FBYyxFQUFFLFdBQVcsSUFBSSxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMzSyxPQUFPLEVBQUMsOEJBQThCLElBQUksK0JBQStCLEVBQUUsYUFBYSxJQUFJLGNBQWMsRUFBRSxXQUFXLElBQUksWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDM0ssT0FBTyxFQUFDLDhCQUE4QixJQUFJLCtCQUErQixFQUFFLDRCQUE0QixJQUFJLDZCQUE2QixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDdkssT0FBTyxFQUFDLDhCQUE4QixJQUFJLCtCQUErQixFQUFFLDRCQUE0QixJQUFJLDZCQUE2QixFQUFDLE1BQU0sdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBFbnRyeSBwb2ludCBmb3IgYWxsIHB1YmxpYyBBUElzIG9mIHRoZSBjb21tb24gcGFja2FnZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9sb2NhdGlvbi9pbmRleCc7XG5leHBvcnQge2Zvcm1hdERhdGV9IGZyb20gJy4vaTE4bi9mb3JtYXRfZGF0ZSc7XG5leHBvcnQge2Zvcm1hdEN1cnJlbmN5LCBmb3JtYXROdW1iZXIsIGZvcm1hdFBlcmNlbnR9IGZyb20gJy4vaTE4bi9mb3JtYXRfbnVtYmVyJztcbmV4cG9ydCB7TmdMb2NhbGVMb2NhbGl6YXRpb24sIE5nTG9jYWxpemF0aW9ufSBmcm9tICcuL2kxOG4vbG9jYWxpemF0aW9uJztcbmV4cG9ydCB7cmVnaXN0ZXJMb2NhbGVEYXRhfSBmcm9tICcuL2kxOG4vbG9jYWxlX2RhdGEnO1xuZXhwb3J0IHtQbHVyYWwsIE51bWJlckZvcm1hdFN0eWxlLCBGb3JtU3R5bGUsIFRpbWUsIFRyYW5zbGF0aW9uV2lkdGgsIEZvcm1hdFdpZHRoLCBOdW1iZXJTeW1ib2wsIFdlZWtEYXksIGdldE51bWJlck9mQ3VycmVuY3lEaWdpdHMsIGdldEN1cnJlbmN5U3ltYm9sLCBnZXRMb2NhbGVEYXlQZXJpb2RzLCBnZXRMb2NhbGVEYXlOYW1lcywgZ2V0TG9jYWxlTW9udGhOYW1lcywgZ2V0TG9jYWxlSWQsIGdldExvY2FsZUVyYU5hbWVzLCBnZXRMb2NhbGVXZWVrRW5kUmFuZ2UsIGdldExvY2FsZUZpcnN0RGF5T2ZXZWVrLCBnZXRMb2NhbGVEYXRlRm9ybWF0LCBnZXRMb2NhbGVEYXRlVGltZUZvcm1hdCwgZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RSdWxlcywgZ2V0TG9jYWxlRXh0cmFEYXlQZXJpb2RzLCBnZXRMb2NhbGVQbHVyYWxDYXNlLCBnZXRMb2NhbGVUaW1lRm9ybWF0LCBnZXRMb2NhbGVOdW1iZXJTeW1ib2wsIGdldExvY2FsZU51bWJlckZvcm1hdCwgZ2V0TG9jYWxlQ3VycmVuY3lOYW1lLCBnZXRMb2NhbGVDdXJyZW5jeVN5bWJvbH0gZnJvbSAnLi9pMThuL2xvY2FsZV9kYXRhX2FwaSc7XG5leHBvcnQge3BhcnNlQ29va2llVmFsdWUgYXMgybVwYXJzZUNvb2tpZVZhbHVlfSBmcm9tICcuL2Nvb2tpZSc7XG5leHBvcnQge0NvbW1vbk1vZHVsZSwgRGVwcmVjYXRlZEkxOE5QaXBlc01vZHVsZX0gZnJvbSAnLi9jb21tb25fbW9kdWxlJztcbmV4cG9ydCB7TmdDbGFzcywgTmdDbGFzc0Jhc2UsIE5nRm9yT2YsIE5nRm9yT2ZDb250ZXh0LCBOZ0lmLCBOZ0lmQ29udGV4dCwgTmdQbHVyYWwsIE5nUGx1cmFsQ2FzZSwgTmdTdHlsZSwgTmdTdHlsZUJhc2UsIE5nU3dpdGNoLCBOZ1N3aXRjaENhc2UsIE5nU3dpdGNoRGVmYXVsdCwgTmdUZW1wbGF0ZU91dGxldCwgTmdDb21wb25lbnRPdXRsZXR9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5leHBvcnQge0RPQ1VNRU5UfSBmcm9tICcuL2RvbV90b2tlbnMnO1xuZXhwb3J0IHtBc3luY1BpcGUsIERhdGVQaXBlLCBJMThuUGx1cmFsUGlwZSwgSTE4blNlbGVjdFBpcGUsIEpzb25QaXBlLCBMb3dlckNhc2VQaXBlLCBDdXJyZW5jeVBpcGUsIERlY2ltYWxQaXBlLCBQZXJjZW50UGlwZSwgU2xpY2VQaXBlLCBVcHBlckNhc2VQaXBlLCBUaXRsZUNhc2VQaXBlLCBLZXlWYWx1ZVBpcGUsIEtleVZhbHVlfSBmcm9tICcuL3BpcGVzL2luZGV4JztcbmV4cG9ydCB7RGVwcmVjYXRlZERhdGVQaXBlLCBEZXByZWNhdGVkQ3VycmVuY3lQaXBlLCBEZXByZWNhdGVkRGVjaW1hbFBpcGUsIERlcHJlY2F0ZWRQZXJjZW50UGlwZX0gZnJvbSAnLi9waXBlcy9kZXByZWNhdGVkL2luZGV4JztcbmV4cG9ydCB7UExBVEZPUk1fQlJPV1NFUl9JRCBhcyDJtVBMQVRGT1JNX0JST1dTRVJfSUQsIFBMQVRGT1JNX1NFUlZFUl9JRCBhcyDJtVBMQVRGT1JNX1NFUlZFUl9JRCwgUExBVEZPUk1fV09SS0VSX0FQUF9JRCBhcyDJtVBMQVRGT1JNX1dPUktFUl9BUFBfSUQsIFBMQVRGT1JNX1dPUktFUl9VSV9JRCBhcyDJtVBMQVRGT1JNX1dPUktFUl9VSV9JRCwgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIsIGlzUGxhdGZvcm1Xb3JrZXJBcHAsIGlzUGxhdGZvcm1Xb3JrZXJVaX0gZnJvbSAnLi9wbGF0Zm9ybV9pZCc7XG5leHBvcnQge1ZFUlNJT059IGZyb20gJy4vdmVyc2lvbic7XG5leHBvcnQge1ZpZXdwb3J0U2Nyb2xsZXIsIE51bGxWaWV3cG9ydFNjcm9sbGVyIGFzIMm1TnVsbFZpZXdwb3J0U2Nyb2xsZXJ9IGZyb20gJy4vdmlld3BvcnRfc2Nyb2xsZXInO1xuXG5leHBvcnQge05nQ2xhc3NJbXBsUHJvdmlkZXJfX1BPU1RfUjNfXyBhcyDJtU5nQ2xhc3NJbXBsUHJvdmlkZXJfX1BPU1RfUjNfXywgTmdDbGFzc1IySW1wbCBhcyDJtU5nQ2xhc3NSMkltcGwsIE5nQ2xhc3NJbXBsIGFzIMm1TmdDbGFzc0ltcGx9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ19jbGFzc19pbXBsJztcbmV4cG9ydCB7TmdTdHlsZUltcGxQcm92aWRlcl9fUE9TVF9SM19fIGFzIMm1TmdTdHlsZUltcGxQcm92aWRlcl9fUE9TVF9SM19fLCBOZ1N0eWxlUjJJbXBsIGFzIMm1TmdTdHlsZVIySW1wbCwgTmdTdHlsZUltcGwgYXMgybVOZ1N0eWxlSW1wbH0gZnJvbSAnLi9kaXJlY3RpdmVzL25nX3N0eWxlX2ltcGwnO1xuZXhwb3J0IHtuZ1N0eWxlRGlyZWN0aXZlRGVmX19QT1NUX1IzX18gYXMgybVuZ1N0eWxlRGlyZWN0aXZlRGVmX19QT1NUX1IzX18sIG5nU3R5bGVGYWN0b3J5RGVmX19QT1NUX1IzX18gYXMgybVuZ1N0eWxlRmFjdG9yeURlZl9fUE9TVF9SM19ffSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfc3R5bGUnO1xuZXhwb3J0IHtuZ0NsYXNzRGlyZWN0aXZlRGVmX19QT1NUX1IzX18gYXMgybVuZ0NsYXNzRGlyZWN0aXZlRGVmX19QT1NUX1IzX18sIG5nQ2xhc3NGYWN0b3J5RGVmX19QT1NUX1IzX18gYXMgybVuZ0NsYXNzRmFjdG9yeURlZl9fUE9TVF9SM19ffSBmcm9tICcuL2RpcmVjdGl2ZXMvbmdfY2xhc3MnO1xuIl19