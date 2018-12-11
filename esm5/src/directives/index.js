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
export { NgClass, NgComponentOutlet, NgForOf, NgForOfContext, NgIf, NgIfContext, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet };
/**
 * A collection of Angular directives that are likely to be used in each and every Angular
 * application.
 */
export var COMMON_DIRECTIVES = [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb21tb24vc3JjL2RpcmVjdGl2ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBSUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsUUFBUSxFQUFFLFlBQVksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNuRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQ0wsT0FBTyxFQUNQLGlCQUFpQixFQUNqQixPQUFPLEVBQ1AsY0FBYyxFQUNkLElBQUksRUFDSixXQUFXLEVBQ1gsUUFBUSxFQUNSLFlBQVksRUFDWixPQUFPLEVBQ1AsUUFBUSxFQUNSLFlBQVksRUFDWixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2pCLENBQUM7QUFJRjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBZTtJQUMzQyxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxJQUFJO0lBQ0osZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGVBQWU7SUFDZixRQUFRO0lBQ1IsWUFBWTtDQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge05nQ2xhc3N9IGZyb20gJy4vbmdfY2xhc3MnO1xuaW1wb3J0IHtOZ0NvbXBvbmVudE91dGxldH0gZnJvbSAnLi9uZ19jb21wb25lbnRfb3V0bGV0JztcbmltcG9ydCB7TmdGb3JPZiwgTmdGb3JPZkNvbnRleHR9IGZyb20gJy4vbmdfZm9yX29mJztcbmltcG9ydCB7TmdJZiwgTmdJZkNvbnRleHR9IGZyb20gJy4vbmdfaWYnO1xuaW1wb3J0IHtOZ1BsdXJhbCwgTmdQbHVyYWxDYXNlfSBmcm9tICcuL25nX3BsdXJhbCc7XG5pbXBvcnQge05nU3R5bGV9IGZyb20gJy4vbmdfc3R5bGUnO1xuaW1wb3J0IHtOZ1N3aXRjaCwgTmdTd2l0Y2hDYXNlLCBOZ1N3aXRjaERlZmF1bHR9IGZyb20gJy4vbmdfc3dpdGNoJztcbmltcG9ydCB7TmdUZW1wbGF0ZU91dGxldH0gZnJvbSAnLi9uZ190ZW1wbGF0ZV9vdXRsZXQnO1xuXG5leHBvcnQge1xuICBOZ0NsYXNzLFxuICBOZ0NvbXBvbmVudE91dGxldCxcbiAgTmdGb3JPZixcbiAgTmdGb3JPZkNvbnRleHQsXG4gIE5nSWYsXG4gIE5nSWZDb250ZXh0LFxuICBOZ1BsdXJhbCxcbiAgTmdQbHVyYWxDYXNlLFxuICBOZ1N0eWxlLFxuICBOZ1N3aXRjaCxcbiAgTmdTd2l0Y2hDYXNlLFxuICBOZ1N3aXRjaERlZmF1bHQsXG4gIE5nVGVtcGxhdGVPdXRsZXRcbn07XG5cblxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBBbmd1bGFyIGRpcmVjdGl2ZXMgdGhhdCBhcmUgbGlrZWx5IHRvIGJlIHVzZWQgaW4gZWFjaCBhbmQgZXZlcnkgQW5ndWxhclxuICogYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBDT01NT05fRElSRUNUSVZFUzogUHJvdmlkZXJbXSA9IFtcbiAgTmdDbGFzcyxcbiAgTmdDb21wb25lbnRPdXRsZXQsXG4gIE5nRm9yT2YsXG4gIE5nSWYsXG4gIE5nVGVtcGxhdGVPdXRsZXQsXG4gIE5nU3R5bGUsXG4gIE5nU3dpdGNoLFxuICBOZ1N3aXRjaENhc2UsXG4gIE5nU3dpdGNoRGVmYXVsdCxcbiAgTmdQbHVyYWwsXG4gIE5nUGx1cmFsQ2FzZSxcbl07XG4iXX0=