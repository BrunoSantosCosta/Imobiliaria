const  menuItens = document.querySelectorAll ('.nav a')

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnclick)
})
function scrollToIdOnclick(event){
    event.preventDefault();
    const element = event.target
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop

    window.scroll({
        top: to,
        behavior: "smooth",
    })
}
