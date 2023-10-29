var currentTooltip = void 0;

function showTooltip(obj, data_key) {
    if (currentTooltip !== void 0) {
        currentTooltip.destroy();
    }

    if (data_key === void 0) {
        data_key = obj.dataset.tooltip;
    }

    currentTooltip = tippy(obj, {content: tooltip_data[data_key], interactive: true, allowHTML: true, maxWidth: "40em", placement: "top"});
    currentTooltip.show();
    display_zhcn_element();
}

function showTooltipGallerySmall(obj) {

}