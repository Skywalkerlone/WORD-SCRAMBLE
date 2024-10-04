const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
refreshBtn = document.querySelector(".refresh-word");

const words = [
    {
        word:"snake",
        hint: "Benin girls"
    },

    {
        word:"darkness",
        hint: "blinding light"
    },  {
        word:"nymphomanic",
        hint: "out of control"
    },  {
        word:"jellyfish",
        hint: "immortality"
    },  {
        word:"",
        hint: "Benin girls"
    },  {
        word:"snake",
        hint: "Benin girls"
    },  {
        word:"snake",
        hint: "Benin girls"
    },  {
        word:"snake",
        hint: "Benin girls"
    },  {
        word:"snake",
        hint: "Benin girls"
    },  {
        word:"snake",
        hint: "Benin girls"
    },  {
        word:"snake",
        hint: "Benin girls"
    }
]

const initGame = () => {
   let randomObj = words[Math.floor(Math.random() * words.lenght)]; 
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor (Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] =  [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    console.log(randomObj);  
}
initGame();


refreshBtn.addEventListener("click", initGame);
