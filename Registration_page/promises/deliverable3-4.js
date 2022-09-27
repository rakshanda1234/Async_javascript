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

createPost({
  title: "Post 4",
  body: "This is post 4",
  createdAt: new Date().getTime(),
});
