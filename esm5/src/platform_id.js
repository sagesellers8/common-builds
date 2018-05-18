/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export var PLATFORM_BROWSER_ID = 'browser';
export var PLATFORM_SERVER_ID = 'server';
export var PLATFORM_WORKER_APP_ID = 'browserWorkerApp';
export var PLATFORM_WORKER_UI_ID = 'browserWorkerUi';
/**
 * Returns whether a platform id represents a browser platform.
 * @experimental
 */
export function isPlatformBrowser(platformId) {
    return platformId === PLATFORM_BROWSER_ID;
}
/**
 * Returns whether a platform id represents a server platform.
 * @experimental
 */
export function isPlatformServer(platformId) {
    return platformId === PLATFORM_SERVER_ID;
}
/**
 * Returns whether a platform id represents a web worker app platform.
 * @experimental
 */
export function isPlatformWorkerApp(platformId) {
    return platformId === PLATFORM_WORKER_APP_ID;
}
/**
 * Returns whether a platform id represents a web worker UI platform.
 * @experimental
 */
export function isPlatformWorkerUi(platformId) {
    return platformId === PLATFORM_WORKER_UI_ID;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1faWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vc3JjL3BsYXRmb3JtX2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRQSxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRyxTQUFTLENBQUM7QUFDN0MsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLGtCQUFrQixDQUFDO0FBQ3pELE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHLGlCQUFpQixDQUFDOzs7OztBQU12RCxNQUFNLDRCQUE0QixVQUFrQjtJQUNsRCxPQUFPLFVBQVUsS0FBSyxtQkFBbUIsQ0FBQztDQUMzQzs7Ozs7QUFNRCxNQUFNLDJCQUEyQixVQUFrQjtJQUNqRCxPQUFPLFVBQVUsS0FBSyxrQkFBa0IsQ0FBQztDQUMxQzs7Ozs7QUFNRCxNQUFNLDhCQUE4QixVQUFrQjtJQUNwRCxPQUFPLFVBQVUsS0FBSyxzQkFBc0IsQ0FBQztDQUM5Qzs7Ozs7QUFNRCxNQUFNLDZCQUE2QixVQUFrQjtJQUNuRCxPQUFPLFVBQVUsS0FBSyxxQkFBcUIsQ0FBQztDQUM3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0JST1dTRVJfSUQgPSAnYnJvd3Nlcic7XG5leHBvcnQgY29uc3QgUExBVEZPUk1fU0VSVkVSX0lEID0gJ3NlcnZlcic7XG5leHBvcnQgY29uc3QgUExBVEZPUk1fV09SS0VSX0FQUF9JRCA9ICdicm93c2VyV29ya2VyQXBwJztcbmV4cG9ydCBjb25zdCBQTEFURk9STV9XT1JLRVJfVUlfSUQgPSAnYnJvd3NlcldvcmtlclVpJztcblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYSBwbGF0Zm9ybSBpZCByZXByZXNlbnRzIGEgYnJvd3NlciBwbGF0Zm9ybS5cbiAqIEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQ6IE9iamVjdCk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGxhdGZvcm1JZCA9PT0gUExBVEZPUk1fQlJPV1NFUl9JRDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYSBwbGF0Zm9ybSBpZCByZXByZXNlbnRzIGEgc2VydmVyIHBsYXRmb3JtLlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQbGF0Zm9ybVNlcnZlcihwbGF0Zm9ybUlkOiBPYmplY3QpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBsYXRmb3JtSWQgPT09IFBMQVRGT1JNX1NFUlZFUl9JRDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYSBwbGF0Zm9ybSBpZCByZXByZXNlbnRzIGEgd2ViIHdvcmtlciBhcHAgcGxhdGZvcm0uXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYXRmb3JtV29ya2VyQXBwKHBsYXRmb3JtSWQ6IE9iamVjdCk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGxhdGZvcm1JZCA9PT0gUExBVEZPUk1fV09SS0VSX0FQUF9JRDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgYSBwbGF0Zm9ybSBpZCByZXByZXNlbnRzIGEgd2ViIHdvcmtlciBVSSBwbGF0Zm9ybS5cbiAqIEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhdGZvcm1Xb3JrZXJVaShwbGF0Zm9ybUlkOiBPYmplY3QpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBsYXRmb3JtSWQgPT09IFBMQVRGT1JNX1dPUktFUl9VSV9JRDtcbn1cbiJdfQ==