var button = document.querySelector('#prob_1_button_off');
button.addEventListener('click',onButtonClick);

function onButtonClick(event){
    if(button.id === "prob_1_button_on"){
        window.location.href = 'prob0214.html'
    } else {
        button.id = "prob_1_button_on"
        button.value = "Q2"
    }
}
