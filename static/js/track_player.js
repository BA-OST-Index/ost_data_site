// https://bobbyhadz.com/blog/get-youtube-id-from-url-using-javascript
function getYoutubeIDfromURL(url) {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  }
  console.log('The supplied URL is not a valid youtube URL');
  return '';
}

// ref: https://stackoverflow.com/questions/39334400/how-to-split-url-to-get-url-path-in-javascript
// also getYouTubeIDfromURL (defined above)
function getBilibiliIDfromURL(url) {
    const a_element = document.createElement("a");
    a_element.href = url;
    return a_element.pathname.split("/")[2];
}

var resize_all_players = function() {
    var width = document.body.clientWidth;
    var resize_player = function (player, width, height) {
        player.style.width = width + "px";
        player.style.height = height + "px";
    }
    var all_players = document.getElementsByClassName("track-video-player");
    var actual_width, actual_height;

    /* stupid infobox copied from Wikipedia */
    if (width > 992) {
        actual_width = width * 0.4;
        actual_height = actual_width / 16 * 9;
    }
    else {
        /* the site itself, adaptive web */
        if (width > 960) {
            actual_width = width * 0.6;
            actual_height = actual_width / 16 * 9;
        }
        else {
            /* the site itself, adaptive web */
            if (width > 480) {
                actual_width = width - 50 * 2;
                actual_height = actual_width / 16 * 9;
            }
            /* the site itself, adaptive web */
            else {
                actual_width = width - 15 * 2;
                actual_height = actual_width / 16 * 9;
            }
        }
    }

    for (let i = 0; i < all_players.length; i++) {
        resize_player(all_players[i], actual_width, actual_height);
    }
}

function play_video(video_url, element_id) {
    document.getElementById(element_id).style.display = "none";
    var container = document.getElementById(element_id + "-container");
    var video_id;
    if (video_url.includes("youtu")) {
        video_id = getYoutubeIDfromURL(video_url);
        container.innerHTML = "<iframe src=\"https://www.youtube-nocookie.com/embed/" + video_id + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen class=\"track-video-player\"></iframe>";
    }
    else {
        if (video_url.includes("bilibili")) {
            video_id = getBilibiliIDfromURL(video_url);
            let video_page_id = getParameterByName("p", video_url);
            if (video_page_id === null) {video_page_id = "1";}
            container.innerHTML = "<iframe src=\"https://player.bilibili.com/player.html?bvid=" + video_id + "&p=" + video_page_id + "\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" class=\"track-video-player\"> </iframe>";
        }
    }
    resize_all_players();
}

window.onresize = resize_all_players;
addEventListener('load', function() {resize_all_players();})