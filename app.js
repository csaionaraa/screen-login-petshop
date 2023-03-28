const input = document.querySelectorAll(".input-field");

inputs.forEach(inp => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () =>{
        if (inp.vlaue !="") return;
        inp.classList.remove("active");
    })
});