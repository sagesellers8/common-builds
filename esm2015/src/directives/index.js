/**
 * @fileoverview added by tsickle
 * Generated from: packages/common/src/directives/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgClass } from './ng_class';
import { NgComponentOutlet } from './ng_component_outlet';
import { NgForOf, NgForOfContext } from './ng_for_of';
import { NgIf, NgIfContext } from './ng_if';
import { NgPlural, NgPluralCase } from './ng_plural';
import { NgStyle } from './ng_style';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from './ng_switch';
import { NgTemplateOutlet } from './ng_template_outlet';
export { NgClass, NgComponentOutlet, NgForOf, NgForOfContext, NgIf, NgIfContext, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, };
/**
 * A collection of Angular directives that are likely to be used in each and every Angular
 * application.
 * @type {?}
 */
export const COMMON_DIRECTIVES = [
    NgClass,
    NgComponentOutlet,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgPlural,
    NgPluralCase,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2RpcmVjdGl2ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNuRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQ0wsT0FBTyxFQUNQLGlCQUFpQixFQUNqQixPQUFPLEVBQ1AsY0FBYyxFQUNkLElBQUksRUFDSixXQUFXLEVBQ1gsUUFBUSxFQUNSLFlBQVksRUFDWixPQUFPLEVBQ1AsUUFBUSxFQUNSLFlBQVksRUFDWixlQUFlLEVBQ2YsZ0JBQWdCLEdBQ2pCLENBQUM7Ozs7OztBQVFGLE1BQU0sT0FBTyxpQkFBaUIsR0FBZTtJQUMzQyxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxJQUFJO0lBQ0osZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsWUFBWTtDQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdDbGFzc30gZnJvbSAnLi9uZ19jbGFzcyc7XG5pbXBvcnQge05nQ29tcG9uZW50T3V0bGV0fSBmcm9tICcuL25nX2NvbXBvbmVudF9vdXRsZXQnO1xuaW1wb3J0IHtOZ0Zvck9mLCBOZ0Zvck9mQ29udGV4dH0gZnJvbSAnLi9uZ19mb3Jfb2YnO1xuaW1wb3J0IHtOZ0lmLCBOZ0lmQ29udGV4dH0gZnJvbSAnLi9uZ19pZic7XG5pbXBvcnQge05nUGx1cmFsLCBOZ1BsdXJhbENhc2V9IGZyb20gJy4vbmdfcGx1cmFsJztcbmltcG9ydCB7TmdTdHlsZX0gZnJvbSAnLi9uZ19zdHlsZSc7XG5pbXBvcnQge05nU3dpdGNoLCBOZ1N3aXRjaENhc2UsIE5nU3dpdGNoRGVmYXVsdH0gZnJvbSAnLi9uZ19zd2l0Y2gnO1xuaW1wb3J0IHtOZ1RlbXBsYXRlT3V0bGV0fSBmcm9tICcuL25nX3RlbXBsYXRlX291dGxldCc7XG5cbmV4cG9ydCB7XG4gIE5nQ2xhc3MsXG4gIE5nQ29tcG9uZW50T3V0bGV0LFxuICBOZ0Zvck9mLFxuICBOZ0Zvck9mQ29udGV4dCxcbiAgTmdJZixcbiAgTmdJZkNvbnRleHQsXG4gIE5nUGx1cmFsLFxuICBOZ1BsdXJhbENhc2UsXG4gIE5nU3R5bGUsXG4gIE5nU3dpdGNoLFxuICBOZ1N3aXRjaENhc2UsXG4gIE5nU3dpdGNoRGVmYXVsdCxcbiAgTmdUZW1wbGF0ZU91dGxldCxcbn07XG5cblxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBBbmd1bGFyIGRpcmVjdGl2ZXMgdGhhdCBhcmUgbGlrZWx5IHRvIGJlIHVzZWQgaW4gZWFjaCBhbmQgZXZlcnkgQW5ndWxhclxuICogYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBDT01NT05fRElSRUNUSVZFUzogUHJvdmlkZXJbXSA9IFtcbiAgTmdDbGFzcyxcbiAgTmdDb21wb25lbnRPdXRsZXQsXG4gIE5nRm9yT2YsXG4gIE5nSWYsXG4gIE5nVGVtcGxhdGVPdXRsZXQsXG4gIE5nU3R5bGUsXG4gIE5nU3dpdGNoLFxuICBOZ1N3aXRjaENhc2UsXG4gIE5nU3dpdGNoRGVmYXVsdCxcbiAgTmdQbHVyYWwsXG4gIE5nUGx1cmFsQ2FzZSxcbl07XG4iXX0=