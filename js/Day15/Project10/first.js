const form = document.querySelector("form");

const answer = {
    q1: "Hyper Text Markup Language",
    q2: "color",
    q3: "<a>",
    q4: "background-color",
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;

    for (let [name, value] of data.entries()) {
        if(answer[name] === value) {
            finalScore++;
        }
    }
    document.getElementById("out").textContent = `Your score is ${finalScore} out of 4`

    form.reset();
})