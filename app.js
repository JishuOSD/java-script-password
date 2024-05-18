let bom1 = document.querySelector('.bom1')
let bom2 = document.querySelector('.bom2')
let Rox = document.querySelector('.Rox')

bom1.addEventListener('click',()=>{
    // alert('test')
    Rox.type = "text"
    bom1.style.display = "none"
    bom2.style.display = "block"
})



bom2.addEventListener('click',()=>{
    // alert('test')
    Rox.type = "password"
    bom2.style.display = "none"
    bom1.style.display = "block"
})