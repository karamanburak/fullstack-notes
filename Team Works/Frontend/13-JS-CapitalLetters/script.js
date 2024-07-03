//& Selectors 

const textArea = document.getElementById("textArea")
const convert = document.getElementById("btn")

//& Event Listener

convert.addEventListener("click", () => {
    // console.log(typeof textArea); // object
    // console.log(typeof textArea.value); // string

    document.getElementById("result").textContent = textArea.value.split(" ").map((word) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
        // return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(" ")
})

