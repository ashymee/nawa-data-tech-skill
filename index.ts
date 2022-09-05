import makeString from './first_test';
import minimumBusRequired from './second_test';

const text = 'Sample Case';
const result_first = makeString(text);
console.log('first :::', result_first);

const families = 5;
const members = [1, 2, 4, 3, 3];
const result_second = minimumBusRequired(families, members);
console.log('second :::', result_second);
