document.addEventListener('scroll', (event) => {
    let buttons = document.querySelectorAll('a#sectionButton')
    let vh = visualViewport.height*0.5 //Testando pra sincronizar o scroll perfeitamente
    let scroll = window.scrollY

    function resetStyle(){
        buttons.forEach( b => {
            b.style = 'text-decoration: none'
        })
    }

    for (let i = 0; i < buttons.length; i++) {
        if(scroll > i*vh && scroll < (i+1)*vh){
            resetStyle()
            buttons[i].style = 'text-decoration: underline;'
        }
    }
})