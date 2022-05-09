let input =document.querySelectorAll('input')
let btn = document.querySelector('button')
let none=document.querySelectorAll('.none') 
let number = [0,1,2,3,4,5,6,7,8,9]
let lettre = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','é','&']
btn.addEventListener('click',()=>{
    let p=0
    let d=0
    let m=0
    const block1=document.querySelector('.block1')
    const block2=document.querySelector('.block2')
    const block3=document.querySelector('.block3')
    const block4=document.querySelector('.block4')
        for (let i = 0; i < input[0].value.length; i++) {
            for (let i1 = 0; i1 < number.length; i1++) {
                if(input[0].value[i].includes(number[i1])){
                    p++
                }
            }
            if(p>0){
                none[0].className='block1'
            }
            else{
                if(block1){
                    block1.className='none'
                }
            }
        }
        for (let i = 0; i < input[1].value.length; i++) {
            for (let i1 = 0; i1 < number.length; i1++) {
                if(input[1].value[i].includes(number[i1])){
                    d++
                }
            }
            if(d>0){
                none[1].className='block2'
            }
            else{
                
                block2.className='none'
            }
        }
        for (let i = 0; i < input[4].value.length; i++) {
            for (let i1 = 0; i1 < lettre.length; i1++) {
                if(input[4].value[i].includes(lettre[i1])){
                    m++
                }
            }
            if(m>0){
                none[2].className='block3'
            }
            else{
                
                block3.className='none'
            }
        }
        if(input[5].value!=input[6].value){
            none[3].className='block4'
        }
        else{
            block4.className='none'
        }
        
    })
