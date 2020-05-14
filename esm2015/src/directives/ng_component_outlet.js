/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/directives/ng_component_outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentFactoryResolver, Directive, Injector, Input, NgModuleFactory, NgModuleRef, Type, ViewContainerRef } from '@angular/core';
/**
 * Instantiates a single {\@link Component} type and inserts its Host View into current View.
 * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
 *
 * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
 * any existing component will get destroyed.
 *
 * \@usageNotes
 *
 * ### Fine tune control
 *
 * You can control the component creation process by using the following optional attributes:
 *
 * * `ngComponentOutletInjector`: Optional custom {\@link Injector} that will be used as parent for
 * the Component. Defaults to the injector of the current view container.
 *
 * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
 * section of the component, if exists.
 *
 * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
 * module, then load a component from that module.
 *
 * ### Syntax
 *
 * Simple
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
 * ```
 *
 * Customized injector/content
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   injector: injectorExpression;
 *                                   content: contentNodesExpression;">
 * </ng-container>
 * ```
 *
 * Customized ngModuleFactory
 * ```
 * <ng-container *ngComponentOutlet="componentTypeExpression;
 *                                   ngModuleFactory: moduleFactory;">
 * </ng-container>
 * ```
 *
 * ### A simple example
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
 *
 * A more complete example with additional options:
 *
 * {\@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
 *
 * \@publicApi
 * \@ngModule CommonModule
 */
