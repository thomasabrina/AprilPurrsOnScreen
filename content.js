document.addEventListener('DOMContentLoaded', function() {
    const april = document.getElementById('april');
    const images = [
        'images/april_sleeping.png',
        'images/april_sitting.png',
        'images/april_lying.png'
    ];
    let isDragging = false;
    let offsetX, offsetY;

    function setRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        april.src = images[randomIndex];
    }

    setRandomImage(); // Set initial random image

    april.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - april.getBoundingClientRect().left;
        offsetY = e.clientY - april.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            april.style.left = e.clientX - offsetX + 'px';
            april.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            april.style.left = '';
            april.style.top = '';
            setRandomImage(); // Set random image after drag
        }
    });

    april.addEventListener('click', function() {
        april.classList.add('playful-animation');
        setTimeout(() => {
            april.classList.remove('playful-animation');
            setRandomImage(); // Set random image after click
        }, 1000);
    });
}); 