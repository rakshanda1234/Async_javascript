const posts = [
  { title: "Post 1", body: "This is post 1" },
  { title: "Post 2", body: "This is post 2" },
];

function getPosts() {
  let output = " ";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.forEach((post) => {
        output += `<li>${post.title}  ${post.body}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
    resolve();
  });
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    posts.push(post);

    setTimeout(() => {
      const error = false;

      if (!error) {
        resolve(posts);
      } else {
        reject("Error:Something went wrong!");
      }
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length == 0) reject(`can't pop element from an empty array!`);

      posts.pop();
      resolve(posts);
    }, 1000);
  });
}
//promise All
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise3");
  }, 1000);
});

const UserActivity = { lastTime: new Date().getTime() };

/*
Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);
*/
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      UserActivity.lastTime = new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      resolve(UserActivity.lastTime);
    }, 1000);
  });
}

Promise.all([
  createPost({ title: "post3", body: "This is post 3" }),
  updateLastUserActivityTime(),
])
  .then(([posts, lastTime]) => {
    console.log(posts);
    console.log(`Last Modified: ${lastTime}`);
  })
  .then(deletePost)
  .then((posts) => {
    console.log(posts);
  });
