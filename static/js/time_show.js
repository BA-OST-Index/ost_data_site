function addLeadingContent(obj, max_length, content) {
    return obj.toString().padStart(2, content)
}

function calculateTimeDifferenceFromNow(designatedTimestamp) {
    // the variable should be in ms
    const now = new Date();
    const difference = now.getTime() - designatedTimestamp;

    const milliseconds = difference % 1000;
    const seconds = Math.floor(((difference - milliseconds) / 1000) % 60);
    const minutes = Math.floor((difference - seconds * 1000) / 60000 % 60);
    const hours = Math.floor((difference - minutes * 60000) / 3600000 % 24);
    const days = Math.floor((difference - hours * 3600000) / 86400000);

    return {
        milliseconds: milliseconds,
        seconds: addLeadingContent(seconds, 2, "0"),
        minutes: addLeadingContent(minutes, 2, "0"),
        hours: addLeadingContent(hours, 2, "0"),
        days: days
    }
}

function setInnerHtmlContentById(elementId, html) {
    const element = document.getElementById(elementId);
    element.innerHTML = html;
}

function showProjectTime() {
    // first time when the parser is created
    const designatedTimestamp = 1686061916000;
    const result = calculateTimeDifferenceFromNow(designatedTimestamp);

    setInnerHtmlContentById("project-time-day", result.days);
    setInnerHtmlContentById("project-time-hour", result.hours);
    setInnerHtmlContentById("project-time-minute", result.minutes);
    setInnerHtmlContentById("project-time-second", result.seconds);
}

function showTimestampInLocalTime(timestamp) {
    // by Google Bard
    const utcTimestamp = timestamp;

    const localDate = new Date(utcTimestamp * 1000);
    const formattedLocalDate = localDate.getFullYear() + '-' + (localDate.getMonth() + 1).toString().padStart(2, '0') + '-' + localDate.getDate().toString().padStart(2, '0');
    const formattedLocalTime = localDate.getHours().toString().padStart(2, '0') + ':' + localDate.getMinutes().toString().padStart(2, '0') + ':' + localDate.getSeconds().toString().padStart(2, '0');

    const formattedLocalDatetime = formattedLocalDate + ' ' + formattedLocalTime;

    return formattedLocalDatetime;
}