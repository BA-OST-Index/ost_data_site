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