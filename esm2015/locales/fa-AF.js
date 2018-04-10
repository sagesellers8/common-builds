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
    var i = Math.floor(Math.abs(n));
    if (i === 0 || n === 1)
        return 1;
    return 5;
}
exports.default = [
    'fa-AF', [['ق', 'ب'], ['ق.ظ.', 'ب.ظ.'], ['قبل\u200cازظهر', 'بعدازظهر']],
    [['ق.ظ.', 'ب.ظ.'], , ['قبل\u200cازظهر', 'بعدازظهر']],
    [
        ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        [
            'یکشنبه', 'دوشنبه', 'سه\u200cشنبه', 'چهارشنبه', 'پنجشنبه',
            'جمعه', 'شنبه'
        ],
        ,
        ['۱ش', '۲ش', '۳ش', '۴ش', '۵ش', 'ج', 'ش']
    ],
    ,
    [
        ['ج', 'ف', 'م', 'ا', 'م', 'ج', 'ج', 'ا', 'س', 'ا', 'ن', 'د'],
        [
            'جنو', 'فبروری', 'مارچ', 'اپریل', 'می', 'جون', 'جول', 'اگست',
            'سپتمبر', 'اکتوبر', 'نومبر', 'دسم'
        ],
        [
            'جنوری', 'فبروری', 'مارچ', 'اپریل', 'می', 'جون', 'جولای',
            'اگست', 'سپتمبر', 'اکتوبر', 'نومبر', 'دسمبر'
        ]
    ],
    [
        ['ج', 'ف', 'م', 'ا', 'م', 'ج', 'ج', 'ا', 'س', 'ا', 'ن', 'د'],
        [
            'جنوری', 'فبروری', 'مارچ', 'اپریل', 'می', 'جون', 'جولای',
            'اگست', 'سپتمبر', 'اکتوبر', 'نومبر', 'دسمبر'
        ],
    ],
    [['ق', 'م'], ['ق.م.', 'م.'], ['قبل از میلاد', 'میلادی']], 6, [4, 5],
    ['y/M/d', 'd MMM y', 'd MMMM y', 'EEEE d MMMM y'],
    ['H:mm', 'H:mm:ss', 'H:mm:ss (z)', 'H:mm:ss (zzzz)'],
    [
        '{1}،\u200f {0}',
        ,
        '{1}، ساعت {0}',
    ],
    ['.', ',', ';', '%', '\u200e+', '\u200e−', 'E', '×', '‰', '∞', 'ناعدد', ':'],
    ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'], '؋', 'افغانی افغانستان', {
        'AFN': ['؋'],
        'CAD': ['$CA', '$'],
        'CNY': ['¥CN', '¥'],
        'HKD': ['$HK', '$'],
        'IRR': ['ریال'],
        'MXN': ['$MX', '$'],
        'NZD': ['$NZ', '$'],
        'THB': ['฿'],
        'XCD': ['$EC', '$']
    },
    plural
];
//# sourceMappingURL=fa-AF.js.map