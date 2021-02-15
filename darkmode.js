const darkMode = () => {
    const htmlTag = document.getElementsByTagName("html")[0]
    if (htmlTag.hasAttribute("data-theme")) {
        htmlTag.removeAttribute("data-theme");
        return;
    }
    htmlTag.setAttribute("data-theme", "dark")
}

let switchDarkMode = document.querySelector('.form-switch');

switchDarkMode.onclick = darkMode;