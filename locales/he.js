/**
 * @license
 * Copyright Google LLC All Rights Reserved.
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
        define("@angular/common/locales/he", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        if (i === 2 && v === 0)
            return 2;
        if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0)
            return 4;
        return 5;
    }
    exports.default = [
        'he',
        [['לפנה״צ', 'אחה״צ'], u, u],
        [['לפנה״צ', 'אחה״צ'], ['AM', 'PM'], u],
        [
            ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'],
            [
                'יום א׳', 'יום ב׳', 'יום ג׳', 'יום ד׳', 'יום ה׳', 'יום ו׳',
                'שבת'
            ],
            [
                'יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי',
                'יום חמישי', 'יום שישי', 'יום שבת'
            ],
            ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳']
        ],
        u,
        [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            [
                'ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳',
                'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'
            ],
            [
                'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי',
                'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
            ]
        ],
        u,
        [['לפנה״ס', 'לספירה'], u, ['לפני הספירה', 'לספירה']],
        0,
        [5, 6],
        ['d.M.y', 'd בMMM y', 'd בMMMM y', 'EEEE, d בMMMM y'],
        ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'],
        ['{1}, {0}', u, '{1} בשעה {0}', u],
        ['.', ',', ';', '%', '\u200e+', '\u200e-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\u200f#,##0.00 ¤;\u200f-#,##0.00 ¤', '#E0'],
        'ILS',
        '₪',
        'שקל חדש',
        {
            'BYN': [u, 'р'],
            'CNY': ['\u200eCN¥\u200e', '¥'],
            'ILP': ['ל״י'],
            'THB': ['฿'],
            'TWD': ['NT$']
        },
        'rtl',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9oZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsSUFBSTtRQUNKLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QztZQUNFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzFDO2dCQUNFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUTtnQkFDMUQsS0FBSzthQUNOO1lBQ0Q7Z0JBQ0UsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVztnQkFDaEQsV0FBVyxFQUFFLFVBQVUsRUFBRSxTQUFTO2FBQ25DO1lBQ0QsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQy9EO2dCQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2dCQUM1RCxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO2FBQy9CO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTtnQkFDeEQsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU87YUFDakQ7U0FDRjtRQUNELENBQUM7UUFDRCxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztRQUNyRCxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQztRQUNoRCxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzFFLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxvQ0FBb0MsRUFBRSxLQUFLLENBQUM7UUFDcEUsS0FBSztRQUNMLEdBQUc7UUFDSCxTQUFTO1FBQ1Q7WUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDO1lBQy9CLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztTQUNmO1FBQ0QsS0FBSztRQUNMLE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKG4pKSwgdiA9IG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aDtcbiAgaWYgKGkgPT09IDEgJiYgdiA9PT0gMCkgcmV0dXJuIDE7XG4gIGlmIChpID09PSAyICYmIHYgPT09IDApIHJldHVybiAyO1xuICBpZiAodiA9PT0gMCAmJiAhKG4gPj0gMCAmJiBuIDw9IDEwKSAmJiBuICUgMTAgPT09IDApIHJldHVybiA0O1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnaGUnLFxuICBbWyfXnNek16DXlNe016YnLCAn15DXl9eU17TXpiddLCB1LCB1XSxcbiAgW1sn15zXpNeg15TXtNemJywgJ9eQ15fXlNe016YnXSwgWydBTScsICdQTSddLCB1XSxcbiAgW1xuICAgIFsn15DXsycsICfXkdezJywgJ9eS17MnLCAn15PXsycsICfXlNezJywgJ9eV17MnLCAn16nXsyddLFxuICAgIFtcbiAgICAgICfXmdeV150g15DXsycsICfXmdeV150g15HXsycsICfXmdeV150g15LXsycsICfXmdeV150g15PXsycsICfXmdeV150g15TXsycsICfXmdeV150g15XXsycsXG4gICAgICAn16nXkdeqJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ9eZ15XXnSDXqNeQ16nXldefJywgJ9eZ15XXnSDXqdeg15knLCAn15nXldedINep15zXmdep15knLCAn15nXldedINeo15HXmdei15knLFxuICAgICAgJ9eZ15XXnSDXl9ee15nXqdeZJywgJ9eZ15XXnSDXqdeZ16nXmScsICfXmdeV150g16nXkdeqJ1xuICAgIF0sXG4gICAgWyfXkNezJywgJ9eR17MnLCAn15LXsycsICfXk9ezJywgJ9eU17MnLCAn15XXsycsICfXqdezJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXSxcbiAgICBbXG4gICAgICAn15nXoNeV17MnLCAn16TXkdeo17MnLCAn157XqNelJywgJ9eQ16TXqNezJywgJ9ee15DXmScsICfXmdeV16DXmScsICfXmdeV15zXmScsICfXkNeV15LXsycsXG4gICAgICAn16HXpNeY17MnLCAn15DXlden17MnLCAn16DXldeR17MnLCAn15PXptee17MnXG4gICAgXSxcbiAgICBbXG4gICAgICAn15nXoNeV15DXqCcsICfXpNeR16jXldeQ16gnLCAn157XqNelJywgJ9eQ16TXqNeZ15wnLCAn157XkNeZJywgJ9eZ15XXoNeZJywgJ9eZ15XXnNeZJyxcbiAgICAgICfXkNeV15LXldeh15gnLCAn16HXpNeY157XkdeoJywgJ9eQ15XXp9eY15XXkdeoJywgJ9eg15XXkdee15HXqCcsICfXk9em157XkdeoJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1sn15zXpNeg15TXtNehJywgJ9ec16HXpNeZ16jXlCddLCB1LCBbJ9ec16TXoNeZINeU16HXpNeZ16jXlCcsICfXnNeh16TXmdeo15QnXV0sXG4gIDAsXG4gIFs1LCA2XSxcbiAgWydkLk0ueScsICdkINeRTU1NIHknLCAnZCDXkU1NTU0geScsICdFRUVFLCBkINeRTU1NTSB5J10sXG4gIFsnSDptbScsICdIOm1tOnNzJywgJ0g6bW06c3MgeicsICdIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0sIHswfScsIHUsICd7MX0g15HXqdei15QgezB9JywgdV0sXG4gIFsnLicsICcsJywgJzsnLCAnJScsICdcXHUyMDBlKycsICdcXHUyMDBlLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJ1xcdTIwMGYjLCMjMC4wMMKgwqQ7XFx1MjAwZi0jLCMjMC4wMMKgwqQnLCAnI0UwJ10sXG4gICdJTFMnLFxuICAn4oKqJyxcbiAgJ9ep16fXnCDXl9eT16knLFxuICB7XG4gICAgJ0JZTic6IFt1LCAn0YAnXSxcbiAgICAnQ05ZJzogWydcXHUyMDBlQ07CpVxcdTIwMGUnLCAnwqUnXSxcbiAgICAnSUxQJzogWyfXnNe015knXSxcbiAgICAnVEhCJzogWyfguL8nXSxcbiAgICAnVFdEJzogWydOVCQnXVxuICB9LFxuICAncnRsJyxcbiAgcGx1cmFsXG5dO1xuIl19