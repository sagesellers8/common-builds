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
        define("@angular/common/locales/ar-MA", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 0)
            return 0;
        if (n === 1)
            return 1;
        if (n === 2)
            return 2;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
            return 3;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
            return 4;
        return 5;
    }
    exports.default = [
        'ar-MA',
        [['ص', 'م'], u, u],
        [['ص', 'م'], u, ['صباحًا', 'مساءً']],
        [
            ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
            [
                'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس',
                'الجمعة', 'السبت'
            ],
            u, ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
        ],
        u,
        [
            ['ي', 'ف', 'م', 'أ', 'م', 'ن', 'ل', 'غ', 'ش', 'ك', 'ب', 'د'],
            [
                'يناير', 'فبراير', 'مارس', 'أبريل', 'ماي', 'يونيو',
                'يوليوز', 'غشت', 'شتنبر', 'أكتوبر', 'نونبر', 'دجنبر'
            ],
            u
        ],
        u,
        [['ق.م', 'م'], u, ['قبل الميلاد', 'ميلادي']],
        1,
        [6, 0],
        ['d\u200f/M\u200f/y', 'dd\u200f/MM\u200f/y', 'd MMMM y', 'EEEE، d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        [
            ',', '.', ';', '\u200e%\u200e', '\u200e+', '\u200e-', 'E', '×', '‰', '∞',
            'ليس رقمًا', ':'
        ],
        ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'],
        'MAD',
        'د.م.\u200f',
        'درهم مغربي',
        {
            'AED': ['د.إ.\u200f'],
            'ARS': [u, 'AR$'],
            'AUD': ['AU$'],
            'BBD': [u, 'BB$'],
            'BHD': ['د.ب.\u200f'],
            'BMD': [u, 'BM$'],
            'BND': [u, 'BN$'],
            'BSD': [u, 'BS$'],
            'BZD': [u, 'BZ$'],
            'CAD': ['CA$'],
            'CLP': [u, 'CL$'],
            'CNY': ['CN¥'],
            'COP': [u, 'CO$'],
            'CUP': [u, 'CU$'],
            'DOP': [u, 'DO$'],
            'DZD': ['د.ج.\u200f'],
            'EGP': ['ج.م.\u200f', 'E£'],
            'FJD': [u, 'FJ$'],
            'GBP': ['UK£'],
            'GYD': [u, 'GY$'],
            'HKD': ['HK$'],
            'IQD': ['د.ع.\u200f'],
            'IRR': ['ر.إ.'],
            'JMD': [u, 'JM$'],
            'JOD': ['د.أ.\u200f'],
            'JPY': ['JP¥'],
            'KWD': ['د.ك.\u200f'],
            'KYD': [u, 'KY$'],
            'LBP': ['ل.ل.\u200f', 'L£'],
            'LRD': [u, '$LR'],
            'LYD': ['د.ل.\u200f'],
            'MAD': ['د.م.\u200f'],
            'MRU': ['أ.م.'],
            'MXN': ['MX$'],
            'NZD': ['NZ$'],
            'OMR': ['ر.ع.\u200f'],
            'QAR': ['ر.ق.\u200f'],
            'SAR': ['ر.س.\u200f'],
            'SBD': [u, 'SB$'],
            'SDD': ['د.س.\u200f'],
            'SDG': ['ج.س.'],
            'SRD': [u, 'SR$'],
            'SYP': ['ل.س.\u200f', '£'],
            'THB': ['฿'],
            'TND': ['د.ت.\u200f'],
            'TTD': [u, 'TT$'],
            'TWD': ['NT$'],
            'USD': ['US$'],
            'UYU': [u, 'UY$'],
            'XXX': ['***'],
            'YER': ['ر.ي.\u200f']
        },
        'rtl',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXItTUEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9hci1NQS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLE9BQU87UUFDUCxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEM7WUFDRSxDQUFDLEdBQUcsRUFB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SyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7WUFDM0IsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQztZQUMxQixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztTQUN0QjtRQUNELEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChuID09PSAwKSByZXR1cm4gMDtcbiAgaWYgKG4gPT09IDEpIHJldHVybiAxO1xuICBpZiAobiA9PT0gMikgcmV0dXJuIDI7XG4gIGlmIChuICUgMTAwID09PSBNYXRoLmZsb29yKG4gJSAxMDApICYmIG4gJSAxMDAgPj0gMyAmJiBuICUgMTAwIDw9IDEwKSByZXR1cm4gMztcbiAgaWYgKG4gJSAxMDAgPT09IE1hdGguZmxvb3IobiAlIDEwMCkgJiYgbiAlIDEwMCA+PSAxMSAmJiBuICUgMTAwIDw9IDk5KSByZXR1cm4gNDtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2FyLU1BJyxcbiAgW1sn2LUnLCAn2YUnXSwgdSwgdV0sXG4gIFtbJ9i1JywgJ9mFJ10sIHUsIFsn2LXYqNin2K3Zi9inJywgJ9mF2LPYp9ih2YsnXV0sXG4gIFtcbiAgICBbJ9itJywgJ9mGJywgJ9irJywgJ9ixJywgJ9iuJywgJ9isJywgJ9izJ10sXG4gICAgW1xuICAgICAgJ9in2YTYo9it2K8nLCAn2KfZhNin2KvZhtmK2YYnLCAn2KfZhNir2YTYp9ir2KfYoScsICfYp9mE2KPYsdio2LnYp9ihJywgJ9in2YTYrtmF2YrYsycsXG4gICAgICAn2KfZhNis2YXYudipJywgJ9in2YTYs9io2KonXG4gICAgXSxcbiAgICB1LCBbJ9ij2K3YrycsICfYpdir2YbZitmGJywgJ9ir2YTYp9ir2KfYoScsICfYo9ix2KjYudin2KEnLCAn2K7ZhdmK2LMnLCAn2KzZhdi52KknLCAn2LPYqNiqJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsn2YonLCAn2YEnLCAn2YUnLCAn2KMnLCAn2YUnLCAn2YYnLCAn2YQnLCAn2LonLCAn2LQnLCAn2YMnLCAn2KgnLCAn2K8nXSxcbiAgICBbXG4gICAgICAn2YrZhtin2YrYsScsICfZgdio2LHYp9mK2LEnLCAn2YXYp9ix2LMnLCAn2KPYqNix2YrZhCcsICfZhdin2YonLCAn2YrZiNmG2YrZiCcsXG4gICAgICAn2YrZiNmE2YrZiNiyJywgJ9i62LTYqicsICfYtNiq2YbYqNixJywgJ9ij2YPYqtmI2KjYsScsICfZhtmI2YbYqNixJywgJ9iv2KzZhtio2LEnXG4gICAgXSxcbiAgICB1XG4gIF0sXG4gIHUsXG4gIFtbJ9mCLtmFJywgJ9mFJ10sIHUsIFsn2YLYqNmEINin2YTZhdmK2YTYp9ivJywgJ9mF2YrZhNin2K/ZiiddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2RcXHUyMDBmL01cXHUyMDBmL3knLCAnZGRcXHUyMDBmL01NXFx1MjAwZi95JywgJ2QgTU1NTSB5JywgJ0VFRUXYjCBkIE1NTU0geSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSB7MH0nLCB1LCB1LCB1XSxcbiAgW1xuICAgICcsJywgJy4nLCAnOycsICdcXHUyMDBlJVxcdTIwMGUnLCAnXFx1MjAwZSsnLCAnXFx1MjAwZS0nLCAnRScsICfDlycsICfigLAnLCAn4oieJyxcbiAgICAn2YTZitizwqDYsdmC2YXZi9inJywgJzonXG4gIF0sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICfCpMKgIywjIzAuMDAnLCAnI0UwJ10sXG4gICdNQUQnLFxuICAn2K8u2YUuXFx1MjAwZicsXG4gICfYr9ix2YfZhSDZhdi62LHYqNmKJyxcbiAge1xuICAgICdBRUQnOiBbJ9ivLtilLlxcdTIwMGYnXSxcbiAgICAnQVJTJzogW3UsICdBUiQnXSxcbiAgICAnQVVEJzogWydBVSQnXSxcbiAgICAnQkJEJzogW3UsICdCQiQnXSxcbiAgICAnQkhEJzogWyfYry7YqC5cXHUyMDBmJ10sXG4gICAgJ0JNRCc6IFt1LCAnQk0kJ10sXG4gICAgJ0JORCc6IFt1LCAnQk4kJ10sXG4gICAgJ0JTRCc6IFt1LCAnQlMkJ10sXG4gICAgJ0JaRCc6IFt1LCAnQlokJ10sXG4gICAgJ0NBRCc6IFsnQ0EkJ10sXG4gICAgJ0NMUCc6IFt1LCAnQ0wkJ10sXG4gICAgJ0NOWSc6IFsnQ07CpSddLFxuICAgICdDT1AnOiBbdSwgJ0NPJCddLFxuICAgICdDVVAnOiBbdSwgJ0NVJCddLFxuICAgICdET1AnOiBbdSwgJ0RPJCddLFxuICAgICdEWkQnOiBbJ9ivLtisLlxcdTIwMGYnXSxcbiAgICAnRUdQJzogWyfYrC7ZhS5cXHUyMDBmJywgJ0XCoyddLFxuICAgICdGSkQnOiBbdSwgJ0ZKJCddLFxuICAgICdHQlAnOiBbJ1VLwqMnXSxcbiAgICAnR1lEJzogW3UsICdHWSQnXSxcbiAgICAnSEtEJzogWydISyQnXSxcbiAgICAnSVFEJzogWyfYry7YuS5cXHUyMDBmJ10sXG4gICAgJ0lSUic6IFsn2LEu2KUuJ10sXG4gICAgJ0pNRCc6IFt1LCAnSk0kJ10sXG4gICAgJ0pPRCc6IFsn2K8u2KMuXFx1MjAwZiddLFxuICAgICdKUFknOiBbJ0pQwqUnXSxcbiAgICAnS1dEJzogWyfYry7Zgy5cXHUyMDBmJ10sXG4gICAgJ0tZRCc6IFt1LCAnS1kkJ10sXG4gICAgJ0xCUCc6IFsn2YQu2YQuXFx1MjAwZicsICdMwqMnXSxcbiAgICAnTFJEJzogW3UsICckTFInXSxcbiAgICAnTFlEJzogWyfYry7ZhC5cXHUyMDBmJ10sXG4gICAgJ01BRCc6IFsn2K8u2YUuXFx1MjAwZiddLFxuICAgICdNUlUnOiBbJ9ijLtmFLiddLFxuICAgICdNWE4nOiBbJ01YJCddLFxuICAgICdOWkQnOiBbJ05aJCddLFxuICAgICdPTVInOiBbJ9ixLti5LlxcdTIwMGYnXSxcbiAgICAnUUFSJzogWyfYsS7Zgi5cXHUyMDBmJ10sXG4gICAgJ1NBUic6IFsn2LEu2LMuXFx1MjAwZiddLFxuICAgICdTQkQnOiBbdSwgJ1NCJCddLFxuICAgICdTREQnOiBbJ9ivLtizLlxcdTIwMGYnXSxcbiAgICAnU0RHJzogWyfYrC7Ysy4nXSxcbiAgICAnU1JEJzogW3UsICdTUiQnXSxcbiAgICAnU1lQJzogWyfZhC7Ysy5cXHUyMDBmJywgJ8KjJ10sXG4gICAgJ1RIQic6IFsn4Li/J10sXG4gICAgJ1RORCc6IFsn2K8u2KouXFx1MjAwZiddLFxuICAgICdUVEQnOiBbdSwgJ1RUJCddLFxuICAgICdUV0QnOiBbJ05UJCddLFxuICAgICdVU0QnOiBbJ1VTJCddLFxuICAgICdVWVUnOiBbdSwgJ1VZJCddLFxuICAgICdYWFgnOiBbJyoqKiddLFxuICAgICdZRVInOiBbJ9ixLtmKLlxcdTIwMGYnXVxuICB9LFxuICAncnRsJyxcbiAgcGx1cmFsXG5dO1xuIl19