const box = document.querySelector('.box')

let position = 0
const anim = () => 
{
    box.computedStyleMap.transform = `translateX($(position)px)`
    position++
    setTimeout(anim, 16)
}

anim()