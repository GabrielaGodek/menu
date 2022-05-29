const menuItems = document.querySelectorAll('.menu-box')

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.firstElementChild.style.backgroundColor = '#6f8186'
        item.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.color = '#3a4257'
    })
})
menuItems.forEach(item => {
    item.addEventListener('mouseout', () => {
        item.firstElementChild.style.backgroundColor = '#363d51'
        item.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.color = '#f0ddbc'
    })
})


menuItems.forEach((item, i) => {
    setTimeout(() => {
        item.style.animation = 'moveElement 1.5s ease';
    }, i * 500)
})


