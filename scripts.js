function handleBuyButton() {
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
}

function handleLanguageSelector() {
    const htmlTag = document.querySelector("html")
    const idLangButton = document.querySelector("#id-button")
    const enLangButton = document.querySelector("#en-button")

    switch (htmlTag.lang) {
        case "id":
            idLangButton.classList.add("active")
            enLangButton.classList.remove("active")
            break
        case "en":
            idLangButton.classList.remove("active")
            enLangButton.classList.add("active")
            break
    }

    idLangButton.addEventListener("click", () => {
        htmlTag.lang = "id"
        idLangButton.classList.add("active")
        enLangButton.classList.remove("active")
    })

    enLangButton.addEventListener("click", () => {
        htmlTag.lang = "en"
        idLangButton.classList.remove("active")
        enLangButton.classList.add("active")
    })
}

function handleSideNav() {
    const menuBarButton = document.querySelector("#menu-bar")
    const nav = document.querySelector("nav")
    let isOpen = false
    menuBarButton.addEventListener("click", () => {
        nav.style.left = "0px";
        isOpen = true
        nav.focus()
    })
    nav.addEventListener("focusout", () => {
        if (isOpen) {
            nav.style.left = "-200px";
            isOpen = false
        }
    })
}

window.onload = function () {
    handleBuyButton()
    handleLanguageSelector()
    handleSideNav()
}