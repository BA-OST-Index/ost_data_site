var currentTooltip = void 0;
const tooltipData = {
    locateData: function (key) {
        if (tooltip_data_story.hasOwnProperty(key)) {return [tooltip_data_story, "story"]}
        if (tooltip_data_album.hasOwnProperty(key)) {return [tooltip_data_album, "album"];}
        if (tooltip_data_background.hasOwnProperty(key)) {return [tooltip_data_background, "background"];}
        if (tooltip_data_character.hasOwnProperty(key)) {return [tooltip_data_character, "character"];}
        if (tooltip_data_track.hasOwnProperty(key)) {return [tooltip_data_track, "track"];}
        if (tooltipData.hasOwnProperty(key)) {return [tooltipData, "tooltipData"]}
        return [{}, "not_found"];
    },
    getData: function (key) {
        const result = this.locateData(key)[0][key];
        if (typeof result === "string") {
            return result;
        }
        else {
            return tooltipHtmlGenerator[result["type"]](result);
        }
    }
}
const tooltipHtmlGenerator = {
    "bg_direct": function (arg) {
        const data = arg["data"];
        const langcode = getCurrentLangcode(window.href);
        var result = "";

        // title
        if (langcode === "zh_cn") {
            result += '<p class="tooltip-title">出现该人物的所有背景：</p>';
        }
        else {
            result += '<p class="tooltip-title">All backgrounds featuring this character:</p>';
        }

        result += '<div class="gallery bg-char-gallery">';
        for (let i = 0; i < data.length; i++) {
            let current = data[i];
            result += '<div class="gallery-img">';
            result += '<img class="lazyload" data-src="' + current[0] + '">';
            result += '<p class="gallery-caption"><a href="/' + langcode + '/background/' + current[1] + '.html" target="_blank">' + current[1] + '</a></p>';
            result += '</div>';
        }
        result += "</div>";
        return result;
    }
}

function showTooltip(obj, content, params, designatedElementClass) {
    if (currentTooltip !== void 0) {
        currentTooltip.destroy();
    }

    currentTooltip = tippy(obj, Object.assign({}, {content: content}, params));
    currentTooltip.show();
    displayZhcnString();
    for (let i = 0; i < designatedElementClass.length; i++) {
        setElementDisplay(designatedElementClass[i], "block");
    }
}

function showTooltipById(obj, dataKeyname, designatedElementClass) {
    if (dataKeyname === void 0 || dataKeyname === "undefined") {
        dataKeyname = obj.dataset.tooltip;
    }

    showTooltip(obj, tooltipData.getData(dataKeyname),
        {interactive: true, allowHTML: true, maxWidth: "40em", placement: "top"},
        designatedElementClass)
}

function showTooltipGallerySmall(obj) {

}