let topRight = document.getElementById('top-right')
let topLeft = document.getElementById('top-left')
let bottomRight = document.getElementById('bottom-right')
let bottomLeft = document.getElementById('bottom-left')
let caixa = document.getElementById('caixa')
let cssStyle = document.getElementById('css-style')
let copiar = document.getElementById('copiar')

caixa.addEventListener('input', controleRadius, false)
copiar.addEventListener('click', selectText)

function selectText() {
    navigator.clipboard.writeText(cssStyle.innerText)
}

function controleRadius() {
  caixa.style.borderTopRightRadius = `${topRight.value}px`
  caixa.style.borderTopLeftRadius = `${topLeft.value}px`
  caixa.style.borderBottomRightRadius = `${bottomRight.value}px`
  caixa.style.borderBottomLeftRadius = `${bottomLeft.value}px`



  let radius = {
    'border-top-right-radius': caixa.style.borderTopRightRadius,
    'border-top-left-radius': caixa.style.borderTopLeftRadius,
    'border-bottom-right-radius': caixa.style.borderBottomRightRadius,
    'border-bottom-left-radius': caixa.style.borderBottomLeftRadius
  }

  cssStyle.innerText = [
    `
  ${Object.keys(radius)[0]}: ${Object.values(radius)[0]}
  ${Object.keys(radius)[1]}: ${Object.values(radius)[1]}
  ${Object.keys(radius)[2]}: ${Object.values(radius)[2]}
  ${Object.keys(radius)[3]}: ${Object.values(radius)[3]}
  `
  ]
}