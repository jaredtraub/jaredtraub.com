// Function to detect when user scrolls past welcome screen, attatches header to top of screen
window.addEventListener('scroll', function() {
  const menu = document.getElementById('menu');
  if (window.scrollY > window.innerHeight * 0.36) {
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.marginTop = '5px';
  } else {
    menu.style.position = 'absolute';
    menu.style.top = '35vh';
    menu.style.marginTop = '15px'; 
  }
});

// Function to detect when user scrolls past welcome screen, changes color of header to be more accessible
window.addEventListener('scroll', function() {
  const menuLinks = document.querySelectorAll('.menu-start a');
  if (window.scrollY > window.innerHeight * 0.9 && this.window.scrollY < this.window.innerHeight * 2.4) {
    menuLinks.forEach(link => {
      link.style.color = '#343A71';
      link.style.textShadow = 'none';
    });
  } 
  else if (window.scrollY > this.window.innerHeight * 2.4) {
    menuLinks.forEach(link => {
      link.style.color = '#343A71';
    });
  }
  else {
    menuLinks.forEach(link => {
      link.style.color = '#FAF9F6';
      link.style.textShadow = '2px 2px 4px #000000';
    });
  }
});



function moveCloudLeft(cloud, duration) {
  let cloudWidth = cloud.clientWidth / window.innerWidth * 100; // Convert cloud width to percentage of viewport width
  let windowWidth = 100; // 100vw, which is the full viewport width

  function moveLeft() {
      // Reset position without animation
      cloud.style.transition = 'none';
      cloud.style.transform = 'translateX(' + windowWidth + 'vw)';

      // Use a short timeout to apply the transition for the movement
      setTimeout(() => {
          cloudWidth = cloud.clientWidth / window.innerWidth * 100; // Recalculate cloud width as percentage
          windowWidth = 100; // Set to 100vw
          cloud.style.transition = 'transform ' + duration + 'ms linear';
          cloud.style.transform = 'translateX(-' + cloudWidth + 'vw)';
      }, 100); // 100ms delay to apply transition
  }

  cloud.addEventListener('transitionend', moveLeft);
  moveLeft();

  // Update cloud movement on window resize
  window.addEventListener('resize', () => {
      cloudWidth = cloud.clientWidth / window.innerWidth * 100; // Recalculate cloud width as percentage
  });
}

function moveCloudRight(cloud, duration) {
  let cloudWidth = cloud.clientWidth / window.innerWidth * 100; // Convert cloud width to percentage of viewport width
  let windowWidth = 100; // 100vw, which is the full viewport width

  function moveRight() {
      // Reset position without animation
      cloud.style.transition = 'none';
      cloud.style.transform = 'translateX(-' + cloudWidth + 'vw)';

      setTimeout(() => {
          cloudWidth = cloud.clientWidth / window.innerWidth * 100; // Recalculate cloud width as percentage
          windowWidth = 100; // Set to 100vw
          cloud.style.transition = 'transform ' + duration + 'ms linear';
          cloud.style.transform = 'translateX(' + windowWidth + 'vw)';
      }, 100); // 100ms delay to apply transition
  }

  cloud.addEventListener('transitionend', moveRight);
  moveRight();

  // Update cloud movement on window resize
  window.addEventListener('resize', () => {
      cloudWidth = cloud.clientWidth / window.innerWidth * 100; // Recalculate cloud width as percentage
  });
}

window.onload = function() {
  const cloud1 = document.getElementById('cloud1');
  const cloud2 = document.getElementById('cloud2');
  const cloud3 = document.getElementById('cloud3');
  const cloud4 = document.getElementById('cloud4');
  const cloud5 = document.getElementById('cloud5');
  const cloud6 = document.getElementById('cloud6');

  
  moveCloudRight(cloud1, 600000);
  moveCloudRight(cloud2, 500000);
  moveCloudRight(cloud3, 700000);
  moveCloudLeft(cloud4, 500000);
  moveCloudLeft(cloud5, 600000);
  moveCloudLeft(cloud6, 700000);


};


