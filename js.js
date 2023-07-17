const btn = document.getElementById('btn')
const dv1 = document.getElementById('dv1')
const dv2 = document.getElementById('dv2')
const topo = document.getElementById('topo')
let estado = 'normal'
let segu = null
const btn_login = document.getElementById('btn_login')
const btn_cadastro = document.getElementById('btn_cadastro')



const inverter = ()=>{
    setTimeout(()=>{
        topo.style.flexDirection='row-reverse'    
        dv1.classList.remove('dv1a')
        dv2.classList.remove('dv2a')
    },2000)
}

const ajeitar = ()=>{
    setTimeout(()=>{
        topo.style.flexDirection='row' 
        dv1.classList.remove('dv2a')
        dv2.classList.remove('dv1a')
    },2000)
}

const seg = ()=>{
    segu= 'nao'
    console.log(segu)
    dv1.classList.remove('hoverout')
    dv2.classList.remove('hoverout')
    setTimeout(()=>{
        segu= null
        console.log(segu)
    },2100)
}

btn.addEventListener('click' , ()=>{
    if(estado == 'normal'){
        dv1.classList.add('dv1a')
        dv2.classList.add('dv2a')
        estado = 'trocado'
        inverter()
        dv1.classList.remove('hoverout')
        dv2.classList.remove('hoverout')
    }else if(estado == 'trocado'){
        dv1.classList.add('dv2a')
        dv2.classList.add('dv1a')
        ajeitar()
        estado = 'normal'
    }
    seg()
})

dv1.addEventListener('mouseover' , ()=>{
    if(segu === null){
    dv1.classList.add('hover')
    btn_login.classList.add('btna')
    btn_cadastro.classList.add('btna')
    }
})

dv1.addEventListener('mouseout' , ()=>{
    if(segu === null){
    dv1.classList.add('hoverout')
    dv1.classList.remove('hover')
    btn_login.classList.remove('btna')
    btn_cadastro.classList.remove('btna')
    }
})

dv2.addEventListener('mouseover' , ()=>{
    if(segu === null){
    dv2.classList.add('hover')
    }
})

dv2.addEventListener('mouseout' , ()=>{
    if(segu === null){
    dv2.classList.add('hoverout')
    dv2.classList.remove('hover')
    }
})
