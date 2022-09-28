console.log("person1: show ticket");
console.log("person2: show ticket");

//using promises
/*
const promiseWifeBrinngingTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});

const getPocorn = promiseWifeBrinngingTicks.then((t) => {
  console.log("wife:i have the ticket");
  console.log("husband:we should go in");
  console.log("wife:no i am hungry");
  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPocorn.then((t) => {
  console.log("husband:i got some popcorn");
  console.log("husband: we should go in");
  console.log("wife:I need butter on my popcorn");
  console.log(`Husband:Wait!`);

  return new Promise((resolve, reject) => resolve(`${t} butter`));
});

const getColdDrinks = getButter.then((t) => {
  console.log(`Wife: just one last thing!`);
  console.log(`Husband: What?`);
  console.log(`Wife: One coldDrink!`);

  return new Promise((resolve, reject) => resolve(` ${t}cold drinks!`));
});

getColdDrinks.then((t) => {
  console.log("Husband: Take it!Anything else?");
  console.log(`Wife: No! Let's go!`);

  console.log(t);
});

*/

//using async await
//async function always return promise.

const preMovie = async () => {
  const promiseWifeBrinngingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const getButter = new Promise((resolve, reject) => resolve(`butter`));
  const getColdDrink = new Promise((resolve, reject) => resolve(`coldDrink`));

  let ticket = await promiseWifeBrinngingTicks;

  console.log(`wife:i have the ${ticket}`);
  console.log("husband:we should go in");
  console.log("wife:no i am hungry");

  let popcorn = await getPopcorn;

  console.log(`husband:i got some ${popcorn}`);
  console.log("husband: we should go in");
  console.log("wife:I need butter on my popcorn");
  console.log("husband:Wait!");

  let butter = await getButter;

  console.log(`wife:just one last thing`);
  console.log(`husband :What?`);
  console.log(`wife:one coldDrink!`);

  const coldDrinks = await getColdDrink;
  console.log("Husband:Take it ! anything else?");
  console.log(`Wife:No! Let's go!`);

  return ticket;
};

preMovie().then((ticket) => console.log(`person3: shows ${ticket}`));

console.log("person4: show ticket");
console.log("person5: show ticket");
