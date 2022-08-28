const loader = require('lodash')
const items = [1, [1, 2], [3, 4, 5]];



const newItems = loader.flattenDeep(items);


console.log(newItems);