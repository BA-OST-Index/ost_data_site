function setDefaultStoryViewMode() {
    const selected_option = document.getElementById("story-view-mode-switcher").value;
    localStorage.setItem("story_view_mode", selected_option.toString());
}

function setStoryViewModeSwitchStatus() {
    if (localStorage.getItem("story_view_mode") === null) {
        setDefaultStoryViewMode();
    }

    document.getElementById("story-view-mode-switcher").value = localStorage.getItem("story_view_mode");

    showStoryByViewMode();
}

function setStoryViewMode(option_element) {
    const selected_option = option_element.value;
    localStorage.setItem("story_view_mode", selected_option.toString());

    showStoryByViewMode();
}

function showStoryByViewMode() {
    let preference = localStorage.getItem("story_view_mode");
    if (preference === null) {
        setDefaultStoryViewMode();
        preference = localStorage.getItem("story_view_mode");
    }

    let storySegs = document.getElementsByClassName("story-segment-data");
    for (let i = 0; i < storySegs.length; i++) {
        const curr = storySegs[i];
        if (preference === "all") {
            curr.style.display = "block";
        }
        else {
            curr.style.display = "none";
        }
    }
}