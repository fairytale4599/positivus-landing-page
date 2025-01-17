export default function WrapUnwrap(event) {
    const stage = event.currentTarget.closest(".posit-main-workproc-sec-stage");
    const stageName = event.currentTarget.closest(".posit-main-workproc-sec-stage-name");
    const stageButton = event.currentTarget.closest(".posit-main-workproc-sec-stage-container button");

    if (!stage || !stageName) return;

    const isWrapped = stage.style.height === "330px";

    stage.style.transition = "none";
    void stage.offsetHeight;
    stage.style.transition = "all 0.5s ease-in-out";
    stageName.style.transition = "all 0.5s ease-in-out";
    stageButton.style.transition = "all 0.5s ease-in-out";

    stage.style.height = isWrapped ? "150px" : "330px";
    stage.style.backgroundColor = isWrapped ? "var(--posit-white)" : "var(--posit-green)";
    stageName.style.borderBottom = isWrapped ? "0" : "1px solid black"
    stageButton.style.backgroundColor = isWrapped ? "var(--posit-white)" : "var(--posit-green)";
}

//