function setElementDisplay(className, status) {
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

/* ChatGPT generated */
async function _fetchJsonData(apiEndpoint) {
    return new Promise(function (resolve, reject) {
        $.getJSON(apiEndpoint, function (data) {
            resolve(data); // Resolve the Promise with the parsed JSON data
        }).fail(function (jqXHR, textStatus, errorThrown) {
            reject("Error: " + textStatus + ", " + errorThrown); // Reject the Promise with an error message
        });
    });
}
async function fetchAndProcessJson(url) {
    try {
        var data = _fetchJsonData(url);
        data = await data;
        // Process the parsed JSON data
        return data
    } catch (error) {
        // Handle errors
        console.error(error);
    }
}

// time_show.js
function addLeadingContent(obj, max_length, content) {
    return obj.toString().padStart(2, content)
}