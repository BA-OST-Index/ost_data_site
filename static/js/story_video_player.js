const videoUrlExtractor = {
    "youtube": function (url) {
        // Regular expression to match various YouTube URL formats with video ID and timestamp parameters
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/(?:[^\/\n\s]+\/)?\S*?[?&]v=))([a-zA-Z0-9_-]{11})(?:.*?[?&]t=([0-9hms]+))?/;

        // Match the URL against the regular expression
        const match = url.match(youtubeRegex);

        if (match) {
            const videoId = match[1];
            const timestamp = match[2] || null;

            return {videoId: videoId, videoTimestamp: timestamp};
        }
    },
    "bilibili": function (url) {
        var bvid = null;
        var videoPartId;
        var videoTimestamp;

        // 主站链接直接传入
        if (url.includes("www.bilibili.com")) {
            // Extract BV ID
            const bvidMatch = url.match(/\/video\/([A-Za-z0-9]+)(\/|\?|$)/);
            bvid = bvidMatch ? bvidMatch[1] : null;
        }
        // player.bilibili.com 即 embedded 版
        if (url.includes("player.bilibili.com")) {
            // Extract BV ID
            const bvidMatch = url.match(/[/&?]bvid=([A-Za-z0-9]+)(?:&|$)/);
            bvid = bvidMatch ? bvidMatch[1] : null;
        }

        // Extract videoPartId, defaults to 1
        const urlParams = new URLSearchParams(new URL(url).search);
        const pParam = urlParams.get("p");
        videoPartId = pParam ? pParam : 1;

        // Extract videoTimeStamp, defaults to 0
        const tParam = urlParams.get("t");
        videoTimestamp = tParam ? parseInt(tParam, 10) : 0;

        return {
          url: url,
          videoId: bvid,
          videoPartId: videoPartId,
          videoTimestamp: videoTimestamp
        };
    }
}

const getEmbeddedVideoUrl = {
    "youtube": function(videoId, timestamp) {
        return "https://www.youtube-nocookie.com/embed/" + videoId + "?t=" + timestamp
    },
    "bilibili": function(bvid, part, timestamp) {
        return "https://player.bilibili.com/player.html?bvid=" + bvid + "&p=" + part + "&t=" + timestamp
    }
}

const embeddedVideoPlayerIframeConstructor = {
    "youtube": function (videoId, timestamp) {
        return '<iframe src="' + getEmbeddedVideoUrl.youtube(videoId, timestamp) +
            '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="track-video-player"></iframe>'
    },
    "bilibili": function (bvid, part, timestamp) {
        return '<iframe src="' + getEmbeddedVideoUrl.bilibili(bvid, part, timestamp) +
            '" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="track-video-player"></iframe>'
    }
}

function changeContainerHtmlContent(element, content) {
    element.innerHTML = content;
    resizeAllEmbeddedPlayers();
}

function changeStoryVideoContainerEmbeddedURL(element, url) {
    let htmlCode;
    let result, result_url;

    // check url, if it's the same then don't switch
    if (element.innerHTML != "" && element.children[0].src === url) {
        return;
    }

    // bilibili
    if (url.includes("bilibili")) {
        result = videoUrlExtractor.bilibili(url);
        result_url = getEmbeddedVideoUrl.bilibili(result.videoId, result.videoPartId, result.videoTimestamp);
        htmlCode = embeddedVideoPlayerIframeConstructor.bilibili(result.videoId, result.videoPartId, result.videoTimestamp);
    }
    // youtube
    else {
        if (url.includes("youtu")) {
            result = videoUrlExtractor.youtube(url);
            result_url = getEmbeddedVideoUrl.youtube(result.videoId, result.videoTimestamp);
            htmlCode = embeddedVideoPlayerIframeConstructor.youtube(result.videoId, result.videoTimestamp);
        }
        // others, like blue-archive.io
        else {
            window.open(url, "_blank");
        }
    }

    // check url, if it's the same then don't switch
    if (element.innerHTML !== "" && element.children[0].src === result_url) {return;}
    changeContainerHtmlContent(element, htmlCode);
}

function playEmbeddedStoryVideo(elementId, url) {
    const element = document.getElementById(elementId);

    changeStoryVideoContainerEmbeddedURL(element, url);
}

function calculateTooltipVideoContainerSize() {
    const width = document.getElementById("tooltip-width-detect").clientWidth;
    let actualWidth, actualHeight;

    actualWidth = width;
    actualHeight = width / 16 * 9;

    return {
        width: actualWidth,
        height: actualHeight
    }
}

function playEmbeddedStoryPartVideo(elementId, url) {
    const element = document.getElementById(elementId);
    changeStoryVideoContainerEmbeddedURL(element, url);

    const result = calculateTooltipVideoContainerSize();
    element.children[0].className = "tooltip-video-player"
    resizeSinglePlayer(element.children[0], result.width, result.height);
}

function resizeAllTooltipVideoPlayers() {
    var allEmbeddedPlayers = document.getElementsByClassName("tooltip-video-player");
    var actualSize = calculateTooltipVideoContainerSize();

    for (let i = 0; i < allEmbeddedPlayers.length; i++) {
        resizeSinglePlayer(allEmbeddedPlayers[i], actualSize.width, actualSize.height);
    }
}

addEventListener("resize", function () {resizeAllTooltipVideoPlayers()})
