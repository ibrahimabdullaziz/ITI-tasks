const loadUsersBtn = document.getElementById("loadUsersBtn");
const userList = document.getElementById("userList");

loadUsersBtn.addEventListener("click", async () => {
  userList.innerHTML = "<p>Loading users...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    userList.innerHTML = "";

    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "user-card";

      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><h5>Name:</h5> ${user.name}</p>
        <p><h5>Email:</h5> ${user.email}</p>
        <p><h5>Phone:</h5> ${user.phone}</p>
        <p><h5>Website:</h5> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
        <p><h5>Company Name:</h5> ${user.company.name}</p>
        <p><h5>City:</h5> ${user.address.city}</p>
        <p><h5>Full Address:</h5> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
      `;

      userList.appendChild(card);
    });
  } catch (error) {
    userList.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});
