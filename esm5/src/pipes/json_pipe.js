/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
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
    JsonPipe.prototype.transform = function (value) {
        return JSON.stringify(value, null, 2);
    };
    JsonPipe.ɵfac = function JsonPipe_Factory(t) { return new (t || JsonPipe)(); };
    JsonPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "json", type: JsonPipe, pure: false });
    return JsonPipe;
}());
export { JsonPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(JsonPipe, [{
        type: Pipe,
        args: [{ name: 'json', pure: false }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbl9waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9waXBlcy9qc29uX3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7O0FBRWxEOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0g7SUFBQTtLQVFDO0lBTkM7O09BRUc7SUFDSCw0QkFBUyxHQUFULFVBQVUsS0FBVTtRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO29FQU5VLFFBQVE7MkRBQVIsUUFBUTttQkExQnJCO0NBaUNDLEFBUkQsSUFRQztTQVBZLFFBQVE7a0RBQVIsUUFBUTtjQURwQixJQUFJO2VBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogQ29udmVydHMgYSB2YWx1ZSBpbnRvIGl0cyBKU09OLWZvcm1hdCByZXByZXNlbnRhdGlvbi4gIFVzZWZ1bCBmb3IgZGVidWdnaW5nLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogVGhlIGZvbGxvd2luZyBjb21wb25lbnQgdXNlcyBhIEpTT04gcGlwZSB0byBjb252ZXJ0IGFuIG9iamVjdFxuICogdG8gSlNPTiBmb3JtYXQsIGFuZCBkaXNwbGF5cyB0aGUgc3RyaW5nIGluIGJvdGggZm9ybWF0cyBmb3IgY29tcGFyaXNvbi5cbiAqXG4gKiB7QGV4YW1wbGUgY29tbW9uL3BpcGVzL3RzL2pzb25fcGlwZS50cyByZWdpb249J0pzb25QaXBlJ31cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBQaXBlKHtuYW1lOiAnanNvbicsIHB1cmU6IGZhbHNlfSlcbmV4cG9ydCBjbGFzcyBKc29uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogQHBhcmFtIHZhbHVlIEEgdmFsdWUgb2YgYW55IHR5cGUgdG8gY29udmVydCBpbnRvIGEgSlNPTi1mb3JtYXQgc3RyaW5nLlxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMik7XG4gIH1cbn1cbiJdfQ==