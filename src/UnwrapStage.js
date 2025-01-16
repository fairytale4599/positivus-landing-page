export default function WrapUnwrap(event) {
    const stage = event.currentTarget.closest(".posit-main-workproc-sec-stage");

    if (!stage) return;

    const isWrapped = stage.style.height === "330px";

    stage.style.transition = "none";
    void stage.offsetHeight;
    stage.style.transition = "height 0.5s ease-in-out";

    stage.style.height = isWrapped ? "150px" : "330px";
}
