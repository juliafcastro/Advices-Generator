
const advicesP = document.getElementById('p-advice');
const diceBtn = document.getElementById('dice');
const adviceId = document.getElementById('advice-id');

diceBtn.addEventListener('click', () => {
    getAdvice();
    getId();
});


function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    })
    .then(adviceData => {
        const adviceObj = adviceData.slip;
        advicesP.innerText = `${adviceObj.advice}`
    }).catch(error => {
        console.log(error);
    });
}

function getId() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(idData => {
        const idObj = idData.slip.id;
        adviceId.innerText = 'ADVICE #' + idObj
    }).catch(error => {
        console.log(error);
    })
}