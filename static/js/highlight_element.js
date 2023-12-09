var lastHashtag = "";

function highlightElement() {
    console.log("debug highlightElement()");

    // if current hash is empty, then don't do it
    if (window.location.hash === "") {
        return;
    }

    // get current one
    var currentHash = window.location.hash.slice(1,);

    // de-highlight
    document.getElementById(lastHashtag).style.backgroundColor = "";

    // highlight current one
    document.getElementById(currentHash).style.backgroundColor = "yellow";

    // save current one
    lastHashtag = currentHash;

    // scroll
    var elementOffset = $(window.location.hash).offset().top - 100;
    window.scrollTo(0, elementOffset);
    console.log(elementOffset);
}

window.addEventListener('pageshow', function () {
    // to top right away
    if (window.location.hash) scroll(0, 0);
    document.querySelector("html").style.scrollBehavior = "smooth";

    lastHashtag = window.location.hash.slice(1,);
    highlightElement();
})

window.addEventListener('hashchange', function () {
    highlightElement();
})
