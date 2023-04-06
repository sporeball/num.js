import Num from '../num.js';
import Tentamen from 'tentamen';

const tentamen = new Tentamen({});
tentamen.fn = () => (x => x)(tentamen.input);

const num1 = new Num(20);
const num2 = new Num(4);
const num3 = new Num(-1.6);

/**
 * abs
 */
tentamen.suite('abs');
tentamen.add(
  'positive',
  num1.abs(),
  new Num(20)
);
tentamen.add(
  'negative',
  num3.abs(),
  new Num(1.6)
);

/**
 * cmp
 */
tentamen.suite('cmp');
tentamen.add(
  'greater than Number',
  num1.cmp(2),
  1
);
tentamen.add(
  'less than Number',
  num1.cmp(200),
  -1
);
tentamen.add(
  'equal to Num',
  num1.cmp(num1),
  0
);

/**
 * div
 */
tentamen.suite('div');
tentamen.add(
  'by Num',
  num1.div(num2),
  new Num(5)
);
tentamen.add(
  'by Number',
  num1.div(10),
  new Num(2)
);

/**
 * eq
 */
tentamen.suite('eq');
tentamen.add(
  'to Num',
  num1.eq(num1),
  true
);
tentamen.add(
  'to Number',
  num1.eq(20),
  true
);

/**
 * gt
 */
tentamen.suite('gt');
tentamen.add(
  'Num',
  num1.gt(num1),
  false
);
tentamen.add(
  'Number',
  num1.gt(4),
  true
);

/**
 * gte
 */
tentamen.suite('gte');
tentamen.add(
  'Num',
  num1.gte(num1),
  true
);
tentamen.add(
  'Number',
  num1.gte(4),
  true
);

/**
 * lt
 */
tentamen.suite('lt');
tentamen.add(
  'Num',
  num1.lt(num1),
  false
);
tentamen.add(
  'Number',
  num2.lt(20),
  true
);

/**
 * lte
 */
tentamen.suite('lte');
tentamen.add(
  'Num',
  num1.lte(num1),
  true
);
tentamen.add(
  'Number',
  num2.lte(20),
  true
);

/**
 * minus
 */
tentamen.suite('minus');
tentamen.add(
  'Num',
  num1.minus(num2),
  new Num(16)
);
tentamen.add(
  'Number',
  num1.minus(4),
  new Num(16)
);

/**
 * mod
 */
tentamen.suite('mod');
tentamen.add(
  'Num',
  num1.mod(num2),
  new Num(0)
);
tentamen.add(
  'Number',
  num1.mod(4),
  new Num(0)
);

/**
 * neg
 */
tentamen.suite('neg');
tentamen.add(
  'test',
  num1.neg(),
  new Num(-20)
);

/**
 * plus
 */
tentamen.suite('plus');
tentamen.add(
  'Num',
  num1.plus(num2),
  new Num(24)
);
tentamen.add(
  'Number',
  num1.plus(4),
  new Num(24)
);

/**
 * pow
 */
tentamen.suite('pow');
tentamen.add(
  'test',
  num1.pow(2),
  new Num(400)
);

/**
 * round
 */
tentamen.suite('round');
tentamen.add(
  'test',
  num3.round(),
  new Num(-2)
);

/**
 * sqrt
 */
tentamen.suite('sqrt');
tentamen.add(
  'test',
  num2.sqrt(),
  new Num(2)
);

/**
 * times
 */
tentamen.suite('times');
tentamen.add(
  'test',
  num1.times(num2),
  new Num(80)
);

/**
 * toExponential
 */
tentamen.suite('toExponential');
tentamen.add(
  'fractionDigits = undefined',
  num1.toExponential(),
  '2e+1'
);
tentamen.add(
  'fractionDigits = 2',
  num1.toExponential(2),
  '2.00e+1'
);

/**
 * toFixed
 */
tentamen.suite('toFixed');
tentamen.add(
  'test',
  num1.toFixed(3),
  '20.000'
);

/**
 * toPrecision
 */
tentamen.suite('toPrecision');
tentamen.add(
  'precision = undefined',
  num1.toPrecision(),
  '20'
);
tentamen.add(
  'precision = 5',
  num1.toPrecision(5),
  '20.000'
);

tentamen.done();
