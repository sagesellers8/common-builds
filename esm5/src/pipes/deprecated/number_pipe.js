/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { NUMBER_FORMAT_REGEXP, parseIntAutoRadix } from '../../i18n/format_number';
import { NumberFormatStyle } from '../../i18n/locale_data_api';
import { invalidPipeArgumentError } from '../invalid_pipe_argument_error';
import { NumberFormatter } from './intl';
import * as i0 from "@angular/core";
function formatNumber(pipe, locale, value, style, digits, currency, currencyAsSymbol) {
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
    if (style !== NumberFormatStyle.Currency) {
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
        return formatNumber(DeprecatedDecimalPipe, this._locale, value, NumberFormatStyle.Decimal, digits);
    };
    DeprecatedDecimalPipe.ngPipeDef = i0.ɵdefinePipe({ name: "number", type: DeprecatedDecimalPipe, factory: function DeprecatedDecimalPipe_Factory(t) { return new (t || DeprecatedDecimalPipe)(i0.ɵdirectiveInject(LOCALE_ID)); }, pure: true });
    return DeprecatedDecimalPipe;
}());
export { DeprecatedDecimalPipe };
/*@__PURE__*/ i0.ɵsetClassMetadata(DeprecatedDecimalPipe, [{
        type: Pipe,
        args: [{ name: 'number' }]
    }], [{
        type: undefined,
        decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }]
    }], null);
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
        return formatNumber(DeprecatedPercentPipe, this._locale, value, NumberFormatStyle.Percent, digits);
    };
    DeprecatedPercentPipe.ngPipeDef = i0.ɵdefinePipe({ name: "percent", type: DeprecatedPercentPipe, factory: function DeprecatedPercentPipe_Factory(t) { return new (t || DeprecatedPercentPipe)(i0.ɵdirectiveInject(LOCALE_ID)); }, pure: true });
    return DeprecatedPercentPipe;
}());
export { DeprecatedPercentPipe };
/*@__PURE__*/ i0.ɵsetClassMetadata(DeprecatedPercentPipe, [{
        type: Pipe,
        args: [{ name: 'percent' }]
    }], [{
        type: undefined,
        decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }]
    }], null);
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
        return formatNumber(DeprecatedCurrencyPipe, this._locale, value, NumberFormatStyle.Currency, digits, currencyCode, symbolDisplay);
    };
    DeprecatedCurrencyPipe.ngPipeDef = i0.ɵdefinePipe({ name: "currency", type: DeprecatedCurrencyPipe, factory: function DeprecatedCurrencyPipe_Factory(t) { return new (t || DeprecatedCurrencyPipe)(i0.ɵdirectiveInject(LOCALE_ID)); }, pure: true });
    return DeprecatedCurrencyPipe;
}());
export { DeprecatedCurrencyPipe };
/*@__PURE__*/ i0.ɵsetClassMetadata(DeprecatedCurrencyPipe, [{
        type: Pipe,
        args: [{ name: 'currency' }]
    }], [{
        type: undefined,
        decorators: [{
                type: Inject,
                args: [LOCALE_ID]
            }]
    }], null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyX3BpcGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb21tb24vc3JjL3BpcGVzL2RlcHJlY2F0ZWQvbnVtYmVyX3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sUUFBUSxDQUFDOztBQUV2QyxTQUFTLFlBQVksQ0FDakIsSUFBZSxFQUFFLE1BQWMsRUFBRSxLQUFzQixFQUFFLEtBQXdCLEVBQ2pGLE1BQXNCLEVBQUUsUUFBOEIsRUFDdEQsZ0JBQWlDO0lBRFQseUJBQUEsRUFBQSxlQUE4QjtJQUN0RCxpQ0FBQSxFQUFBLHdCQUFpQztJQUNuQyxJQUFJLEtBQUssSUFBSSxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFL0IsNkJBQTZCO0lBQzdCLEtBQUssR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDekYsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsTUFBTSx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDN0M7SUFFRCxJQUFJLE1BQXdCLENBQUM7SUFDN0IsSUFBSSxXQUE2QixDQUFDO0lBQ2xDLElB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QixFQUFFLGFBQThCLEVBQ3hFLE1BQWU7UUFESCw2QkFBQSxFQUFBLG9CQUE0QjtRQUFFLDhCQUFBLEVBQUEscUJBQThCO1FBRTFFLE9BQU8sWUFBWSxDQUNmLHNCQUFzQixFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQy9FLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNuQyxDQUFDO2dGQVRVLHNCQUFzQix5RUFBdEIsc0JBQXNCLHNCQUNiLFNBQVM7aUNBM0ovQjtDQW9LQyxBQVhELElBV0M7U0FWWSxzQkFBc0I7bUNBQXRCLHNCQUFzQjtjQURsQyxJQUFJO2VBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOzs7O3NCQUVULE1BQU07dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05VTUJFUl9GT1JNQVRfUkVHRVhQLCBwYXJzZUludEF1dG9SYWRpeH0gZnJvbSAnLi4vLi4vaTE4bi9mb3JtYXRfbnVtYmVyJztcbmltcG9ydCB7TnVtYmVyRm9ybWF0U3R5bGV9IGZyb20gJy4uLy4uL2kxOG4vbG9jYWxlX2RhdGFfYXBpJztcbmltcG9ydCB7aW52YWxpZFBpcGVBcmd1bWVudEVycm9yfSBmcm9tICcuLi9pbnZhbGlkX3BpcGVfYXJndW1lbnRfZXJyb3InO1xuaW1wb3J0IHtOdW1iZXJGb3JtYXR0ZXJ9IGZyb20gJy4vaW50bCc7XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihcbiAgICBwaXBlOiBUeXBlPGFueT4sIGxvY2FsZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBzdHlsZTogTnVtYmVyRm9ybWF0U3R5bGUsXG4gICAgZGlnaXRzPzogc3RyaW5nIHwgbnVsbCwgY3VycmVuY3k6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICAgIGN1cnJlbmN5QXNTeW1ib2w6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZ3xudWxsIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gIC8vIENvbnZlcnQgc3RyaW5ncyB0byBudW1iZXJzXG4gIHZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhaXNOYU4oK3ZhbHVlIC0gcGFyc2VGbG9hdCh2YWx1ZSkpID8gK3ZhbHVlIDogdmFsdWU7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgaW52YWxpZFBpcGVBcmd1bWVudEVycm9yKHBpcGUsIHZhbHVlKTtcbiAgfVxuXG4gIGxldCBtaW5JbnQ6IG51bWJlcnx1bmRlZmluZWQ7XG4gIGxldCBtaW5GcmFjdGlvbjogbnVtYmVyfHVuZGVmaW5lZDtcbiAgbGV0IG1heEZyYWN0aW9uOiBudW1iZXJ8dW5kZWZpbmVkO1xuICBpZiAoc3R5bGUgIT09IE51bWJlckZvcm1hdFN0eWxlLkN1cnJlbmN5KSB7XG4gICAgLy8gcmVseSBvbiBJbnRsIGRlZmF1bHQgZm9yIGN1cnJlbmN5XG4gICAgbWluSW50ID0gMTtcbiAgICBtaW5GcmFjdGlvbiA9IDA7XG4gICAgbWF4RnJhY3Rpb24gPSAzO1xuICB9XG5cbiAgaWYgKGRpZ2l0cykge1xuICAgIGNvbnN0IHBhcnRzID0gZGlnaXRzLm1hdGNoKE5VTUJFUl9GT1JNQVRfUkVHRVhQKTtcbiAgICBpZiAocGFydHMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtkaWdpdHN9IGlzIG5vdCBhIHZhbGlkIGRpZ2l0IGluZm8gZm9yIG51bWJlciBwaXBlc2ApO1xuICAgIH1cbiAgICBpZiAocGFydHNbMV0gIT0gbnVsbCkgeyAgLy8gbWluIGludGVnZXIgZGlnaXRzXG4gICAgICBtaW5JbnQgPSBwYXJzZUludEF1dG9SYWRpeChwYXJ0c1sxXSk7XG4gICAgfVxuICAgIGlmIChwYXJ0c1szXSAhPSBudWxsKSB7ICAvLyBtaW4gZnJhY3Rpb24gZGlnaXRzXG4gICAgICBtaW5GcmFjdGlvbiA9IHBhcnNlSW50QXV0b1JhZGl4KHBhcnRzWzNdKTtcbiAgICB9XG4gICAgaWYgKHBhcnRzWzVdICE9IG51bGwpIHsgIC8vIG1heCBmcmFjdGlvbiBkaWdpdHNcbiAgICAgIG1heEZyYWN0aW9uID0gcGFyc2VJbnRBdXRvUmFkaXgocGFydHNbNV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBOdW1iZXJGb3JtYXR0ZXIuZm9ybWF0KHZhbHVlIGFzIG51bWJlciwgbG9jYWxlLCBzdHlsZSwge1xuICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiBtaW5JbnQsXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBtaW5GcmFjdGlvbixcbiAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG1heEZyYWN0aW9uLFxuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcbiAgICBjdXJyZW5jeUFzU3ltYm9sOiBjdXJyZW5jeUFzU3ltYm9sLFxuICB9KTtcbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEgbnVtYmVyIGFzIHRleHQuIEdyb3VwIHNpemluZyBhbmQgc2VwYXJhdG9yIGFuZCBvdGhlciBsb2NhbGUtc3BlY2lmaWNcbiAqIGNvbmZpZ3VyYXRpb25zIGFyZSBiYXNlZCBvbiB0aGUgYWN0aXZlIGxvY2FsZS5cbiAqXG4gKiB3aGVyZSBgZXhwcmVzc2lvbmAgaXMgYSBudW1iZXI6XG4gKiAgLSBgZGlnaXRJbmZvYCBpcyBhIGBzdHJpbmdgIHdoaWNoIGhhcyBhIGZvbGxvd2luZyBmb3JtYXQ6IDxicj5cbiAqICAgICA8Y29kZT57bWluSW50ZWdlckRpZ2l0c30ue21pbkZyYWN0aW9uRGlnaXRzfS17bWF4RnJhY3Rpb25EaWdpdHN9PC9jb2RlPlxuICogICAtIGBtaW5JbnRlZ2VyRGlnaXRzYCBpcyB0aGUgbWluaW11bSBudW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgdG8gdXNlLiBEZWZhdWx0cyB0byBgMWAuXG4gKiAgIC0gYG1pbkZyYWN0aW9uRGlnaXRzYCBpcyB0aGUgbWluaW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIGZyYWN0aW9uLiBEZWZhdWx0cyB0byBgMGAuXG4gKiAgIC0gYG1heEZyYWN0aW9uRGlnaXRzYCBpcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIGFmdGVyIGZyYWN0aW9uLiBEZWZhdWx0cyB0byBgM2AuXG4gKlxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhlIGFjY2VwdGFibGUgcmFuZ2UgZm9yIGVhY2ggb2YgdGhlc2UgbnVtYmVycyBhbmQgb3RoZXJcbiAqIGRldGFpbHMgc2VlIHlvdXIgbmF0aXZlIGludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnkuXG4gKlxuICogV0FSTklORzogdGhpcyBwaXBlIHVzZXMgdGhlIEludGVybmF0aW9uYWxpemF0aW9uIEFQSSB3aGljaCBpcyBub3QgeWV0IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnNcbiAqIGFuZCBtYXkgcmVxdWlyZSBhIHBvbHlmaWxsLiBTZWUgW0Jyb3dzZXIgU3VwcG9ydF0oZ3VpZGUvYnJvd3Nlci1zdXBwb3J0KSBmb3IgZGV0YWlscy5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9udW1iZXJfcGlwZS50cyByZWdpb249J0RlcHJlY2F0ZWROdW1iZXJQaXBlJ31cbiAqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAcHVibGljQXBpXG4gKi9cbkBQaXBlKHtuYW1lOiAnbnVtYmVyJ30pXG5leHBvcnQgY2xhc3MgRGVwcmVjYXRlZERlY2ltYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZykge31cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZGlnaXRzPzogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICAgIHJldHVybiBmb3JtYXROdW1iZXIoXG4gICAgICAgIERlcHJlY2F0ZWREZWNpbWFsUGlwZSwgdGhpcy5fbG9jYWxlLCB2YWx1ZSwgTnVtYmVyRm9ybWF0U3R5bGUuRGVjaW1hbCwgZGlnaXRzKTtcbiAgfVxufVxuXG4vKipcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBGb3JtYXRzIGEgbnVtYmVyIGFzIHBlcmNlbnRhZ2UgYWNjb3JkaW5nIHRvIGxvY2FsZSBydWxlcy5cbiAqXG4gKiAtIGBkaWdpdEluZm9gIFNlZSB7QGxpbmsgRGVjaW1hbFBpcGV9IGZvciBkZXRhaWxlZCBkZXNjcmlwdGlvbi5cbiAqXG4gKiBXQVJOSU5HOiB0aGlzIHBpcGUgdXNlcyB0aGUgSW50ZXJuYXRpb25hbGl6YXRpb24gQVBJIHdoaWNoIGlzIG5vdCB5ZXQgYXZhaWxhYmxlIGluIGFsbCBicm93c2Vyc1xuICogYW5kIG1heSByZXF1aXJlIGEgcG9seWZpbGwuIFNlZSBbQnJvd3NlciBTdXBwb3J0XShndWlkZS9icm93c2VyLXN1cHBvcnQpIGZvciBkZXRhaWxzLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL3BlcmNlbnRfcGlwZS50cyByZWdpb249J0RlcHJlY2F0ZWRQZXJjZW50UGlwZSd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5AUGlwZSh7bmFtZTogJ3BlcmNlbnQnfSlcbmV4cG9ydCBjbGFzcyBEZXByZWNhdGVkUGVyY2VudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBkaWdpdHM/OiBzdHJpbmcpOiBzdHJpbmd8bnVsbCB7XG4gICAgcmV0dXJuIGZvcm1hdE51bWJlcihcbiAgICAgICAgRGVwcmVjYXRlZFBlcmNlbnRQaXBlLCB0aGlzLl9sb2NhbGUsIHZhbHVlLCBOdW1iZXJGb3JtYXRTdHlsZS5QZXJjZW50LCBkaWdpdHMpO1xuICB9XG59XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogRm9ybWF0cyBhIG51bWJlciBhcyBjdXJyZW5jeSB1c2luZyBsb2NhbGUgcnVsZXMuXG4gKlxuICogVXNlIGBjdXJyZW5jeWAgdG8gZm9ybWF0IGEgbnVtYmVyIGFzIGN1cnJlbmN5LlxuICpcbiAqIC0gYGN1cnJlbmN5Q29kZWAgaXMgdGhlIFtJU08gNDIxN10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpIGN1cnJlbmN5IGNvZGUsIHN1Y2hcbiAqICAgIGFzIGBVU0RgIGZvciB0aGUgVVMgZG9sbGFyIGFuZCBgRVVSYCBmb3IgdGhlIGV1cm8uXG4gKiAtIGBzeW1ib2xEaXNwbGF5YCBpcyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSB0aGUgY3VycmVuY3kgc3ltYm9sIG9yIGNvZGUuXG4gKiAgIC0gYHRydWVgOiB1c2Ugc3ltYm9sIChlLmcuIGAkYCkuXG4gKiAgIC0gYGZhbHNlYChkZWZhdWx0KTogdXNlIGNvZGUgKGUuZy4gYFVTRGApLlxuICogLSBgZGlnaXRJbmZvYCBTZWUge0BsaW5rIERlY2ltYWxQaXBlfSBmb3IgZGV0YWlsZWQgZGVzY3JpcHRpb24uXG4gKlxuICogV0FSTklORzogdGhpcyBwaXBlIHVzZXMgdGhlIEludGVybmF0aW9uYWxpemF0aW9uIEFQSSB3aGljaCBpcyBub3QgeWV0IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnNcbiAqIGFuZCBtYXkgcmVxdWlyZSBhIHBvbHlmaWxsLiBTZWUgW0Jyb3dzZXIgU3VwcG9ydF0oZ3VpZGUvYnJvd3Nlci1zdXBwb3J0KSBmb3IgZGV0YWlscy5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICoge0BleGFtcGxlIGNvbW1vbi9waXBlcy90cy9jdXJyZW5jeV9waXBlLnRzIHJlZ2lvbj0nRGVwcmVjYXRlZEN1cnJlbmN5UGlwZSd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5AUGlwZSh7bmFtZTogJ2N1cnJlbmN5J30pXG5leHBvcnQgY2xhc3MgRGVwcmVjYXRlZEN1cnJlbmN5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcpIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgICAgdmFsdWU6IGFueSwgY3VycmVuY3lDb2RlOiBzdHJpbmcgPSAnVVNEJywgc3ltYm9sRGlzcGxheTogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgZGlnaXRzPzogc3RyaW5nKTogc3RyaW5nfG51bGwge1xuICAgIHJldHVybiBmb3JtYXROdW1iZXIoXG4gICAgICAgIERlcHJlY2F0ZWRDdXJyZW5jeVBpcGUsIHRoaXMuX2xvY2FsZSwgdmFsdWUsIE51bWJlckZvcm1hdFN0eWxlLkN1cnJlbmN5LCBkaWdpdHMsXG4gICAgICAgIGN1cnJlbmN5Q29kZSwgc3ltYm9sRGlzcGxheSk7XG4gIH1cbn1cbiJdfQ==