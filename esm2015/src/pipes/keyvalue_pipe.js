/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/pipes/keyvalue_pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { KeyValueDiffers, Pipe } from '@angular/core';
/**
 * @template K, V
 * @param {?} key
 * @param {?} value
 * @return {?}
 */
function makeKeyValuePair(key, value) {
    return { key: key, value: value };
}
/**
 * A key value pair.
 * Usually used to represent the key value pairs from a Map or Object.
 *
 * \@publicApi
 * @record
 * @template K, V
 */
export function KeyValue() { }
if (false) {
    /** @type {?} */
    KeyValue.prototype.key;
    /** @type {?} */
    KeyValue.prototype.value;
}
/**
 * \@ngModule CommonModule
 * \@description
 *
 * Transforms Object or Map into an array of key value pairs.
 *
 * The output array will be ordered by keys.
 * By default the comparator will be by Unicode point value.
 * You can optionally pass a compareFn if your keys are complex types.
 *
 * \@usageNotes
 * ### Examples
 *
 * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
 * pipe.
 *
 * {\@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
 *
 * \@publicApi
 */
let KeyValuePipe = /** @class */ (() => {
    /**
     * \@ngModule CommonModule
     * \@description
     *
     * Transforms Object or Map into an array of key value pairs.
     *
     * The output array will be ordered by keys.
     * By default the comparator will be by Unicode point value.
     * You can optionally pass a compareFn if your keys are complex types.
     *
     * \@usageNotes
     * ### Examples
     *
     * This examples show how an Object or a Map can be iterated by ngFor with the use of this keyvalue
     * pipe.
     *
     * {\@example common/pipes/ts/keyvalue_pipe.ts region='KeyValuePipe'}
     *
     * \@publicApi
     */
    class KeyValuePipe {
        /**
         * @param {?} differs
         */
        constructor(differs) {
            this.differs = differs;
            this.keyValues = [];
        }
        /**
         * @template K, V
         * @param {?} input
         * @param {?=} compareFn
         * @return {?}
         */
        transform(input, compareFn = defaultComparator) {
            if (!input || (!(input instanceof Map) && typeof input !== 'object')) {
                return null;
            }
            if (!this.differ) {
                // make a differ for whatever type we've been passed in
                this.differ = this.differs.find(input).create();
            }
            /** @type {?} */
            const differChanges = this.differ.diff((/** @type {?} */ (input)));
            if (differChanges) {
                this.keyValues = [];
                differChanges.forEachItem((/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
                    this.keyValues.push(makeKeyValuePair(r.key, (/** @type {?} */ (r.currentValue))));
                }));
                this.keyValues.sort(compareFn);
            }
            return this.keyValues;
        }
    }
    KeyValuePipe.decorators = [
        { type: Pipe, args: [{ name: 'keyvalue', pure: false },] }
    ];
    /** @nocollapse */
    KeyValuePipe.ctorParameters = () => [
        { type: KeyValueDiffers }
    ];
    return KeyValuePipe;
})();
export { KeyValuePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    KeyValuePipe.prototype.differ;
    /**
     * @type {?}
     * @private
     */
    KeyValuePipe.prototype.keyValues;
    /**
     * @type {?}
     * @private
     */
    KeyValuePipe.prototype.differs;
}
/**
 * @template K, V
 * @param {?} keyValueA
 * @param {?} keyValueB
 * @return {?}
 */
