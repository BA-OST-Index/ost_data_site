function interpageBottomAdjust() {
    const screenWidth = document.body.clientWidth;
    if (screenWidth <= 960) {
        // 移动端还原为正常情况
        document.getElementById("interpage-navi-bottom").children[0].style.paddingLeft = "0";
        document.getElementById("interpage-navi-bottom-right").style.flex = "initial";
        return;
    }

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