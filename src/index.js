console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch('imgUrl')
  .then(function(response){
    console.log (response)
  })

.then(function(data) {
    console.log(data)
});
