var currentTooltip = void 0;

function showTooltip(obj, content, params) {
    if (currentTooltip !== void 0) {
        currentTooltip.destroy();
    }

    currentTooltip = tippy(obj, Object.assign({}, {content: content}, params));
    currentTooltip.show();
    displayZhcnString();
}

function showTooltipById(obj, dataKeyname) {
    if (dataKeyname === void 0) {
        dataKeyname = obj.dataset.tooltip;
    }

    showTooltip(obj, tooltip_data[dataKeyname], {interactive: true, allowHTML: true, maxWidth: "40em", placement: "top"})
}

function showTooltipGallerySmall(obj) {

}