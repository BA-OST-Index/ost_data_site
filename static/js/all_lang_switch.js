// lang_switch.js
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

// zhcn_switch.js
function setZhcnStorage(option_element) {
    var selectedIndex = option_element.selectedIndex;
    if (selectedIndex === 0) {localStorage.setItem("zh_cn", "zh_cn_cn");}
    else {
        if (selectedIndex === 1) {localStorage.setItem("zh_cn", "zh_cn_jp");}
        else {
            if (selectedIndex === 2) {localStorage.setItem("zh_cn", "zh_cn_tw");}
            else {localStorage.setItem("zh_cn", "all");}
        }
    }

    displayZhcnString();
    convertZhcn();
}

function displayZhcnString() {
    var preference = localStorage.getItem("zh_cn");
    if (preference === null) {
        if (localStorage.getItem("zh_cn") === null) {
            localStorage.setItem("zh_cn", "zh_cn_jp");
        }
    }

    if (preference === "all") {
        setElementDisplay("lang-zh-cn-jp", "inline");
        setElementDisplay("lang-zh-cn-cn", "inline");
        setElementDisplay("lang-zh-cn-tw", "inline");
        setElementDisplay("lang-zh-cn-splitter", "inline");

        setElementDisplay("lang-zh-cn-jp-block", "block");
        setElementDisplay("lang-zh-cn-cn-block", "block");
        setElementDisplay("lang-zh-cn-tw-block", "block");

        setElementDisplay("lang-zh-cn-jp-block-br", "inline-block");
        setElementDisplay("lang-zh-cn-cn-block-br", "inline-block");
        setElementDisplay("lang-zh-cn-tw-block-br", "inline-block");
    }
    else {
        setElementDisplay("lang-zh-cn-splitter", "none")
        if (preference === "zh_cn_jp") {
            setElementDisplay("lang-zh-cn-jp", "inline");
            setElementDisplay("lang-zh-cn-cn", "none");
            setElementDisplay("lang-zh-cn-tw", "none");

            setElementDisplay("lang-zh-cn-jp-block", "block");
            setElementDisplay("lang-zh-cn-cn-block", "none");
            setElementDisplay("lang-zh-cn-tw-block", "none");

            setElementDisplay("lang-zh-cn-jp-block-br", "inline-block");
            setElementDisplay("lang-zh-cn-cn-block-br", "none");
            setElementDisplay("lang-zh-cn-tw-block-br", "none");
        }
        else {
            if (preference === "zh_cn_cn") {
                setElementDisplay("lang-zh-cn-jp", "none");
                setElementDisplay("lang-zh-cn-cn", "inline");
                setElementDisplay("lang-zh-cn-tw", "none");

                setElementDisplay("lang-zh-cn-jp-block", "none");
                setElementDisplay("lang-zh-cn-cn-block", "block");
                setElementDisplay("lang-zh-cn-tw-block", "none");

                setElementDisplay("lang-zh-cn-jp-block-br", "none");
                setElementDisplay("lang-zh-cn-cn-block-br", "inline-block");
                setElementDisplay("lang-zh-cn-tw-block-br", "none");
            }
            else {
                setElementDisplay("lang-zh-cn-jp", "none");
                setElementDisplay("lang-zh-cn-cn", "none");
                setElementDisplay("lang-zh-cn-tw", "inline");

                setElementDisplay("lang-zh-cn-jp-block", "none");
                setElementDisplay("lang-zh-cn-cn-block", "none");
                setElementDisplay("lang-zh-cn-tw-block", "block");

                setElementDisplay("lang-zh-cn-jp-block-br", "none");
                setElementDisplay("lang-zh-cn-cn-block-br", "none");
                setElementDisplay("lang-zh-cn-tw-block-br", "inline-block");
            }
        }
    }
    convertZhcn();
}