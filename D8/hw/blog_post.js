document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    const visibility = document.querySelector('input[name="visibility"]:checked').value;
    const author = document.getElementById("postAuthor").value;
    const selectedTags = Array.from(document.getElementById("postTags").selectedOptions).map(option => option.value);
  
    if (validateInputs(title, content)) {
      const date = new Date().toLocaleDateString("en-US", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
  
      addPost(title, content, date, visibility, author, selectedTags);
  
      // Clear the form fields
      document.getElementById("postTitle").value = '';
      document.getElementById("postContent").value = '';
      document.getElementById("errorMessage").textContent = ''; // Clear any previous error message
    }
  });
  
  function validateInputs(title, content) {
    if (!title.trim() || !content.trim()) {
      document.getElementById("errorMessage").textContent = "Title and content cannot be empty.";
      return false;
    }
    // Add more validation rules here if needed
    return true;
  }
  
  function addPost(title, content, date, visibility, author, tags) {
    const postContainer = document.getElementById("postsContainer");
  
    const postElement = document.createElement("div");
    postElement.classList.add("post");
  
    const postTitle = document.createElement("h3");
    postTitle.classList.add("post-title");
    postTitle.textContent = title;
  
    const postDate = document.createElement("p");
    postDate.classList.add("post-date");
    postDate.textContent = `Posted on: ${date}`;
  
    const postVisibility = document.createElement("p");
    postVisibility.classList.add("post-visibility");
    postVisibility.textContent = `Visibility: ${visibility}`;
  
    const postAuthor = document.createElement("p");
    postAuthor.classList.add("post-author");
    postAuthor.textContent = `Author: ${author}`;
  
    const postContent = document.createElement("p");
    postContent.classList.add("post-content");
    postContent.textContent = content;
  
    const postTags = document.createElement("div");
    postTags.classList.add("post-tags");
    tags.forEach(tag => {
      const tagElement = document.createElement("span");
      tagElement.classList.add("tag");
      tagElement.textContent = tag;
      postTags.appendChild(tagElement);
    });
  
    postElement.appendChild(postTitle);
    postElement.appendChild(postDate);
    postElement.appendChild(postVisibility);
    postElement.appendChild(postAuthor);
    postElement.appendChild(postContent);
    postElement.appendChild(postTags);
  
    postContainer.prepend(postElement); // Add the new post at the top
  }