"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
function plural(n) {
    if (n === 1)
        return 1;
    return 5;
}
exports.default = [
    'ta',
    [
        ['மு.ப', 'பி.ப'],
        ['முற்பகல்', 'பிற்பகல்'],
    ],
    ,
    [
        ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'],
        [
            'ஞாயி.', 'திங்.', 'செவ்.', 'புத.', 'வியா.',
            'வெள்.', 'சனி'
        ],
        [
            'ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்',
            'வியாழன்', 'வெள்ளி', 'சனி'
        ],
        ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச']
    ],
    ,
    [
        [
            'ஜ', 'பி', 'மா', 'ஏ', 'மே', 'ஜூ', 'ஜூ', 'ஆ', 'செ', 'அ', 'ந',
            'டி'
        ],
        [
            'ஜன.', 'பிப்.', 'மார்.', 'ஏப்.', 'மே', 'ஜூன்',
            'ஜூலை', 'ஆக.', 'செப்.', 'அக்.', 'நவ.', 'டிச.'
        ],
        [
            'ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்',
            'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்',
            'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்',
            'டிசம்பர்'
        ]
    ],
    ,
    [
        ['கி.மு.', 'கி.பி.'], ,
        [
            'கிறிஸ்துவுக்கு முன்',
            'அன்னோ டோமினி'
        ]
    ],
    0, [0, 0], ['d/M/yy', 'd MMM, y', 'd MMMM, y', 'EEEE, d MMMM, y'],
    ['a h:mm', 'a h:mm:ss', 'a h:mm:ss z', 'a h:mm:ss zzzz'],
    [
        '{1}, {0}',
        ,
        '{1} ’அன்று’ {0}',
    ],
    ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
    ['#,##,##0.###', '#,##,##0%', '¤ #,##,##0.00', '#E0'], '₹',
    'இந்திய ரூபாய்', { 'THB': ['฿'], 'TWD': ['NT$'] }, plural
];
//# sourceMappingURL=ta.js.map