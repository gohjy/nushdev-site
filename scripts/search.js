function installSearch({
    inputElem,
    content,
    callback = (el, input) => el.dataset?.value === input,
    inputOptions: {
        searchOnInput=true
    } = {
        searchOnInput:true
    }
}) {
    if (!inputElem || !content || !callback) throw new Error("Invalid parameters");
    inputElem.addEventListener(searchOnInput ? "input" : "change", () => {
        const searchTerm = inputElem.value;
        console.log(searchTerm);
        for (let elem of content.children) {
            elem.classList.toggle("search-invisible", !callback(elem, searchTerm));
        }
    });
    const customStyle = document.createElement("style");
    customStyle.textContent = ".search-invisible { display: none; }";
    document.body.append(customStyle);
}

installSearch({
    inputElem: document.querySelector("#searchbar"),
    content: document.querySelector(".search-grid"),
    callback: (el, input) => {
        input = input.trim();
        console.log(el.textContent);
        if (input === "") return true;
        let testRegex = new RegExp("\\b" + input.replace(/\s/, "\\s"), "i");
        return Array.from(el.querySelectorAll(":scope :is(h1,h2,h3,h4,h5,h6,.search-keyword,.search-tag)")).some(e=>e.textContent?.match(testRegex));
    },
    inputOptions: { searchOnInput: true }
});