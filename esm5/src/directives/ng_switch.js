/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
var SwitchView = /** @class */ (function () {
    function SwitchView(_viewContainerRef, _templateRef) {
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
        this._created = false;
    }
    SwitchView.prototype.create = function () {
        this._created = true;
        this._viewContainerRef.createEmbeddedView(this._templateRef);
    };
    SwitchView.prototype.destroy = function () {
        this._created = false;
        this._viewContainerRef.clear();
    };
    SwitchView.prototype.enforceState = function (created) {
        if (created && !this._created) {
            this.create();
        }
        else if (!created && this._created) {
            this.destroy();
        }
    };
    return SwitchView;
}());
export { SwitchView };
/**
 * @ngModule CommonModule
 *
 * @description
 * The `[ngSwitch]` directive on a container specifies an expression to match against.
 * The expressions to match are provided by `ngSwitchCase` directives on views within the container.
 * - Every view that matches is rendered.
 * - If there are no matches, a view with the `ngSwitchDefault` directive is rendered.
 * - Elements within the `[NgSwitch]` statement but outside of any `NgSwitchCase`
 * or `ngSwitchDefault` directive are preserved at the location.
 *
 * @usageNotes
 * Define a container element for the directive, and specify the switch expression
 * to match against as an attribute:
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 * ```
 *
 * Within the container, `*ngSwitchCase` statements specify the match expressions
 * as attributes. Include `*ngSwitchDefault` as the final case.
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *    <some-element *ngSwitchCase="match_expression_1">...</some-element>
 * ...
 *    <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * ### Usage Examples
 *
 * The following example shows how to use more than one case to display the same view:
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <!-- the same view can be shown in more than one case -->
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *   <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *   <!--default case when there are no matches -->
 *   <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * The following example shows how cases can be nested:
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *       <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *       <some-element *ngSwitchCase="match_expression_2">...</some-element>
 *       <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
 *       <ng-container *ngSwitchCase="match_expression_3">
 *         <!-- use a ng-container to group multiple root nodes -->
 *         <inner-element></inner-element>
 *         <inner-other-element></inner-other-element>
 *       </ng-container>
 *       <some-element *ngSwitchDefault>...</some-element>
 *     </container-element>
 * ```
 *
 * @publicApi
 * @see `NgSwitchCase`
 * @see `NgSwitchDefault`
 * @see [Structural Directives](guide/structural-directives)
 *
 */
