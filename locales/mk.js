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
        define("@angular/common/locales/mk", ["require", "exports"], factory);
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
        return 5;
    }
    exports.default = [
        'mk', [['претпл.', 'попл.'], u, ['претпладне', 'попладне']], u,
        [
            ['н', 'п', 'в', 'с', 'ч', 'п', 'с'],
            ['нед.', 'пон.', 'вт.', 'сре.', 'чет.', 'пет.', 'саб.'],
            [
                'недела', 'понеделник', 'вторник', 'среда', 'четврток',
                'петок', 'сабота'
            ],
            ['нед.', 'пон.', 'вто.', 'сре.', 'чет.', 'пет.', 'саб.']
        ],
        [
            ['н', 'п', 'в', 'с', 'ч', 'п', 'с'],
            ['нед.', 'пон.', 'вто.', 'сре.', 'чет.', 'пет.', 'саб.'],
            [
                'недела', 'понеделник', 'вторник', 'среда', 'четврток',
                'петок', 'сабота'
            ],
            ['нед.', 'пон.', 'вто.', 'сре.', 'чет.', 'пет.', 'саб.']
        ],
        [
            ['ј', 'ф', 'м', 'а', 'м', 'ј', 'ј', 'а', 'с', 'о', 'н', 'д'],
            [
                'јан.', 'фев.', 'мар.', 'апр.', 'мај', 'јун.', 'јул.', 'авг.',
                'септ.', 'окт.', 'ноем.', 'дек.'
            ],
            [
                'јануари', 'февруари', 'март', 'април', 'мај', 'јуни',
                'јули', 'август', 'септември', 'октомври', 'ноември',
                'декември'
            ]
        ],
        u, [['пр.н.е.', 'н.е.'], u, ['пред нашата ера', 'од нашата ера']],
        1, [6, 0], ['dd.M.yy', 'dd.M.y', 'dd MMMM y', 'EEEE, dd MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], 'ден', 'Македонски денар', {
            'AUD': [u, '$'],
            'CNY': [u, '¥'],
            'GBP': [u, '£'],
            'HKD': [u, '$'],
            'ILS': [u, '₪'],
            'INR': [u, '₹'],
            'JPY': [u, '¥'],
            'KRW': [u, '₩'],
            'MKD': ['ден'],
            'NZD': [u, '$'],
            'TWD': [u, 'NT$'],
            'USD': ['US$', '$'],
            'VND': [u, '₫']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9tay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLGdCQUFnQixDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQzdFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUQ7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUs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S0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztTQUNoQjtRQUNELE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGgsXG4gICAgICBmID0gcGFyc2VJbnQobi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJyksIDEwKSB8fCAwO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAgPT09IDEgJiYgIShpICUgMTAwID09PSAxMSkgfHwgZiAlIDEwID09PSAxICYmICEoZiAlIDEwMCA9PT0gMTEpKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ21rJywgW1sn0L/RgNC10YLQv9C7LicsICfQv9C+0L/Quy4nXSwgdSwgWyfQv9GA0LXRgtC/0LvQsNC00L3QtScsICfQv9C+0L/Qu9Cw0LTQvdC1J11dLCB1LFxuICBbXG4gICAgWyfQvScsICfQvycsICfQsicsICfRgScsICfRhycsICfQvycsICfRgSddLFxuICAgIFsn0L3QtdC0LicsICfQv9C+0L0uJywgJ9Cy0YIuJywgJ9GB0YDQtS4nLCAn0YfQtdGCLicsICfQv9C10YIuJywgJ9GB0LDQsS4nXSxcbiAgICBbXG4gICAgICAn0L3QtdC00LXQu9CwJywgJ9C/0L7QvdC10LTQtdC70L3QuNC6JywgJ9Cy0YLQvtGA0L3QuNC6JywgJ9GB0YDQtdC00LAnLCAn0YfQtdGC0LLRgNGC0L7QuicsXG4gICAgICAn0L/QtdGC0L7QuicsICfRgdCw0LHQvtGC0LAnXG4gICAgXSxcbiAgICBbJ9C90LXQtC4nLCAn0L/QvtC9LicsICfQstGC0L4uJywgJ9GB0YDQtS4nLCAn0YfQtdGCLicsICfQv9C10YIuJywgJ9GB0LDQsS4nXVxuICBdLFxuICBbXG4gICAgWyfQvScsICfQvycsICfQsicsICfRgScsICfRhycsICfQvycsICfRgSddLFxuICAgIFsn0L3QtdC0LicsICfQv9C+0L0uJywgJ9Cy0YLQvi4nLCAn0YHRgNC1LicsICfRh9C10YIuJywgJ9C/0LXRgi4nLCAn0YHQsNCxLiddLFxuICAgIFtcbiAgICAgICfQvdC10LTQtdC70LAnLCAn0L/QvtC90LXQtNC10LvQvdC40LonLCAn0LLRgtC+0YDQvdC40LonLCAn0YHRgNC10LTQsCcsICfRh9C10YLQstGA0YLQvtC6JyxcbiAgICAgICfQv9C10YLQvtC6JywgJ9GB0LDQsdC+0YLQsCdcbiAgICBdLFxuICAgIFsn0L3QtdC0LicsICfQv9C+0L0uJywgJ9Cy0YLQvi4nLCAn0YHRgNC1LicsICfRh9C10YIuJywgJ9C/0LXRgi4nLCAn0YHQsNCxLiddXG4gIF0sXG4gIFtcbiAgICBbJ9GYJywgJ9GEJywgJ9C8JywgJ9CwJywgJ9C8JywgJ9GYJywgJ9GYJywgJ9CwJywgJ9GBJywgJ9C+JywgJ9C9JywgJ9C0J10sXG4gICAgW1xuICAgICAgJ9GY0LDQvS4nLCAn0YTQtdCyLicsICfQvNCw0YAuJywgJ9Cw0L/RgC4nLCAn0LzQsNGYJywgJ9GY0YPQvS4nLCAn0ZjRg9C7LicsICfQsNCy0LMuJyxcbiAgICAgICfRgdC10L/Rgi4nLCAn0L7QutGCLicsICfQvdC+0LXQvC4nLCAn0LTQtdC6LidcbiAgICBdLFxuICAgIFtcbiAgICAgICfRmNCw0L3Rg9Cw0YDQuCcsICfRhNC10LLRgNGD0LDRgNC4JywgJ9C80LDRgNGCJywgJ9Cw0L/RgNC40LsnLCAn0LzQsNGYJywgJ9GY0YPQvdC4JyxcbiAgICAgICfRmNGD0LvQuCcsICfQsNCy0LPRg9GB0YInLCAn0YHQtdC/0YLQtdC80LLRgNC4JywgJ9C+0LrRgtC+0LzQstGA0LgnLCAn0L3QvtC10LzQstGA0LgnLFxuICAgICAgJ9C00LXQutC10LzQstGA0LgnXG4gICAgXVxuICBdLFxuICB1LCBbWyfQv9GALtC9LtC1LicsICfQvS7QtS4nXSwgdSwgWyfQv9GA0LXQtCDQvdCw0YjQsNGC0LAg0LXRgNCwJywgJ9C+0LQg0L3QsNGI0LDRgtCwINC10YDQsCddXSxcbiAgMSwgWzYsIDBdLCBbJ2RkLk0ueXknLCAnZGQuTS55JywgJ2RkIE1NTU0geScsICdFRUVFLCBkZCBNTU1NIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSwgWyd7MX0gezB9JywgdSwgdSwgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sICfQtNC10L0nLCAn0JzQsNC60LXQtNC+0L3RgdC60Lgg0LTQtdC90LDRgCcsIHtcbiAgICAnQVVEJzogW3UsICckJ10sXG4gICAgJ0NOWSc6IFt1LCAnwqUnXSxcbiAgICAnR0JQJzogW3UsICfCoyddLFxuICAgICdIS0QnOiBbdSwgJyQnXSxcbiAgICAnSUxTJzogW3UsICfigqonXSxcbiAgICAnSU5SJzogW3UsICfigrknXSxcbiAgICAnSlBZJzogW3UsICfCpSddLFxuICAgICdLUlcnOiBbdSwgJ+KCqSddLFxuICAgICdNS0QnOiBbJ9C00LXQvSddLFxuICAgICdOWkQnOiBbdSwgJyQnXSxcbiAgICAnVFdEJzogW3UsICdOVCQnXSxcbiAgICAnVVNEJzogWydVUyQnLCAnJCddLFxuICAgICdWTkQnOiBbdSwgJ+KCqyddXG4gIH0sXG4gIHBsdXJhbFxuXTtcbiJdfQ==