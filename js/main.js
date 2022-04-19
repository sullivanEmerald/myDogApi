const url = ("https://dog.ceo/api/breeds/list/all")

const select =  document.querySelector('.breeds')

fetch(url)
.then(res => res.json())
.then(data => {

    if(data.status === 'success'){
        
        const breedArray = data.message
        const breedObject = Object.keys(breedArray)

        for(let i = 0; i < breedObject.length; i++){
            const option = document.createElement('option')
            option.value = breedObject[i]
            option.innerHTML = breedObject[i]
            select.appendChild(option)

        }

    }

   
})

select.addEventListener('change' , event => {
    const url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    doggoImg(url)
})

const img =  document.querySelector('.dog-img')

const doggoImg = url => {
    fetch(url)
    .then(res => {
        return  res.json()
    })
    .then(data => {
        img.src = data.message
    })
}







