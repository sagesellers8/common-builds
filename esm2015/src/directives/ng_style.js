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
import { Directive, Input, ɵdefineDirective, ɵelementHostStyling, ɵelementHostStylingApply, ɵelementHostStylingMap } from '@angular/core';
import { NgStyleImpl, NgStyleImplProvider } from './ng_style_impl';
/*
 * NgStyle (as well as NgClass) behaves differently when loaded in the VE and when not.
 *
 * If the VE is present (which is for older versions of Angular) then NgStyle will inject
 * the legacy diffing algorithm as a service and delegate all styling changes to that.
 *
 * If the VE is not present then NgStyle will normalize (through the injected service) and
 * then write all styling changes to the `[style]` binding directly (through a host binding).
 * Then Angular will notice the host binding change and treat the changes as styling
 * changes and apply them via the core styling instructions that exist within Angular.
 */
// used when the VE is present
/** @type {?} */
export const ngStyleDirectiveDef__PRE_R3__ = undefined;
// used when the VE is not present (note the directive will
// never be instantiated normally because it is apart of a
// base class)
/** @type {?} */
export const ngStyleDirectiveDef__POST_R3__ = ɵdefineDirective({
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
            ɵelementHostStyling();
        }
        if (rf & 2 /* Update */) {
            ɵelementHostStylingMap(null, ctx.getValue());
            ɵelementHostStylingApply();
        }
    })
});
/** @type {?} */
export const ngStyleDirectiveDef = ngStyleDirectiveDef__PRE_R3__;
/**
 * Serves as the base non-VE container for NgStyle.
 *
 * While this is a base class that NgStyle extends from, the
 * class itself acts as a container for non-VE code to setup
 * a link to the `[style]` host binding (via the static
 * `ngDirectiveDef` property on the class).
 *
 * Note that the `ngDirectiveDef` property's code is switched
 * depending if VE is present or not (this allows for the
 * binding code to be set only for newer versions of Angular).
 *
 * \@publicApi
 */
