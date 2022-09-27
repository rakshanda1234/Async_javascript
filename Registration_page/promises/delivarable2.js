const posts = [
  { title: "Post 1", body: "This is post one" },
  { title: "Post 2", body: "This is post two" },
];

function getPosts() {
  let output = " ";
  setTimeout(() => {
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
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
      resolve();
    }, 1000);
  });
}

createPost({ title: "Post 3 ", body: "This is post 3" })
  .then(getPosts)
  .then(deletePost)
  .then(getPosts)
  .then(deletePost)
  .then(getPosts)
  .then(deletePost)
  .then(getPosts)
  .then(deletePost)
  .then(getPosts)
  .catch((error) => console.log(error));
