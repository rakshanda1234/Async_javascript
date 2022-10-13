const posts = [
  { title: "Post 1", body: "This is post one", created: new Date().getTime() },
  { title: "Post 2", body: "This is post two", created: new Date().getTime() },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      const time = Math.round((new Date().getTime() - post.created) / 1000);
      output += `<li>${post.title} created ${time} sec ago.</li>`;
    });
    const time = lastEditedInSecondsAgo();
    output += `<div> Last Modified : ${time} sec ago ! </div>`;
    document.body.innerHTML = output;
  }, 1000);
}
function createPost(post) {
  posts.push(post);
}

function createPost4th(post, createPost, getPosts) {
  createPost(post);
  setTimeout(() => {
    getPosts();
  }, 2000);
}
//Bonus
function lastEditedInSecondsAgo() {
  const listModifiedLast =
    new Date().getTime() - posts[posts.length - 1].created;
  return Math.round(listModifiedLast / 1000);
}

setTimeout(() => {
  createPost(
    {
      title: "Post 3",
      body: "This is post three",
      created: new Date().getTime(),
    },
    lastEditedInSecondsAgo
  );
}, 1000);

setTimeout(() => {
  createPost4th(
    { title: "Post 4", body: "This is Post 4", created: new Date().getTime() },
    createPost,
    getPosts,
    lastEditedInSecondsAgo
  );
}, 2000);

setInterval(() => {
  getPosts(lastEditedInSecondsAgo);
}, 1000);
