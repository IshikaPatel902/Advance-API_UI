document.addEventListener("DOMContentLoaded", function () {
    openTab(event, "tab1"); // Show the first tab by default
});

function openTab(event, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}
