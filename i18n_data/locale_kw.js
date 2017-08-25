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
    'kw',
    [
        ['a.m.', 'p.m.'],
        ,
    ],
    ,
    [
        ['S', 'M', 'T', 'W', 'T', 'F', 'S'], ['Sul', 'Lun', 'Mth', 'Mhr', 'Yow', 'Gwe', 'Sad'],
        ['dy Sul', 'dy Lun', 'dy Meurth', 'dy Merher', 'dy Yow', 'dy Gwener', 'dy Sadorn'],
        ['Sul', 'Lun', 'Mth', 'Mhr', 'Yow', 'Gwe', 'Sad']
    ],
    ,
    [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        ['Gen', 'Hwe', 'Meu', 'Ebr', 'Me', 'Met', 'Gor', 'Est', 'Gwn', 'Hed', 'Du', 'Kev'],
        [
            'mis Genver', 'mis Hwevrer', 'mis Meurth', 'mis Ebrel', 'mis Me', 'mis Metheven',
            'mis Gortheren', 'mis Est', 'mis Gwynngala', 'mis Hedra', 'mis Du', 'mis Kevardhu'
        ]
    ],
    ,
    [
        ['RC', 'AD'],
        ,
    ],
    1, [6, 0], ['y-MM-dd', 'y MMM d', 'y MMMM d', 'y MMMM d, EEEE'],
    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
    [
        '{1} {0}',
        ,
        ,
    ],
    ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
    ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'], '£', 'GBP', function (n) {
        if (n === 1)
            return Plural.One;
        if (n === 2)
            return Plural.Two;
        return Plural.Other;
    }
];
//# sourceMappingURL=locale_kw.js.map