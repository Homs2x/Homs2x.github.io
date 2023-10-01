/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Get the anchor tag and frame container
document.addEventListener('DOMContentLoaded', function() {
    // Get the anchor tag, frame container, and close button
    const anchor = document.getElementById('show-Frame');
    const frameContainer = document.getElementById('frameContainer');
    const closeButton = document.getElementById('closeFrame');

    // Show the frame when the anchor tag is clicked
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        frameContainer.style.display = 'flex'; // Display the frame container
    });

    // Close the frame when the close button is clicked
    closeButton.addEventListener('click', function() {
        frameContainer.style.display = 'none'; // Hide the frame container
    });
});



