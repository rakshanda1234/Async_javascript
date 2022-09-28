function buyacar() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("buy a car");
    }, 1000);
  });
}
function planatrip() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("lets go to Benguluru");
    }, 1000);
  });
}
function reachedBenguluru() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("reached Benguluru!");
    }, 1000);
  });
}
function gotokerala() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("feeling ill!");
    }, 1000);
  });
}
async function fun1() {
  try {
    const msg = await buyacar();
    console.log(msg);
    const msg2 = await planatrip();
    console.log(msg2);
    const msg3 = await reachedBenguluru();
    console.log(msg3);
    const msg4 = await gotokerala();
    console.log(msg4);
  } catch (err) {
    console.log(err);
  }
}
fun1();

/*
  planatrip().then((msg2) => {
    console.log(msg2);
    reachedBenguluru().then((msg3) => {
      console.log(msg3);
      gotokerala().then((msg4) => {
        console.log(msg4);
      });
    });
  });
});
*/
