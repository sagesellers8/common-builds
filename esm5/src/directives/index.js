/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgClass, NgClassBase } from './ng_class';
import { NgComponentOutlet } from './ng_component_outlet';
import { NgForOf, NgForOfContext } from './ng_for_of';
import { NgIf, NgIfContext } from './ng_if';
import { NgPlural, NgPluralCase } from './ng_plural';
import { NgStyle, NgStyleBase } from './ng_style';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from './ng_switch';
import { NgTemplateOutlet } from './ng_template_outlet';
export { NgClass, NgClassBase, NgComponentOutlet, NgForOf, NgForOfContext, NgIf, NgIfContext, NgPlural, NgPluralCase, NgStyle, NgStyleBase, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL2RpcmVjdGl2ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDcEQsT0FBTyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDMUMsT0FBTyxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDbkQsT0FBTyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFDTCxPQUFPLEVBQ1AsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixPQUFPLEVBQ1AsY0FBYyxFQUNkLElBQUksRUFDSixXQUFXLEVBQ1gsUUFBUSxFQUNSLFlBQVksRUFDWixPQUFPLEVBQ1AsV0FBVyxFQUNYLFFBQVEsRUFDUixZQUFZLEVBQ1osZUFBZSxFQUNmLGdCQUFnQixHQUNqQixDQUFDO0FBSUY7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQWU7SUFDM0MsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsSUFBSTtJQUNKLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFlBQVk7Q0FDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdDbGFzcywgTmdDbGFzc0Jhc2V9IGZyb20gJy4vbmdfY2xhc3MnO1xuaW1wb3J0IHtOZ0NvbXBvbmVudE91dGxldH0gZnJvbSAnLi9uZ19jb21wb25lbnRfb3V0bGV0JztcbmltcG9ydCB7TmdGb3JPZiwgTmdGb3JPZkNvbnRleHR9IGZyb20gJy4vbmdfZm9yX29mJztcbmltcG9ydCB7TmdJZiwgTmdJZkNvbnRleHR9IGZyb20gJy4vbmdfaWYnO1xuaW1wb3J0IHtOZ1BsdXJhbCwgTmdQbHVyYWxDYXNlfSBmcm9tICcuL25nX3BsdXJhbCc7XG5pbXBvcnQge05nU3R5bGUsIE5nU3R5bGVCYXNlfSBmcm9tICcuL25nX3N0eWxlJztcbmltcG9ydCB7TmdTd2l0Y2gsIE5nU3dpdGNoQ2FzZSwgTmdTd2l0Y2hEZWZhdWx0fSBmcm9tICcuL25nX3N3aXRjaCc7XG5pbXBvcnQge05nVGVtcGxhdGVPdXRsZXR9IGZyb20gJy4vbmdfdGVtcGxhdGVfb3V0bGV0JztcblxuZXhwb3J0IHtcbiAgTmdDbGFzcyxcbiAgTmdDbGFzc0Jhc2UsXG4gIE5nQ29tcG9uZW50T3V0bGV0LFxuICBOZ0Zvck9mLFxuICBOZ0Zvck9mQ29udGV4dCxcbiAgTmdJZixcbiAgTmdJZkNvbnRleHQsXG4gIE5nUGx1cmFsLFxuICBOZ1BsdXJhbENhc2UsXG4gIE5nU3R5bGUsXG4gIE5nU3R5bGVCYXNlLFxuICBOZ1N3aXRjaCxcbiAgTmdTd2l0Y2hDYXNlLFxuICBOZ1N3aXRjaERlZmF1bHQsXG4gIE5nVGVtcGxhdGVPdXRsZXQsXG59O1xuXG5cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgQW5ndWxhciBkaXJlY3RpdmVzIHRoYXQgYXJlIGxpa2VseSB0byBiZSB1c2VkIGluIGVhY2ggYW5kIGV2ZXJ5IEFuZ3VsYXJcbiAqIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgY29uc3QgQ09NTU9OX0RJUkVDVElWRVM6IFByb3ZpZGVyW10gPSBbXG4gIE5nQ2xhc3MsXG4gIE5nQ29tcG9uZW50T3V0bGV0LFxuICBOZ0Zvck9mLFxuICBOZ0lmLFxuICBOZ1RlbXBsYXRlT3V0bGV0LFxuICBOZ1N0eWxlLFxuICBOZ1N3aXRjaCxcbiAgTmdTd2l0Y2hDYXNlLFxuICBOZ1N3aXRjaERlZmF1bHQsXG4gIE5nUGx1cmFsLFxuICBOZ1BsdXJhbENhc2UsXG5dO1xuIl19