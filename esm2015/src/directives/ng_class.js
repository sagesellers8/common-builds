/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input, ɵɵdefineDirective, ɵɵelementHostStyling, ɵɵelementHostStylingApply, ɵɵelementHostStylingMap } from '@angular/core';
import { NgClassImpl, NgClassImplProvider } from './ng_class_impl';
/*
 * NgClass (as well as NgStyle) behaves differently when loaded in the VE and when not.
 *
 * If the VE is present (which is for older versions of Angular) then NgClass will inject
 * the legacy diffing algorithm as a service and delegate all styling changes to that.
 *
 * If the VE is not present then NgStyle will normalize (through the injected service) and
 * then write all styling changes to the `[style]` binding directly (through a host binding).
 * Then Angular will notice the host binding change and treat the changes as styling
 * changes and apply them via the core styling instructions that exist within Angular.
 */
// used when the VE is present
/** @type {?} */
export const ngClassDirectiveDef__PRE_R3__ = undefined;
// used when the VE is not present (note the directive will
// never be instantiated normally because it is apart of a
// base class)
/** @type {?} */
export const ngClassDirectiveDef__POST_R3__ = ɵɵdefineDirective({
    type: (/** @type {?} */ ((/**
     * @return {?}
     */
    function () { }))),
    selectors: (/** @type {?} */ (null)),
    factory: (/**
     * @return {?}
     */
    () => { }),
    hostBindings: (/**
     * @param {?} rf
     * @param {?} ctx
     * @param {?} elIndex
     * @return {?}
     */
    function (rf, ctx, elIndex) {
        if (rf & 1 /* Create */) {
            ɵɵelementHostStyling();
        }
        if (rf & 2 /* Update */) {
            ɵɵelementHostStylingMap(ctx.getValue());
            ɵɵelementHostStylingApply();
        }
    })
});
/** @type {?} */
export const ngClassDirectiveDef = ngClassDirectiveDef__PRE_R3__;
/**
 * Serves as the base non-VE container for NgClass.
 *
 * While this is a base class that NgClass extends from, the
 * class itself acts as a container for non-VE code to setup
 * a link to the `[class]` host binding (via the static
 * `ngDirectiveDef` property on the class).
 *
 * Note that the `ngDirectiveDef` property's code is switched
 * depending if VE is present or not (this allows for the
 * binding code to be set only for newer versions of Angular).
 *
 * \@publicApi
 */
export class NgClassBase {
    /**
     * @param {?} _delegate
     */
    constructor(_delegate) {
        this._delegate = _delegate;
    }
    /**
     * @return {?}
     */
    getValue() { return this._delegate.getValue(); }
}
/** @nocollapse */ NgClassBase.ngDirectiveDef = ngClassDirectiveDef;
if (false) {
    /** @nocollapse @type {?} */
    NgClassBase.ngDirectiveDef;
    /**
     * @type {?}
     * @protected
     */
    NgClassBase.prototype._delegate;
}
/**
 * \@ngModule CommonModule
 *
 * \@usageNotes
 * ```
 *     <some-element [ngClass]="'first second'">...</some-element>
 *
 *     <some-element [ngClass]="['first', 'second']">...</some-element>
 *
 *     <some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
 *
 *     <some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
 *
 *     <some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
 * ```
 *
 * \@description
 *
 * Adds and removes CSS classes on an HTML element.
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * \@publicApi
 */
