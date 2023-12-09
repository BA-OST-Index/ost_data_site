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