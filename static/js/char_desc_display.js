function set_listen_char_desc_preference() {
    const radio_inputs = document.getElementsByName("desc_enable");
    for (let i = 0, max = radio_inputs.length; i < max; i++) {
        radio_inputs[i].onclick = function () {
            display_char_desc_element(radio_inputs[i].value);
        };
    }
}

function set_char_desc_default() {
    let _temp = localStorage.getItem("char_desc");
    if (_temp === null) {
        localStorage.setItem("char_desc", "1");
    }
}

function check_char_desc_radio() {
    set_char_desc_default();
    const element_id = "char_desc_radio_" + localStorage.getItem("char_desc");
    document.getElementById(element_id).checked = true;
}

function display_char_desc_element(value) {
    let flag_value;
    const set_value = function (value) {
        localStorage.setItem("char_desc", value);
    }

    // get value
    set_char_desc_default();
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
            flag_value = 1;
            break;
        case "disable":
        case "0":
            flag_value = 0;
            break;
    }
    set_value(flag_value.toString());

    if (flag_value === 1) {
        set_element_display("stu-list-desc", "inline-block");
    } else {
        set_element_display("stu-list-desc", "none");
    }
}