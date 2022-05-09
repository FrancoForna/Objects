const theWeekDays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fry', 'Sat', 'Sun'];
const openingHours = {
  [`${[theWeekDays[0]]}`]: {
    open: 11,
    close: 23,
  },
  [`${[theWeekDays[2]]}`]: {
    open: 15,
    close: 24,
  },
  [`${[theWeekDays[4]]}`]: {
    open: 13,
    close: 22,
  },
  sun: {
    open: 10,
    close: 23,
  },
};

const restaurant = {
  name: 'el candil',
  dress: 'Av. Colon 5448',
  categories: ['Familia', 'No vegetariano', 'Lomiteria', 'Sin Tacc'],
  starterMenu: ['Baston de muzza', 'Rabas', 'Cornalitos'],
  mainMenu: ['Pizzas', 'Lomitos', 'Empanadas', 'Carne'],
  variedad: [['saladas'], ['jamon y queso', 'choclo'], 'humita'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
  //We establish default values to prevent bugs
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '21:00',
    adress = 'center',
  }) {
    console.log(
      `Hello dear, we receive your order of ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. The order will arrive at ${time} to ${adress}`
    );
  },
  orderLomito(ing1, ing2, ing3) {
    console.log(`Here it's ur georgous lomito with ${ing1},${ing2},${ing3}`);
  },
};

// const {
//   openingHours: {
//     fridayToSunday: { open: l, close: a },
//   },
// } = restaurant;
// console.log(l, a);

// Desctructuring categories (arrays)
const [x, y, z] = restaurant.starterMenu;
// console.log(x, y, z);

// How to take certain elements
let [f, , t] = restaurant.categories;
// console.log(f, t);

// How to toggle categories
[f, t] = [t, f];
// console.log(f, t);

// How to call elements with certain index provides to a function
const [startertOrder, mainOrder] = restaurant.order(0, 1);
// console.log(startertOrder, mainOrder);

//Desctructuring inside Desctructuring or anidate destructuring
const takeOrder = [2, 4, [5, 6]];
const [i, , [j, k]] = takeOrder;
// console.log(i, j, k);
// const [[r = 0, e = 0], [w = 0, v = 0], q = 0] = restaurant.variedad;
// console.log(r, e, w, v, q);

//Desctructuring elements, may containe null values for position.
//We set default values in that cases
takeOrder.pop();
const [s = 1, u = 1, m = 1] = takeOrder;
// console.log(s, u, m);

/////////////////// Desctructuring Objects //////////////////////////////////

//First way --> We put the original name of properties and log to the console. In case the names we use are not exist, we should use default values to avoid bugs
const { name, openingHour, categories } = restaurant;
// console.log(name, openingHours, categories);

