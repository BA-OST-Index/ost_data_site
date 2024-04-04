// char_desc_display.js
function setListenerOnCharDescPreference() {
    const radioInputs = document.getElementsByName("desc_enable");
    for (let i = 0, max = radioInputs.length; i < max; i++) {
        radioInputs[i].onclick = function () {
            display_char_desc_element(radioInputs[i].value);
        };
    }
}

function setCharDescDefault() {
    let _temp = localStorage.getItem("char_desc");
    if (_temp === null) {
        localStorage.setItem("char_desc", "1");
    }
}

function displayCharDescRadioStatus() {
    setCharDescDefault();
    const targetElementId = "char_desc_radio_" + localStorage.getItem("char_desc");
    document.getElementById(targetElementId).checked = true;
}

function display_char_desc_element(value) {
    let flagValue;
    const setValue = function (value) {
        localStorage.setItem("char_desc", value);
    }

    // get value
    setCharDescDefault();
    let value_;
    if (value === void 0 || value === null) {
        value_ = localStorage.getItem("char_desc");
    }
    else {
        value_ = value;
    }

    switch (value_) {
        case null:
        case "enable":
        case "1":
            flagValue = 1;
            break;
        case "disable":
        case "0":
            flagValue = 0;
            break;
    }
    setValue(flagValue.toString());

    if (flagValue === 1) {
        setElementDisplay("stu-list-desc", "inline-block");
    } else {
        setElementDisplay("stu-list-desc", "none");
    }
}

// char_lang_display.js
function setDefaultCharLangPreference(langCode) {
    const keyName = "char_lang_" + langCode;
    if (localStorage.getItem(keyName) === null) {
        localStorage.setItem(keyName, "0")
    }
}

function setCharLangDisplayStatus(langCode, optionElement) {
    const selectedIndex = optionElement.selectedIndex;
    const keyName = "char_lang_" + langCode;
    localStorage.setItem(keyName, selectedIndex.toString());

    displayCharLangElement(langCode);
}

function displayCharLangElement(langCode) {
    const key_name = "char_lang_" + langCode;
    var preference = localStorage.getItem(key_name);
    if (preference === null) {
        setDefaultCharLangPreference(langCode);
        preference = localStorage.getItem(key_name).toString();
    }

    if (langCode === "en") {
        if (preference === "0") {
            setElementDisplay("char-lang-jp", "none");
        }
        else {
            setElementDisplay("char-lang-jp", "inline-block");
        }
    }
    else {
        if (langCode === "zh") {
            switch (preference) {
                case "0":
                    setElementDisplay("char-lang-en", "none");
                    setElementDisplay("char-lang-jp", "none");
                    break;
                case "1":
                    setElementDisplay("char-lang-en", "inline-block");
                    setElementDisplay("char-lang-jp", "none");
                    break;
                case "2":
                    setElementDisplay("char-lang-en", "none");
                    setElementDisplay("char-lang-jp", "inline-block");
                    break
                case "3":
                    setElementDisplay("char-lang-en", "inline-block");
                    setElementDisplay("char-lang-jp", "inline-block");
                    break;
            }
        }
    }
}