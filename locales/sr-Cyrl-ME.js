/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/sr-Cyrl-ME", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
            return 1;
        if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
            !(i % 100 >= 12 && i % 100 <= 14) ||
            f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
                !(f % 100 >= 12 && f % 100 <= 14))
            return 3;
        return 5;
    }
    exports.default = [
        'sr-Cyrl-ME', [['a', 'p'], ['прије подне', 'по подне'], u], u,
        [
            ['н', 'п', 'у', 'с', 'ч', 'п', 'с'],
            ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
            [
                'недјеља', 'понедељак', 'уторак', 'сриједа', 'четвртак',
                'петак', 'субота'
            ],
            ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су']
        ],
        u,
        [
            ['ј', 'ф', 'м', 'а', 'м', 'ј', 'ј', 'а', 'с', 'о', 'н', 'д'],
            [
                'јан', 'феб', 'март', 'апр', 'мај', 'јун', 'јул', 'авг', 'септ',
                'окт', 'нов', 'дец'
            ],
            [
                'јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул',
                'август', 'септембар', 'октобар', 'новембар', 'децембар'
            ]
        ],
        u,
        [
            ['п.н.е.', 'н.е.'], ['п. н. е.', 'н. е.'],
            ['прије нове ере', 'нове ере']
        ],
        1, [6, 0], ['d.M.yy.', 'dd.MM.y.', 'dd. MMMM y.', 'EEEE, dd. MMMM y.'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], '€', 'Евро', {
            'AUD': [u, '$'],
            'BAM': ['КМ', 'KM'],
            'GEL': [u, 'ლ'],
            'KRW': [u, '₩'],
            'NZD': [u, '$'],
            'TWD': ['NT$'],
            'USD': ['US$', '$'],
            'VND': [u, '₫']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ItQ3lybC1NRS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9sb2NhbGVzL3NyLUN5cmwtTUUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx5Q0FBeUM7SUFDekMsK0NBQStDO0lBRS9DLElBQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUVwQixTQUFTLE1BQU0sQ0FBQyxDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQzdFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElB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O1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDaEI7UUFDRCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoLFxuICAgICAgZiA9IHBhcnNlSW50KG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLCAxMCkgfHwgMDtcbiAgaWYgKHYgPT09IDAgJiYgaSAlIDEwID09PSAxICYmICEoaSAlIDEwMCA9PT0gMTEpIHx8IGYgJSAxMCA9PT0gMSAmJiAhKGYgJSAxMDAgPT09IDExKSkgcmV0dXJuIDE7XG4gIGlmICh2ID09PSAwICYmIGkgJSAxMCA9PT0gTWF0aC5mbG9vcihpICUgMTApICYmIGkgJSAxMCA+PSAyICYmIGkgJSAxMCA8PSA0ICYmXG4gICAgICAgICAgIShpICUgMTAwID49IDEyICYmIGkgJSAxMDAgPD0gMTQpIHx8XG4gICAgICBmICUgMTAgPT09IE1hdGguZmxvb3IoZiAlIDEwKSAmJiBmICUgMTAgPj0gMiAmJiBmICUgMTAgPD0gNCAmJlxuICAgICAgICAgICEoZiAlIDEwMCA+PSAxMiAmJiBmICUgMTAwIDw9IDE0KSlcbiAgICByZXR1cm4gMztcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ3NyLUN5cmwtTUUnLCBbWydhJywgJ3AnXSwgWyfQv9GA0LjRmNC1INC/0L7QtNC90LUnLCAn0L/QviDQv9C+0LTQvdC1J10sIHVdLCB1LFxuICBbXG4gICAgWyfQvScsICfQvycsICfRgycsICfRgScsICfRhycsICfQvycsICfRgSddLFxuICAgIFsn0L3QtdC0JywgJ9C/0L7QvScsICfRg9GC0L4nLCAn0YHRgNC1JywgJ9GH0LXRgicsICfQv9C10YInLCAn0YHRg9CxJ10sXG4gICAgW1xuICAgICAgJ9C90LXQtNGY0LXRmdCwJywgJ9C/0L7QvdC10LTQtdGZ0LDQuicsICfRg9GC0L7RgNCw0LonLCAn0YHRgNC40ZjQtdC00LAnLCAn0YfQtdGC0LLRgNGC0LDQuicsXG4gICAgICAn0L/QtdGC0LDQuicsICfRgdGD0LHQvtGC0LAnXG4gICAgXSxcbiAgICBbJ9C90LUnLCAn0L/QvicsICfRg9GCJywgJ9GB0YAnLCAn0YfQtScsICfQv9C1JywgJ9GB0YMnXVxuICBdLFxuICB1LFxuICBbXG4gICAgWyfRmCcsICfRhCcsICfQvCcsICfQsCcsICfQvCcsICfRmCcsICfRmCcsICfQsCcsICfRgScsICfQvicsICfQvScsICfQtCddLFxuICAgIFtcbiAgICAgICfRmNCw0L0nLCAn0YTQtdCxJywgJ9C80LDRgNGCJywgJ9Cw0L/RgCcsICfQvNCw0ZgnLCAn0ZjRg9C9JywgJ9GY0YPQuycsICfQsNCy0LMnLCAn0YHQtdC/0YInLFxuICAgICAgJ9C+0LrRgicsICfQvdC+0LInLCAn0LTQtdGGJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ9GY0LDQvdGD0LDRgCcsICfRhNC10LHRgNGD0LDRgCcsICfQvNCw0YDRgicsICfQsNC/0YDQuNC7JywgJ9C80LDRmCcsICfRmNGD0L0nLCAn0ZjRg9C7JyxcbiAgICAgICfQsNCy0LPRg9GB0YInLCAn0YHQtdC/0YLQtdC80LHQsNGAJywgJ9C+0LrRgtC+0LHQsNGAJywgJ9C90L7QstC10LzQsdCw0YAnLCAn0LTQtdGG0LXQvNCx0LDRgCdcbiAgICBdXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ9C/LtC9LtC1LicsICfQvS7QtS4nXSwgWyfQvy4g0L0uINC1LicsICfQvS4g0LUuJ10sXG4gICAgWyfQv9GA0LjRmNC1INC90L7QstC1INC10YDQtScsICfQvdC+0LLQtSDQtdGA0LUnXVxuICBdLFxuICAxLCBbNiwgMF0sIFsnZC5NLnl5LicsICdkZC5NTS55LicsICdkZC4gTU1NTSB5LicsICdFRUVFLCBkZC4gTU1NTSB5LiddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLCBbJ3sxfSB7MH0nLCB1LCB1LCB1XSxcbiAgWycsJywgJy4nLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSwgJ+KCrCcsICfQldCy0YDQvicsIHtcbiAgICAnQVVEJzogW3UsICckJ10sXG4gICAgJ0JBTSc6IFsn0JrQnCcsICdLTSddLFxuICAgICdHRUwnOiBbdSwgJ+GDmiddLFxuICAgICdLUlcnOiBbdSwgJ+KCqSddLFxuICAgICdOWkQnOiBbdSwgJyQnXSxcbiAgICAnVFdEJzogWydOVCQnXSxcbiAgICAnVVNEJzogWydVUyQnLCAnJCddLFxuICAgICdWTkQnOiBbdSwgJ+KCqyddXG4gIH0sXG4gIHBsdXJhbFxuXTtcbiJdfQ==