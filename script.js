// Sample movie data
const movies = [
  { title: "The Shawshank", genre: "drama", rating: 0.3, releaseDate: "1994", poster: "The Shawshank.jpg" },
  { title: "The Dark nigth", genre: "action", rating: 8.7, releaseDate: "1999", poster: "the dark night.jpg" },
  {title : "God father", genre: "drama", rating: 8.2, releaseDate : "2002", poster : "godfather.jpg"}
  // Add more movie data here
];

// Display movie cards
function displayMovies(filteredMovies) {
  const movieContainer = document.getElementById("movie-container");
  movieContainer.innerHTML = ""; // Clear previous content

  filteredMovies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.poster}" class="movie-poster" alt="${movie.title}">
      <div class="movie-info">
        <h2>${movie.title}</h2>
        <p>Genre: ${movie.genre}</p>
        <p>Rating: ⭐${movie.rating}</p>
        <p>Release Date: ${movie.releaseDate}</p>
      </div>
    `;

    // Add click event for showing modal
    card.addEventListener("click", () => showMovieDetails(movie));
    
    movieContainer.appendChild(card);
  });
}

// Show modal with movie details
function showMovieDetails(movie) {
  const modal = document.getElementById("movie-modal");
  document.getElementById("modal-title").innerText = movie.title;
  document.getElementById("modal-description").innerText = `Genre: ${movie.genre}\nRating: ${movie.rating}\nRelease Date: ${movie.releaseDate}`;
  
  modal.style.display = "block";
}

// Close the modal
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("movie-modal").style.display = "none";
});

// Initialize the page with all movies
displayMovies(movies);

// Search functionality
document.getElementById("search-bar").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm) || 
    movie.genre.toLowerCase().includes(searchTerm)
  );
  displayMovies(filteredMovies);
});

// Sort by rating
document.getElementById("sort-rating").addEventListener("change", function () {
  const sortOrder = this.value;
  const sortedMovies = [...movies].sort((a, b) => {
    return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
  });
  displayMovies(sortedMovies);
});

// Sort by release date
document.getElementById("sort-date").addEventListener("change", function () {
  const sortOrder = this.value;
  const sortedMovies = [...movies].sort((a, b) => {
    return sortOrder === "asc" ? a.releaseDate - b.releaseDate : b.releaseDate - a.releaseDate;
  });
  displayMovies(sortedMovies);
});

