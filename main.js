// Fetch data from API endpoint
fetch('https://jobs.github.com/positions.json')
  .then(response => response.json())
  .then(data => {
    // Extract unique locations from data
    const locations = [...new Set(data.map(job => job.location))];

    // Populate dropdown menu with location options
    const locationDropdown = document.getElementById('location');
    locations.forEach(location => {
      const option = document.createElement('option');
      option.value = location;
      option.textContent = location;
      locationDropdown.appendChild(option);
    });
  })
  .catch(error => console.error(error));

  // Get the navigation menu and the toggle button
const navMenu = document.getElementById("nav-menu");
const toggleButton = document.getElementById("toggle-button");

// Add an event listener to the toggle button
toggleButton.addEventListener("click", () => {
  // Toggle the "active" class on the navigation menu
  navMenu.classList.toggle("active");
});

// Get all the dropdown menus
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

// Loop through each dropdown menu
dropdownMenus.forEach((dropdownMenu) => {
  // Get the dropdown toggle button and the dropdown content
  const dropdownToggle = dropdownMenu.querySelector(".dropdown-toggle");
  const dropdownContent = dropdownMenu.querySelector(".dropdown-content");

  // Add an event listener to the dropdown toggle button
  dropdownToggle.addEventListener("click", () => {
    // Toggle the "active" class on the dropdown content
    dropdownContent.classList.toggle("active");
  });
});

// Get the search form and the search input
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// Add an event listener to the search form
searchForm.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the search query from the search input
  const searchQuery = searchInput.value;

  // Redirect the user to the search results page with the search query as a parameter
  window.location.href = `/search.html?q=${searchQuery}`;
});

// Get the filter form and the filter buttons
const filterForm = document.getElementById("filter-form");
const partTimeButton = document.getElementById("part-time-button");
const fullTimeButton = document.getElementById("full-time-button");

// Add event listeners to the filter buttons
partTimeButton.addEventListener("click", () => {
  // Set the value of the "type" hidden input to "part-time"
  document.getElementById("type").value = "part-time";

  // Submit the filter form
  filterForm.submit();
});

fullTimeButton.addEventListener("click", () => {
  // Set the value of the "type" hidden input to "full-time"
  document.getElementById("type").value = "full-time";

  // Submit the filter form
  filterForm.submit();
});
