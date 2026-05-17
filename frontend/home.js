// GET USER
const user =
  JSON.parse(localStorage.getItem("user"));


// REDIRECT IF NOT LOGGED IN
if (!user) {

  window.location.href = "index.html";

}


// SHOW USER EMAIL
document.getElementById("userEmail")
.innerText = user.email;


// LOGOUT
document.getElementById("logoutBtn")
.addEventListener("click", () => {

  localStorage.removeItem("user");

  window.location.href = "index.html";

});