//Second way --> We use the name of properties to design new varibles
restaurant.variedad.push('Caprese');
const {
  variedad: [[r = 0, e = 0], [w = 0, v = 0], q = 0, h = 0],
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(r, e, w, v, q, h, hours, tags);
// console.log(restaurant.variedad);

//In case of no values, we set defaults
const { mainMenu: menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//Destructuring objects inside an objects / nested Objects
// const {
//   Mon: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//using the internal function ---> We pass a singular argument, but it appears like an object
// restaurant.orderDelivery({
//   time: 22,
//   adress: 'Calasanz',
//   //   starterIndex: 0,
//   //   mainIndex: 1,
// });

//Spread operator
const arr = [1, 2, 3];
const badWay = [arr[0], arr[1], arr[2], 4, 5];
const goodWay = [...arr, 4, 5];
// console.log(badWay, goodWay);

//Copy arrays
const menuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuCopy);

//Iterable elements: all less objects
const str = 'Franco';
const letters = [...str, '', 's'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Fornasieri`); ---> Can't happen because multiple values separated by a coma, are usually only expected when we pass arguments into a function or when we build a new array

// const ingredients = [
//   prompt('Lets make lomito! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderLomito(...ingredients);

//In ES6 we can do it with Objects
const newRestaurant = { newOwner: 'Franco', ...restaurant, name: 'Chetapys' };

// newRestaurant.name = 'Chetapys';
// console.log(newRestaurant, restaurant);

//The keyword rest works inverse way of spread operator

//Arrays
const [, , p, ...noFood] = [
  ...restaurant.categories,
  ...restaurant.starterMenu,
];
console.log(p, noFood);

//Objetcs
const { fridayToSunday, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  // console.log(sum);
};

add(8, 5, 2, 3, 6);
add(8, 5, 2, 3, 6, 15, 12);
add(8, 5, 2, 3, 6, 33, 66, 99);

const numbers = [2, 33, 6, 5, 4, 7, 77, 8, 8, 9, 9, 78, 7101];
add(...numbers);

//Operator orr
restaurant.numGests = 0;
const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nulish values: null or undefined (Not 0 or '')
const gestCorrect = restaurant.numGests ?? 10;
// console.log(gestCorrect);

//Operator and works as an if too:

// if (restaurant.categories.includes('Familia')) console.log('Welcome families!');

// restaurant.categories.includes('Familia') && console.log('Welcome families!');

const rest1 = { newOwnername: 'Capricorn', numGuests: 0 };
const rest2 = { newOwnername: 'La Piazza', owner: 'Franco' };

// rest2.numGests = rest2.numGests ?? 10; //
// rest2.numGests ||= 10;
rest1.numGests ??= 10;
rest2.numGests ??= 10;

rest1.owner &&= 'Anonimous';
rest2.owner &&= 'Anonimous';
// console.log(rest1);
// console.log(rest2);

//Coding challenge

// const [players1, players2] = [...game.players];

// const [gk, ...fieldPlayers] = game.players[0];
// const allPlayers = [...game.players[0], ...game.players[1]];
// const playersFinal = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     // console.log(
//     //   `${players[i]} has score ${i} ${
//     //     (i > 1 && 'goals!') || (i <= 1 && 'goal!')
//     //   }`
//     // );
//   }
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);

// console.log(allPlayers);

// console.log(playersFinal);

//My solution:
// const { team1, team2, ...draw } = { ...game.odds };
// console.log(team1, draw, team2);

//The good one:
// console.log(team1, draw, team2);

// // team1 > team2 && console.log('Team 1 its the winner');
// // team2 > team1 && console.log('Team 2 its the winner');

//For of

const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menuu) console.log(item);

//The entry method returns a new object array iterator that contains the keyword/value of each element in the array
for (const item of menuu.entries()) {
  // console.log(item);
}
// console.log([...menuu.entries()]);

for (const [i, el] of menuu.entries()) {
  // console.log(`${i + 1}: ${el}`);
}

//Optional chaining

//Bad way
// restaurant.openingHours &&
//   restaurant.openingHours.sun &&
//   restaurant.openingHours.sun.open &&
//   console.log(restaurant.openingHours.sun.open);

//Cool way
// console.log(restaurant.openingHours?.sun?.open);

//Example
// for (const [num, days] of theWeekDays.entries()) console.log(num + 1, days);

for (const day of theWeekDays) {
  const close = restaurant.openingHours[day]?.close;
  const open = restaurant.openingHours[day]?.open;
  // console.log(
  //   `on ${day}, we ${
  //     open ? `open at ${open} and close at ${close}` : `Dont open`
  //   }`
  // );
}

//Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
// console.log(restaurant.orderRissoto?.(11, 12) ?? 'Method does not exists');

//objects
// const varieti = prompt('Ingrese variedad a verificar');
// console.log(
//   restaurant?.variedad?.includes?.(`${varieti}`) ?? `No hay variedad`
// );
restaurant?.desert ?? (restaurant.desert = ['flan', 'helado']);

//Looping objects(which are not iterables as arrays)//
//Properties object
const properties = Object.keys(openingHours);
//Property values
const values = Object.values(openingHours);

let anuncement = `We are open ${properties.length} days:`;
for (const days of properties) {
  anuncement += ` on ${days},`;
}

//Entire object
let entire = Object.entries(openingHours); /// ----> = restaurant.openingHours
for (const [dayz, { open, close }] of entire) {
  // console.log(`On ${dayz} we open at ${open}, and close at ${close}`);
}

// console.log(anuncement);
// console.log(properties);
// console.log(values);
// console.log(entire);

// let reviewResto = Object.entries(restaurant);
// for (const [a, b] of reviewResto) {
//   console.log(`${a}, ${b}`);
// }
// console.log(reviewResto);

//Coding challenge #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
let theGollers = Object.entries(game.scored);
let goal = Object.keys(game.scored);
// let windowAnuncement = ``
for (let [goals, goler] of theGollers) {
  goals = Number(goals);
  // console.log(`Goal ${goals + 1} : ${goler} `);
}

//2
let odds = Object.values(game.odds);
let totalOdds = 0;
for (let theOdds of odds) {
  totalOdds += theOdds;
}
let averageOdds = totalOdds / odds.length;
// console.log(averageOdds);

//3 --> Print de odds of each team with his own name
//a) Take each team
//b) Take each odd
//c) Combine them
//d) Create an operator to not take when draw
//3 Mine solution
const teams = ['team1', 'team2'];
for (let i of teams) {
  const oddTeams = `Odd of victory for ${game[i]} : ${game.odds[i]}.`;
  // console.log(oddTeams);
}
const oddDraw = `Odd of draw: ${game.odds.x}`;
// console.log(oddDraw);

//Jona's solution
for (let [a, b] of Object.entries(game.odds)) {
  const resultOdds =
    a == 'x' ? `Odd of Draw for: ${b}` : `Odd of victory for ${game[a]}: ${b}`;
  // console.log(resultOdds);
}

// const scorers = [...game.scored];
// console.log(scorers);
// let scor;
// for (let i of scorers) {
//   scor = { i, scorers };
//   console.log(scor);
// }
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// console.log(scorers);

let variedad = {};
for (let v of restaurant.mainMenu) {
  for (let i of restaurant.starterMenu) {
    variedad[v] = i;
  }
}
// console.log(variedad);

//Sets
//Creating one
const myNewSet = new Set(['Pasta', 'Pizza', 'Risoto', 'Pizza']);
const stringSet = new Set('Franco');
// console.log(myNewSet, stringSet);

//Equal to an length, we have a size for sets:
// console.log(myNewSet.size);

//We can check if the set has the element we are looking for
// console.log(myNewSet.has('Pizza'));

//We can add elements to set
myNewSet.add('Lomito');
// console.log(myNewSet);

//Also delete it
myNewSet.delete('Pizza');
// console.log(myNewSet);

//And we can delete all the elements
// myNewSet.clear();
// console.log(myNewSet);

//Sets are iterables, so we can use a for of
// for (const iterableSet of myNewSet) console.log(iterableSet);

//The most common use to sets, it's to delete a repeat elements from 1 array
//We can take an array of duplicate elements and converted to a set
const arrs = ['dear', 'darling', 'dear'];
const newArrs = new Set(arrs);
// console.log(newArrs.size);
// console.log(stringSet.size);

//Maps --> We can have any type of keys, not just a string.

const rest = new Map();
rest.set('name', 'Classico Italiano'); //---> The way of setting keys
rest
  .set(1, 'Calasanz')
  .set(2, 'Av. Fuerza Aerea')
  .set('categories', restaurant.mainMenu)
  .set('open', 10)
  .set('closed', 23)
  .set(true, 'We are open 😁')
  .set(false, 'We are closed 😢');

//To read a map by his keys, we use the get method
// console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 22;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

//Check if map contains a key
// console.log(rest.has('open'));
rest.delete(2);
// rest.clear();
// console.log(rest.size);

//We can use arrays as keys
rest.set([1, 2], 'Take me to church');
// console.log(rest.get([1, 2])); //----> This will not work, we must save the array in a variable first for the global scope
const arrr = [1, 2];
rest.set(arrr, 'Take me to church');
// console.log(rest.get(arrr));

//Also, we can use
rest.set(document.querySelector('h1', 'heading'));

const question = new Map([
  ['question', 'Which program its the best one to programing? '],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Incorrect'],
]);
// console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz app
// console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const myAnswer = prompt(question.get('question'));
// console.log(question.get(myAnswer === question.get(3)));

//Same props as Object props
// console.log(question.entries());
// console.log(question.values());
// console.log(question.keys());

//Which data structure should i use?

//Coding challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
// let averageGameEvents = 0;
// for (let i of gameEvents.keys()) {
//   averageGameEvents += i;
//   console.log(averageGameEvents);
//   totalAverageGameEvents = averageGameEvents / gameEvents.size;
//   console.log(totalAverageGameEvents);
// }
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4
console.log(``);

for (let [u, i] of gameEvents.entries()) {
  const theResult =
    u <= 45 ? `[FIRST HALF] ${u}: ${i}` : `[SECOND HALF] ${u}:  ${i}`;
  console.log(theResult);
}

const airlane = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log();
console.log();
console.log();
