function set_element_display(className, status) {
    var elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = status;
    }
}

/* https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript top answer*/
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}