export class NgClass extends NgClassBase {
    /**
     * @param {?} delegate
     */
    constructor(delegate) { super(delegate); }
    /**
     * @param {?} value
     * @return {?}
     */
    set klass(value) { this._delegate.setClass(value); }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngClass(value) {
        this._delegate.setNgClass(value);
    }
    /**
     * @return {?}
     */
    ngDoCheck() { this._delegate.applyChanges(); }
}
NgClass.decorators = [
    { type: Directive, args: [{ selector: '[ngClass]', providers: [NgClassImplProvider] },] }
];
/** @nocollapse */
NgClass.ctorParameters = () => [
    { type: NgClassImpl }
];
NgClass.propDecorators = {
    klass: [{ type: Input, args: ['class',] }],
    ngClass: [{ type: Input, args: ['ngClass',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2RpcmVjdGl2ZXMvbmdfY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsU0FBUyxFQUFXLEtBQUssRUFBZ0IsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUseUJBQXlCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkssT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWlCakUsTUFBTSxPQUFPLDZCQUE2QixHQUFHLFNBQVM7Ozs7O0FBS3RELE1BQU0sT0FBTyw4QkFBOEIsR0FBRyxpQkFBaUIsQ0FBQztJQUM5RCxJQUFJLEVBQUU7OztJQUFBLGNBQVksQ0FBQyxHQUFPO0lBQzFCLFNBQVMsRUFBRSxtQkFBQSxJQUFJLEVBQU87SUFDdEIsT0FBTzs7O0lBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFBO0lBQ2pCLFlBQVk7Ozs7OztJQUFFLFVBQVMsRUFBZ0IsRUFBRSxHQUFRLEVBQUUsT0FBZTtRQUNoRSxJQUFJLEVBQUUsaUJBQXNCLEVBQUU7WUFDNUIsb0JBQW9CLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksRUFBRSxpQkFBc0IsRUFBRTtZQUM1Qix1QkFBdUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN4Qyx5QkFBeUIsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQyxDQUFBO0NBQ0YsQ0FBQzs7QUFFRixNQUFNLE9BQU8sbUJBQW1CLEdBQUcsNkJBQTZCOzs7Ozs7Ozs7Ozs7Ozs7QUFnQmhFLE1BQU0sT0FBTyxXQUFXOzs7O0lBR3RCLFlBQXNCLFNBQXNCO1FBQXRCLGNBQVMsR0FBVCxTQUFTLENBQWE7SUFBRyxDQUFDOzs7O0lBRWhELFFBQVEsS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUp6QywwQkFBYyxHQUFRLG1CQUFtQixDQUFDOzs7SUFBakQsMkJBQWlEOzs7OztJQUVyQyxnQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDOUMsTUFBTSxPQUFPLE9BQVEsU0FBUSxXQUFXOzs7O0lBQ3RDLFlBQVksUUFBcUIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUV2RCxJQUNJLEtBQUssQ0FBQyxLQUFhLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUU1RCxJQUNJLE9BQU8sQ0FBQyxLQUF5RDtRQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7WUFaL0MsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFDOzs7O1lBekY1RCxXQUFXOzs7b0JBNkZoQixLQUFLLFNBQUMsT0FBTztzQkFHYixLQUFLLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7RGlyZWN0aXZlLCBEb0NoZWNrLCBJbnB1dCwgybVSZW5kZXJGbGFncywgybXJtWRlZmluZURpcmVjdGl2ZSwgybXJtWVsZW1lbnRIb3N0U3R5bGluZywgybXJtWVsZW1lbnRIb3N0U3R5bGluZ0FwcGx5LCDJtcm1ZWxlbWVudEhvc3RTdHlsaW5nTWFwfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtOZ0NsYXNzSW1wbCwgTmdDbGFzc0ltcGxQcm92aWRlcn0gZnJvbSAnLi9uZ19jbGFzc19pbXBsJztcblxuXG5cbi8qXG4gKiBOZ0NsYXNzIChhcyB3ZWxsIGFzIE5nU3R5bGUpIGJlaGF2ZXMgZGlmZmVyZW50bHkgd2hlbiBsb2FkZWQgaW4gdGhlIFZFIGFuZCB3aGVuIG5vdC5cbiAqXG4gKiBJZiB0aGUgVkUgaXMgcHJlc2VudCAod2hpY2ggaXMgZm9yIG9sZGVyIHZlcnNpb25zIG9mIEFuZ3VsYXIpIHRoZW4gTmdDbGFzcyB3aWxsIGluamVjdFxuICogdGhlIGxlZ2FjeSBkaWZmaW5nIGFsZ29yaXRobSBhcyBhIHNlcnZpY2UgYW5kIGRlbGVnYXRlIGFsbCBzdHlsaW5nIGNoYW5nZXMgdG8gdGhhdC5cbiAqXG4gKiBJZiB0aGUgVkUgaXMgbm90IHByZXNlbnQgdGhlbiBOZ1N0eWxlIHdpbGwgbm9ybWFsaXplICh0aHJvdWdoIHRoZSBpbmplY3RlZCBzZXJ2aWNlKSBhbmRcbiAqIHRoZW4gd3JpdGUgYWxsIHN0eWxpbmcgY2hhbmdlcyB0byB0aGUgYFtzdHlsZV1gIGJpbmRpbmcgZGlyZWN0bHkgKHRocm91Z2ggYSBob3N0IGJpbmRpbmcpLlxuICogVGhlbiBBbmd1bGFyIHdpbGwgbm90aWNlIHRoZSBob3N0IGJpbmRpbmcgY2hhbmdlIGFuZCB0cmVhdCB0aGUgY2hhbmdlcyBhcyBzdHlsaW5nXG4gKiBjaGFuZ2VzIGFuZCBhcHBseSB0aGVtIHZpYSB0aGUgY29yZSBzdHlsaW5nIGluc3RydWN0aW9ucyB0aGF0IGV4aXN0IHdpdGhpbiBBbmd1bGFyLlxuICovXG5cbi8vIHVzZWQgd2hlbiB0aGUgVkUgaXMgcHJlc2VudFxuZXhwb3J0IGNvbnN0IG5nQ2xhc3NEaXJlY3RpdmVEZWZfX1BSRV9SM19fID0gdW5kZWZpbmVkO1xuXG4vLyB1c2VkIHdoZW4gdGhlIFZFIGlzIG5vdCBwcmVzZW50IChub3RlIHRoZSBkaXJlY3RpdmUgd2lsbFxuLy8gbmV2ZXIgYmUgaW5zdGFudGlhdGVkIG5vcm1hbGx5IGJlY2F1c2UgaXQgaXMgYXBhcnQgb2YgYVxuLy8gYmFzZSBjbGFzcylcbmV4cG9ydCBjb25zdCBuZ0NsYXNzRGlyZWN0aXZlRGVmX19QT1NUX1IzX18gPSDJtcm1ZGVmaW5lRGlyZWN0aXZlKHtcbiAgdHlwZTogZnVuY3Rpb24oKSB7fSBhcyBhbnksXG4gIHNlbGVjdG9yczogbnVsbCBhcyBhbnksXG4gIGZhY3Rvcnk6ICgpID0+IHt9LFxuICBob3N0QmluZGluZ3M6IGZ1bmN0aW9uKHJmOiDJtVJlbmRlckZsYWdzLCBjdHg6IGFueSwgZWxJbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHJmICYgybVSZW5kZXJGbGFncy5DcmVhdGUpIHtcbiAgICAgIMm1ybVlbGVtZW50SG9zdFN0eWxpbmcoKTtcbiAgICB9XG4gICAgaWYgKHJmICYgybVSZW5kZXJGbGFncy5VcGRhdGUpIHtcbiAgICAgIMm1ybVlbGVtZW50SG9zdFN0eWxpbmdNYXAoY3R4LmdldFZhbHVlKCkpO1xuICAgICAgybXJtWVsZW1lbnRIb3N0U3R5bGluZ0FwcGx5KCk7XG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IG5nQ2xhc3NEaXJlY3RpdmVEZWYgPSBuZ0NsYXNzRGlyZWN0aXZlRGVmX19QUkVfUjNfXztcblxuLyoqXG4gKiBTZXJ2ZXMgYXMgdGhlIGJhc2Ugbm9uLVZFIGNvbnRhaW5lciBmb3IgTmdDbGFzcy5cbiAqXG4gKiBXaGlsZSB0aGlzIGlzIGEgYmFzZSBjbGFzcyB0aGF0IE5nQ2xhc3MgZXh0ZW5kcyBmcm9tLCB0aGVcbiAqIGNsYXNzIGl0c2VsZiBhY3RzIGFzIGEgY29udGFpbmVyIGZvciBub24tVkUgY29kZSB0byBzZXR1cFxuICogYSBsaW5rIHRvIHRoZSBgW2NsYXNzXWAgaG9zdCBiaW5kaW5nICh2aWEgdGhlIHN0YXRpY1xuICogYG5nRGlyZWN0aXZlRGVmYCBwcm9wZXJ0eSBvbiB0aGUgY2xhc3MpLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgYG5nRGlyZWN0aXZlRGVmYCBwcm9wZXJ0eSdzIGNvZGUgaXMgc3dpdGNoZWRcbiAqIGRlcGVuZGluZyBpZiBWRSBpcyBwcmVzZW50IG9yIG5vdCAodGhpcyBhbGxvd3MgZm9yIHRoZVxuICogYmluZGluZyBjb2RlIHRvIGJlIHNldCBvbmx5IGZvciBuZXdlciB2ZXJzaW9ucyBvZiBBbmd1bGFyKS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ0NsYXNzQmFzZSB7XG4gIHN0YXRpYyBuZ0RpcmVjdGl2ZURlZjogYW55ID0gbmdDbGFzc0RpcmVjdGl2ZURlZjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2RlbGVnYXRlOiBOZ0NsYXNzSW1wbCkge31cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldFZhbHVlKCk7IH1cbn1cblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIGBgYFxuICogICAgIDxzb21lLWVsZW1lbnQgW25nQ2xhc3NdPVwiJ2ZpcnN0IHNlY29uZCdcIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqXG4gKiAgICAgPHNvbWUtZWxlbWVudCBbbmdDbGFzc109XCJbJ2ZpcnN0JywgJ3NlY29uZCddXCI+Li4uPC9zb21lLWVsZW1lbnQ+XG4gKlxuICogICAgIDxzb21lLWVsZW1lbnQgW25nQ2xhc3NdPVwieydmaXJzdCc6IHRydWUsICdzZWNvbmQnOiB0cnVlLCAndGhpcmQnOiBmYWxzZX1cIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqXG4gKiAgICAgPHNvbWUtZWxlbWVudCBbbmdDbGFzc109XCJzdHJpbmdFeHB8YXJyYXlFeHB8b2JqRXhwXCI+Li4uPC9zb21lLWVsZW1lbnQ+XG4gKlxuICogICAgIDxzb21lLWVsZW1lbnQgW25nQ2xhc3NdPVwieydjbGFzczEgY2xhc3MyIGNsYXNzMycgOiB0cnVlfVwiPi4uLjwvc29tZS1lbGVtZW50PlxuICogYGBgXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogQWRkcyBhbmQgcmVtb3ZlcyBDU1MgY2xhc3NlcyBvbiBhbiBIVE1MIGVsZW1lbnQuXG4gKlxuICogVGhlIENTUyBjbGFzc2VzIGFyZSB1cGRhdGVkIGFzIGZvbGxvd3MsIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB0aGUgZXhwcmVzc2lvbiBldmFsdWF0aW9uOlxuICogLSBgc3RyaW5nYCAtIHRoZSBDU1MgY2xhc3NlcyBsaXN0ZWQgaW4gdGhlIHN0cmluZyAoc3BhY2UgZGVsaW1pdGVkKSBhcmUgYWRkZWQsXG4gKiAtIGBBcnJheWAgLSB0aGUgQ1NTIGNsYXNzZXMgZGVjbGFyZWQgYXMgQXJyYXkgZWxlbWVudHMgYXJlIGFkZGVkLFxuICogLSBgT2JqZWN0YCAtIGtleXMgYXJlIENTUyBjbGFzc2VzIHRoYXQgZ2V0IGFkZGVkIHdoZW4gdGhlIGV4cHJlc3Npb24gZ2l2ZW4gaW4gdGhlIHZhbHVlXG4gKiAgICAgICAgICAgICAgZXZhbHVhdGVzIHRvIGEgdHJ1dGh5IHZhbHVlLCBvdGhlcndpc2UgdGhleSBhcmUgcmVtb3ZlZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nQ2xhc3NdJywgcHJvdmlkZXJzOiBbTmdDbGFzc0ltcGxQcm92aWRlcl19KVxuZXhwb3J0IGNsYXNzIE5nQ2xhc3MgZXh0ZW5kcyBOZ0NsYXNzQmFzZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogTmdDbGFzc0ltcGwpIHsgc3VwZXIoZGVsZWdhdGUpOyB9XG5cbiAgQElucHV0KCdjbGFzcycpXG4gIHNldCBrbGFzcyh2YWx1ZTogc3RyaW5nKSB7IHRoaXMuX2RlbGVnYXRlLnNldENsYXNzKHZhbHVlKTsgfVxuXG4gIEBJbnB1dCgnbmdDbGFzcycpXG4gIHNldCBuZ0NsYXNzKHZhbHVlOiBzdHJpbmd8c3RyaW5nW118U2V0PHN0cmluZz58e1trbGFzczogc3RyaW5nXTogYW55fSkge1xuICAgIHRoaXMuX2RlbGVnYXRlLnNldE5nQ2xhc3ModmFsdWUpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkgeyB0aGlzLl9kZWxlZ2F0ZS5hcHBseUNoYW5nZXMoKTsgfVxufVxuIl19