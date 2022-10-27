
let url = "http://localhost:4000/json"
const input = document.getElementsByTagName("input")
const submit = document.querySelector("button")
const p = document.querySelector(".p-element")




input[0].addEventListener("change", updateValue)
input[1].addEventListener("change", updateValue)
input[2].addEventListener("change", updateValue)


function updateValue(e){
    submit.addEventListener("click", event => {
    event.preventDefault()
    console.log(e.target.value)
    getData()
})

}

let render = (data) => {
    if(input[0].value == data[0].name && input[1].value == data[0].quest && input[2].value == data[0].color){
        p.textContent = "Good Job"
    } else{
        p.textContent = "wrong"
    }
}
let getData = async () => {
    let res = await fetch(url)
    let data = await res.json()
    render(data)
}



