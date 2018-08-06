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
        define("@angular/common/locales/ru-UA", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (v === 0 && i % 10 === 1 && !(i % 100 === 11))
            return 1;
        if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
            !(i % 100 >= 12 && i % 100 <= 14))
            return 3;
        if (v === 0 && i % 10 === 0 ||
            v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
            v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14)
            return 4;
        return 5;
    }
    exports.default = [
        'ru-UA', [['AM', 'PM'], u, u], u,
        [
            ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'], u,
            [
                'воскресенье', 'понедельник', 'вторник', 'среда',
                'четверг', 'пятница', 'суббота'
            ],
            ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
        ],
        [
            ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'],
            ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
            [
                'воскресенье', 'понедельник', 'вторник', 'среда',
                'четверг', 'пятница', 'суббота'
            ],
            ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
        ],
        [
            ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
            [
                'янв.', 'февр.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.',
                'сент.', 'окт.', 'нояб.', 'дек.'
            ],
            [
                'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                'июля', 'августа', 'сентября', 'октября', 'ноября',
                'декабря'
            ]
        ],
        [
            ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
            [
                'янв.', 'февр.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.',
                'сент.', 'окт.', 'нояб.', 'дек.'
            ],
            [
                'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
                'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь',
                'декабрь'
            ]
        ],
        [
            ['до н.э.', 'н.э.'], ['до н. э.', 'н. э.'],
            ['до Рождества Христова', 'от Рождества Христова']
        ],
        1, [6, 0], ['dd.MM.y', 'd MMM y \'г\'.', 'd MMMM y \'г\'.', 'EEEE, d MMMM y \'г\'.'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1}, {0}', u, u, u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'не число', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], '₴', 'украинская гривна', {
            'GEL': [u, 'ლ'],
            'RON': [u, 'L'],
            'RUB': ['₽'],
            'RUR': ['р.'],
            'THB': ['฿'],
            'TMT': ['ТМТ'],
            'TWD': ['NT$'],
            'UAH': ['₴'],
            'XXX': ['XXXX']
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnUtVUEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9ydS1VQS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLGdCQUFnQixDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztZQUN0RSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7WUFDbkMsT0FBTyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFF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QUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDO1lBQzFDLENBQUMsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUM7U0FDbkQ7UUFDRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLENBQUM7UUFDcEYsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDO1FBQ25FLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFO1lBQ3ZFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ2hCO1FBQ0QsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKHYgPT09IDAgJiYgaSAlIDEwID09PSAxICYmICEoaSAlIDEwMCA9PT0gMTEpKSByZXR1cm4gMTtcbiAgaWYgKHYgPT09IDAgJiYgaSAlIDEwID09PSBNYXRoLmZsb29yKGkgJSAxMCkgJiYgaSAlIDEwID49IDIgJiYgaSAlIDEwIDw9IDQgJiZcbiAgICAgICEoaSAlIDEwMCA+PSAxMiAmJiBpICUgMTAwIDw9IDE0KSlcbiAgICByZXR1cm4gMztcbiAgaWYgKHYgPT09IDAgJiYgaSAlIDEwID09PSAwIHx8XG4gICAgICB2ID09PSAwICYmIGkgJSAxMCA9PT0gTWF0aC5mbG9vcihpICUgMTApICYmIGkgJSAxMCA+PSA1ICYmIGkgJSAxMCA8PSA5IHx8XG4gICAgICB2ID09PSAwICYmIGkgJSAxMDAgPT09IE1hdGguZmxvb3IoaSAlIDEwMCkgJiYgaSAlIDEwMCA+PSAxMSAmJiBpICUgMTAwIDw9IDE0KVxuICAgIHJldHVybiA0O1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAncnUtVUEnLCBbWydBTScsICdQTSddLCB1LCB1XSwgdSxcbiAgW1xuICAgIFsn0LLRgScsICfQv9C9JywgJ9Cy0YInLCAn0YHRgCcsICfRh9GCJywgJ9C/0YInLCAn0YHQsSddLCB1LFxuICAgIFtcbiAgICAgICfQstC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9C/0L7QvdC10LTQtdC70YzQvdC40LonLCAn0LLRgtC+0YDQvdC40LonLCAn0YHRgNC10LTQsCcsXG4gICAgICAn0YfQtdGC0LLQtdGA0LMnLCAn0L/Rj9GC0L3QuNGG0LAnLCAn0YHRg9Cx0LHQvtGC0LAnXG4gICAgXSxcbiAgICBbJ9Cy0YEnLCAn0L/QvScsICfQstGCJywgJ9GB0YAnLCAn0YfRgicsICfQv9GCJywgJ9GB0LEnXVxuICBdLFxuICBbXG4gICAgWyfQkicsICfQnycsICfQkicsICfQoScsICfQpycsICfQnycsICfQoSddLFxuICAgIFsn0LLRgScsICfQv9C9JywgJ9Cy0YInLCAn0YHRgCcsICfRh9GCJywgJ9C/0YInLCAn0YHQsSddLFxuICAgIFtcbiAgICAgICfQstC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9C/0L7QvdC10LTQtdC70YzQvdC40LonLCAn0LLRgtC+0YDQvdC40LonLCAn0YHRgNC10LTQsCcsXG4gICAgICAn0YfQtdGC0LLQtdGA0LMnLCAn0L/Rj9GC0L3QuNGG0LAnLCAn0YHRg9Cx0LHQvtGC0LAnXG4gICAgXSxcbiAgICBbJ9Cy0YEnLCAn0L/QvScsICfQstGCJywgJ9GB0YAnLCAn0YfRgicsICfQv9GCJywgJ9GB0LEnXVxuICBdLFxuICBbXG4gICAgWyfQrycsICfQpCcsICfQnCcsICfQkCcsICfQnCcsICfQmCcsICfQmCcsICfQkCcsICfQoScsICfQnicsICfQnScsICfQlCddLFxuICAgIFtcbiAgICAgICfRj9C90LIuJywgJ9GE0LXQstGALicsICfQvNCw0YAuJywgJ9Cw0L/RgC4nLCAn0LzQsNGPJywgJ9C40Y7QvS4nLCAn0LjRjtC7LicsICfQsNCy0LMuJyxcbiAgICAgICfRgdC10L3Rgi4nLCAn0L7QutGCLicsICfQvdC+0Y/QsS4nLCAn0LTQtdC6LidcbiAgICBdLFxuICAgIFtcbiAgICAgICfRj9C90LLQsNGA0Y8nLCAn0YTQtdCy0YDQsNC70Y8nLCAn0LzQsNGA0YLQsCcsICfQsNC/0YDQtdC70Y8nLCAn0LzQsNGPJywgJ9C40Y7QvdGPJyxcbiAgICAgICfQuNGO0LvRjycsICfQsNCy0LPRg9GB0YLQsCcsICfRgdC10L3RgtGP0LHRgNGPJywgJ9C+0LrRgtGP0LHRgNGPJywgJ9C90L7Rj9Cx0YDRjycsXG4gICAgICAn0LTQtdC60LDQsdGA0Y8nXG4gICAgXVxuICBdLFxuICBbXG4gICAgWyfQrycsICfQpCcsICfQnCcsICfQkCcsICfQnCcsICfQmCcsICfQmCcsICfQkCcsICfQoScsICfQnicsICfQnScsICfQlCddLFxuICAgIFtcbiAgICAgICfRj9C90LIuJywgJ9GE0LXQstGALicsICfQvNCw0YDRgicsICfQsNC/0YAuJywgJ9C80LDQuScsICfQuNGO0L3RjCcsICfQuNGO0LvRjCcsICfQsNCy0LMuJyxcbiAgICAgICfRgdC10L3Rgi4nLCAn0L7QutGCLicsICfQvdC+0Y/QsS4nLCAn0LTQtdC6LidcbiAgICBdLFxuICAgIFtcbiAgICAgICfRj9C90LLQsNGA0YwnLCAn0YTQtdCy0YDQsNC70YwnLCAn0LzQsNGA0YInLCAn0LDQv9GA0LXQu9GMJywgJ9C80LDQuScsICfQuNGO0L3RjCcsXG4gICAgICAn0LjRjtC70YwnLCAn0LDQstCz0YPRgdGCJywgJ9GB0LXQvdGC0Y/QsdGA0YwnLCAn0L7QutGC0Y/QsdGA0YwnLCAn0L3QvtGP0LHRgNGMJyxcbiAgICAgICfQtNC10LrQsNCx0YDRjCdcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ9C00L4g0L0u0Y0uJywgJ9C9LtGNLiddLCBbJ9C00L4g0L0uINGNLicsICfQvS4g0Y0uJ10sXG4gICAgWyfQtNC+INCg0L7QttC00LXRgdGC0LLQsCDQpdGA0LjRgdGC0L7QstCwJywgJ9C+0YIg0KDQvtC20LTQtdGB0YLQstCwINCl0YDQuNGB0YLQvtCy0LAnXVxuICBdLFxuICAxLCBbNiwgMF0sIFsnZGQuTU0ueScsICdkIE1NTSB5IFxcJ9CzXFwnLicsICdkIE1NTU0geSBcXCfQs1xcJy4nLCAnRUVFRSwgZCBNTU1NIHkgXFwn0LNcXCcuJ10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sIFsnezF9LCB7MH0nLCB1LCB1LCB1XSxcbiAgWycsJywgJ8KgJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ9C90LXCoNGH0LjRgdC70L4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMMKgJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sICfigrQnLCAn0YPQutGA0LDQuNC90YHQutCw0Y8g0LPRgNC40LLQvdCwJywge1xuICAgICdHRUwnOiBbdSwgJ+GDmiddLFxuICAgICdST04nOiBbdSwgJ0wnXSxcbiAgICAnUlVCJzogWyfigr0nXSxcbiAgICAnUlVSJzogWyfRgC4nXSxcbiAgICAnVEhCJzogWyfguL8nXSxcbiAgICAnVE1UJzogWyfQotCc0KInXSxcbiAgICAnVFdEJzogWydOVCQnXSxcbiAgICAnVUFIJzogWyfigrQnXSxcbiAgICAnWFhYJzogWydYWFhYJ11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19