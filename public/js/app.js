const weatherForm =  document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message_1')
const messageTwo = document.querySelector('#message_2')

messageOne.textContent = 'Loading...'
messageTwo.textContent = ''

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            }else{
                console.log(data.location)
                console.log(data.forecast)
                messageOne.textContent = 'Location: ' + data.location
                messageTwo.textContent = 'Forecast: ' + data.forecast
            }
        })
    })
    
})