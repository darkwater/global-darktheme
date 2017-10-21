(function () {
    chrome.storage.sync.get(document.location.host, function (results) {
        if (results[document.location.host]) {
            __dark_theme_toggle__();
        }
    });
})();

function __dark_theme_toggle__() {
    let overlay = document.getElementById("__dark_theme_overlay__");
    let now_visible = null;

    if (overlay) {
        overlay.parentElement.removeChild(overlay);
        now_visible = false;
    } else {
        let overlay = document.createElement("div");
        overlay.id  = "__dark_theme_overlay__";

        overlay.style.backdropFilter = 'invert(100%) hue-rotate(180deg) contrast(80%)';
        overlay.style.position       = "fixed";
        overlay.style.left           = "0px";
        overlay.style.top            = "0px";
        overlay.style.right          = "0px";
        overlay.style.bottom         = "0px";
        overlay.style.zIndex         = "99999";
        overlay.style.pointerEvents  = "none";

        document.firstElementChild.appendChild(overlay);
        now_visible = true;
    }

    let obj = {};
    obj[document.location.host] = now_visible;
    chrome.storage.sync.set(obj);
}
