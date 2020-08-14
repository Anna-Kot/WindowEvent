
window.addEventListener('scroll', function() {
    if( window.scrollY>=160 && window.scrollY<=window.innerHeight) {
        document.querySelector('.down').style.fontSize = window.scrollY/8 +'px'
    }
    if( window.scrollY>1.5*window.innerHeight) {
        document.querySelector('.up').style.fontSize = (42-(parseInt(window.scrollY/100)))-5 +'px'
    }
    if (window.scrollY<=1.5*window.innerHeight) {
        document.querySelector('.up').style.fontSize = 35 +'px'
    }
    if(window.scrollY>=300 && window.scrollY<=window.innerHeight) {
        document.querySelector('.center_text').style.width = window.scrollY/3 + '%'
        document.querySelector('.center_text').style.left = window.scrollY/60 +'%'
    }
    if (window.scrollY>=0.8*window.innerHeight) {
        document.getElementById('photo_i').style.marginRight = window.scrollY/20+'px'
    }
})
console.log(window.scrollY)
document.querySelector('.down').addEventListener('click', () => {
    window.scroll ({
        top: window.innerHeight,
        behavior: 'smooth'
    })
})
document.querySelector('.up').addEventListener('click', () => {
    window.scroll ({
        top: -2*window.innerHeight,
        behavior: 'smooth'
    })
})








