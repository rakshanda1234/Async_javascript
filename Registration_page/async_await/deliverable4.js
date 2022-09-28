const posts = [
  { title: "post 1", body: "This is post 1" },
  { title: "post 2", body: "This is post 2" },
];

const operations = async () => {
  const createPost = (post) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        resolve();
      }, 2000);
    });
  };

  const deletePost = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length !== 0) {
          posts.pop();
          resolve();
        } else {
          reject("Empty array!");
        }
      }, 1000);
    });
  };

  const getPosts = () => {
    return new Promise((resolve, reject) => {
      let output = "";
      setTimeout(() => {
        posts.forEach((post) => {
          output += `<li>${post.title}-${post.body}</li>`;
        });

        document.body.innerHTML = output;
        resolve();
      }, 2000);
    });
  };
  try {
    await getPosts();
    await createPost({ title: "post3", body: "This is post 3" });
    await getPosts();
    await deletePost();
    await getPosts();
    await deletePost();
    await getPosts();
    await deletePost();
    await getPosts();
    await deletePost();
  } catch (e) {
    console.log(e);
  }
};
operations();
