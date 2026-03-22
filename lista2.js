
const input=document.querySelector('#input1')
input.type='text'
const btadd=document.querySelector('#bt1')
const ul1=document.querySelector('#ul1')
const ul2=document.querySelector('#ul2')
const div1=document.querySelector('#div1')
ul1.classList.add('ul1')
ul2.classList.add('ul2')
div1.classList.add('div1')

function verificarPendentes() {
  const tarefasPendentes = ul1.querySelectorAll('li').length
  const msg = ul1.querySelector('.p1')
  const botaoExcluirTudo = div1.querySelector('.bt2')

  if (tarefasPendentes === 0) {
    if (!msg) {
      const p1 = document.createElement('p')
      p1.textContent = 'nenhum pendente'
      p1.classList.add('p1')
      ul1.appendChild(p1)
 
         if (botaoExcluirTudo) botaoExcluirTudo.remove()
  } }
else if(tarefasPendentes===1){
  if (botaoExcluirTudo) botaoExcluirTudo.remove()
       if (msg) msg.remove()
}
  else {
    if (msg) msg.remove()

    if (tarefasPendentes >= 2 && !botaoExcluirTudo) {
      const bt2 = document.createElement('button')
      bt2.textContent = 'Excluir tudo'
      bt2.classList.add('bt2')
      div1.appendChild(bt2)
    }
  }
   
}

 

btadd.addEventListener('click',(e)=>{
    if(input.value===''){
        alert('campo vazio')
    }
    else{
       
const li=document.createElement('li')
const p=document.createElement('p')
const btapagar=document.createElement('button')
const checkbox=document.createElement('input')
checkbox.type='checkbox'
checkbox.classList.add('checkbox')
btapagar.textContent='Excluir'
btapagar.classList.add('btapagar')
p.textContent=input.value
p.classList.add('p')
p.title='click para editar'
li.classList.add('li')
li.appendChild(checkbox)
li.appendChild(p)
li.appendChild(btapagar)
ul1.appendChild(li)
input.value=''
verificarPendentes()
}

})

ul1.addEventListener('click',(e)=>{
    if(e.target.classList.contains('checkbox')){
setTimeout(
    function confirmar(){
        const li=e.target.closest('li')
        const p=li.querySelector('p')
const btrestaurar=li.querySelector('.btapagar')
if(btrestaurar){
btrestaurar.classList.remove('btapagar')
btrestaurar.classList.add('btrestaurar')}
btrestaurar.textContent='restaurar'

p.title='click para apagar'
p.classList.add('p')
    const checkbox = e.target

    checkbox.remove() // remove checkbox

    const botao = document.createElement('button')
    botao.textContent = '✅'
    botao.classList.add('botao1')
    li.insertBefore(botao, li.firstChild)
ul2.appendChild(li)
verificarPendentes()




    },2000
)


    }

    if(e.target.classList.contains('btapagar')){
        const li=e.target.closest('li')
        li.remove()
        verificarPendentes()
    }

    if(e.target.classList.contains('p')){
        const li=e.target.closest('li')
       const input2=document.createElement('input')
       const p=li.querySelector('.p')
       input2.value=p.textContent
       input2.type='text'
       input2.classList.add('input2')
       
       li.replaceChild(input2,p)

       input2.addEventListener('keydown',(e)=>{
        if(e.key==='Enter'){
          salvar(input2,li)
        }
       })
       input2.addEventListener('blur',()=>{
         salvar(input2,li)
       })
    }
})

ul2.addEventListener('click',(e)=>{
 
    
  if(e.target.classList.contains('p')){
    const li=e.target.closest('li')
    li.remove() 
}
    
  if(e.target.classList.contains('btrestaurar')){
  
   
    const li=e.target.closest('li')
   ul1.appendChild(li)
   li.querySelector('p').title='click para editar'
 e.target.textContent='Excluir'
 e.target.classList.remove('btrestaurar')
 e.target.classList.add('btapagar')
 const checkbox=document.createElement('input')
 checkbox.type='checkbox'
 checkbox.classList.add('checkbox')
 const botao=li.querySelector('.botao1')
 li.replaceChild(checkbox,botao)
 verificarPendentes()
 //botao.remove()
 //li.insertBefore(checkbox, li.firstChild)
}

})
div1.addEventListener('click',(e)=>{
if(e.target.classList.contains('bt2')){
   ul1.innerHTML=''
  
    e.target.remove()
verificarPendentes()
}
})


function salvar(input2,li){
    const  novop=document.createElement('p')
            novop.textContent= input2.value
            novop.classList.add('p')
            
       li.replaceChild(novop,input2)
}