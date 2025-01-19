export default function WrapUnwrapHeader(event) {
    const header = document.getElementById("main-header");
    const headerNav = document.getElementById("main-header-nav");

    if (!header || !headerNav) return;

    const computedStyle = window.getComputedStyle(header);
    const isWrapped = computedStyle.height === "66px";

    headerNav.style.transition = "all 2s ease-in-out";
    header.style.transition = "all 0.5s ease-in-out";

    if (isWrapped) {
        header.style.height = "450px";
        headerNav.style.opacity = 1;
        headerNav.style.display = "block";
    } else {
        headerNav.style.display = "none";
        header.style.height = "66px";
        headerNav.style.opacity = 0;
    }
}
