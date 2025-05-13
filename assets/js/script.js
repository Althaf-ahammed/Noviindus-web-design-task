$(document).ready(function () {
    $('.dropdown-submenu > a').on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
  
      const target = $(this).data('target');
      const submenu = $('#' + target);
  
      if (submenu.length) {
        // Close all other submenus
        $('.flyout-menu').not(submenu).addClass('d-none');
        // Toggle current submenu
        submenu.toggleClass('d-none');
        // Update aria-expanded
        $(this).attr('aria-expanded', !submenu.hasClass('d-none'));
  
        // Remove active class from all dropdown items
        $('.dropdown-item').removeClass('active');
        // Add active class to the clicked item
        $(this).addClass('active');
      }
    });
  
    // Prevent closing submenu when clicking inside it
    $('.flyout-menu').on('click', function (e) {
      e.stopPropagation();
    });
  
    // Close all submenus and remove active class on outside click
    $(document).on('click', function () {
      $('.flyout-menu').addClass('d-none');
      $('.dropdown-submenu > a').attr('aria-expanded', 'false');
      $('.dropdown-item').removeClass('active');
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.getElementById("logoSliderTrack");
    const sliderItems = document.querySelectorAll(".slider-item");
    const itemCount = sliderItems.length; // Total number of items (including duplicates)
    const visibleItems = 3; // Number of items visible at a time
    let currentIndex = 0; // Start at the first item
    const totalOriginalItems = itemCount / 2; // Number of original items (before duplication)
  
    // Calculate the width of one item (including margins)
    const itemWidth = sliderItems[0].offsetWidth + 30; // 30px accounts for total margin (15px on each side)
  
    // Function to move the slider
    function moveSlider() {
      // Calculate the transform value to center the current item
      const offset = -(currentIndex * itemWidth) + (itemWidth * (visibleItems - 1)) / 2;
      sliderTrack.style.transform = `translateX(${offset}px)`;
  
      // Increment the index
      currentIndex++;
  
      // Reset the slider when reaching the halfway point (to create infinite loop)
      if (currentIndex >= totalOriginalItems) {
        setTimeout(() => {
          sliderTrack.style.transition = "none"; // Disable transition for the reset
          currentIndex = 0; // Reset to the beginning
          const resetOffset = (itemWidth * (visibleItems - 1)) / 2;
          sliderTrack.style.transform = `translateX(${resetOffset}px)`;
          // Force a reflow to apply the transitionless change
          void sliderTrack.offsetWidth;
          sliderTrack.style.transition = "transform 0.5s ease"; // Re-enable transition
        }, 1000); // Wait for the pause before resetting
      }
    }
  
    // Initial position
    const initialOffset = (itemWidth * (visibleItems - 1)) / 2;
    sliderTrack.style.transform = `translateX(${initialOffset}px)`;
  
    // Move the slider every 2 seconds (1s for movement, 1s for pause)
    setInterval(moveSlider, 2000);
  });

//   $(document).ready(function () {
//   // Image arrays for each slideshow
//   const slideshow1Images = [
//     "../images/Teacher.png",
//     "../images/Tutor.png", // Replace with your actual image paths
//   ];
//   const slideshow2Images = [
//     "../images/Tutor.png",
//     "../images/Teacher.png", // Replace with your actual image paths
//   ];

//   let slideshow1Index = 0;
//   let slideshow2Index = 0;

//   const $slideshow1 = $("#slideshow1");
//   const $slideshow2 = $("#slideshow2");

//   // Function to change image with fade effect
//   function changeImage($element, images, index) {
//     $element.addClass("fade"); // Trigger fade-out
//     setTimeout(() => {
//       $element.attr("src", images[index]); // Change src after fade-out
//       $element.removeClass("fade"); // Fade-in
//     }, 500); // Match the CSS transition duration
//   }

//   // Slideshow 1
//   function runSlideshow1() {
//     slideshow1Index = (slideshow1Index + 1) % slideshow1Images.length;
//     changeImage($slideshow1, slideshow1Images, slideshow1Index);
//   }

//   // Slideshow 2 (slightly offset timing for visual variety)
//   function runSlideshow2() {
//     slideshow2Index = (slideshow2Index + 1) % slideshow2Images.length;
//     changeImage($slideshow2, slideshow2Images, slideshow2Index);
//   }

//   // Start slideshows with different intervals
//   setInterval(runSlideshow1, 4000); // Change every 4 seconds
//   setTimeout(() => {
//     setInterval(runSlideshow2, 4000); // Start after 2 seconds, change every 4 seconds
//   }, 2000);

//   // Optional: Pause on hover
//   $(".stamp-img").hover(
//     function () {
//       $(this).addClass("fade-pause");
//     },
//     function () {
//       $(this).removeClass("fade-pause");
//     }
//   );
// });

$(document).ready(function () {
    $('#teachingCarousel').carousel({
      interval: 3000,  // 3 seconds
      ride: 'carousel',
      pause: false     // keeps fading even when hovered
    });
  });