export function defaultComparator(keyValueA, keyValueB) {
    /** @type {?} */
    const a = keyValueA.key;
    /** @type {?} */
    const b = keyValueB.key;
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
    /** @type {?} */
    const aString = String(a);
    /** @type {?} */
    const bString = String(b);
    return aString == bString ? 0 : aString < bString ? -1 : 1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5dmFsdWVfcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvcGlwZXMva2V5dmFsdWVfcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQXdELGVBQWUsRUFBRSxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRTFILFNBQVMsZ0JBQWdCLENBQU8sR0FBTSxFQUFFLEtBQVE7SUFDOUMsT0FBTyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQ2xDLENBQUM7Ozs7Ozs7OztBQVFELDhCQUdDOzs7SUFGQyx1QkFBTzs7SUFDUCx5QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsTUFDYSxZQUFZOzs7O1FBQ3ZCLFlBQTZCLE9BQXdCO1lBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1lBRzdDLGNBQVMsR0FBOEIsRUFBRSxDQUFDO1FBSE0sQ0FBQzs7Ozs7OztRQTJCekQsU0FBUyxDQUNMLEtBQTBELEVBQzFELFlBQThELGlCQUFpQjtZQUVqRixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxHQUFHLENBQUMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsRUFBRTtnQkFDcEUsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQix1REFBdUQ7Z0JBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDakQ7O2tCQUVLLGFBQWEsR0FBK0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUM7WUFFaEYsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixhQUFhLENBQUMsV0FBVzs7OztnQkFBQyxDQUFDLENBQTZCLEVBQUUsRUFBRTtvQkFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxtQkFBQSxDQUFDLENBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDLEVBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNoQztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7Z0JBcERGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQzs7OztnQkFyQzBCLGVBQWU7O0lBMEY5RSxtQkFBQztLQUFBO1NBcERZLFlBQVk7Ozs7OztJQUd2Qiw4QkFBMEM7Ozs7O0lBQzFDLGlDQUFrRDs7Ozs7SUFIdEMsK0JBQXlDOzs7Ozs7OztBQXFEdkQsTUFBTSxVQUFVLGlCQUFpQixDQUM3QixTQUF5QixFQUFFLFNBQXlCOztVQUNoRCxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUc7O1VBQ2pCLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRztJQUN2Qix1QkFBdUI7SUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLHVEQUF1RDtJQUN2RCxJQUFJLENBQUMsS0FBSyxTQUFTO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDLEtBQUssU0FBUztRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0IsbURBQW1EO0lBQ25ELElBQUksQ0FBQyxLQUFLLElBQUk7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QixJQUFJLENBQUMsS0FBSyxJQUFJO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLE9BQU8sQ0FBQyxJQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUU7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNkO0lBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxTQUFTLElBQUksT0FBTyxDQUFDLElBQUksU0FBUyxFQUFFO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2Qjs7O1VBRUssT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1VBQ25CLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7S2V5VmFsdWVDaGFuZ2VSZWNvcmQsIEtleVZhbHVlQ2hhbmdlcywgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmZ1bmN0aW9uIG1ha2VLZXlWYWx1ZVBhaXI8SywgVj4oa2V5OiBLLCB2YWx1ZTogVik6IEtleVZhbHVlPEssIFY+IHtcbiAgcmV0dXJuIHtrZXk6IGtleSwgdmFsdWU6IHZhbHVlfTtcbn1cblxuLyoqXG4gKiBBIGtleSB2YWx1ZSBwYWlyLlxuICogVXN1YWxseSB1c2VkIHRvIHJlcHJlc2VudCB0aGUga2V5IHZhbHVlIHBhaXJzIGZyb20gYSBNYXAgb3IgT2JqZWN0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBLZXlWYWx1ZTxLLCBWPiB7XG4gIGtleTogSztcbiAgdmFsdWU6IFY7XG59XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogVHJhbnNmb3JtcyBPYmplY3Qgb3IgTWFwIGludG8gYW4gYXJyYXkgb2Yga2V5IHZhbHVlIHBhaXJzLlxuICpcbiAqIFRoZSBvdXRwdXQgYXJyYXkgd2lsbCBiZSBvcmRlcmVkIGJ5IGtleXMuXG4gKiBCeSBkZWZhdWx0IHRoZSBjb21wYXJhdG9yIHdpbGwgYmUgYnkgVW5pY29kZSBwb2ludCB2YWx1ZS5cbiAqIFlvdSBjYW4gb3B0aW9uYWxseSBwYXNzIGEgY29tcGFyZUZuIGlmIHlvdXIga2V5cyBhcmUgY29tcGxleCB0eXBlcy5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIyMjIEV4YW1wbGVzXG4gKlxuICogVGhpcyBleGFtcGxlcyBzaG93IGhvdyBhbiBPYmplY3Qgb3IgYSBNYXAgY2FuIGJlIGl0ZXJhdGVkIGJ5IG5nRm9yIHdpdGggdGhlIHVzZSBvZiB0aGlzIGtleXZhbHVlXG4gKiBwaXBlLlxuICpcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMva2V5dmFsdWVfcGlwZS50cyByZWdpb249J0tleVZhbHVlUGlwZSd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5AUGlwZSh7bmFtZTogJ2tleXZhbHVlJywgcHVyZTogZmFsc2V9KVxuZXhwb3J0IGNsYXNzIEtleVZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRpZmZlcnM6IEtleVZhbHVlRGlmZmVycykge31cblxuICBwcml2YXRlIGRpZmZlciE6IEtleVZhbHVlRGlmZmVyPGFueSwgYW55PjtcbiAgcHJpdmF0ZSBrZXlWYWx1ZXM6IEFycmF5PEtleVZhbHVlPGFueSwgYW55Pj4gPSBbXTtcblxuICB0cmFuc2Zvcm08SywgVj4oaW5wdXQ6IG51bGwsIGNvbXBhcmVGbj86IChhOiBLZXlWYWx1ZTxLLCBWPiwgYjogS2V5VmFsdWU8SywgVj4pID0+IG51bWJlcik6IG51bGw7XG4gIHRyYW5zZm9ybTxWPihcbiAgICAgIGlucHV0OiB7W2tleTogc3RyaW5nXTogVn18TWFwPHN0cmluZywgVj4sXG4gICAgICBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8c3RyaW5nLCBWPiwgYjogS2V5VmFsdWU8c3RyaW5nLCBWPikgPT4gbnVtYmVyKTpcbiAgICAgIEFycmF5PEtleVZhbHVlPHN0cmluZywgVj4+O1xuICB0cmFuc2Zvcm08Vj4oXG4gICAgICBpbnB1dDoge1trZXk6IHN0cmluZ106IFZ9fE1hcDxzdHJpbmcsIFY+fG51bGwsXG4gICAgICBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8c3RyaW5nLCBWPiwgYjogS2V5VmFsdWU8c3RyaW5nLCBWPikgPT4gbnVtYmVyKTpcbiAgICAgIEFycmF5PEtleVZhbHVlPHN0cmluZywgVj4+fG51bGw7XG4gIHRyYW5zZm9ybTxWPihcbiAgICAgIGlucHV0OiB7W2tleTogbnVtYmVyXTogVn18TWFwPG51bWJlciwgVj4sXG4gICAgICBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8bnVtYmVyLCBWPiwgYjogS2V5VmFsdWU8bnVtYmVyLCBWPikgPT4gbnVtYmVyKTpcbiAgICAgIEFycmF5PEtleVZhbHVlPG51bWJlciwgVj4+O1xuICB0cmFuc2Zvcm08Vj4oXG4gICAgICBpbnB1dDoge1trZXk6IG51bWJlcl06IFZ9fE1hcDxudW1iZXIsIFY+fG51bGwsXG4gICAgICBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8bnVtYmVyLCBWPiwgYjogS2V5VmFsdWU8bnVtYmVyLCBWPikgPT4gbnVtYmVyKTpcbiAgICAgIEFycmF5PEtleVZhbHVlPG51bWJlciwgVj4+fG51bGw7XG4gIHRyYW5zZm9ybTxLLCBWPihpbnB1dDogTWFwPEssIFY+LCBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8SywgVj4sIGI6IEtleVZhbHVlPEssIFY+KSA9PiBudW1iZXIpOlxuICAgICAgQXJyYXk8S2V5VmFsdWU8SywgVj4+O1xuICB0cmFuc2Zvcm08SywgVj4oXG4gICAgICBpbnB1dDogTWFwPEssIFY+fG51bGwsXG4gICAgICBjb21wYXJlRm4/OiAoYTogS2V5VmFsdWU8SywgVj4sIGI6IEtleVZhbHVlPEssIFY+KSA9PiBudW1iZXIpOiBBcnJheTxLZXlWYWx1ZTxLLCBWPj58bnVsbDtcbiAgdHJhbnNmb3JtPEssIFY+KFxuICAgICAgaW5wdXQ6IG51bGx8e1trZXk6IHN0cmluZ106IFYsIFtrZXk6IG51bWJlcl06IFZ9fE1hcDxLLCBWPixcbiAgICAgIGNvbXBhcmVGbjogKGE6IEtleVZhbHVlPEssIFY+LCBiOiBLZXlWYWx1ZTxLLCBWPikgPT4gbnVtYmVyID0gZGVmYXVsdENvbXBhcmF0b3IpOlxuICAgICAgQXJyYXk8S2V5VmFsdWU8SywgVj4+fG51bGwge1xuICAgIGlmICghaW5wdXQgfHwgKCEoaW5wdXQgaW5zdGFuY2VvZiBNYXApICYmIHR5cGVvZiBpbnB1dCAhPT0gJ29iamVjdCcpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGlmZmVyKSB7XG4gICAgICAvLyBtYWtlIGEgZGlmZmVyIGZvciB3aGF0ZXZlciB0eXBlIHdlJ3ZlIGJlZW4gcGFzc2VkIGluXG4gICAgICB0aGlzLmRpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKGlucHV0KS5jcmVhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaWZmZXJDaGFuZ2VzOiBLZXlWYWx1ZUNoYW5nZXM8SywgVj58bnVsbCA9IHRoaXMuZGlmZmVyLmRpZmYoaW5wdXQgYXMgYW55KTtcblxuICAgIGlmIChkaWZmZXJDaGFuZ2VzKSB7XG4gICAgICB0aGlzLmtleVZhbHVlcyA9IFtdO1xuICAgICAgZGlmZmVyQ2hhbmdlcy5mb3JFYWNoSXRlbSgocjogS2V5VmFsdWVDaGFuZ2VSZWNvcmQ8SywgVj4pID0+IHtcbiAgICAgICAgdGhpcy5rZXlWYWx1ZXMucHVzaChtYWtlS2V5VmFsdWVQYWlyKHIua2V5LCByLmN1cnJlbnRWYWx1ZSEpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5rZXlWYWx1ZXMuc29ydChjb21wYXJlRm4pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5rZXlWYWx1ZXM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRDb21wYXJhdG9yPEssIFY+KFxuICAgIGtleVZhbHVlQTogS2V5VmFsdWU8SywgVj4sIGtleVZhbHVlQjogS2V5VmFsdWU8SywgVj4pOiBudW1iZXIge1xuICBjb25zdCBhID0ga2V5VmFsdWVBLmtleTtcbiAgY29uc3QgYiA9IGtleVZhbHVlQi5rZXk7XG4gIC8vIGlmIHNhbWUgZXhpdCB3aXRoIDA7XG4gIGlmIChhID09PSBiKSByZXR1cm4gMDtcbiAgLy8gbWFrZSBzdXJlIHRoYXQgdW5kZWZpbmVkIGFyZSBhdCB0aGUgZW5kIG9mIHRoZSBzb3J0LlxuICBpZiAoYSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMTtcbiAgaWYgKGIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIC0xO1xuICAvLyBtYWtlIHN1cmUgdGhhdCBudWxscyBhcmUgYXQgdGhlIGVuZCBvZiB0aGUgc29ydC5cbiAgaWYgKGEgPT09IG51bGwpIHJldHVybiAxO1xuICBpZiAoYiA9PT0gbnVsbCkgcmV0dXJuIC0xO1xuICBpZiAodHlwZW9mIGEgPT0gJ3N0cmluZycgJiYgdHlwZW9mIGIgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XG4gIH1cbiAgaWYgKHR5cGVvZiBhID09ICdudW1iZXInICYmIHR5cGVvZiBiID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGEgLSBiO1xuICB9XG4gIGlmICh0eXBlb2YgYSA9PSAnYm9vbGVhbicgJiYgdHlwZW9mIGIgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGEgPCBiID8gLTEgOiAxO1xuICB9XG4gIC8vIGBhYCBhbmQgYGJgIGFyZSBvZiBkaWZmZXJlbnQgdHlwZXMuIENvbXBhcmUgdGhlaXIgc3RyaW5nIHZhbHVlcy5cbiAgY29uc3QgYVN0cmluZyA9IFN0cmluZyhhKTtcbiAgY29uc3QgYlN0cmluZyA9IFN0cmluZyhiKTtcbiAgcmV0dXJuIGFTdHJpbmcgPT0gYlN0cmluZyA/IDAgOiBhU3RyaW5nIDwgYlN0cmluZyA/IC0xIDogMTtcbn1cbiJdfQ==