var NgSwitch = /** @class */ (function () {
    function NgSwitch() {
        this._defaultUsed = false;
        this._caseCount = 0;
        this._lastCaseCheckIndex = 0;
        this._lastCasesMatched = false;
    }
    Object.defineProperty(NgSwitch.prototype, "ngSwitch", {
        set: function (newValue) {
            this._ngSwitch = newValue;
            if (this._caseCount === 0) {
                this._updateDefaultCases(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSwitch.prototype._addCase = function () {
        return this._caseCount++;
    };
    /** @internal */
    NgSwitch.prototype._addDefault = function (view) {
        if (!this._defaultViews) {
            this._defaultViews = [];
        }
        this._defaultViews.push(view);
    };
    /** @internal */
    NgSwitch.prototype._matchCase = function (value) {
        var matched = value == this._ngSwitch;
        this._lastCasesMatched = this._lastCasesMatched || matched;
        this._lastCaseCheckIndex++;
        if (this._lastCaseCheckIndex === this._caseCount) {
            this._updateDefaultCases(!this._lastCasesMatched);
            this._lastCaseCheckIndex = 0;
            this._lastCasesMatched = false;
        }
        return matched;
    };
    NgSwitch.prototype._updateDefaultCases = function (useDefault) {
        if (this._defaultViews && useDefault !== this._defaultUsed) {
            this._defaultUsed = useDefault;
            for (var i = 0; i < this._defaultViews.length; i++) {
                var defaultView = this._defaultViews[i];
                defaultView.enforceState(useDefault);
            }
        }
    };
    NgSwitch.ɵfac = function NgSwitch_Factory(t) { return new (t || NgSwitch)(); };
    NgSwitch.ɵdir = i0.ɵɵdefineDirective({ type: NgSwitch, selectors: [["", "ngSwitch", ""]], inputs: { ngSwitch: "ngSwitch" } });
    return NgSwitch;
}());
export { NgSwitch };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgSwitch, [{
        type: Directive,
        args: [{ selector: '[ngSwitch]' }]
    }], null, { ngSwitch: [{
            type: Input
        }] }); })();
/**
 * @ngModule CommonModule
 *
 * @description
 * Provides a switch case expression to match against an enclosing `ngSwitch` expression.
 * When the expressions match, the given `NgSwitchCase` template is rendered.
 * If multiple match expressions match the switch expression value, all of them are displayed.
 *
 * @usageNotes
 *
 * Within a switch container, `*ngSwitchCase` statements specify the match expressions
 * as attributes. Include `*ngSwitchDefault` as the final case.
 *
 * ```
 * <container-element [ngSwitch]="switch_expression">
 *   <some-element *ngSwitchCase="match_expression_1">...</some-element>
 *   ...
 *   <some-element *ngSwitchDefault>...</some-element>
 * </container-element>
 * ```
 *
 * Each switch-case statement contains an in-line HTML template or template reference
 * that defines the subtree to be selected if the value of the match expression
 * matches the value of the switch expression.
 *
 * Unlike JavaScript, which uses strict equality, Angular uses loose equality.
 * This means that the empty string, `""` matches 0.
 *
 * @publicApi
 * @see `NgSwitch`
 * @see `NgSwitchDefault`
 *
 */
var NgSwitchCase = /** @class */ (function () {
    function NgSwitchCase(viewContainer, templateRef, ngSwitch) {
        this.ngSwitch = ngSwitch;
        ngSwitch._addCase();
        this._view = new SwitchView(viewContainer, templateRef);
    }
    /**
     * Performs case matching. For internal use only.
     */
    NgSwitchCase.prototype.ngDoCheck = function () {
        this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
    };
    NgSwitchCase.ɵfac = function NgSwitchCase_Factory(t) { return new (t || NgSwitchCase)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(NgSwitch, 1)); };
    NgSwitchCase.ɵdir = i0.ɵɵdefineDirective({ type: NgSwitchCase, selectors: [["", "ngSwitchCase", ""]], inputs: { ngSwitchCase: "ngSwitchCase" } });
    return NgSwitchCase;
}());
export { NgSwitchCase };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgSwitchCase, [{
        type: Directive,
        args: [{ selector: '[ngSwitchCase]' }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }, { type: NgSwitch, decorators: [{
                type: Host
            }] }]; }, { ngSwitchCase: [{
            type: Input
        }] }); })();
/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Creates a view that is rendered when no `NgSwitchCase` expressions
 * match the `NgSwitch` expression.
 * This statement should be the final case in an `NgSwitch`.
 *
 * @publicApi
 * @see `NgSwitch`
 * @see `NgSwitchCase`
 *
 */
