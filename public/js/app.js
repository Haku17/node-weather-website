const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                messageOne.textContent = data.forecast
                messageTwo.textContent = `The temperature in ${data.location} is currently ${data.temperature}c. The high for the day is ${data.high}c and the low is ${data.low}c. There is a ${data.rainChance}% chance of ${data.precipType}.`
            }
        })
    })
})