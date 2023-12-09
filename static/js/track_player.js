function calulateEmbeddedVideoPlayerSize() {
    const width = document.body.clientWidth;
    let actualWidth, actualHeight;

    /* stupid infobox copied from Wikipedia */
    if (width > 992) {
        actualWidth = width * 0.4;
        actualHeight = actualWidth / 16 * 9;
    }
    else {
        /* the site itself, adaptive web */
        if (width > 960) {
            actualWidth = width * 0.6;
            actualHeight = actualWidth / 16 * 9;
        }
        else {
            /* the site itself, adaptive web */
            if (width > 480) {
                actualWidth = width - 50 * 2;
                actualHeight = actualWidth / 16 * 9;
            }
            /* the site itself, adaptive web */
            else {
                actualWidth = width - 15 * 2;
                actualHeight = actualWidth / 16 * 9;
            }
        }
    }

    return {
        width: actualWidth,
        height: actualHeight
    }
}

function resizeSinglePlayer(player, width, height) {
    player.style.width = width + "px";
    player.style.height = height + "px";
}

function resizeAllEmbeddedPlayers() {
    var allEmbeddedPlayers = document.getElementsByClassName("track-video-player");
    var actualSize = calulateEmbeddedVideoPlayerSize();

    for (let i = 0; i < allEmbeddedPlayers.length; i++) {
        resizeSinglePlayer(allEmbeddedPlayers[i], actualSize.width, actualSize.height);
    }
}

function playEmbeddedVideo(videoUrl, elementId) {
    // hide the description first
    // document.getElementById(element_id).style.display = "none";
    // but maybe it's unnecessary. 2023/12/09

    const container = document.getElementById(elementId + "-container");
    let videoID;

    // 如果已经有视频在播放了，那就不另外加载
    if (container.innerHTML !== "") {return;}

    if (videoUrl.includes("youtu")) {
        videoID = videoUrlExtractor.youtube(videoUrl).videoId;
        container.innerHTML = embeddedVideoPlayerIframeConstructor.youtube(videoID, 0);
    }
    else {
        if (videoUrl.includes("bilibili")) {
            const result = videoUrlExtractor.bilibili(videoUrl);
            videoID = result.videoId;
            const videoPageID = result.videoPartId;
            container.innerHTML = embeddedVideoPlayerIframeConstructor.bilibili(videoID, videoPageID, 0)
        }
    }

    resizeAllEmbeddedPlayers();
}

addEventListener('load', function() {resizeAllEmbeddedPlayers();})
addEventListener('resize', function () {resizeAllEmbeddedPlayers();})