let NgComponentOutlet = /** @class */ (() => {
    /**
     * Instantiates a single {\@link Component} type and inserts its Host View into current View.
     * `NgComponentOutlet` provides a declarative approach for dynamic component creation.
     *
     * `NgComponentOutlet` requires a component type, if a falsy value is set the view will clear and
     * any existing component will get destroyed.
     *
     * \@usageNotes
     *
     * ### Fine tune control
     *
     * You can control the component creation process by using the following optional attributes:
     *
     * * `ngComponentOutletInjector`: Optional custom {\@link Injector} that will be used as parent for
     * the Component. Defaults to the injector of the current view container.
     *
     * * `ngComponentOutletContent`: Optional list of projectable nodes to insert into the content
     * section of the component, if exists.
     *
     * * `ngComponentOutletNgModuleFactory`: Optional module factory to allow dynamically loading other
     * module, then load a component from that module.
     *
     * ### Syntax
     *
     * Simple
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression"></ng-container>
     * ```
     *
     * Customized injector/content
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   injector: injectorExpression;
     *                                   content: contentNodesExpression;">
     * </ng-container>
     * ```
     *
     * Customized ngModuleFactory
     * ```
     * <ng-container *ngComponentOutlet="componentTypeExpression;
     *                                   ngModuleFactory: moduleFactory;">
     * </ng-container>
     * ```
     *
     * ### A simple example
     *
     * {\@example common/ngComponentOutlet/ts/module.ts region='SimpleExample'}
     *
     * A more complete example with additional options:
     *
     * {\@example common/ngComponentOutlet/ts/module.ts region='CompleteExample'}
     *
     * \@publicApi
     * \@ngModule CommonModule
     */
    class NgComponentOutlet {
        /**
         * @param {?} _viewContainerRef
         */
        constructor(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
            this._componentRef = null;
            this._moduleRef = null;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ngOnChanges(changes) {
            this._viewContainerRef.clear();
            this._componentRef = null;
            if (this.ngComponentOutlet) {
                /** @type {?} */
                const elInjector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;
                if (changes['ngComponentOutletNgModuleFactory']) {
                    if (this._moduleRef)
                        this._moduleRef.destroy();
                    if (this.ngComponentOutletNgModuleFactory) {
                        /** @type {?} */
                        const parentModule = elInjector.get(NgModuleRef);
                        this._moduleRef = this.ngComponentOutletNgModuleFactory.create(parentModule.injector);
                    }
                    else {
                        this._moduleRef = null;
                    }
                }
                /** @type {?} */
                const componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver :
                    elInjector.get(ComponentFactoryResolver);
                /** @type {?} */
                const componentFactory = componentFactoryResolver.resolveComponentFactory(this.ngComponentOutlet);
                this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, this.ngComponentOutletContent);
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            if (this._moduleRef)
                this._moduleRef.destroy();
        }
    }
    NgComponentOutlet.decorators = [
        { type: Directive, args: [{ selector: '[ngComponentOutlet]' },] }
    ];
    /** @nocollapse */
    NgComponentOutlet.ctorParameters = () => [
        { type: ViewContainerRef }
    ];
    NgComponentOutlet.propDecorators = {
        ngComponentOutlet: [{ type: Input }],
        ngComponentOutletInjector: [{ type: Input }],
        ngComponentOutletContent: [{ type: Input }],
        ngComponentOutletNgModuleFactory: [{ type: Input }]
    };
    return NgComponentOutlet;
})();
export { NgComponentOutlet };
if (false) {
    /** @type {?} */
    NgComponentOutlet.prototype.ngComponentOutlet;
    /** @type {?} */
    NgComponentOutlet.prototype.ngComponentOutletInjector;
    /** @type {?} */
    NgComponentOutlet.prototype.ngComponentOutletContent;
    /** @type {?} */
    NgComponentOutlet.prototype.ngComponentOutletNgModuleFactory;
    /**
     * @type {?}
     * @private
     */
    NgComponentOutlet.prototype._componentRef;
    /**
     * @type {?}
     * @private
     */
    NgComponentOutlet.prototype._moduleRef;
    /**
     * @type {?}
     * @private
     */
    NgComponentOutlet.prototype._viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfY29tcG9uZW50X291dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvZGlyZWN0aXZlcy9uZ19jb21wb25lbnRfb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyx3QkFBd0IsRUFBZ0IsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBdUQsSUFBSSxFQUFFLGdCQUFnQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBENU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsTUFDYSxpQkFBaUI7Ozs7UUFhNUIsWUFBb0IsaUJBQW1DO1lBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7WUFIL0Msa0JBQWEsR0FBMkIsSUFBSSxDQUFDO1lBQzdDLGVBQVUsR0FBMEIsSUFBSSxDQUFDO1FBRVMsQ0FBQzs7Ozs7UUFFM0QsV0FBVyxDQUFDLE9BQXNCO1lBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUxQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTs7c0JBQ3BCLFVBQVUsR0FBRyxJQUFJLENBQUMseUJBQXlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWM7Z0JBRTFGLElBQUksT0FBTyxDQUFDLGtDQUFrQyxDQUFDLEVBQUU7b0JBQy9DLElBQUksSUFBSSxDQUFDLFVBQVU7d0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFL0MsSUFBSSxJQUFJLENBQUMsZ0NBQWdDLEVBQUU7OzhCQUNuQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7d0JBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3ZGO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3FCQUN4QjtpQkFDRjs7c0JBRUssd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO29CQUMxQyxVQUFVLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDOztzQkFFckYsZ0JBQWdCLEdBQ2xCLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFFNUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUN2RCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFDM0QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDcEM7UUFDSCxDQUFDOzs7O1FBRUQsV0FBVztZQUNULElBQUksSUFBSSxDQUFDLFVBQVU7Z0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxDQUFDOzs7Z0JBaERGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxxQkFBcUIsRUFBQzs7OztnQkExRHlILGdCQUFnQjs7O29DQTZEbEwsS0FBSzs0Q0FFTCxLQUFLOzJDQUVMLEtBQUs7bURBRUwsS0FBSzs7SUF3Q1Isd0JBQUM7S0FBQTtTQWhEWSxpQkFBaUI7OztJQUU1Qiw4Q0FBdUM7O0lBRXZDLHNEQUE4Qzs7SUFFOUMscURBQTRDOztJQUU1Qyw2REFBaUU7Ozs7O0lBRWpFLDBDQUFxRDs7Ozs7SUFDckQsdUNBQWlEOzs7OztJQUVyQyw4Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgSW5qZWN0b3IsIElucHV0LCBOZ01vZHVsZUZhY3RvcnksIE5nTW9kdWxlUmVmLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgU3RhdGljUHJvdmlkZXIsIFR5cGUsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qKlxuICogSW5zdGFudGlhdGVzIGEgc2luZ2xlIHtAbGluayBDb21wb25lbnR9IHR5cGUgYW5kIGluc2VydHMgaXRzIEhvc3QgVmlldyBpbnRvIGN1cnJlbnQgVmlldy5cbiAqIGBOZ0NvbXBvbmVudE91dGxldGAgcHJvdmlkZXMgYSBkZWNsYXJhdGl2ZSBhcHByb2FjaCBmb3IgZHluYW1pYyBjb21wb25lbnQgY3JlYXRpb24uXG4gKlxuICogYE5nQ29tcG9uZW50T3V0bGV0YCByZXF1aXJlcyBhIGNvbXBvbmVudCB0eXBlLCBpZiBhIGZhbHN5IHZhbHVlIGlzIHNldCB0aGUgdmlldyB3aWxsIGNsZWFyIGFuZFxuICogYW55IGV4aXN0aW5nIGNvbXBvbmVudCB3aWxsIGdldCBkZXN0cm95ZWQuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgRmluZSB0dW5lIGNvbnRyb2xcbiAqXG4gKiBZb3UgY2FuIGNvbnRyb2wgdGhlIGNvbXBvbmVudCBjcmVhdGlvbiBwcm9jZXNzIGJ5IHVzaW5nIHRoZSBmb2xsb3dpbmcgb3B0aW9uYWwgYXR0cmlidXRlczpcbiAqXG4gKiAqIGBuZ0NvbXBvbmVudE91dGxldEluamVjdG9yYDogT3B0aW9uYWwgY3VzdG9tIHtAbGluayBJbmplY3Rvcn0gdGhhdCB3aWxsIGJlIHVzZWQgYXMgcGFyZW50IGZvclxuICogdGhlIENvbXBvbmVudC4gRGVmYXVsdHMgdG8gdGhlIGluamVjdG9yIG9mIHRoZSBjdXJyZW50IHZpZXcgY29udGFpbmVyLlxuICpcbiAqICogYG5nQ29tcG9uZW50T3V0bGV0Q29udGVudGA6IE9wdGlvbmFsIGxpc3Qgb2YgcHJvamVjdGFibGUgbm9kZXMgdG8gaW5zZXJ0IGludG8gdGhlIGNvbnRlbnRcbiAqIHNlY3Rpb24gb2YgdGhlIGNvbXBvbmVudCwgaWYgZXhpc3RzLlxuICpcbiAqICogYG5nQ29tcG9uZW50T3V0bGV0TmdNb2R1bGVGYWN0b3J5YDogT3B0aW9uYWwgbW9kdWxlIGZhY3RvcnkgdG8gYWxsb3cgZHluYW1pY2FsbHkgbG9hZGluZyBvdGhlclxuICogbW9kdWxlLCB0aGVuIGxvYWQgYSBjb21wb25lbnQgZnJvbSB0aGF0IG1vZHVsZS5cbiAqXG4gKiAjIyMgU3ludGF4XG4gKlxuICogU2ltcGxlXG4gKiBgYGBcbiAqIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50VHlwZUV4cHJlc3Npb25cIj48L25nLWNvbnRhaW5lcj5cbiAqIGBgYFxuICpcbiAqIEN1c3RvbWl6ZWQgaW5qZWN0b3IvY29udGVudFxuICogYGBgXG4gKiA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudFR5cGVFeHByZXNzaW9uO1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluamVjdG9yOiBpbmplY3RvckV4cHJlc3Npb247XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudE5vZGVzRXhwcmVzc2lvbjtcIj5cbiAqIDwvbmctY29udGFpbmVyPlxuICogYGBgXG4gKlxuICogQ3VzdG9taXplZCBuZ01vZHVsZUZhY3RvcnlcbiAqIGBgYFxuICogPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRUeXBlRXhwcmVzc2lvbjtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ01vZHVsZUZhY3Rvcnk6IG1vZHVsZUZhY3Rvcnk7XCI+XG4gKiA8L25nLWNvbnRhaW5lcj5cbiAqIGBgYFxuICpcbiAqICMjIyBBIHNpbXBsZSBleGFtcGxlXG4gKlxuICoge0BleGFtcGxlIGNvbW1vbi9uZ0NvbXBvbmVudE91dGxldC90cy9tb2R1bGUudHMgcmVnaW9uPSdTaW1wbGVFeGFtcGxlJ31cbiAqXG4gKiBBIG1vcmUgY29tcGxldGUgZXhhbXBsZSB3aXRoIGFkZGl0aW9uYWwgb3B0aW9uczpcbiAqXG4gKiB7QGV4YW1wbGUgY29tbW9uL25nQ29tcG9uZW50T3V0bGV0L3RzL21vZHVsZS50cyByZWdpb249J0NvbXBsZXRlRXhhbXBsZSd9XG4gKlxuICogQHB1YmxpY0FwaVxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tuZ0NvbXBvbmVudE91dGxldF0nfSlcbmV4cG9ydCBjbGFzcyBOZ0NvbXBvbmVudE91dGxldCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIEBJbnB1dCgpIG5nQ29tcG9uZW50T3V0bGV0ITogVHlwZTxhbnk+O1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgQElucHV0KCkgbmdDb21wb25lbnRPdXRsZXRJbmplY3RvciE6IEluamVjdG9yO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgQElucHV0KCkgbmdDb21wb25lbnRPdXRsZXRDb250ZW50ITogYW55W11bXTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIEBJbnB1dCgpIG5nQ29tcG9uZW50T3V0bGV0TmdNb2R1bGVGYWN0b3J5ITogTmdNb2R1bGVGYWN0b3J5PGFueT47XG5cbiAgcHJpdmF0ZSBfY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbW9kdWxlUmVmOiBOZ01vZHVsZVJlZjxhbnk+fG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICB0aGlzLl9jb21wb25lbnRSZWYgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMubmdDb21wb25lbnRPdXRsZXQpIHtcbiAgICAgIGNvbnN0IGVsSW5qZWN0b3IgPSB0aGlzLm5nQ29tcG9uZW50T3V0bGV0SW5qZWN0b3IgfHwgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5wYXJlbnRJbmplY3RvcjtcblxuICAgICAgaWYgKGNoYW5nZXNbJ25nQ29tcG9uZW50T3V0bGV0TmdNb2R1bGVGYWN0b3J5J10pIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZHVsZVJlZikgdGhpcy5fbW9kdWxlUmVmLmRlc3Ryb3koKTtcblxuICAgICAgICBpZiAodGhpcy5uZ0NvbXBvbmVudE91dGxldE5nTW9kdWxlRmFjdG9yeSkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudE1vZHVsZSA9IGVsSW5qZWN0b3IuZ2V0KE5nTW9kdWxlUmVmKTtcbiAgICAgICAgICB0aGlzLl9tb2R1bGVSZWYgPSB0aGlzLm5nQ29tcG9uZW50T3V0bGV0TmdNb2R1bGVGYWN0b3J5LmNyZWF0ZShwYXJlbnRNb2R1bGUuaW5qZWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX21vZHVsZVJlZiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyID0gdGhpcy5fbW9kdWxlUmVmID8gdGhpcy5fbW9kdWxlUmVmLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlciA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbEluamVjdG9yLmdldChDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpO1xuXG4gICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID1cbiAgICAgICAgICBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5uZ0NvbXBvbmVudE91dGxldCk7XG5cbiAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICAgIGNvbXBvbmVudEZhY3RvcnksIHRoaXMuX3ZpZXdDb250YWluZXJSZWYubGVuZ3RoLCBlbEluamVjdG9yLFxuICAgICAgICAgIHRoaXMubmdDb21wb25lbnRPdXRsZXRDb250ZW50KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlUmVmKSB0aGlzLl9tb2R1bGVSZWYuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=