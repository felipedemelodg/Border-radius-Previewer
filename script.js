let botao = document.getElementById('botao')
let css = document.getElementById('css')
let radius = ['10px', '10px', '10px', '10px']
let topLeft = document.getElementById('top-left')
topLeft.style.backgroundColor = 'green'
let largura = botao.clientWidth
console.log(largura)

botao.style.borderTopLeftRadius = radius[0]
botao.style.borderTopRightRadius = radius[1]
botao.style.borderBottomLeftRadius = radius[2]
botao.style.borderBottomRightRadius = radius[3]

css.innerText = [
    botao.style.borderTopLeftRadius,
    botao.style.borderTopRightRadius,
    botao.style.borderBottomLeftRadius,
    botao.style.borderBottomRightRadius
]
let cont = 0
window.addEventListener('mouseover', function (e) {
    topLeft.style.left = `${cont = cont + 10}px`
   
})
