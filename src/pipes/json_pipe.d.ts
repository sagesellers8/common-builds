import * as i0 from '@angular/core';
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PipeTransform } from '@angular/core';
/**
 * @ngModule CommonModule
 * @description
 *
 * Converts a value into its JSON-format representation.  Useful for debugging.
 *
 * @usageNotes
 *
 * The following component uses a JSON pipe to convert an object
 * to JSON format, and displays the string in both formats for comparison.
 *
 * {@example common/pipes/ts/json_pipe.ts region='JsonPipe'}
 *
 */
export declare class JsonPipe implements PipeTransform {
    /**
     * @param value A value of any type to convert into a JSON-format string.
     */
    transform(value: any): string;
    static ngPipeDef: i0.ɵPipeDef<JsonPipe, 'json'>;
}
