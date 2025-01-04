// Array of image URLs to loop through
const imageUrls = [
    "img.png", // Assuming the image is in the same directory as script.js
    "image2.jpg",
    
    // Add more image URLs as needed
];

const intervalTime = 3000; // Interval time in milliseconds (e.g., 3000 ms = 3 seconds)
let currentIndex = 0;

// Function to update the image source
function updateImage() {
    // Get the image element
    const imageElement = document.getElementById("imageElement");
    
    // Set the image source
    imageElement.src = imageUrls[currentIndex];
    
    // Increment the index or reset it to 0 if it exceeds the length of the array
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Call the updateImage function initially to show the first image
updateImage();

// Set an interval to update the image every few seconds
const intervalId = setInterval(updateImage, intervalTime);

// Optionally, you can clear the interval after a certain duration if needed
const loopDuration = 2000; // Duration in milliseconds (e.g., 15000 ms = 15 seconds)
setTimeout(() => {
    clearInterval(intervalId); // Clear the interval
}, loopDuration);

