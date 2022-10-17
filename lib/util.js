/**
 * Shorthand for console.log(x)
 * @param {any} x - data to be logged to console 
 * @returns nope
 */
export const o = (x) => console.log(x)

/**
 * Checks if a JavaScript value is empty
 * @example
 *    isEmpty(null); // true
 *    isEmpty(undefined); // true
 *    isEmpty(''); // true
 *    isEmpty([]); // true
 *    isEmpty({}); // true
 * @param {any} value - item to test
 * @returns {boolean} true if empty, otherwise false
 * @author Oleksii Chekulaiev (https://stackoverflow.com/questions/4597900/checking-something-isempty-in-javascript)
 */
 export const isEmpty = (value) => {
    return (
        value === null || // check for null
        value === undefined || // check for undefined
        value === '' || // check for empty string
        (Array.isArray(value) && value.length === 0) || // check for empty array
        (typeof value === 'object' && Object.keys(value).length === 0) // check for empty object
    );
}

/**
 * Regex string that represents a valid email address
 */
export const emailRegex = /^(?=[A-Za-z0-9@._%+-]{6,254}$)[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,8}[A-Za-z]{2,63}$/
