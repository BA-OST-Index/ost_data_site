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

function showPopupByTooltipId(tooltip_id, designatedElementClass) {
    if (currentPopup !== void 0) {
        removePopup(currentPopup);
    }

    let content = tooltipData.getData(tooltip_id);
    currentPopup = new Popup({"title": "  ",
        "content": content,
        hideCallback: () => {
            setScrollToSmooth();
            autoCurrentDestruct();
        },
    });
    setScrollToNone();
    currentPopup.show();
    displayZhcnString();

    let designatedElementClass_ = designatedElementClass || [];
    for (let i = 0; i < designatedElementClass_.length; i++) {
        setElementDisplay(designatedElementClass_[i], "block");
    }
}