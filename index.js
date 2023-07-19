const passa = document.getElementById('passa')
const passa_btn_login = document.getElementById('passa_btn_login')
const passa_btn_regsitro = document.getElementById('passa_btn_regsitro')
const passa_btn_registro = document.getElementById('passa_btn_registro')
const login = document.getElementById('login')
const login_btn_cadastrar = document.getElementById('login_btn_cadastrar')
const login_btn_entrar = document.getElementById('login_btn_entrar')
const registro = document.getElementById('registro')
const registro_btn_entrar = document.getElementById('registro_btn_entrar')
const registro_btn_login = document.getElementById('registro_btn_login')
const all = document.getElementById('all')
let pode = true
let posicao = null
const main = document.getElementsByTagName('main')
const conteudo = document.getElementById('conteudo')
const div_spinner = document.getElementById('div_spinner')
const login_inome = document.getElementById('login_inome')
const login_isenha = document.getElementById('login_isenha')
const login_aviso = document.getElementById('login_aviso')
const span = document.getElementById('span')
const registro_inome = document.getElementById('registro_inome')
const registro_isenha = document.getElementById('registro_isenha')
const registro_confirmarsenha = document.getElementById('registro_confirmarsenha')
const registro_aviso = document.getElementById('registro_aviso')

const click=()=>{
    pode = false
    setTimeout(()=>{
        pode = true
    },2000)
}

passa_btn_login.addEventListener('click' , ()=>{
    passa.classList.add('passa_anima')
    passa.classList.remove('passa_anima2')
    passa.innerHTML=''
    posicao = 'login'
   
})

passa_btn_registro.addEventListener('click' , ()=>{
    passa.classList.add('passa_anima2')
    passa.classList.remove('passa_anima')
    passa.innerHTML=''
    posicao = 'registro'
   
})

registro_btn_login.addEventListener('click' , ()=>{
    if(posicao == 'registro'){
    passa.classList.add('passa_anima')
    passa.classList.remove('passa_anima2')
    registro.classList.remove('registro_big')
    login_btn_cadastrar.style.display='block'
    passa.innerHTML=''
    click()
    posicao = 'login'
    
    }
})

registro.addEventListener('mouseover' , ()=>{
    if(posicao == 'registro'){
    if(pode == true){
    registro.classList.add('registro_big')
    passa.classList.add('passa_lit_registro')
    passa.classList.remove('passa_lit_login')
    passa.classList.remove('passa_anima2')
    login_btn_cadastrar.style.display='none'
   
        }
    }
})

registro_btn_entrar.addEventListener('click' , ()=>{
    if(registro_inome.value.length <4){
        registro_aviso.innerText='*o nome tem que ter 4 ou mais caracteres'
    }
    if(registro_isenha.value.length <8){
        registro_aviso.innerText='*a senha tem que ter 8 ou mais caracteres'
    }
    if(registro_isenha.value != registro_confirmarsenha){
        registro_aviso.innerText='*as senhas não são iguais'
    }
    if(registro_inome.value.length >4 && registro_isenha.value.length >8 && registro_isenha.value == registro_confirmarsenha.value){
    div_spinner.style.display='block'
    setTimeout(()=>{
        main.item(main).classList.remove('main')
        passa.style.display= 'none'
        all.style.display= 'none'
        conteudo.style.display= 'block'
        div_spinner.style.display='none'
    },2000)
    }
})

login_btn_cadastrar.addEventListener('click' , ()=>{
    if(posicao == 'login'){
    passa.classList.add('passa_anima2')
    passa.classList.remove('passa_anima')
    login.classList.remove('login_big')
    registro_btn_login.style.display= 'block'
    passa.innerHTML=''
    click()
    posicao = 'registro'
    
    }
})

login.addEventListener('mouseover' , ()=>{
    if(posicao == 'login'){
    if(pode == true){
    login.classList.add('login_big')
    passa.classList.add('passa_lit_login')
    passa.classList.remove('passa_lit_registro')
    passa.classList.remove('passa_anima')
    registro_btn_login.style.display= 'none'
   
    }
    }
})

login_btn_entrar.addEventListener('click' , ()=>{
    if(login_inome.value.length <4 ){
        login_aviso.innerText= `*o nome tem que ter 4 ou mais caracteres`
    }
    if(login_isenha.value.length <8){
        login_aviso.innerText= `*a senha tem que ter 8 ou mais caracteres`
    }
    if(login_isenha.value.length >8 && login_inome.value.length >4){
    div_spinner.style.display='block'
    setTimeout(()=>{
        main.item(main).classList.remove('main')
        passa.style.display= 'none'
        all.style.display= 'none'
        conteudo.style.display= 'block'
        div_spinner.style.display='none'
        span.innerText= login_inome.value
    },2000)
    }
})








