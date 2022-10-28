import calculate from '../logic/calculate';

it('check if obj.next to equal 5', () => {
  const btnPressed = '5';
  const obj = {
    total: '10',
    next: '0',
    operation: '+',
  };

  expect(calculate(obj, btnPressed)).toEqual({
    total: '10',
    next: '5',
    operation: '+',
  });
});

it('check if returned obj is empty, when total contains period', () => {
  const btnPressed = '.';
  const obj = {
    total: '0.34',
    next: null,
    operation: null,
  };

  expect(calculate(obj, btnPressed)).toEqual({});
});

it('check if returned obj is empty, when AC is pressed', () => {
  const btnPressed = 'AC';
  const obj = {
    total: '10',
    next: '0',
    operation: '+',
  };

  expect(calculate(obj, btnPressed)).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});

it('check if returned obj is +/-, when +/- is pressed', () => {
  const btnPressed = '+/-';
  const obj = {
    total: '10',
    next: null,
    operation: '+/-',
  };

  expect(calculate(obj, btnPressed)).toEqual({
    total: '-10',
    next: null,
    operation: '+/-',
  });
});

it('check if returned obj is 1, when % is pressed', () => {
  const btnPressed = '%';
  const obj = {
    total: '5',
    next: '2',
    operation: '%',
  };

  expect(calculate(obj, btnPressed)).toEqual({
    total: '1',
    next: null,
    operation: '%',
  });
});
