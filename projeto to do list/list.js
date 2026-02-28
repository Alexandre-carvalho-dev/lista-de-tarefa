
const input=document.querySelector('#input')
const add=document.querySelector('#add')
const ul1=document.querySelector('#pendentes')

const ul2=document.querySelector('#concluidas')
const div=document.querySelector('#divB')

function realizacao(){
const item=ul1.querySelectorAll('li').length
        const btapagartudo=div.querySelector('.btAT')
        const sms=div.querySelector('.sms')
        console.log(item)
      if(item>=2 && !btapagartudo){
            const bt2=document.createElement('button')
            bt2.classList.add('btAT')
            bt2.textContent='apagar tudo'
            div.appendChild(bt2)
            if(sms){
            sms.remove()
        }
        }
        
        else{
            if(item===1){
                if(btapagartudo){ btapagartudo.remove()}
                if(sms){
                    sms.remove()
                }

            }
            if(item===0){
        if(!sms){
            const p=document.createElement('p')
            p.textContent='nenhum pendente'
            p.classList.add('sms')
            p.style.color='green'
            div.appendChild(p)
            if(btapagartudo){
            btapagartudo.remove()
          }
        }
        }}
       
}
add.addEventListener('click',()=>{
    
    if(input.value==""){
        alert('vazio')
    }
    else{
        const li=document.createElement('li')
        const p=document.createElement('p')
        const bt1=document.createElement('button')
        const bt2=document.createElement('button')
        const bt3=document.createElement('button')
        
        p.textContent=input.value
        bt1.textContent='✔'
        bt2.textContent='🗑️'
        bt3.textContent=' ✏ '
        bt3.title='editar'
        bt2.title='apagar'
        bt1.title='confirmar'
        bt2.classList.add('bt2')
        bt1.classList.add('bt1')
        bt3.classList.add('bt3')
        li.appendChild(p)
        li.appendChild(bt1)
        li.appendChild(bt2)
        li.appendChild(bt3)
        ul1.appendChild(li)

        input.value=""
      realizacao()
 
    }
  
})


ul1.addEventListener('click',(e)=>{
if(e.target.classList.contains('bt2')){
    const li=e.target.closest('li')
    li.remove()
    realizacao()
}

if(e.target.classList.contains('bt1')){
 const li=   e.target.closest('li')
 ul2.appendChild(li)
 realizacao()
 
 e.target.textContent='↩'
e.target.classList.add('btE')
e.target.title='voltar'
const bt=li.querySelector('.bt3')
if(bt){
    bt.classList.remove('bt3')
    bt.classList.add('bt33')
}

}
if(e.target.classList.contains('bt3')){
    const input=document.createElement('input')
    input.type='text'
    const li= e.target.closest('li')
   const p=li.querySelector('p')
   
   input.value=p.textContent
   input.classList.add('input2')
   li.replaceChild(input, p)

function salvar(){
    p.textContent=input.value||p.textContent
    li.replaceChild(p,input)
}
input.addEventListener('keydown', (e)=>{
    if(e.key==='Enter') salvar()
}
)
input.addEventListener('blur', salvar)
}
})
div.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btAT')){
        ul1.innerHTML=''
        realizacao()
    }
})

ul2.addEventListener('click',(e)=>{
    if(e.target.classList.contains('bt2')){
    const li=e.target.closest('li')
    li.remove()

}

if(e.target.classList.contains('btE')){
    const li=   e.target.closest('li')
    ul1.appendChild(li)
    realizacao()
    e.target.textContent='✔'
    e.target.title='confirmar'
   const bt=   li.querySelector('.bt33')
if(bt){
    bt.classList.remove('bt33')
    bt.classList.add('bt3')

}

}

})