export class NgStyleBase {
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
/** @nocollapse */ NgStyleBase.ngDirectiveDef = ngStyleDirectiveDef;
if (false) {
    /** @nocollapse @type {?} */
    NgStyleBase.ngDirectiveDef;
    /**
     * @type {?}
     * @protected
     */
    NgStyleBase.prototype._delegate;
}
/**
 * \@ngModule CommonModule
 *
 * \@usageNotes
 *
 * Set the font of the containing element to the result of an expression.
 *
 * ```
 * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
 * ```
 *
 * Set the width of the containing element to a pixel value returned by an expression.
 *
 * ```
 * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
 * ```
 *
 * Set a collection of style values using an expression that returns key-value pairs.
 *
 * ```
 * <some-element [ngStyle]="objExp">...</some-element>
 * ```
 *
 * \@description
 *
 * An attribute directive that updates styles for the containing HTML element.
 * Sets one or more style properties, specified as colon-separated key-value pairs.
 * The key is a style name, with an optional `.<unit>` suffix
 * (such as 'top.px', 'font-style.em').
 * The value is an expression to be evaluated.
 * The resulting non-null value, expressed in the given unit,
 * is assigned to the given style property.
 * If the result of evaluation is null, the corresponding style is removed.
 *
 * \@publicApi
 */
export class NgStyle extends NgStyleBase {
    /**
     * @param {?} delegate
     */
    constructor(delegate) { super(delegate); }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngStyle(value) { this._delegate.setNgStyle(value); }
    /**
     * @return {?}
     */
    ngDoCheck() { this._delegate.applyChanges(); }
}
NgStyle.decorators = [
    { type: Directive, args: [{ selector: '[ngStyle]', providers: [NgStyleImplProvider] },] }
];
/** @nocollapse */
NgStyle.ctorParameters = () => [
    { type: NgStyleImpl }
];
NgStyle.propDecorators = {
    ngStyle: [{ type: Input, args: ['ngStyle',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfc3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2RpcmVjdGl2ZXMvbmdfc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsU0FBUyxFQUFXLEtBQUssRUFBZ0IsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0osT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWlCakUsTUFBTSxPQUFPLDZCQUE2QixHQUFHLFNBQVM7Ozs7O0FBS3RELE1BQU0sT0FBTyw4QkFBOEIsR0FBRyxnQkFBZ0IsQ0FBQztJQUM3RCxJQUFJLEVBQUU7OztJQUFBLGNBQVksQ0FBQyxHQUFPO0lBQzFCLFNBQVMsRUFBRSxtQkFBQSxJQUFJLEVBQU87SUFDdEIsT0FBTzs7O0lBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFBO0lBQ2pCLFlBQVk7Ozs7OztJQUFFLFVBQVMsRUFBZ0IsRUFBRSxHQUFRLEVBQUUsT0FBZTtRQUNoRSxJQUFJLEVBQUUsaUJBQXNCLEVBQUU7WUFDNUIsbUJBQW1CLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksRUFBRSxpQkFBc0IsRUFBRTtZQUM1QixzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDN0Msd0JBQXdCLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUMsQ0FBQTtDQUNGLENBQUM7O0FBRUYsTUFBTSxPQUFPLG1CQUFtQixHQUFHLDZCQUE2Qjs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JoRSxNQUFNLE9BQU8sV0FBVzs7OztJQUd0QixZQUFzQixTQUFzQjtRQUF0QixjQUFTLEdBQVQsU0FBUyxDQUFhO0lBQUcsQ0FBQzs7OztJQUVoRCxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFKekMsMEJBQWMsR0FBUSxtQkFBbUIsQ0FBQzs7O0lBQWpELDJCQUFpRDs7Ozs7SUFFckMsZ0NBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDOUMsTUFBTSxPQUFPLE9BQVEsU0FBUSxXQUFXOzs7O0lBQ3RDLFlBQVksUUFBcUIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUV2RCxJQUNJLE9BQU8sQ0FBQyxLQUFrQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztJQUVyRixTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztZQVAvQyxTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUM7Ozs7WUFqRzVELFdBQVc7OztzQkFxR2hCLEtBQUssU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtEaXJlY3RpdmUsIERvQ2hlY2ssIElucHV0LCDJtVJlbmRlckZsYWdzLCDJtWRlZmluZURpcmVjdGl2ZSwgybVlbGVtZW50SG9zdFN0eWxpbmcsIMm1ZWxlbWVudEhvc3RTdHlsaW5nQXBwbHksIMm1ZWxlbWVudEhvc3RTdHlsaW5nTWFwfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtOZ1N0eWxlSW1wbCwgTmdTdHlsZUltcGxQcm92aWRlcn0gZnJvbSAnLi9uZ19zdHlsZV9pbXBsJztcblxuXG5cbi8qXG4gKiBOZ1N0eWxlIChhcyB3ZWxsIGFzIE5nQ2xhc3MpIGJlaGF2ZXMgZGlmZmVyZW50bHkgd2hlbiBsb2FkZWQgaW4gdGhlIFZFIGFuZCB3aGVuIG5vdC5cbiAqXG4gKiBJZiB0aGUgVkUgaXMgcHJlc2VudCAod2hpY2ggaXMgZm9yIG9sZGVyIHZlcnNpb25zIG9mIEFuZ3VsYXIpIHRoZW4gTmdTdHlsZSB3aWxsIGluamVjdFxuICogdGhlIGxlZ2FjeSBkaWZmaW5nIGFsZ29yaXRobSBhcyBhIHNlcnZpY2UgYW5kIGRlbGVnYXRlIGFsbCBzdHlsaW5nIGNoYW5nZXMgdG8gdGhhdC5cbiAqXG4gKiBJZiB0aGUgVkUgaXMgbm90IHByZXNlbnQgdGhlbiBOZ1N0eWxlIHdpbGwgbm9ybWFsaXplICh0aHJvdWdoIHRoZSBpbmplY3RlZCBzZXJ2aWNlKSBhbmRcbiAqIHRoZW4gd3JpdGUgYWxsIHN0eWxpbmcgY2hhbmdlcyB0byB0aGUgYFtzdHlsZV1gIGJpbmRpbmcgZGlyZWN0bHkgKHRocm91Z2ggYSBob3N0IGJpbmRpbmcpLlxuICogVGhlbiBBbmd1bGFyIHdpbGwgbm90aWNlIHRoZSBob3N0IGJpbmRpbmcgY2hhbmdlIGFuZCB0cmVhdCB0aGUgY2hhbmdlcyBhcyBzdHlsaW5nXG4gKiBjaGFuZ2VzIGFuZCBhcHBseSB0aGVtIHZpYSB0aGUgY29yZSBzdHlsaW5nIGluc3RydWN0aW9ucyB0aGF0IGV4aXN0IHdpdGhpbiBBbmd1bGFyLlxuICovXG5cbi8vIHVzZWQgd2hlbiB0aGUgVkUgaXMgcHJlc2VudFxuZXhwb3J0IGNvbnN0IG5nU3R5bGVEaXJlY3RpdmVEZWZfX1BSRV9SM19fID0gdW5kZWZpbmVkO1xuXG4vLyB1c2VkIHdoZW4gdGhlIFZFIGlzIG5vdCBwcmVzZW50IChub3RlIHRoZSBkaXJlY3RpdmUgd2lsbFxuLy8gbmV2ZXIgYmUgaW5zdGFudGlhdGVkIG5vcm1hbGx5IGJlY2F1c2UgaXQgaXMgYXBhcnQgb2YgYVxuLy8gYmFzZSBjbGFzcylcbmV4cG9ydCBjb25zdCBuZ1N0eWxlRGlyZWN0aXZlRGVmX19QT1NUX1IzX18gPSDJtWRlZmluZURpcmVjdGl2ZSh7XG4gIHR5cGU6IGZ1bmN0aW9uKCkge30gYXMgYW55LFxuICBzZWxlY3RvcnM6IG51bGwgYXMgYW55LFxuICBmYWN0b3J5OiAoKSA9PiB7fSxcbiAgaG9zdEJpbmRpbmdzOiBmdW5jdGlvbihyZjogybVSZW5kZXJGbGFncywgY3R4OiBhbnksIGVsSW5kZXg6IG51bWJlcikge1xuICAgIGlmIChyZiAmIMm1UmVuZGVyRmxhZ3MuQ3JlYXRlKSB7XG4gICAgICDJtWVsZW1lbnRIb3N0U3R5bGluZygpO1xuICAgIH1cbiAgICBpZiAocmYgJiDJtVJlbmRlckZsYWdzLlVwZGF0ZSkge1xuICAgICAgybVlbGVtZW50SG9zdFN0eWxpbmdNYXAobnVsbCwgY3R4LmdldFZhbHVlKCkpO1xuICAgICAgybVlbGVtZW50SG9zdFN0eWxpbmdBcHBseSgpO1xuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBuZ1N0eWxlRGlyZWN0aXZlRGVmID0gbmdTdHlsZURpcmVjdGl2ZURlZl9fUFJFX1IzX187XG5cbi8qKlxuICogU2VydmVzIGFzIHRoZSBiYXNlIG5vbi1WRSBjb250YWluZXIgZm9yIE5nU3R5bGUuXG4gKlxuICogV2hpbGUgdGhpcyBpcyBhIGJhc2UgY2xhc3MgdGhhdCBOZ1N0eWxlIGV4dGVuZHMgZnJvbSwgdGhlXG4gKiBjbGFzcyBpdHNlbGYgYWN0cyBhcyBhIGNvbnRhaW5lciBmb3Igbm9uLVZFIGNvZGUgdG8gc2V0dXBcbiAqIGEgbGluayB0byB0aGUgYFtzdHlsZV1gIGhvc3QgYmluZGluZyAodmlhIHRoZSBzdGF0aWNcbiAqIGBuZ0RpcmVjdGl2ZURlZmAgcHJvcGVydHkgb24gdGhlIGNsYXNzKS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGBuZ0RpcmVjdGl2ZURlZmAgcHJvcGVydHkncyBjb2RlIGlzIHN3aXRjaGVkXG4gKiBkZXBlbmRpbmcgaWYgVkUgaXMgcHJlc2VudCBvciBub3QgKHRoaXMgYWxsb3dzIGZvciB0aGVcbiAqIGJpbmRpbmcgY29kZSB0byBiZSBzZXQgb25seSBmb3IgbmV3ZXIgdmVyc2lvbnMgb2YgQW5ndWxhcikuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgTmdTdHlsZUJhc2Uge1xuICBzdGF0aWMgbmdEaXJlY3RpdmVEZWY6IGFueSA9IG5nU3R5bGVEaXJlY3RpdmVEZWY7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9kZWxlZ2F0ZTogTmdTdHlsZUltcGwpIHt9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRWYWx1ZSgpOyB9XG59XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogU2V0IHRoZSBmb250IG9mIHRoZSBjb250YWluaW5nIGVsZW1lbnQgdG8gdGhlIHJlc3VsdCBvZiBhbiBleHByZXNzaW9uLlxuICpcbiAqIGBgYFxuICogPHNvbWUtZWxlbWVudCBbbmdTdHlsZV09XCJ7J2ZvbnQtc3R5bGUnOiBzdHlsZUV4cH1cIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqIGBgYFxuICpcbiAqIFNldCB0aGUgd2lkdGggb2YgdGhlIGNvbnRhaW5pbmcgZWxlbWVudCB0byBhIHBpeGVsIHZhbHVlIHJldHVybmVkIGJ5IGFuIGV4cHJlc3Npb24uXG4gKlxuICogYGBgXG4gKiA8c29tZS1lbGVtZW50IFtuZ1N0eWxlXT1cInsnbWF4LXdpZHRoLnB4Jzogd2lkdGhFeHB9XCI+Li4uPC9zb21lLWVsZW1lbnQ+XG4gKiBgYGBcbiAqXG4gKiBTZXQgYSBjb2xsZWN0aW9uIG9mIHN0eWxlIHZhbHVlcyB1c2luZyBhbiBleHByZXNzaW9uIHRoYXQgcmV0dXJucyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogYGBgXG4gKiA8c29tZS1lbGVtZW50IFtuZ1N0eWxlXT1cIm9iakV4cFwiPi4uLjwvc29tZS1lbGVtZW50PlxuICogYGBgXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKlxuICogQW4gYXR0cmlidXRlIGRpcmVjdGl2ZSB0aGF0IHVwZGF0ZXMgc3R5bGVzIGZvciB0aGUgY29udGFpbmluZyBIVE1MIGVsZW1lbnQuXG4gKiBTZXRzIG9uZSBvciBtb3JlIHN0eWxlIHByb3BlcnRpZXMsIHNwZWNpZmllZCBhcyBjb2xvbi1zZXBhcmF0ZWQga2V5LXZhbHVlIHBhaXJzLlxuICogVGhlIGtleSBpcyBhIHN0eWxlIG5hbWUsIHdpdGggYW4gb3B0aW9uYWwgYC48dW5pdD5gIHN1ZmZpeFxuICogKHN1Y2ggYXMgJ3RvcC5weCcsICdmb250LXN0eWxlLmVtJykuXG4gKiBUaGUgdmFsdWUgaXMgYW4gZXhwcmVzc2lvbiB0byBiZSBldmFsdWF0ZWQuXG4gKiBUaGUgcmVzdWx0aW5nIG5vbi1udWxsIHZhbHVlLCBleHByZXNzZWQgaW4gdGhlIGdpdmVuIHVuaXQsXG4gKiBpcyBhc3NpZ25lZCB0byB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkuXG4gKiBJZiB0aGUgcmVzdWx0IG9mIGV2YWx1YXRpb24gaXMgbnVsbCwgdGhlIGNvcnJlc3BvbmRpbmcgc3R5bGUgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nU3R5bGVdJywgcHJvdmlkZXJzOiBbTmdTdHlsZUltcGxQcm92aWRlcl19KVxuZXhwb3J0IGNsYXNzIE5nU3R5bGUgZXh0ZW5kcyBOZ1N0eWxlQmFzZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogTmdTdHlsZUltcGwpIHsgc3VwZXIoZGVsZWdhdGUpOyB9XG5cbiAgQElucHV0KCduZ1N0eWxlJylcbiAgc2V0IG5nU3R5bGUodmFsdWU6IHtba2xhc3M6IHN0cmluZ106IGFueX18bnVsbCkgeyB0aGlzLl9kZWxlZ2F0ZS5zZXROZ1N0eWxlKHZhbHVlKTsgfVxuXG4gIG5nRG9DaGVjaygpIHsgdGhpcy5fZGVsZWdhdGUuYXBwbHlDaGFuZ2VzKCk7IH1cbn1cbiJdfQ==