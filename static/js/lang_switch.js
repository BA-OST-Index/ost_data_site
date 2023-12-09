function switchToLanguage() {
    let selectElement = document.getElementById("lang_switcher");

    let selectedLangcode = selectElement.value;
    let urlLangcode = getCurrentLangcode(document.URL);

    if (selectedLangcode !== urlLangcode) {
        let urlAnchorObject = document.createElement("a");
        urlAnchorObject.href = document.URL;
        let pathnameList = urlAnchorObject.pathname.split("/");
        pathnameList[1] = selectedLangcode;
        urlAnchorObject.pathname = pathnameList.join("/");

        // go to another lang page
        window.location.href = urlAnchorObject.href;
    }
}

function getCurrentLangcode(url) {
    let urlAnchorObject = document.createElement("a");
    urlAnchorObject.href = url;
    return urlAnchorObject.pathname.split("/")[1];
}

function showLangSwitchStatus() {
    let selectElement = document.getElementById("lang_switcher");

    // set value
    selectElement.value = getCurrentLangcode(document.URL);
}