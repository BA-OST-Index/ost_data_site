function set_char_lang_preference(lang_code) {
    const key_name = "char_lang_" + lang_code;
    if (localStorage.getItem(key_name) === null) {
        localStorage.setItem(key_name, "0")
    }
}

function set_char_lang_display_status(lang_code, option_element) {
    const index = option_element.selectedIndex;
    const key_name = "char_lang_" + lang_code;
    localStorage.setItem(key_name, index.toString());

    display_char_lang_element(lang_code);
}

function display_char_lang_element(lang_code) {
    const key_name = "char_lang_" + lang_code;
    var preference = localStorage.getItem(key_name);
    if (preference === null) {
        set_char_lang_preference(lang_code);
        preference = localStorage.getItem(key_name).toString();
    }

    if (lang_code === "en") {
        if (preference === "0") {
            set_element_display("char-lang-jp", "none");
        }
        else {
            set_element_display("char-lang-jp", "inline-block");
        }
    }
    else {
        if (lang_code === "zh") {
            switch (preference) {
                case "0":
                    set_element_display("char-lang-en", "none");
                    set_element_display("char-lang-jp", "none");
                    break;
                case "1":
                    set_element_display("char-lang-en", "inline-block");
                    set_element_display("char-lang-jp", "none");
                    break;
                case "2":
                    set_element_display("char-lang-en", "none");
                    set_element_display("char-lang-jp", "inline-block");
                    break
                case "3":
                    set_element_display("char-lang-en", "inline-block");
                    set_element_display("char-lang-jp", "inline-block");
                    break;
            }
        }
    }
}