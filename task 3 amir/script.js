// Fetch data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const postsContainer = document.getElementById('posts-cont');

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

      // Append title and body to the card body
      cardBody.appendChild(postTitle);
      cardBody.appendChild(postBody);

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
