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
  return new Promise((resolve, reject) => resolve(`${t} butter`));
});

getButter.then((t) => console.log(t));
*/

//using async await
//async function always return promise.

const preMovie = async () => {
  const promiseWifeBrinngingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const getButter = new Promise((resolve, reject) => resolve(`butter`));

  let ticket = await promiseWifeBrinngingTicks;

  console.log(`wife:i have the ${ticket}`);
  console.log("husband:we should go in");
  console.log("wife:no i am hungry");

  let popcorn = await getPopcorn;

  console.log(`husband:i got some ${popcorn}`);
  console.log("husband: we should go in");
  console.log("wife:I need butter on my popcorn");

  let butter = await getButter;

  console.log(`husband:i got some ${butter} on popcorn`);
  console.log(`husband anything else darling?`);
  console.log(`wife:lets go we are getting late`);
  console.log(`husband: thank you for the reminder *grins*`);

  return ticket;
};

preMovie().then((msg) => console.log(`person3: shows ${msg}`));

console.log("person4: show ticket");
console.log("person5: show ticket");
