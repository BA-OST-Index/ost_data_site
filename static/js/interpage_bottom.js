function interpageBottomAdjust() {
    const screenWidth = document.body.clientWidth;
    const interpageBottomDivWidth = document.getElementById("interpage-navi-bottom").children[0].clientWidth;

    if (Math.abs(screenWidth - interpageBottomDivWidth) > 100) {
        // 如果大于100px，那么很明显被压缩了
        document.getElementById("interpage-navi-bottom").children[0].style.paddingLeft = "0";
        document.getElementById("interpage-navi-bottom-right").style.flex = "initial";
    }
    else {
        // reset
        document.getElementById("interpage-navi-bottom").children[0].style.paddingLeft = "370px";
        document.getElementById("interpage-navi-bottom-right").style.flex = "32em";
    }
}