const card = document.querySelectorAll('.card')




card.forEach(element => {
    element.addEventListener('click', (e) => {
        card.forEach(element => element.classList.remove('active'))
        
        e.target.classList.add('active')
    })
})