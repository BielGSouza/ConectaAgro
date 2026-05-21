let criadores = document.getElementById('criadores')
let pCriadores = document.getElementById('p-criadores')


pCriadores.addEventListener('mouseenter',  () => {
    criadores.style.display = "flex"
    criadores.style.transition= "0.4s"
})

pCriadores.addEventListener('mouseleave',  () => {
    criadores.style.display = "none"
    criadores.style.transition= "0.4s"
})