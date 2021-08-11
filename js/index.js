const loaderComponent = document.getElementById("loader-component")
const loadBtn = document.getElementById('load-btn')

loadBtn.addEventListener("click", () => {
    if (loaderComponent.classList.contains("loading")) {
        loaderComponent.classList.remove("loading")
        loadBtn.innerHTML = "Start Loading"
    } else {
        loaderComponent.classList.add("loading")
        loadBtn.innerHTML = "Stop Loading"
    }
    
})