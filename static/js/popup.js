var current_popup = void 0;

function removePopup(popup) {
    popup.hide();
    current_popup.popupEl.remove();
}

function showPopupByTooltipId(tooltip_id) {
    if (current_popup !== void 0) {
        removePopup(current_popup);
    }

    current_popup = new Popup({"title": "  ",
        "content": tooltip_data[tooltip_id],
        hideCallback: () => {
            document.getElementsByTagName("html")[0].style = "scroll-behavior: smooth;";
        },
    });
    document.getElementsByTagName("html")[0].style = "";
    current_popup.show();
}