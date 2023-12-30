function allowedInThePub(age) {
    if (age >= 18) {
        console.log("Welcome to the pub");
        entryButton.style.backgroundColor = "green";
    } else { console.log("Call the police!");
    entryButton.style.backgroundColor = "red";
    }
}

const entryButton = document.querySelector("#pubEntry")
const userForm = document.querySelector("#userForm")

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let age = document.querySelector("#ladAge").value
    allowedInThePub(age)
})
