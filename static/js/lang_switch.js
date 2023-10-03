function lang_switch() {
    let select_ele = document.getElementById("lang_switcher");

    let current_value = select_ele.value;
    let url_value = get_url_lang(document.URL);

    if (current_value !== url_value) {
        let url_a = document.createElement("a");
        url_a.href = document.URL;
        let pathname_list = url_a.pathname.split("/");
        pathname_list[1] = current_value;
        url_a.pathname = pathname_list.join("/");

        // go to another lang page
        window.location.href = url_a.href;
    }
}

function get_url_lang(url) {
    let url_a = document.createElement("a");
    url_a.href = url;
    return url_a.pathname.split("/")[1];
}

function lang_switch_show() {
    let select_ele = document.getElementById("lang_switcher");

    // set value
    select_ele.value = get_url_lang(document.URL);
}