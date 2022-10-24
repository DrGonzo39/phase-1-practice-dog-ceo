
document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(data => {
            data.message.forEach((element) => {
                let dogImage = document.createElement('img')
                dogImage.src = element
                let div = document.querySelector('div')
                div.appendChild(dogImage)
            })
        })
})

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data => {
            for (const key in data.message) {
                let li = document.createElement('li')
                li.textContent = key
                let ul = document.getElementById('dog-breeds')
                ul.appendChild(li)
                li.addEventListener('click', (event) => {
                    event.target.style.color = 'green';
                })
                let dropDown = document.querySelectorAll('option')
                dropDown.addEventListener('click', (event) => {
                console.log(event.target.value)
                
            })
        }   
    })
})

