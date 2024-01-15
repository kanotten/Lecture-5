// document.addEventListener('DOMContentLoaded', function () {
//     const counterContainer = document.querySelector('.counter');

//     if (counterContainer) {
//         let timeLeft = 10;

//         function updateCounter() {
//             counterContainer.innerHTML = timeLeft;

//             if (timeLeft > 0) {
//                 setTimeout(function () {
//                     timeLeft--;
//                     updateCounter();
//                 }, 1000);
//             } else {
//                 counterContainer.innerHTML = "Countdown finished!";
//             }
//         }

//         updateCounter();
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  const counterContainer = document.querySelector(".counter");

  if (counterContainer) {
    let timeLeft = 10;

    function updateCounter() {
      if (timeLeft > 6) {
        counterContainer.innerHTML = timeLeft;
      } else {

        counterContainer.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac egestas arcu, quis fringilla felis. Nullam at libero at justo tempor aliquet id at ante. Mauris sed congue metus, scelerisque venenatis massa. Etiam et euismod arcu, sit amet semper arcu. Mauris laoreet tortor ut neque scelerisque sodales. Sed mi sapien, fringilla et condimentum lacinia, blandit sit amet tellus. In lacus massa, ornare vel felis at, vestibulum tincidunt ipsum. Cras sit amet molestie orci. Maecenas efficitur, arcu tincidunt porttitor lacinia, lacus arcu finibus felis, in maximus tortor elit et tellus. Curabitur eu mauris justo. Donec consequat ac urna sed euismod.`;
      }

      if (timeLeft > 0) {
        setTimeout(function () {
          timeLeft--;
          updateCounter();
        }, 1000);
      }
    }

    updateCounter();
  }
});

// setTimout (function () {
//     after.style.display =

// },5000);


