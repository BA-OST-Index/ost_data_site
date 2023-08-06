function set_zhcn_preference() {
    if (localStorage.getItem("zh_cn") === null) {
        localStorage.setItem("zh_cn", "zh_cn_jp");
    }
}

function set_zhcn_status(option_element) {
    var index = option_element.selectedIndex;
    if (index === 0) {localStorage.setItem("zh_cn", "zh_cn_cn");}
    else {
        if (index === 1) {localStorage.setItem("zh_cn", "zh_cn_jp");}
        else {
            if (index === 2) {localStorage.setItem("zh_cn", "zh_cn_tw");}
            else {localStorage.setItem("zh_cn", "all");}
        }
    }

    display_zhcn_element();
}

function set_zhcn_element(className, status) {
    var elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = status;
    }
}

function display_zhcn_element() {
    var preference = localStorage.getItem("zh_cn");
    if (preference === null) {set_zhcn_preference();}

    if (preference === "all") {
        set_zhcn_element("lang-zh-cn-jp", "inline");
        set_zhcn_element("lang-zh-cn-cn", "inline");
        set_zhcn_element("lang-zh-cn-tw", "inline");
        set_zhcn_element("lang-zh-cn-splitter", "inline");
    }
    else {
        set_zhcn_element("lang-zh-cn-splitter", "none")
        if (preference === "zh_cn_jp") {
            set_zhcn_element("lang-zh-cn-jp", "inline");
            set_zhcn_element("lang-zh-cn-cn", "none");
            set_zhcn_element("lang-zh-cn-tw", "none");
        }
        else {
            if (preference === "zh_cn_cn") {
                set_zhcn_element("lang-zh-cn-jp", "none");
                set_zhcn_element("lang-zh-cn-cn", "inline");
                set_zhcn_element("lang-zh-cn-tw", "none");
            }
            else {
                set_zhcn_element("lang-zh-cn-jp", "none");
                set_zhcn_element("lang-zh-cn-cn", "none");
                set_zhcn_element("lang-zh-cn-tw", "inline");
            }
        }
    }
}