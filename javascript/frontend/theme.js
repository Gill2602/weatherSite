const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    
    document.body.dataset.bsTheme = "dark";
} else {
    document.body.dataset.bsTheme = "light";
}
