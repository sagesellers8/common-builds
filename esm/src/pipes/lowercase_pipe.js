/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Pipe } from '@angular/core';
import { isBlank, isString } from '../facade/lang';
import { InvalidPipeArgumentError } from './invalid_pipe_argument_error';
export class LowerCasePipe {
    transform(value) {
        if (isBlank(value))
            return value;
        if (!isString(value)) {
            throw new InvalidPipeArgumentError(LowerCasePipe, value);
        }
        return value.toLowerCase();
    }
}
/** @nocollapse */
LowerCasePipe.decorators = [
    { type: Pipe, args: [{ name: 'lowercase' },] },
];
//# sourceMappingURL=lowercase_pipe.js.map