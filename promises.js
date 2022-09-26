const posts = [
  {
    title: "Post 1",
    body: "This is post 1",
    createdAt: new Date().getTime(),
  },

  {
    title: "Post 2",
    body: "This is post 2",
    createdAt: new Date().getTime(),
  },
];

let intervalId = 0;

function getPost() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    let output = " ";
    for (let i = 0; i < posts.length; i++) {
      output += `<li>${posts[i].title}   created ${
        (new Date().getTime() - posts[i].createdAt) / 1000
      }  seconds ago</li>`;
    }
    // console.log("timer running id=", timerId);
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error:Something went wrong");
      }
    }, 2000);
  });
}

function create4thPost(post, callback) {
  setTimeOut(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
  }, 6000);
}

getPost();

createPost(
  {
    title: "Post 3",
    body: "This is post 3",
  },
  getPost()
);
createPost(
  {
    title: "Post 4",
    body: "This is post 4",
  },
  getPost()
);

var timer;
var count = 0;
function lastEditedInSecondsAgo() {
  count = 0;
  clearInterval(timer);
  timer = setInterval(() => {
    count++;
    console.log(count);
  }, 5000);
}
