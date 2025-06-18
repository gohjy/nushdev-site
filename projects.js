try {
    const data = await fetch("./projects/data/projects.json");
    const jsonData = await data.json();

    const projectGrid = document.querySelector(".project-grid");

    for (let project of jsonData) {
        const projDiv = document.createElement("div");
        projDiv.classList.add("project-card");

        const projName = document.createElement("h2");
        projName.textContent = project.name || "[Unnamed project]";
        projDiv.append(projName);

        const projMetadata = document.createElement("span");
        projMetadata.classList.add("proj-metadata");
        if (project.state) {
            const statusBadge = document.createElement("span");
            statusBadge.classList.add("state-label", `sl-${project.state.toLowerCase()}`);
            statusBadge.textContent = project.state;
            projMetadata.append(statusBadge);

            projDiv.dataset.projState = project.state;
        }
        if (projMetadata.children.length) projDiv.append(projMetadata);

        const projBlurb = document.createElement("p");
        projBlurb.textContent = project.blurb || "[No description]";

        projDiv.append(projBlurb);

        if (project.projectPage) {
            const projPageDirect = document.createElement("p");
            const projPageLink = document.createElement("a");
            projPageLink.href = project.projectPage;
            projPageLink.textContent = `${project.name} project site`;
            projPageDirect.append(projPageLink);
            projPageDirect.classList.add("italic");
            projDiv.append(projPageDirect);  
        }

        if (project.urls?.length > 0) {
            const projUrlsHolder = document.createElement("p");
            for (let url of project.urls) {
                const urlHolder = document.createElement("span");
                const urlIcon = document.createElement("span");
                urlIcon.classList.add("proj-url-icon", `url-icon-${url.type || "generic"}`);
                const urlLink = document.createElement("a");
                url.url ? urlLink.href = urlLink.textContent = url.url : void(0);
                urlLink.target = "_blank";

                urlHolder.append(urlIcon, urlLink);
                projUrlsHolder.append(urlHolder);
            }
            projDiv.append(projUrlsHolder);
        }

        projectGrid.append(projDiv);
    }

} catch {
    alert("Something went wrong. Check your network connection or reload.");
}

const fpsCheckboxes = [
    document.querySelector("#fps-pilot"),
    document.querySelector("#fps-developing"),
    document.querySelector("#fps-completed"),
    document.querySelector("#fps-retired")
];

const fpsEventHandler = () => {
    const projects = Array.from(document.querySelectorAll(".project-grid > .project-card"));
    const acceptState = [];
    for (let chk of fpsCheckboxes) {
        if (chk.checked) acceptState.push(chk.value);
    }
    for (let projCard of projects) {
        projCard.classList.toggle("fps-invis", !acceptState.includes(projCard.dataset.projState));
    }
}

for (let chk of fpsCheckboxes) chk.addEventListener("change", fpsEventHandler);