var currentPopup = void 0;

function setScrollToNone() {document.getElementsByTagName("html")[0].style = "";}
function setScrollToSmooth() {document.getElementsByTagName("html")[0].style = "scroll-behavior: smooth;";}

function removePopup(popup) {
    popup.hide();
    currentPopup.popupEl.remove();
    currentPopup = void 0;
}

async function autoCurrentDestruct() {
    await new Promise(resolve => setTimeout(resolve, 100));
    removePopup(currentPopup);
}

function showPopupByTooltipId(tooltip_id) {
    if (currentPopup !== void 0) {
        removePopup(currentPopup);
    }

    currentPopup = new Popup({"title": "  ",
        "content": tooltipData.getData(tooltip_id),
        hideCallback: () => {
            setScrollToSmooth();
            autoCurrentDestruct();
        },
    });
    setScrollToNone();
    currentPopup.show();
    displayZhcnString();
}