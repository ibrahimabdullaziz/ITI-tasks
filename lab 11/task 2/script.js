const postIdInput = document.getElementById("postId");
const loadPostBtn = document.getElementById("loadPostBtn");
const result = document.getElementById("result");

loadPostBtn.addEventListener("click", function () {
  const postId = Number(postIdInput.value);

  if (!postId || postId <= 0) {
    result.innerHTML = "<p>Error: Please enter a valid post ID</p>";
    return;
  }

  result.innerHTML = "<p>Loading post...</p>";

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Post not found");
      }

      return response.json();
    })
    .then(function (post) {
      return fetch(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`,
      ).then(function (userResponse) {
        if (!userResponse.ok) {
          throw new Error("User not found");
        }

        return userResponse.json().then(function (user) {
          return { post, user };
        });
      });
    })
    .then(function (data) {
      const { post, user } = data;

      result.innerHTML = `
        <div class="post-card">
          <h2>Post Details</h2>
          <p><span>Post Title:</span> ${post.title}</p>
          <p><span>Post Body:</span> ${post.body}</p>
        </div>

        <div class="user-card">
          <h3>Author</h3>
          <p><span>User Name:</span> ${user.name}</p>
          <p><span>User Email:</span> ${user.email}</p>
          <p><span>User City:</span> ${user.address.city}</p>
        </div>
      `;
    })
    .catch(function (error) {
      result.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});
