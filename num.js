/*
  num.js
  copyright (c) 2023 sporeball
  MIT license
*/

/**
 * Cast a value `n` to a number.
 * Throws if `n` is not a Num, number, or string.
 * Works in these cases due to the implicit `valueOf()`.
 * @param {any} n
 * @returns {number}
 */
function cast (n) {
  if (Number.isNaN(Number(n))) {
    throw new Error('invalid value');
  }
  return Number(n);
}

export default class Num {
  constructor (value) {
    this.value = cast(value);
  }

  /**
   * Return a new Num whose value is the absolute value of this Num.
   * @returns {Num}
   */
  abs () {
    return new Num(Math.abs(this.valueOf()));
  }

  /**
   * Compare this Num to another value `n`.
   * Returns 1 if this Num is greater than `n`, -1 if this Num is less than
   * `n`, or 0 if they are equal.
   * @param {Num|number|string} n
   * @returns {number}
   */
  cmp (n) {
    const a = this.valueOf();
    const b = cast(n).valueOf();
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }

  /**
   * Return a new Num whose value is the value of this Num divided by `n`.
   * @param {Num|number|string} n
   * @returns {Num}
   */
  div (n) {
    if (cast(n).valueOf() === 0) {
      throw new Error('division by zero');
    }
    return new Num(this.valueOf() / cast(n).valueOf());
  }

  /**
   * Return whether the value of this Num is equal to `n`.
   * @param {Num|number|string} n
   * @returns {boolean}
   */
  eq (n) {
    return this.valueOf() === cast(n).valueOf();
  }

  /**
   * Return whether the value of this Num is greater than `n`.
   * @param {Num|number|string} n
   * @returns {boolean}
   */
  gt (n) {
    return this.valueOf() > cast(n).valueOf();
  }

  /**
   * Return whether the value of this Num is greater than or equal to `n`.
   * @param {Num|number|string} n
   * @returns {boolean}
   */
  gte (n) {
    return this.valueOf() >= cast(n).valueOf();
  }

  /**
   * Return whether the value of this Num is less than `n`.
   * @param {Num|number|string} n
   * @returns {boolean}
   */
  lt (n) {
    return this.valueOf() < cast(n).valueOf();
  }

  /**
   * Return whether the value of this Num is less than or equal to `n`.
   * @param {Num|number|string} n
   * @returns {boolean}
   */
  lte (n) {
    return this.valueOf() <= cast(n).valueOf();
  }

  /**
   * Return a new Num whose value is the value of this Num minus `n`.
   * @param {Num|number|string} n
   * @returns {Num}
   */
  minus (n) {
    return new Num(this.valueOf() - cast(n).valueOf());
  }

  /**
   * Return a new Num whose value is the value of this Num modulo `n`.
   * @param {Num|number|string} n
   * @returns {Num}
   */
  mod (n) {
    if (cast(n).valueOf() === 0) {
      throw new Error('division by zero');
    }
    return new Num(this.valueOf() % cast(n).valueOf());
  }

  /**
   * Return a new Num whose value is the value of this Num negated.
   * @returns {Num}
   */
  neg () {
    return new Num(-this.valueOf());
  }

  /**
   * Return a new Num whose value is the value of this Num plus `n`.
   * @param {Num|number|string} n
   * @returns {Num}
   */
  plus (n) {
    return new Num(this.valueOf() + cast(n).valueOf());
  }

  /**
   * Return a new Num whose value is the value of this Num raised to the power
   * `n`.
   * Only primitive integers in the range -1e6 <= n <= 1e6 are allowed.
   * @param {number} n
   * @returns {Num}
   */
  pow (n) {
    if (
      n.constructor.name !== 'Number' ||
      !Number.isInteger(n) ||
      n < -1000000 ||
      n > 1000000
    ) {
      throw new Error('invalid exponent');
    }
    return new Num(Math.pow(this.valueOf(), n.valueOf()));
  }

  /**
   * Return a new Num whose value is the value of this Num rounded.
   * @returns {Num}
   */
  round () {
    return new Num(Math.round(this.valueOf()));
  }

  /**
   * Return a new Num whose value is the square root of the value of this Num.
   * @returns {Num}
   */
  sqrt () {
    if (this.valueOf() < 0) {
      throw new Error('no square root');
    }
    return new Num(Math.sqrt(this.valueOf()));
  }

  /**
   * Return a new Num whose value is the value of this Num times `n`.
   * @param {Num|number|string} n
   * @returns {Num}
   */
  times (n) {
    return new Num(this.valueOf() * cast(n).valueOf());
  }

  /**
   * Return the value of this Num as a string in exponential notation,
   * optionally to `fractionDigits` decimal places.
   * @param {number} [fractionDigits]
   * @returns {string}
   */
  toExponential (fractionDigits) {
    if (fractionDigits === undefined) {
      return this.valueOf().toExponential();
    }
    return this.valueOf().toExponential(fractionDigits);
  }

  /**
   * Return the value of this Num as a string in normal notation, optionally to
   * `fractionDigits` decimal places.
   * @param {number} [fractionDigits]
   * @returns {string}
   */
  toFixed (fractionDigits = 0) {
    return this.valueOf().toFixed(fractionDigits);
  }

  /**
   * Return the value of this Num as a string, optionally to `precision`
   * significant digits.
   * @param {number} [precision]
   * @returns {string}
   */
  toPrecision (precision) {
    if (precision === undefined) {
      return this.toString();
    }
    return this.valueOf().toPrecision(precision);
  }

  /**
   * Return the value of this Num as a string.
   * @returns {string}
   */
  toString () {
    return this.valueOf().toString();
  }

  /**
   * Return the value of this Num.
   * @returns {number}
   */
  valueOf () {
    return this.value;
  }
}
