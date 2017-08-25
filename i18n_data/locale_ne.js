/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
import { Plural } from '@angular/common';
export default [
    'ne',
    [
        ['पूर्वाह्न', 'अपराह्न'],
        ,
    ],
    ,
    [
        ['आ', 'सो', 'म', 'बु', 'बि', 'शु', 'श'], ['आइत', 'सोम', 'मङ्गल', 'बुध', 'बिहि', 'शुक्र', 'शनि'],
        ['आइतबार', 'सोमबार', 'मङ्गलबार', 'बुधबार', 'बिहिबार', 'शुक्रबार', 'शनिबार'],
        ['आइत', 'सोम', 'मङ्गल', 'बुध', 'बिहि', 'शुक्र', 'शनि']
    ],
    ,
    [
        ['१', '२', '३', '४', '५', '६', '७', '८', '९', '१०', '११', '१२'],
        [
            'जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर',
            'डिसेम्बर'
        ],
        [
            'जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मई', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर',
            'डिसेम्बर'
        ]
    ],
    [
        ['१', '२', '३', '४', '५', '६', '७', '८', '९', '१०', '११', '१२'],
        [
            'जनवरी', 'फेब्रुअरी', 'मार्च', 'अप्रिल', 'मे', 'जुन', 'जुलाई', 'अगस्ट', 'सेप्टेम्बर', 'अक्टोबर', 'नोभेम्बर',
            'डिसेम्बर'
        ],
    ],
    [
        ['ईसा पूर्व', 'सन्'],
        ,
    ],
    0, [6, 0], ['y-MM-dd', 'y MMM d', 'y MMMM d', 'y MMMM d, EEEE'],
    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
    [
        '{1}, {0}',
        ,
        '{1} {0}',
    ],
    ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
    ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'], 'नेरू', 'नेपाली रूपैयाँ', function (n) {
        if (n === 1)
            return Plural.One;
        return Plural.Other;
    }
];
//# sourceMappingURL=locale_ne.js.map