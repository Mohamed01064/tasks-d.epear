// Fetch data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const postsContainer = document.getElementById('posts-container');

    // Loop through each post
    data.forEach((post, index) => {
      // Create a div element for each post
      const postDiv = document.createElement('div');
      postDiv.className = 'mb-4';

      // Create a card element for each post
      const card = document.createElement('div');
      card.className = 'card post-card';

      // Create an image element for the card
      const cardImg = document.createElement('img');
      cardImg.className = 'card-img-top';
      cardImg.src = `https://picsum.photos/600/200?random=${index}`; // Placeholder image with random parameter

      // Create a div element for card body
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      // Create an h5 element for the title
      const postTitle = document.createElement('h5');
      postTitle.className = 'card-title post-title';
      postTitle.textContent = post.title;

      // Create a p element for the body
      const postBody = document.createElement('p');
      postBody.className = 'card-text post-body';
      postBody.textContent = post.body;

      // Create a button to show comments
      const commentsButton = document.createElement('button');
      commentsButton.className = 'btn btn-show-comments';
      commentsButton.textContent = 'Show Comments';
      commentsButton.onclick = () => toggleComments(post.id);

      // Create a div to display comments
      const commentsDiv = document.createElement('div');
      commentsDiv.id = `comments-${post.id}`;
      commentsDiv.className = 'comments-container mt-3';
      commentsDiv.style.display = 'none'; // Hide comments by default

      // Append title and body to the card body
      cardBody.appendChild(postTitle);
      cardBody.appendChild(postBody);
      cardBody.appendChild(commentsButton); // Append the button to the card body
      cardBody.appendChild(commentsDiv); // Append the comments div to the card body

      // Append card image and body to the card
      card.appendChild(cardImg);
      card.appendChild(cardBody);

      // Append the card to the post div
      postDiv.appendChild(card);

      // Append the post div to the posts container
      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to toggle comments visibility
function toggleComments(postId) {
  const commentsDiv = document.getElementById(`comments-${postId}`);
  if (commentsDiv.style.display === 'none') {
    // Fetch and display comments
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(comments => {
        commentsDiv.innerHTML = ''; // Clear any existing comments
        comments.forEach(comment => {
          const commentDiv = document.createElement('div');
          commentDiv.className = 'comment';

          const commentEmail = document.createElement('h6');
          commentEmail.className = 'comment-email';
          commentEmail.textContent = comment.email;

          const commentBody = document.createElement('p');
          commentBody.className = 'comment-body';
          commentBody.textContent = comment.body;

          commentDiv.appendChild(commentEmail);
          commentDiv.appendChild(commentBody);

          commentsDiv.appendChild(commentDiv);
        });
        commentsDiv.style.display = 'block';
      })
      .catch(error => console.error('Error fetching comments:', error));
  } else {
    commentsDiv.style.display = 'none'; // Hide comments 
  }
}
