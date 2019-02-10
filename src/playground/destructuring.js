/**
 * Object Destructuring
 */
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Halliday',
//     publisher: {
//         // name: 'Penguin',
//         year: '2019'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

/**
 * Array Destructuring
 */

 const items = ['Coffee (hot)','$2.00','$2.50','$2.75'];

 const [product, , mediumCoffeePrice] = items;

 console.log(`A medium ${product} costs ${mediumCoffeePrice} bucks`);