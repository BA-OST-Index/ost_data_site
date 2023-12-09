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
}