var NgSwitchDefault = /** @class */ (function () {
    function NgSwitchDefault(viewContainer, templateRef, ngSwitch) {
        ngSwitch._addDefault(new SwitchView(viewContainer, templateRef));
    }
    NgSwitchDefault.ɵfac = function NgSwitchDefault_Factory(t) { return new (t || NgSwitchDefault)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(NgSwitch, 1)); };
    NgSwitchDefault.ɵdir = i0.ɵɵdefineDirective({ type: NgSwitchDefault, selectors: [["", "ngSwitchDefault", ""]] });
    return NgSwitchDefault;
}());
export { NgSwitchDefault };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgSwitchDefault, [{
        type: Directive,
        args: [{ selector: '[ngSwitchDefault]' }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }, { type: NgSwitch, decorators: [{
                type: Host
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfc3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9kaXJlY3RpdmVzL25nX3N3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFXLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUU3RjtJQUdFLG9CQUNZLGlCQUFtQyxFQUFVLFlBQWlDO1FBQTlFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFIbEYsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUdvRSxDQUFDO0lBRTlGLDJCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxpQ0FBWSxHQUFaLFVBQWEsT0FBZ0I7UUFDM0IsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO2FBQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUVHO0FBQ0g7SUFBQTtRQUlVLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0tBOENuQztJQTNDQyxzQkFDSSw4QkFBUTthQURaLFVBQ2EsUUFBYTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDOzs7T0FBQTtJQUVELGdCQUFnQjtJQUNoQiwyQkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiw4QkFBVyxHQUFYLFVBQVksSUFBZ0I7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLDZCQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ25CLElBQU0sT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDO1FBQzNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDaEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLHNDQUFtQixHQUEzQixVQUE0QixVQUFtQjtRQUM3QyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUM7WUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxXQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Y7SUFDSCxDQUFDO29FQW5EVSxRQUFRO2lEQUFSLFFBQVE7bUJBdEdyQjtDQTBKQyxBQXJERCxJQXFEQztTQXBEWSxRQUFRO2tEQUFSLFFBQVE7Y0FEcEIsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQzs7a0JBVWhDLEtBQUs7O0FBNkNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdDRztBQUNIO0lBUUUsc0JBQ0ksYUFBK0IsRUFBRSxXQUFnQyxFQUNqRCxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ3BDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs0RUFuQlUsWUFBWSx3R0FTTyxRQUFRO3FEQVQzQixZQUFZO3VCQTlMekI7Q0FrTkMsQUFyQkQsSUFxQkM7U0FwQlksWUFBWTtrREFBWixZQUFZO2NBRHhCLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQzsrRkFVUCxRQUFRO3NCQUFqQyxJQUFJOztrQkFKUixLQUFLOztBQWlCUjs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0g7SUFFRSx5QkFDSSxhQUErQixFQUFFLFdBQWdDLEVBQ3pELFFBQWtCO1FBQzVCLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztrRkFMVSxlQUFlLHdHQUdKLFFBQVE7d0RBSG5CLGVBQWU7MEJBbk81QjtDQXlPQyxBQVBELElBT0M7U0FOWSxlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFDOytGQUlsQixRQUFRO3NCQUF6QixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRG9DaGVjaywgSG9zdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFN3aXRjaFZpZXcge1xuICBwcml2YXRlIF9jcmVhdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pikge31cblxuICBjcmVhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5fY3JlYXRlZCA9IHRydWU7XG4gICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGVtcGxhdGVSZWYpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jcmVhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICB9XG5cbiAgZW5mb3JjZVN0YXRlKGNyZWF0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoY3JlYXRlZCAmJiAhdGhpcy5fY3JlYXRlZCkge1xuICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICB9IGVsc2UgaWYgKCFjcmVhdGVkICYmIHRoaXMuX2NyZWF0ZWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBgW25nU3dpdGNoXWAgZGlyZWN0aXZlIG9uIGEgY29udGFpbmVyIHNwZWNpZmllcyBhbiBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBUaGUgZXhwcmVzc2lvbnMgdG8gbWF0Y2ggYXJlIHByb3ZpZGVkIGJ5IGBuZ1N3aXRjaENhc2VgIGRpcmVjdGl2ZXMgb24gdmlld3Mgd2l0aGluIHRoZSBjb250YWluZXIuXG4gKiAtIEV2ZXJ5IHZpZXcgdGhhdCBtYXRjaGVzIGlzIHJlbmRlcmVkLlxuICogLSBJZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcywgYSB2aWV3IHdpdGggdGhlIGBuZ1N3aXRjaERlZmF1bHRgIGRpcmVjdGl2ZSBpcyByZW5kZXJlZC5cbiAqIC0gRWxlbWVudHMgd2l0aGluIHRoZSBgW05nU3dpdGNoXWAgc3RhdGVtZW50IGJ1dCBvdXRzaWRlIG9mIGFueSBgTmdTd2l0Y2hDYXNlYFxuICogb3IgYG5nU3dpdGNoRGVmYXVsdGAgZGlyZWN0aXZlIGFyZSBwcmVzZXJ2ZWQgYXQgdGhlIGxvY2F0aW9uLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBEZWZpbmUgYSBjb250YWluZXIgZWxlbWVudCBmb3IgdGhlIGRpcmVjdGl2ZSwgYW5kIHNwZWNpZnkgdGhlIHN3aXRjaCBleHByZXNzaW9uXG4gKiB0byBtYXRjaCBhZ2FpbnN0IGFzIGFuIGF0dHJpYnV0ZTpcbiAqXG4gKiBgYGBcbiAqIDxjb250YWluZXItZWxlbWVudCBbbmdTd2l0Y2hdPVwic3dpdGNoX2V4cHJlc3Npb25cIj5cbiAqIGBgYFxuICpcbiAqIFdpdGhpbiB0aGUgY29udGFpbmVyLCBgKm5nU3dpdGNoQ2FzZWAgc3RhdGVtZW50cyBzcGVjaWZ5IHRoZSBtYXRjaCBleHByZXNzaW9uc1xuICogYXMgYXR0cmlidXRlcy4gSW5jbHVkZSBgKm5nU3dpdGNoRGVmYXVsdGAgYXMgdGhlIGZpbmFsIGNhc2UuXG4gKlxuICogYGBgXG4gKiA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cInN3aXRjaF9leHByZXNzaW9uXCI+XG4gKiAgICA8c29tZS1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJtYXRjaF9leHByZXNzaW9uXzFcIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqIC4uLlxuICogICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hEZWZhdWx0Pi4uLjwvc29tZS1lbGVtZW50PlxuICogPC9jb250YWluZXItZWxlbWVudD5cbiAqIGBgYFxuICpcbiAqICMjIyBVc2FnZSBFeGFtcGxlc1xuICpcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBzaG93cyBob3cgdG8gdXNlIG1vcmUgdGhhbiBvbmUgY2FzZSB0byBkaXNwbGF5IHRoZSBzYW1lIHZpZXc6XG4gKlxuICogYGBgXG4gKiA8Y29udGFpbmVyLWVsZW1lbnQgW25nU3dpdGNoXT1cInN3aXRjaF9leHByZXNzaW9uXCI+XG4gKiAgIDwhLS0gdGhlIHNhbWUgdmlldyBjYW4gYmUgc2hvd24gaW4gbW9yZSB0aGFuIG9uZSBjYXNlIC0tPlxuICogICA8c29tZS1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJtYXRjaF9leHByZXNzaW9uXzFcIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8yXCI+Li4uPC9zb21lLWVsZW1lbnQ+XG4gKiAgIDxzb21lLW90aGVyLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fM1wiPi4uLjwvc29tZS1vdGhlci1lbGVtZW50PlxuICogICA8IS0tZGVmYXVsdCBjYXNlIHdoZW4gdGhlcmUgYXJlIG5vIG1hdGNoZXMgLS0+XG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoRGVmYXVsdD4uLi48L3NvbWUtZWxlbWVudD5cbiAqIDwvY29udGFpbmVyLWVsZW1lbnQ+XG4gKiBgYGBcbiAqXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgc2hvd3MgaG93IGNhc2VzIGNhbiBiZSBuZXN0ZWQ6XG4gKiBgYGBcbiAqIDxjb250YWluZXItZWxlbWVudCBbbmdTd2l0Y2hdPVwic3dpdGNoX2V4cHJlc3Npb25cIj5cbiAqICAgICAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fMVwiPi4uLjwvc29tZS1lbGVtZW50PlxuICogICAgICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hDYXNlPVwibWF0Y2hfZXhwcmVzc2lvbl8yXCI+Li4uPC9zb21lLWVsZW1lbnQ+XG4gKiAgICAgICA8c29tZS1vdGhlci1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJtYXRjaF9leHByZXNzaW9uXzNcIj4uLi48L3NvbWUtb3RoZXItZWxlbWVudD5cbiAqICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIm1hdGNoX2V4cHJlc3Npb25fM1wiPlxuICogICAgICAgICA8IS0tIHVzZSBhIG5nLWNvbnRhaW5lciB0byBncm91cCBtdWx0aXBsZSByb290IG5vZGVzIC0tPlxuICogICAgICAgICA8aW5uZXItZWxlbWVudD48L2lubmVyLWVsZW1lbnQ+XG4gKiAgICAgICAgIDxpbm5lci1vdGhlci1lbGVtZW50PjwvaW5uZXItb3RoZXItZWxlbWVudD5cbiAqICAgICAgIDwvbmctY29udGFpbmVyPlxuICogICAgICAgPHNvbWUtZWxlbWVudCAqbmdTd2l0Y2hEZWZhdWx0Pi4uLjwvc29tZS1lbGVtZW50PlxuICogICAgIDwvY29udGFpbmVyLWVsZW1lbnQ+XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAc2VlIGBOZ1N3aXRjaENhc2VgXG4gKiBAc2VlIGBOZ1N3aXRjaERlZmF1bHRgXG4gKiBAc2VlIFtTdHJ1Y3R1cmFsIERpcmVjdGl2ZXNdKGd1aWRlL3N0cnVjdHVyYWwtZGlyZWN0aXZlcylcbiAqXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nU3dpdGNoXSd9KVxuZXhwb3J0IGNsYXNzIE5nU3dpdGNoIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2RlZmF1bHRWaWV3cyE6IFN3aXRjaFZpZXdbXTtcbiAgcHJpdmF0ZSBfZGVmYXVsdFVzZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FzZUNvdW50ID0gMDtcbiAgcHJpdmF0ZSBfbGFzdENhc2VDaGVja0luZGV4ID0gMDtcbiAgcHJpdmF0ZSBfbGFzdENhc2VzTWF0Y2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9uZ1N3aXRjaDogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ1N3aXRjaChuZXdWYWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbmdTd2l0Y2ggPSBuZXdWYWx1ZTtcbiAgICBpZiAodGhpcy5fY2FzZUNvdW50ID09PSAwKSB7XG4gICAgICB0aGlzLl91cGRhdGVEZWZhdWx0Q2FzZXModHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYWRkQ2FzZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jYXNlQ291bnQrKztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2FkZERlZmF1bHQodmlldzogU3dpdGNoVmlldykge1xuICAgIGlmICghdGhpcy5fZGVmYXVsdFZpZXdzKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0Vmlld3MgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5fZGVmYXVsdFZpZXdzLnB1c2godmlldyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9tYXRjaENhc2UodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1hdGNoZWQgPSB2YWx1ZSA9PSB0aGlzLl9uZ1N3aXRjaDtcbiAgICB0aGlzLl9sYXN0Q2FzZXNNYXRjaGVkID0gdGhpcy5fbGFzdENhc2VzTWF0Y2hlZCB8fCBtYXRjaGVkO1xuICAgIHRoaXMuX2xhc3RDYXNlQ2hlY2tJbmRleCsrO1xuICAgIGlmICh0aGlzLl9sYXN0Q2FzZUNoZWNrSW5kZXggPT09IHRoaXMuX2Nhc2VDb3VudCkge1xuICAgICAgdGhpcy5fdXBkYXRlRGVmYXVsdENhc2VzKCF0aGlzLl9sYXN0Q2FzZXNNYXRjaGVkKTtcbiAgICAgIHRoaXMuX2xhc3RDYXNlQ2hlY2tJbmRleCA9IDA7XG4gICAgICB0aGlzLl9sYXN0Q2FzZXNNYXRjaGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlRGVmYXVsdENhc2VzKHVzZURlZmF1bHQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5fZGVmYXVsdFZpZXdzICYmIHVzZURlZmF1bHQgIT09IHRoaXMuX2RlZmF1bHRVc2VkKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0VXNlZCA9IHVzZURlZmF1bHQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RlZmF1bHRWaWV3cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmlldyA9IHRoaXMuX2RlZmF1bHRWaWV3c1tpXTtcbiAgICAgICAgZGVmYXVsdFZpZXcuZW5mb3JjZVN0YXRlKHVzZURlZmF1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFByb3ZpZGVzIGEgc3dpdGNoIGNhc2UgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0IGFuIGVuY2xvc2luZyBgbmdTd2l0Y2hgIGV4cHJlc3Npb24uXG4gKiBXaGVuIHRoZSBleHByZXNzaW9ucyBtYXRjaCwgdGhlIGdpdmVuIGBOZ1N3aXRjaENhc2VgIHRlbXBsYXRlIGlzIHJlbmRlcmVkLlxuICogSWYgbXVsdGlwbGUgbWF0Y2ggZXhwcmVzc2lvbnMgbWF0Y2ggdGhlIHN3aXRjaCBleHByZXNzaW9uIHZhbHVlLCBhbGwgb2YgdGhlbSBhcmUgZGlzcGxheWVkLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogV2l0aGluIGEgc3dpdGNoIGNvbnRhaW5lciwgYCpuZ1N3aXRjaENhc2VgIHN0YXRlbWVudHMgc3BlY2lmeSB0aGUgbWF0Y2ggZXhwcmVzc2lvbnNcbiAqIGFzIGF0dHJpYnV0ZXMuIEluY2x1ZGUgYCpuZ1N3aXRjaERlZmF1bHRgIGFzIHRoZSBmaW5hbCBjYXNlLlxuICpcbiAqIGBgYFxuICogPGNvbnRhaW5lci1lbGVtZW50IFtuZ1N3aXRjaF09XCJzd2l0Y2hfZXhwcmVzc2lvblwiPlxuICogICA8c29tZS1lbGVtZW50ICpuZ1N3aXRjaENhc2U9XCJtYXRjaF9leHByZXNzaW9uXzFcIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqICAgLi4uXG4gKiAgIDxzb21lLWVsZW1lbnQgKm5nU3dpdGNoRGVmYXVsdD4uLi48L3NvbWUtZWxlbWVudD5cbiAqIDwvY29udGFpbmVyLWVsZW1lbnQ+XG4gKiBgYGBcbiAqXG4gKiBFYWNoIHN3aXRjaC1jYXNlIHN0YXRlbWVudCBjb250YWlucyBhbiBpbi1saW5lIEhUTUwgdGVtcGxhdGUgb3IgdGVtcGxhdGUgcmVmZXJlbmNlXG4gKiB0aGF0IGRlZmluZXMgdGhlIHN1YnRyZWUgdG8gYmUgc2VsZWN0ZWQgaWYgdGhlIHZhbHVlIG9mIHRoZSBtYXRjaCBleHByZXNzaW9uXG4gKiBtYXRjaGVzIHRoZSB2YWx1ZSBvZiB0aGUgc3dpdGNoIGV4cHJlc3Npb24uXG4gKlxuICogVW5saWtlIEphdmFTY3JpcHQsIHdoaWNoIHVzZXMgc3RyaWN0IGVxdWFsaXR5LCBBbmd1bGFyIHVzZXMgbG9vc2UgZXF1YWxpdHkuXG4gKiBUaGlzIG1lYW5zIHRoYXQgdGhlIGVtcHR5IHN0cmluZywgYFwiXCJgIG1hdGNoZXMgMC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAc2VlIGBOZ1N3aXRjaGBcbiAqIEBzZWUgYE5nU3dpdGNoRGVmYXVsdGBcbiAqXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nU3dpdGNoQ2FzZV0nfSlcbmV4cG9ydCBjbGFzcyBOZ1N3aXRjaENhc2UgaW1wbGVtZW50cyBEb0NoZWNrIHtcbiAgcHJpdmF0ZSBfdmlldzogU3dpdGNoVmlldztcbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgSFRNTCB0ZW1wbGF0ZSB0byBiZSBzZWxlY3RlZCBvbiBtYXRjaC5cbiAgICovXG4gIEBJbnB1dCgpIG5nU3dpdGNoQ2FzZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPE9iamVjdD4sXG4gICAgICBASG9zdCgpIHByaXZhdGUgbmdTd2l0Y2g6IE5nU3dpdGNoKSB7XG4gICAgbmdTd2l0Y2guX2FkZENhc2UoKTtcbiAgICB0aGlzLl92aWV3ID0gbmV3IFN3aXRjaFZpZXcodmlld0NvbnRhaW5lciwgdGVtcGxhdGVSZWYpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGNhc2UgbWF0Y2hpbmcuIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICovXG4gIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLl92aWV3LmVuZm9yY2VTdGF0ZSh0aGlzLm5nU3dpdGNoLl9tYXRjaENhc2UodGhpcy5uZ1N3aXRjaENhc2UpKTtcbiAgfVxufVxuXG4vKipcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBDcmVhdGVzIGEgdmlldyB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gbm8gYE5nU3dpdGNoQ2FzZWAgZXhwcmVzc2lvbnNcbiAqIG1hdGNoIHRoZSBgTmdTd2l0Y2hgIGV4cHJlc3Npb24uXG4gKiBUaGlzIHN0YXRlbWVudCBzaG91bGQgYmUgdGhlIGZpbmFsIGNhc2UgaW4gYW4gYE5nU3dpdGNoYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAc2VlIGBOZ1N3aXRjaGBcbiAqIEBzZWUgYE5nU3dpdGNoQ2FzZWBcbiAqXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nU3dpdGNoRGVmYXVsdF0nfSlcbmV4cG9ydCBjbGFzcyBOZ1N3aXRjaERlZmF1bHQge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+LFxuICAgICAgQEhvc3QoKSBuZ1N3aXRjaDogTmdTd2l0Y2gpIHtcbiAgICBuZ1N3aXRjaC5fYWRkRGVmYXVsdChuZXcgU3dpdGNoVmlldyh2aWV3Q29udGFpbmVyLCB0ZW1wbGF0ZVJlZikpO1xuICB9XG59XG4iXX0=