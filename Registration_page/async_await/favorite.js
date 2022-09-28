//using promise
/*
const promise = new Promise(function (resolve, reject) {
  const string1 = "plan a trip together to Manali";
  const string2 = "plan a trip together to Manali";
  if (string1 === string2) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Promise resolved successfully");
  })
  .catch(function () {
    console.log("Promise is rejected");
  });
*/
//

//using async
const helperPromise = function () {
  const promise = new Promise(function (resolve, reject) {
    const string1 = "plan a trip together to Manali";
    const string2 = "plan aa trip together to Manali";
    if (string1 === string2) {
      resolve("Strings are same");
    } else {
      reject("Strings are not same");
    }
  });
  return promise;
};

async function demoPromise() {
  try {
    let message = await helperPromise();
    console.log(message);
  } catch (error) {
    console.log("Error: " + error);
  }
}
demoPromise(0);
