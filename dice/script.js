let output = document.querySelector('.output')
let input = document.getElementById('text')
let submit = document.getElementById('submit')

const pages = [
    {
        vape : 'obviously not'
    },

    {
        vape : 'its likely to be so'
    },

    {
        vape: 'you can put your hopes on it'
    },

    {
        vape : 'reply seems hazy'
    },

    {
        vape: 'do not count on it'
    },

    {
        vape: 'try again later'
    },

    {
        vape : 'Goodness! thats a hundred percent probability'
    },

    {
        vape: 'your stars are dim today'
    }
]

let random = Math.floor(Math.random() * pages.length)

submit.addEventListener('click', function (){
    if(input.value === ''){
        output.style.display = 'none'
        alert('you have to enter a question')
     }else{
        output.style.display = 'block'
     }
  
    setTimeout( function(){
   output.innerText = pages[random].vape
  },1000)


})