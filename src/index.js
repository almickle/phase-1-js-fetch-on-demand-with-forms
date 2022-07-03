
const init = () => {
    let form = document.getElementById("form")
    form.addEventListener("submit", e => {
        let textInput = e.target.searchByID.value
        e.preventDefault()
        console.log("Text Input:", textInput)
        form.reset()
        fetchData(textInput)
    })
}

document.addEventListener('DOMContentLoaded', init);

function fetchData(input) {
    return fetch("http://127.0.0.1:5500/db.json")
          .then(resp => resp.json())
          .then (data => processData(data, input))
}

function processData(data, input) {
    console.log("Data:", data.movies[input-1])
    document.getElementById("title").textContent = data.movies[input-1].title
    document.getElementById("summary").textContent = data.movies[input-1].summary
}