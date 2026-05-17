const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value;

  const password = document.querySelector('input[type="password"]').value;

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    // SAVE USER
    localStorage.setItem("user", JSON.stringify(data.user));

    // REDIRECT
    window.location.href = "home.html";

    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
