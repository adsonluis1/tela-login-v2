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

passa_btn_login.addEventListener('click' , ()=>{
    passa.classList.add('passa_anima')
    passa.classList.remove('passa_anima2')
    passa.innerHTML=''
})

passa_btn_registro.addEventListener('click' , ()=>{
    passa.classList.add('passa_anima2')
    passa.classList.remove('passa_anima')
    passa.innerHTML=''
})

registro_btn_login.addEventListener('click' , ()=>{
    passa.classList.add('passa_anima')
    passa.classList.remove('passa_anima2')
    passa.innerHTML=''
})

registro.addEventListener('mouseover' , ()=>{
    registro.classList.add('registro_big')
    passa.classList.add('passa_lit_registro')
    passa.classList.remove('passa_anima2')
})

login_btn_cadastrar.addEventListener('click' , ()=>{
    passa.classList.add('passa_anima2')
    passa.classList.remove('passa_anima')
    login.classList.remove('login_big')
    passa.innerHTML=''
})

login.addEventListener('mouseover' , ()=>{
    login.classList.add('login_big')
    passa.classList.add('passa_lit_login')
    passa.classList.remove('passa_anima')
})

login.addEventListener('mouseout' , ()=>{

})





