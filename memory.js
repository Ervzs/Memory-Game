const cardContainer = document.getElementById("cardContainer")
const startGame = document.getElementById("startGame")
const memoryGameData = [
    {id: "apple", image:"img/apple.jpg"},
    {id: "banana", image:"img/banana.jpg"},
    {id: "orange", image:"img/orange.jpg"},
    {id: "grape", image:"img/grape.jpg"},
    {id: "mango", image:"img/mango.jpg"},
    {id: "coconut", image:"img/coconut.jpg"},
    {id: "pineapple", image:"img/pineapple.jpg"},
    {id: "kiwi", image:"img/kiwi.jpg"},
    {id: "blueberry", image:"img/blueberry.jpg"},
    {id: "strawberry", image:"img/strawberry.jpg"},
]

startGame.addEventListener("click", () => displayCards())

function displayCards(){
    const allData = [...memoryGameData, ...memoryGameData];
    allData.forEach((data) => {
        const cards = document.createElement("div")
        cards.classList.add("card", "display")
        cards.innerHTML =  `<img src="${data.image}">`
        cardContainer.appendChild(cards)
    }) 
}

function revealCard(){

}