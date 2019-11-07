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
        define("@angular/common/locales/sq-MK", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'sq-MK', [['p.d.', 'm.d.'], u, ['e paradites', 'e pasdites']],
        [['p.d.', 'm.d.'], u, ['paradite', 'pasdite']],
        [
            ['d', 'h', 'm', 'm', 'e', 'p', 'sh'], ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht'],
            ['e diel', 'e hënë', 'e martë', 'e mërkurë', 'e enjte', 'e premte', 'e shtunë'],
            ['die', 'hën', 'mar', 'mër', 'enj', 'pre', 'sht']
        ],
        [
            ['d', 'h', 'm', 'm', 'e', 'p', 'sh'], ['die', 'hën', 'mar', 'mër', 'enj', 'pre', 'sht'],
            ['e diel', 'e hënë', 'e martë', 'e mërkurë', 'e enjte', 'e premte', 'e shtunë'],
            ['die', 'hën', 'mar', 'mër', 'enj', 'pre', 'sht']
        ],
        [
            ['j', 'sh', 'm', 'p', 'm', 'q', 'k', 'g', 'sh', 't', 'n', 'dh'],
            ['jan', 'shk', 'mar', 'pri', 'maj', 'qer', 'korr', 'gush', 'sht', 'tet', 'nën', 'dhj'],
            [
                'janar', 'shkurt', 'mars', 'prill', 'maj', 'qershor', 'korrik', 'gusht', 'shtator', 'tetor',
                'nëntor', 'dhjetor'
            ]
        ],
        u, [['p.K.', 'mb.K.'], u, ['para Krishtit', 'mbas Krishtit']], 1, [6, 0],
        ['d.M.yy', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1}, {0}', u, '{1} \'në\' {0}', u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], 'den', 'Denari maqedonas', {
            'ALL': ['Lekë'],
            'AOA': [],
            'ARS': [],
            'AUD': ['A$', 'AUD'],
            'BAM': [],
            'BBD': [],
            'BDT': [],
            'BMD': [],
            'BND': [],
            'BOB': [],
            'BRL': [],
            'BSD': [],
            'BWP': [],
            'BYN': [],
            'BZD': [],
            'CAD': ['CA$', 'CAD'],
            'CLP': [],
            'CNY': ['CN¥', 'CNY'],
            'COP': [],
            'CRC': [],
            'CUC': [],
            'CUP': [],
            'CZK': [],
            'DKK': [],
            'DOP': [],
            'EGP': [],
            'EUR': ['€', 'EUR'],
            'FJD': [],
            'FKP': [],
            'GBP': ['£', 'GBP'],
            'GEL': [],
            'GIP': [],
            'GNF': [],
            'GTQ': [],
            'GYD': [],
            'HKD': ['HK$', 'HKS'],
            'HNL': [],
            'HRK': [],
            'HUF': [],
            'IDR': [],
            'ILS': ['₪', 'ILS'],
            'INR': ['₹', 'INR'],
            'ISK': [],
            'JMD': [],
            'JPY': ['JP¥', 'JPY'],
            'KHR': [],
            'KMF': [],
            'KPW': [],
            'KRW': ['₩', 'KRW'],
            'KYD': [],
            'KZT': [],
            'LAK': [],
            'LBP': [],
            'LKR': [],
            'LRD': [],
            'MGA': [],
            'MKD': ['den'],
            'MMK': [],
            'MNT': [],
            'MUR': [],
            'MXN': ['MX$', 'MXN'],
            'MYR': [],
            'NAD': [],
            'NGN': [],
            'NIO': [],
            'NOK': [],
            'NPR': [],
            'NZD': ['NZ$', 'NZD'],
            'PHP': [],
            'PKR': [],
            'PLN': [],
            'PYG': [],
            'RON': [],
            'RUB': [],
            'RWF': [],
            'SBD': [],
            'SEK': [],
            'SGD': [],
            'SHP': [],
            'SRD': [],
            'SSP': [],
            'STN': [],
            'SYP': [],
            'THB': ['฿', 'THB'],
            'TOP': [],
            'TRY': [],
            'TTD': [],
            'TWD': ['NT$', 'TWD'],
            'UAH': [],
            'USD': ['US$', 'USD'],
            'UYU': [],
            'VND': ['₫', 'VND'],
            'XCD': ['EC$', 'XCD'],
            'ZAR': [],
            'ZMW': []
        },
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3EtTUsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9zcS1NSy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzlDO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN2RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztZQUMvRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUNsRDtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN2RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztZQUMvRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUNsRDtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztZQUMvRCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RGO2dCQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU87Z0JBQzNGLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1NBQ0Y7UUFDRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7UUFDbkQsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUU7WUFDdkUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7WUFDcEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDckIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNuQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ25CLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDbkIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDckIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUNuQixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUNyQixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUNyQixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAobiA9PT0gMSkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdzcS1NSycsIFtbJ3AuZC4nLCAnbS5kLiddLCB1LCBbJ2UgcGFyYWRpdGVzJywgJ2UgcGFzZGl0ZXMnXV0sXG4gIFtbJ3AuZC4nLCAnbS5kLiddLCB1LCBbJ3BhcmFkaXRlJywgJ3Bhc2RpdGUnXV0sXG4gIFtcbiAgICBbJ2QnLCAnaCcsICdtJywgJ20nLCAnZScsICdwJywgJ3NoJ10sIFsnRGllJywgJ0jDq24nLCAnTWFyJywgJ03Dq3InLCAnRW5qJywgJ1ByZScsICdTaHQnXSxcbiAgICBbJ2UgZGllbCcsICdlIGjDq27DqycsICdlIG1hcnTDqycsICdlIG3Dq3JrdXLDqycsICdlIGVuanRlJywgJ2UgcHJlbXRlJywgJ2Ugc2h0dW7DqyddLFxuICAgIFsnZGllJywgJ2jDq24nLCAnbWFyJywgJ23Dq3InLCAnZW5qJywgJ3ByZScsICdzaHQnXVxuICBdLFxuICBbXG4gICAgWydkJywgJ2gnLCAnbScsICdtJywgJ2UnLCAncCcsICdzaCddLCBbJ2RpZScsICdow6tuJywgJ21hcicsICdtw6tyJywgJ2VuaicsICdwcmUnLCAnc2h0J10sXG4gICAgWydlIGRpZWwnLCAnZSBow6tuw6snLCAnZSBtYXJ0w6snLCAnZSBtw6tya3Vyw6snLCAnZSBlbmp0ZScsICdlIHByZW10ZScsICdlIHNodHVuw6snXSxcbiAgICBbJ2RpZScsICdow6tuJywgJ21hcicsICdtw6tyJywgJ2VuaicsICdwcmUnLCAnc2h0J11cbiAgXSxcbiAgW1xuICAgIFsnaicsICdzaCcsICdtJywgJ3AnLCAnbScsICdxJywgJ2snLCAnZycsICdzaCcsICd0JywgJ24nLCAnZGgnXSxcbiAgICBbJ2phbicsICdzaGsnLCAnbWFyJywgJ3ByaScsICdtYWonLCAncWVyJywgJ2tvcnInLCAnZ3VzaCcsICdzaHQnLCAndGV0JywgJ27Dq24nLCAnZGhqJ10sXG4gICAgW1xuICAgICAgJ2phbmFyJywgJ3Noa3VydCcsICdtYXJzJywgJ3ByaWxsJywgJ21haicsICdxZXJzaG9yJywgJ2tvcnJpaycsICdndXNodCcsICdzaHRhdG9yJywgJ3RldG9yJyxcbiAgICAgICduw6tudG9yJywgJ2RoamV0b3InXG4gICAgXVxuICBdLFxuICB1LCBbWydwLksuJywgJ21iLksuJ10sIHUsIFsncGFyYSBLcmlzaHRpdCcsICdtYmFzIEtyaXNodGl0J11dLCAxLCBbNiwgMF0sXG4gIFsnZC5NLnl5JywgJ2QgTU1NIHknLCAnZCBNTU1NIHknLCAnRUVFRSwgZCBNTU1NIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSwgWyd7MX0sIHswfScsIHUsICd7MX0gXFwnbsOrXFwnIHswfScsIHVdLFxuICBbJywnLCAnwqAnLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSwgJ2RlbicsICdEZW5hcmkgbWFxZWRvbmFzJywge1xuICAgICdBTEwnOiBbJ0xla8OrJ10sXG4gICAgJ0FPQSc6IFtdLFxuICAgICdBUlMnOiBbXSxcbiAgICAnQVVEJzogWydBJCcsICdBVUQnXSxcbiAgICAnQkFNJzogW10sXG4gICAgJ0JCRCc6IFtdLFxuICAgICdCRFQnOiBbXSxcbiAgICAnQk1EJzogW10sXG4gICAgJ0JORCc6IFtdLFxuICAgICdCT0InOiBbXSxcbiAgICAnQlJMJzogW10sXG4gICAgJ0JTRCc6IFtdLFxuICAgICdCV1AnOiBbXSxcbiAgICAnQllOJzogW10sXG4gICAgJ0JaRCc6IFtdLFxuICAgICdDQUQnOiBbJ0NBJCcsICdDQUQnXSxcbiAgICAnQ0xQJzogW10sXG4gICAgJ0NOWSc6IFsnQ07CpScsICdDTlknXSxcbiAgICAnQ09QJzogW10sXG4gICAgJ0NSQyc6IFtdLFxuICAgICdDVUMnOiBbXSxcbiAgICAnQ1VQJzogW10sXG4gICAgJ0NaSyc6IFtdLFxuICAgICdES0snOiBbXSxcbiAgICAnRE9QJzogW10sXG4gICAgJ0VHUCc6IFtdLFxuICAgICdFVVInOiBbJ+KCrCcsICdFVVInXSxcbiAgICAnRkpEJzogW10sXG4gICAgJ0ZLUCc6IFtdLFxuICAgICdHQlAnOiBbJ8KjJywgJ0dCUCddLFxuICAgICdHRUwnOiBbXSxcbiAgICAnR0lQJzogW10sXG4gICAgJ0dORic6IFtdLFxuICAgICdHVFEnOiBbXSxcbiAgICAnR1lEJzogW10sXG4gICAgJ0hLRCc6IFsnSEskJywgJ0hLUyddLFxuICAgICdITkwnOiBbXSxcbiAgICAnSFJLJzogW10sXG4gICAgJ0hVRic6IFtdLFxuICAgICdJRFInOiBbXSxcbiAgICAnSUxTJzogWyfigqonLCAnSUxTJ10sXG4gICAgJ0lOUic6IFsn4oK5JywgJ0lOUiddLFxuICAgICdJU0snOiBbXSxcbiAgICAnSk1EJzogW10sXG4gICAgJ0pQWSc6IFsnSlDCpScsICdKUFknXSxcbiAgICAnS0hSJzogW10sXG4gICAgJ0tNRic6IFtdLFxuICAgICdLUFcnOiBbXSxcbiAgICAnS1JXJzogWyfigqknLCAnS1JXJ10sXG4gICAgJ0tZRCc6IFtdLFxuICAgICdLWlQnOiBbXSxcbiAgICAnTEFLJzogW10sXG4gICAgJ0xCUCc6IFtdLFxuICAgICdMS1InOiBbXSxcbiAgICAnTFJEJzogW10sXG4gICAgJ01HQSc6IFtdLFxuICAgICdNS0QnOiBbJ2RlbiddLFxuICAgICdNTUsnOiBbXSxcbiAgICAnTU5UJzogW10sXG4gICAgJ01VUic6IFtdLFxuICAgICdNWE4nOiBbJ01YJCcsICdNWE4nXSxcbiAgICAnTVlSJzogW10sXG4gICAgJ05BRCc6IFtdLFxuICAgICdOR04nOiBbXSxcbiAgICAnTklPJzogW10sXG4gICAgJ05PSyc6IFtdLFxuICAgICdOUFInOiBbXSxcbiAgICAnTlpEJzogWydOWiQnLCAnTlpEJ10sXG4gICAgJ1BIUCc6IFtdLFxuICAgICdQS1InOiBbXSxcbiAgICAnUExOJzogW10sXG4gICAgJ1BZRyc6IFtdLFxuICAgICdST04nOiBbXSxcbiAgICAnUlVCJzogW10sXG4gICAgJ1JXRic6IFtdLFxuICAgICdTQkQnOiBbXSxcbiAgICAnU0VLJzogW10sXG4gICAgJ1NHRCc6IFtdLFxuICAgICdTSFAnOiBbXSxcbiAgICAnU1JEJzogW10sXG4gICAgJ1NTUCc6IFtdLFxuICAgICdTVE4nOiBbXSxcbiAgICAnU1lQJzogW10sXG4gICAgJ1RIQic6IFsn4Li/JywgJ1RIQiddLFxuICAgICdUT1AnOiBbXSxcbiAgICAnVFJZJzogW10sXG4gICAgJ1RURCc6IFtdLFxuICAgICdUV0QnOiBbJ05UJCcsICdUV0QnXSxcbiAgICAnVUFIJzogW10sXG4gICAgJ1VTRCc6IFsnVVMkJywgJ1VTRCddLFxuICAgICdVWVUnOiBbXSxcbiAgICAnVk5EJzogWyfigqsnLCAnVk5EJ10sXG4gICAgJ1hDRCc6IFsnRUMkJywgJ1hDRCddLFxuICAgICdaQVInOiBbXSxcbiAgICAnWk1XJzogW11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19