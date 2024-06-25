const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

function openSidebar() {
    if (sidebar.classList.contains("close")) {
        sidebar.classList.remove("close");
    }
}

sidebar.addEventListener("mouseenter", openSidebar);

sidebar.addEventListener("mouseleave", function() {
    if (!sidebar.classList.contains("close")) {
        sidebar.classList.add("close");
    }
});

toggle.addEventListener("click", function() {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", function() {
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", function() {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";
    }
});
