import { Directive, ElementRef, Input, KeyValueDiffers, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@ngModule CommonModule
 *
 * \@usageNotes
 * ```
 * <some-element [ngStyle]="{'font-style': styleExp}">...</some-element>
 *
 * <some-element [ngStyle]="{'max-width.px': widthExp}">...</some-element>
 *
 * <some-element [ngStyle]="objExp">...</some-element>
 * ```
 *
 * \@description
 *
 * Update an HTML element styles.
 *
 * The styles are updated according to the value of the expression evaluation:
 * - keys are style names with an optional `.<unit>` suffix (ie 'top.px', 'font-style.em'),
 * - values are the values assigned to those properties (expressed in the given unit).
 *
 * \@publicApi
 */
export class NgStyle {
    /**
     * @param {?} _differs
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    constructor(_differs, _ngEl, _renderer) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set ngStyle(values) {
        this._ngStyle = values;
        if (!this._differ && values) {
            this._differ = this._differs.find(values).create();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._differ) {
            /** @type {?} */
            const changes = this._differ.diff(this._ngStyle);
            if (changes) {
                this._applyChanges(changes);
            }
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    _applyChanges(changes) {
        changes.forEachRemovedItem((record) => this._setStyle(record.key, null));
        changes.forEachAddedItem((record) => this._setStyle(record.key, record.currentValue));
        changes.forEachChangedItem((record) => this._setStyle(record.key, record.currentValue));
    }
    /**
     * @private
     * @param {?} nameAndUnit
     * @param {?} value
     * @return {?}
     */
    _setStyle(nameAndUnit, value) {
        const [name, unit] = nameAndUnit.split('.');
        value = value != null && unit ? `${value}${unit}` : value;
        if (value != null) {
            this._renderer.setStyle(this._ngEl.nativeElement, name, (/** @type {?} */ (value)));
        }
        else {
            this._renderer.removeStyle(this._ngEl.nativeElement, name);
        }
    }
}
NgStyle.decorators = [
    { type: Directive, args: [{ selector: '[ngStyle]' },] },
];
/** @nocollapse */
NgStyle.ctorParameters = () => [
    { type: KeyValueDiffers },
    { type: ElementRef },
    { type: Renderer2 }
];
NgStyle.propDecorators = {
    ngStyle: [{ type: Input }]
};
NgStyle.ngDirectiveDef = i0.ɵdefineDirective({ type: NgStyle, selectors: [["", "ngStyle", ""]], factory: function NgStyle_Factory(t) { return new (t || NgStyle)(i0.ɵdirectiveInject(KeyValueDiffers), i0.ɵdirectiveInject(ElementRef), i0.ɵdirectiveInject(Renderer2)); }, inputs: { ngStyle: "ngStyle" } });
/*@__PURE__*/ i0.ɵsetClassMetadata(NgStyle, [{
        type: Directive,
        args: [{ selector: '[ngStyle]' }]
    }], function () { return [{
        type: KeyValueDiffers
    }, {
        type: ElementRef
    }, {
        type: Renderer2
    }]; }, { ngStyle: [{
            type: Input
        }] });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgStyle.prototype._ngStyle;
    /**
     * @type {?}
     * @private
     */
    NgStyle.prototype._differ;
    /**
     * @type {?}
     * @private
     */
    NgStyle.prototype._differs;
    /**
     * @type {?}
     * @private
     */
    NgStyle.prototype._ngEl;
    /**
     * @type {?}
     * @private
     */
    NgStyle.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfc3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2RpcmVjdGl2ZXMvbmdfc3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsT0FBTyxFQUFDLFNBQVMsRUFBVyxVQUFVLEVBQUUsS0FBSyxFQUFtQyxlQUFlLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCakksTUFBTSxPQUFPLE9BQU87Ozs7OztJQU1sQixZQUNZLFFBQXlCLEVBQVUsS0FBaUIsRUFBVSxTQUFvQjtRQUFsRixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQzs7Ozs7SUFFbEcsSUFDSSxPQUFPLENBQUMsTUFBK0I7UUFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7a0JBQ1YsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE9BQStDO1FBQ25FLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdEYsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FBQyxXQUFtQixFQUFFLEtBQW1DO2NBQ2xFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzNDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUUxRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLG1CQUFBLEtBQUssRUFBVSxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUM7Ozs7WUF4QjhDLGVBQWU7WUFBbkUsVUFBVTtZQUEyRCxTQUFTOzs7c0JBa0N2RyxLQUFLOztxREFUSyxPQUFPLDRGQUFQLE9BQU8sc0JBT0ksZUFBZSx1QkFBaUIsVUFBVSx1QkFBcUIsU0FBUzttQ0FQbkYsT0FBTztjQURuQixTQUFTO2VBQUMsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDOztjQVFWLGVBQWU7O2NBQWlCLFVBQVU7O2NBQXFCLFNBQVM7O2tCQUU3RixLQUFLOzs7Ozs7O0lBUE4sMkJBQTRDOzs7OztJQUU1QywwQkFBeUQ7Ozs7O0lBR3JELDJCQUFpQzs7Ozs7SUFBRSx3QkFBeUI7Ozs7O0lBQUUsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRG9DaGVjaywgRWxlbWVudFJlZiwgSW5wdXQsIEtleVZhbHVlQ2hhbmdlcywgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIGBgYFxuICogPHNvbWUtZWxlbWVudCBbbmdTdHlsZV09XCJ7J2ZvbnQtc3R5bGUnOiBzdHlsZUV4cH1cIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqXG4gKiA8c29tZS1lbGVtZW50IFtuZ1N0eWxlXT1cInsnbWF4LXdpZHRoLnB4Jzogd2lkdGhFeHB9XCI+Li4uPC9zb21lLWVsZW1lbnQ+XG4gKlxuICogPHNvbWUtZWxlbWVudCBbbmdTdHlsZV09XCJvYmpFeHBcIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqIGBgYFxuICpcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFVwZGF0ZSBhbiBIVE1MIGVsZW1lbnQgc3R5bGVzLlxuICpcbiAqIFRoZSBzdHlsZXMgYXJlIHVwZGF0ZWQgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZSBvZiB0aGUgZXhwcmVzc2lvbiBldmFsdWF0aW9uOlxuICogLSBrZXlzIGFyZSBzdHlsZSBuYW1lcyB3aXRoIGFuIG9wdGlvbmFsIGAuPHVuaXQ+YCBzdWZmaXggKGllICd0b3AucHgnLCAnZm9udC1zdHlsZS5lbScpLFxuICogLSB2YWx1ZXMgYXJlIHRoZSB2YWx1ZXMgYXNzaWduZWQgdG8gdGhvc2UgcHJvcGVydGllcyAoZXhwcmVzc2VkIGluIHRoZSBnaXZlbiB1bml0KS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nU3R5bGVdJ30pXG5leHBvcnQgY2xhc3MgTmdTdHlsZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfbmdTdHlsZSAhOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2RpZmZlciAhOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIHN0cmluZ3xudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfZGlmZmVyczogS2V5VmFsdWVEaWZmZXJzLCBwcml2YXRlIF9uZ0VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ1N0eWxlKHZhbHVlczoge1trZXk6IHN0cmluZ106IHN0cmluZ30pIHtcbiAgICB0aGlzLl9uZ1N0eWxlID0gdmFsdWVzO1xuICAgIGlmICghdGhpcy5fZGlmZmVyICYmIHZhbHVlcykge1xuICAgICAgdGhpcy5fZGlmZmVyID0gdGhpcy5fZGlmZmVycy5maW5kKHZhbHVlcykuY3JlYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLl9kaWZmZXIpIHtcbiAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLl9kaWZmZXIuZGlmZih0aGlzLl9uZ1N0eWxlKTtcbiAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX2FwcGx5Q2hhbmdlcyhjaGFuZ2VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBseUNoYW5nZXMoY2hhbmdlczogS2V5VmFsdWVDaGFuZ2VzPHN0cmluZywgc3RyaW5nfG51bWJlcj4pOiB2b2lkIHtcbiAgICBjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbSgocmVjb3JkKSA9PiB0aGlzLl9zZXRTdHlsZShyZWNvcmQua2V5LCBudWxsKSk7XG4gICAgY2hhbmdlcy5mb3JFYWNoQWRkZWRJdGVtKChyZWNvcmQpID0+IHRoaXMuX3NldFN0eWxlKHJlY29yZC5rZXksIHJlY29yZC5jdXJyZW50VmFsdWUpKTtcbiAgICBjaGFuZ2VzLmZvckVhY2hDaGFuZ2VkSXRlbSgocmVjb3JkKSA9PiB0aGlzLl9zZXRTdHlsZShyZWNvcmQua2V5LCByZWNvcmQuY3VycmVudFZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZShuYW1lQW5kVW5pdDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfG51bWJlcnxudWxsfHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIGNvbnN0IFtuYW1lLCB1bml0XSA9IG5hbWVBbmRVbml0LnNwbGl0KCcuJyk7XG4gICAgdmFsdWUgPSB2YWx1ZSAhPSBudWxsICYmIHVuaXQgPyBgJHt2YWx1ZX0ke3VuaXR9YCA6IHZhbHVlO1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX25nRWwubmF0aXZlRWxlbWVudCwgbmFtZSwgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fbmdFbC5uYXRpdmVFbGVtZW50LCBuYW1lKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==