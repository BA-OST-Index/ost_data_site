var cnSitePopup = void 0;

function showCnPopup() {
    setScrollToNone();

    if (cnSitePopup !== void 0) {
        removePopup(cnSitePopup);
    }

    cnSitePopup = new Popup({
        "title": "  ",
        "content": "<h2>您似乎正在从中国大陆地区访问本网站</h2>" +
            "<p>本站使用了CloudFlare作为CDN提供商。然而，由于众所周知的原因，经由CloudFlare代理后的网站在中国大陆地区访问速度不佳。</p>" +
            "<p>因此为了提升用户体验，我们现提供通过Amazon CloudFront加速后的站点。</p>" +
            "<big><p>加速站(仅限中国大陆地区访问)：<a href=\"https://ba-aws.cnfast.top/\">https://ba-aws.cnfast.top/</a></p></big>" +
            "<h2>You seem to be accessing from China Mainland</h2>" +
            "<p>This site is using CloudFront as the CDN provider. However, due to specific reasons, websites proxied by CloudFlare have poor connectivity in China Mainland.</p>" +
            "<p>In order to improve user experience, we now provide the CloudFront-optimazed site as an alternative.</p>" +
            "<big><p>Optimazed Site (China Mainland access only): <a href=\"https://ba-aws.cnfast.top/\">https://ba-aws.cnfast.top/</a></p></big>" +
            "<button onclick='closeCnPopup()'>Close (3 days)<br />关闭本窗口(3天内不显示)</button>",
        allowClose: false
    });
    console.log(cnSitePopup);

    cnSitePopup.show();
}

function closeCnPopup() {
    localStorage.setItem("cn_site_last_show", String(Date.now()));
    setScrollToSmooth();
    removePopup(cnSitePopup);
}

async function checkCnIP() {
    // 检查站点域名
    // 如果是加速站就直接返回
    if (window.location.hostname === "ba-aws.cnfast.top") {
        return;
    }

    // 检查IP
    let getIP = async function () {
      return new Promise((resolve, reject) => {
        $.getJSON("https://api.myip.la/en?json", function (data) {
          const currIP = data["location"]["country_code"];
          resolve(currIP);
        }).fail((error) => {
          reject(error);
        });
      });
    }
    let currIP;
    currIP = await getIP();
    if (currIP !== "CN") {
        return;
    }

    // 检查localStorage
    let lastShowTime = localStorage.getItem("cn_site_last_show");
    if (lastShowTime === null) {
        // 第一次访问？那就直接显示吧（
        showCnPopup();
    } else {
        // 否则检查时间，目前是三天
        if (Date.now() - Number(lastShowTime) >= 2.592e+8) {
            showCnPopup();
        }
    }
}