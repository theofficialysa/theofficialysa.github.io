const scriptURL = 'https://script.google.com/macros/s/AKfycbzZS1B3gZrLdvvBujBdSzG8I696Ip3xdERG1Dx15L3DABd1Yx2gIj9HiOGhFtMF_9cA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML = "Thank you for signing up!"
    setTimeout(function(){
        msg.innerHTML = ""
    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})