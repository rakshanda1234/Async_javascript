function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;

  // localStorage.setItem("name", name);
  // localStorage.setItem("email", email);

  const obj = {
    name,
    email,
  };

  axios
    .post(
      "https://crudcrud.com/api/2055e0da4d854468bded6bda15f3b6c0/appointmentData",
      obj
    )

    .then((response) => {
      showNewUserOnScreen(response.data);
      //console.log(response);
    })
    .catch((err) => {
      document.body.innerHTML =
        document.body.innerHTML + "<h4>Something went wrong</h4>";
      console.log(err);
    });

  //localStorage.setItem(obj.email, JSON.stringify(obj));
  //showNewUserOnScreen(obj);
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    //Make a GET request to crud crud when the DOM has loaded and get the user Details which have been saved and show it on the website
    .get(
      "https://crudcrud.com/api/2055e0da4d854468bded6bda15f3b6c0/appointmentData"
    )
    .then((response) => {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {
        showNewUserOnScreen(response.data[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  const localStorageObj = localStorage;
  const localstoragekeys = Object.keys(localStorageObj);

  for (var i = 0; i < localstoragekeys.length; i++) {
    const key = localstoragekeys[i];
    const userDetailsString = localStorageObj[key];
    const userDetailsObj = JSON.parse(userDetailsString);
    showNewUserOnScreen(userDetailsObj);
  }
});

function showNewUserOnScreen(user) {
  const parentNode = document.getElementById("listOfUsers");
  const childHTML = `<li id=${user.email}>${user.name} - ${user.email}
  <button onClick=deleteUser("${user.email}")>Delete</button>
  <button onClick=editUserDetails("${user.email}","${user.name}")>Edit</button>
  </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User
function editUserDetails(emailId, name) {
  document.getElementById("email").value = emailId;
  document.getElementById("name").value = name;

  deleteUser(emailId);
}
//deleteUser('abc@gmail.com')
function deleteUser(emailId) {
  console.log(emailId);
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId) {
  const parentNode = document.getElementById("listOfUsers");
  const childNodeToBeDeleted = document.getElementById(emailId);

  parentNode.removeChild(childNodeToBeDeleted);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}
