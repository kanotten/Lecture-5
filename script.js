document.addEventListener('DOMContentLoaded', function () {
    const counterContainer = document.querySelector('.counter');

    if (counterContainer) {
        let timeLeft = 10;

        function updateCounter() {
            counterContainer.innerHTML = timeLeft;

            if (timeLeft > 0) {
                setTimeout(function () {
                    timeLeft--;
                    updateCounter();
                }, 1000);
            } else {
                counterContainer.innerHTML = "Countdown finished!";
            }
        }

        updateCounter();
    }
});
