window.addEventListener('resize', function () {
    const movingElement = document.querySelector('#order-button');
    const containerLarge = document.querySelector('#container-large');
    const containerSmall = document.querySelector('#container-small');

    if (window.innerWidth <= 1000) {
        if (movingElement.getAttribute("id") !== containerSmall.children[0].getAttribute("id")) {
            containerSmall.insertBefore(movingElement, containerSmall.firstChild);
        }
    } else {
        containerLarge.appendChild(movingElement);
    }
});

// Initial check
if (window.innerWidth <= 1000) {
    const container = document.querySelector('#container-small');
    container.insertBefore(document.querySelector('#order-button'), container.firstChild);
}