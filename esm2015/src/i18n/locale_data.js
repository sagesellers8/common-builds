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
/**
 * \@experimental i18n support is experimental.
 */
export const /** @type {?} */ LOCALE_DATA = {};
/**
 * Register global data to be used internally by Angular. See the
 * {\@linkDocs guide/i18n#i18n-pipes "I18n guide"} to know how to import additional locale data.
 *
 * \@experimental i18n support is experimental.
 * @param {?} data
 * @param {?=} localeId
 * @param {?=} extraData
 * @return {?}
 */
export function registerLocaleData(data, localeId, extraData) {
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
/** @enum {number} */
const LocaleDataIndex = {
    LocaleId: 0,
    DayPeriodsFormat: 1,
    DayPeriodsStandalone: 2,
    DaysFormat: 3,
    DaysStandalone: 4,
    MonthsFormat: 5,
    MonthsStandalone: 6,
    Eras: 7,
    FirstDayOfWeek: 8,
    WeekendRange: 9,
    DateFormat: 10,
    TimeFormat: 11,
    DateTimeFormat: 12,
    NumberSymbols: 13,
    NumberFormats: 14,
    CurrencySymbol: 15,
    CurrencyName: 16,
    Currencies: 17,
    PluralCase: 18,
    ExtraData: 19,
};
export { LocaleDataIndex };
/** @enum {number} */
const ExtraLocaleDataIndex = {
    ExtraDayPeriodFormats: 0,
    ExtraDayPeriodStandalone: 1,
    ExtraDayPeriodsRules: 2,
};
export { ExtraLocaleDataIndex };
/** @enum {number} */
const CurrencyIndex = { Symbol: 0, SymbolNarrow: 1, NbOfDigits: 2, };
export { CurrencyIndex };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlX2RhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2kxOG4vbG9jYWxlX2RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXQSxNQUFNLENBQUMsdUJBQU0sV0FBVyxHQUE4QixFQUFFLENBQUM7Ozs7Ozs7Ozs7O0FBU3pELE1BQU0sNkJBQTZCLElBQVMsRUFBRSxRQUF1QixFQUFFLFNBQWU7SUFDcEYsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDaEMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNyQixRQUFRLEdBQUcsSUFBSSxrQkFBMEIsQ0FBQztLQUMzQztJQUVELFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVyRCxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRTdCLElBQUksU0FBUyxFQUFFO1FBQ2IsV0FBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBMkIsR0FBRyxTQUFTLENBQUM7S0FDOUQ7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAZXhwZXJpbWVudGFsIGkxOG4gc3VwcG9ydCBpcyBleHBlcmltZW50YWwuXG4gKi9cbmV4cG9ydCBjb25zdCBMT0NBTEVfREFUQToge1tsb2NhbGVJZDogc3RyaW5nXTogYW55fSA9IHt9O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGdsb2JhbCBkYXRhIHRvIGJlIHVzZWQgaW50ZXJuYWxseSBieSBBbmd1bGFyLiBTZWUgdGhlXG4gKiB7QGxpbmtEb2NzIGd1aWRlL2kxOG4jaTE4bi1waXBlcyBcIkkxOG4gZ3VpZGVcIn0gdG8ga25vdyBob3cgdG8gaW1wb3J0IGFkZGl0aW9uYWwgbG9jYWxlIGRhdGEuXG4gKlxuICogQGV4cGVyaW1lbnRhbCBpMThuIHN1cHBvcnQgaXMgZXhwZXJpbWVudGFsLlxuICovXG4vLyBUaGUgc2lnbmF0dXJlIHJlZ2lzdGVyTG9jYWxlRGF0YShkYXRhOiBhbnksIGV4dHJhRGF0YT86IGFueSkgaXMgZGVwcmVjYXRlZCBzaW5jZSB2NS4xXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJMb2NhbGVEYXRhKGRhdGE6IGFueSwgbG9jYWxlSWQ/OiBzdHJpbmcgfCBhbnksIGV4dHJhRGF0YT86IGFueSk6IHZvaWQge1xuICBpZiAodHlwZW9mIGxvY2FsZUlkICE9PSAnc3RyaW5nJykge1xuICAgIGV4dHJhRGF0YSA9IGxvY2FsZUlkO1xuICAgIGxvY2FsZUlkID0gZGF0YVtMb2NhbGVEYXRhSW5kZXguTG9jYWxlSWRdO1xuICB9XG5cbiAgbG9jYWxlSWQgPSBsb2NhbGVJZC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL18vZywgJy0nKTtcblxuICBMT0NBTEVfREFUQVtsb2NhbGVJZF0gPSBkYXRhO1xuXG4gIGlmIChleHRyYURhdGEpIHtcbiAgICBMT0NBTEVfREFUQVtsb2NhbGVJZF1bTG9jYWxlRGF0YUluZGV4LkV4dHJhRGF0YV0gPSBleHRyYURhdGE7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmRleCBvZiBlYWNoIHR5cGUgb2YgbG9jYWxlIGRhdGEgZnJvbSB0aGUgbG9jYWxlIGRhdGEgYXJyYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gTG9jYWxlRGF0YUluZGV4IHtcbiAgTG9jYWxlSWQgPSAwLFxuICBEYXlQZXJpb2RzRm9ybWF0LFxuICBEYXlQZXJpb2RzU3RhbmRhbG9uZSxcbiAgRGF5c0Zvcm1hdCxcbiAgRGF5c1N0YW5kYWxvbmUsXG4gIE1vbnRoc0Zvcm1hdCxcbiAgTW9udGhzU3RhbmRhbG9uZSxcbiAgRXJhcyxcbiAgRmlyc3REYXlPZldlZWssXG4gIFdlZWtlbmRSYW5nZSxcbiAgRGF0ZUZvcm1hdCxcbiAgVGltZUZvcm1hdCxcbiAgRGF0ZVRpbWVGb3JtYXQsXG4gIE51bWJlclN5bWJvbHMsXG4gIE51bWJlckZvcm1hdHMsXG4gIEN1cnJlbmN5U3ltYm9sLFxuICBDdXJyZW5jeU5hbWUsXG4gIEN1cnJlbmNpZXMsXG4gIFBsdXJhbENhc2UsXG4gIEV4dHJhRGF0YVxufVxuXG4vKipcbiAqIEluZGV4IG9mIGVhY2ggdHlwZSBvZiBsb2NhbGUgZGF0YSBmcm9tIHRoZSBleHRyYSBsb2NhbGUgZGF0YSBhcnJheVxuICovXG5leHBvcnQgY29uc3QgZW51bSBFeHRyYUxvY2FsZURhdGFJbmRleCB7XG4gIEV4dHJhRGF5UGVyaW9kRm9ybWF0cyA9IDAsXG4gIEV4dHJhRGF5UGVyaW9kU3RhbmRhbG9uZSxcbiAgRXh0cmFEYXlQZXJpb2RzUnVsZXNcbn1cblxuLyoqXG4gKiBJbmRleCBvZiBlYWNoIHZhbHVlIGluIGN1cnJlbmN5IGRhdGEgKHVzZWQgdG8gZGVzY3JpYmUgQ1VSUkVOQ0lFU19FTiBpbiBjdXJyZW5jaWVzLnRzKVxuICovXG5leHBvcnQgY29uc3QgZW51bSBDdXJyZW5jeUluZGV4IHtTeW1ib2wgPSAwLCBTeW1ib2xOYXJyb3csIE5iT2ZEaWdpdHN9XG4iXX0=