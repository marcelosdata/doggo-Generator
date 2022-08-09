
const BREED_DOGS = 'https://dog.ceo/api/breeds/list/all'

const select  = document.querySelector('.breeds')

fetch(BREED_DOGS)
  .then(res => res.json())
  .then(data => {
    const breedObject = data.message // turn the message into an object
    const breedsArray = Object.keys(breedObject) //turn the object into an array
    //console.log(breedsArray)
    
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option')
      option.value = breedsArray[i]
      option.innerText = breedsArray[i]
      select.appendChild(option)
    }
    
  })