(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const menuOpenBtn = document.querySelector(".header-bottom__menubtn");
    const menuBody = document.querySelector(".header-menu__box");
    const menuCloseBtn = document.querySelector(".header-menu__close-btn");
    if (menuOpenBtn) menuOpenBtn.addEventListener("click", (function(e) {
        document.body.classList.toggle("_lock");
        menuOpenBtn.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        menuCloseBtn.classList.toggle("_active");
    }));
    if (menuCloseBtn) menuCloseBtn.addEventListener("click", (function(e) {
        document.body.classList.toggle("_lock");
        menuOpenBtn.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        menuCloseBtn.classList.toggle("_active");
    }));
    window["FLS"] = true;
    isWebp();
})();