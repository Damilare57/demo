window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");
  
    // Simulate loading delay (optional)
    setTimeout(() => {
      loadingScreen.style.display = "none";
      content.style.display = "block";
    }, 2000); // 2-second delay
  });
  document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes");
    const imageContainer = document.querySelector(".image"); // Use querySelector for class
  
    yesButton.addEventListener("click", function () {
      console.log("Button clicked!"); // Debugging log
  
      imageContainer.style.display = "flex"; // Make image container visible
      setTimeout(() => {
        imageContainer.style.opacity = "1"; // Step 2: Fade in smoothly after a slight delay
      }, 10); // Small delay ensures transition works
      
    });
  });