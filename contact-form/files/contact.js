const submit = document.querySelector('#submit')
const name = document.querySelector('#name-input')
const phone = document.querySelector('#phone-input')
const email = document.querySelector('#email-input')
const message = document.querySelector('#message-input')

submit.onclick = () => {
    axios.post('_YOUR_URL_HERE_', {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    },
    {
        headers: {
            ContentType: 'application/json'
        }
    })
    .then(res => {
        document.getElementById("success").style.display = "block";
        document.getElementById("fail").style.display = "none";
    })
    .catch(err => {
        document.getElementById("fail").style.display = "block";
        document.getElementById("success").style.display = "none";
    })
}