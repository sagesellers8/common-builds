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
        define("@angular/common/locales/sr-Cyrl-XK", ["require", "exports"], factory);
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
        'sr-Cyrl-XK', [['a', 'p'], ['пре подне', 'по подне'], u], u,
        [
            ['н', 'п', 'у', 'с', 'ч', 'п', 'с'],
            ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
            [
                'недеља', 'понедељак', 'уторак', 'среда', 'четвртак',
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
            ['пре нове ере', 'нове ере']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ItQ3lybC1YSy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9sb2NhbGVzL3NyLUN5cmwtWEsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx5Q0FBeUM7SUFDekMsK0NBQStDO0lBRS9DLElBQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUVwQixTQUFTLE1BQU0sQ0FBQyxDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQzdFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElB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QUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1NBQ2hCO1FBQ0QsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aCxcbiAgICAgIGYgPSBwYXJzZUludChuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKSwgMTApIHx8IDA7XG4gIGlmICh2ID09PSAwICYmIGkgJSAxMCA9PT0gMSAmJiAhKGkgJSAxMDAgPT09IDExKSB8fCBmICUgMTAgPT09IDEgJiYgIShmICUgMTAwID09PSAxMSkpIHJldHVybiAxO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAgPT09IE1hdGguZmxvb3IoaSAlIDEwKSAmJiBpICUgMTAgPj0gMiAmJiBpICUgMTAgPD0gNCAmJlxuICAgICAgICAgICEoaSAlIDEwMCA+PSAxMiAmJiBpICUgMTAwIDw9IDE0KSB8fFxuICAgICAgZiAlIDEwID09PSBNYXRoLmZsb29yKGYgJSAxMCkgJiYgZiAlIDEwID49IDIgJiYgZiAlIDEwIDw9IDQgJiZcbiAgICAgICAgICAhKGYgJSAxMDAgPj0gMTIgJiYgZiAlIDEwMCA8PSAxNCkpXG4gICAgcmV0dXJuIDM7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdzci1DeXJsLVhLJywgW1snYScsICdwJ10sIFsn0L/RgNC1INC/0L7QtNC90LUnLCAn0L/QviDQv9C+0LTQvdC1J10sIHVdLCB1LFxuICBbXG4gICAgWyfQvScsICfQvycsICfRgycsICfRgScsICfRhycsICfQvycsICfRgSddLFxuICAgIFsn0L3QtdC0JywgJ9C/0L7QvScsICfRg9GC0L4nLCAn0YHRgNC1JywgJ9GH0LXRgicsICfQv9C10YInLCAn0YHRg9CxJ10sXG4gICAgW1xuICAgICAgJ9C90LXQtNC10ZnQsCcsICfQv9C+0L3QtdC00LXRmdCw0LonLCAn0YPRgtC+0YDQsNC6JywgJ9GB0YDQtdC00LAnLCAn0YfQtdGC0LLRgNGC0LDQuicsXG4gICAgICAn0L/QtdGC0LDQuicsICfRgdGD0LHQvtGC0LAnXG4gICAgXSxcbiAgICBbJ9C90LUnLCAn0L/QvicsICfRg9GCJywgJ9GB0YAnLCAn0YfQtScsICfQv9C1JywgJ9GB0YMnXVxuICBdLFxuICB1LFxuICBbXG4gICAgWyfRmCcsICfRhCcsICfQvCcsICfQsCcsICfQvCcsICfRmCcsICfRmCcsICfQsCcsICfRgScsICfQvicsICfQvScsICfQtCddLFxuICAgIFtcbiAgICAgICfRmNCw0L0nLCAn0YTQtdCxJywgJ9C80LDRgNGCJywgJ9Cw0L/RgCcsICfQvNCw0ZgnLCAn0ZjRg9C9JywgJ9GY0YPQuycsICfQsNCy0LMnLCAn0YHQtdC/0YInLFxuICAgICAgJ9C+0LrRgicsICfQvdC+0LInLCAn0LTQtdGGJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ9GY0LDQvdGD0LDRgCcsICfRhNC10LHRgNGD0LDRgCcsICfQvNCw0YDRgicsICfQsNC/0YDQuNC7JywgJ9C80LDRmCcsICfRmNGD0L0nLCAn0ZjRg9C7JyxcbiAgICAgICfQsNCy0LPRg9GB0YInLCAn0YHQtdC/0YLQtdC80LHQsNGAJywgJ9C+0LrRgtC+0LHQsNGAJywgJ9C90L7QstC10LzQsdCw0YAnLCAn0LTQtdGG0LXQvNCx0LDRgCdcbiAgICBdXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ9C/LtC9LtC1LicsICfQvS7QtS4nXSwgWyfQvy4g0L0uINC1LicsICfQvS4g0LUuJ10sXG4gICAgWyfQv9GA0LUg0L3QvtCy0LUg0LXRgNC1JywgJ9C90L7QstC1INC10YDQtSddXG4gIF0sXG4gIDEsIFs2LCAwXSwgWydkLk0ueXkuJywgJ2RkLk1NLnkuJywgJ2RkLiBNTU1NIHkuJywgJ0VFRUUsIGRkLiBNTU1NIHkuJ10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sIFsnezF9IHswfScsIHUsIHUsIHVdLFxuICBbJywnLCAnLicsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLCAn4oKsJywgJ9CV0LLRgNC+Jywge1xuICAgICdBVUQnOiBbdSwgJyQnXSxcbiAgICAnQkFNJzogWyfQmtCcJywgJ0tNJ10sXG4gICAgJ0dFTCc6IFt1LCAn4YOaJ10sXG4gICAgJ0tSVyc6IFt1LCAn4oKpJ10sXG4gICAgJ05aRCc6IFt1LCAnJCddLFxuICAgICdUV0QnOiBbJ05UJCddLFxuICAgICdVU0QnOiBbJ1VTJCcsICckJ10sXG4gICAgJ1ZORCc6IFt1LCAn4oKrJ11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19