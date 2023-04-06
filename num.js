/*
  num.js
  copyright (c) 2023 sporeball
  MIT license
*/

export default class Num {
  constructor (value) {
    this.value = value;
  }

  abs () {
    return new Num(Math.abs(this.valueOf()));
  }

  cmp (n) {
    const value = this.valueOf();
    if (value > n.valueOf()) {
      return 1;
    }
    if (value < n) {
      return -1;
    }
    return 0;
  }

  div (n) {
    if (n.valueOf() === 0) {
      throw new Error('division by zero');
    }
    return new Num(this.valueOf() / n.valueOf());
  }

  eq (n) {
    return this.valueOf() === n.valueOf();
  }

  gt (n) {
    return this.valueOf() > n.valueOf();
  }

  gte (n) {
    return this.valueOf() >= n.valueOf();
  }

  lt (n) {
    return this.valueOf() < n.valueOf();
  }

  lte (n) {
    return this.valueOf() <= n.valueOf();
  }

  minus (n) {
    return new Num(this.valueOf() - n.valueOf());
  }

  mod (n) {
    if (n.valueOf() === 0) {
      throw new Error('division by zero');
    }
    return new Num(this.valueOf() % n.valueOf());
  }

  neg (n) {
    return new Num(-this.valueOf());
  }

  plus (n) {
    return new Num(this.valueOf() + n.valueOf());
  }

  pow (n) {
    if (
      n instanceof Num ||
      !Number.isInteger(n) ||
      n > 1000000
    ) {
      throw new Error('invalid exponent');
    }
    return new Num(Math.pow(this.valueOf(), n.valueOf()));
  }

  round () {
    return new Num(Math.round(this.valueOf()));
  }

  sqrt () {
    if (this.valueOf() < 0) {
      throw new Error('no square root');
    }
    return new Num(Math.sqrt(this.valueOf()));
  }

  times (n) {
    return new Num(this.valueOf() * n.valueOf());
  }

  toExponential (fractionDigits) {
    if (fractionDigits === undefined) {
      return this.valueOf().toExponential();
    }
    return this.valueOf().toExponential(fractionDigits);
  }

  toFixed (fractionDigits = 0) {
    return this.valueOf().toFixed(fractionDigits);
  }

  toPrecision (precision) {
    if (precision === undefined) {
      return this.toString();
    }
    return this.valueOf().toPrecision(precision);
  }

  toString () {
    return this.valueOf().toString();
  }

  valueOf () {
    return this.value;
  }
}
