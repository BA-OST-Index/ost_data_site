var last_hashtag = "";

function highlight_element() {
    console.log("debug highlight_element()");

    // if current hash is empty, then don't do it
    if (window.location.hash === "") {return;}

    // get current one
    var current_hash = window.location.hash.slice(1,);

    // de-highlight
    document.getElementById(last_hashtag).style.backgroundColor = "";

    // highlight current one
    document.getElementById(current_hash).style.backgroundColor = "yellow";

    // save current one
    last_hashtag = current_hash;

    // scroll
    var elementOffset = $(window.location.hash).offset().top - 100;
    window.scrollTo(0, elementOffset);
    console.log(elementOffset);
}

window.addEventListener('pageshow', function() {
    // to top right away
    if ( window.location.hash ) scroll(0,0);
    document.querySelector("html").style.scrollBehavior = "smooth";

    last_hashtag = window.location.hash.slice(1,);
    highlight_element();
})

window.addEventListener('hashchange', function() {
    highlight_element();
})
