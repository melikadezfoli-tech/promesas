
//VARIABLES
//CAPTURAR ELEMENTOS DEL DOM
const formulario = document.querySelector("#formulario")
const boton = document.querySelector('#solDato');
const parrafo = document.querySelector('#cuadro');
const asincrono=document.querySelector('#asincrono')


const api = { id:1,
              nombre:'pepito',
              edad:'20',
              email:'pepito@gmail.com'             
            }

/*EVENTOS*/
formulario.addEventListener('submit',(evento)=>{
    getUsuario(api)
    .then((resultado)=>console.log(`el usuario ${resultado.nombre} tiene el correo ${resultado.email}`,mostrarPantalla(resultado.nombre,resultado.email)))
    .catch((error)=>{console.log(error)});
    evento.preventDefault();
})   
    
// FUNCIONES    

const mostrarPantalla=(nombre,correo)=>{
    
    return parrafo.textContent=`${nombre} con el correo ${correo}`
} 
const mostrarPantalla2=(nombre,correo)=>{
    return asincrono.textContent=`info desde asincrona: el usuario ${nombre} con correo ${correo}`
}

const getUsuario =()=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(api.id>0){
                resolve(api)
            }else{
                reject("la hemos liado ")
            }
        }, 2000);
    })
    return promise
}
//INVOCACION A LAS FUNCIONES


const asincornica = async (api) =>{
    try{
    return api
    }catch (error){
        throw error
    }
}

asincornica(api)
.then((resultado)=>mostrarPantalla(resultado.nombre,resultado.email))
.catch((error)=>console.log(error)) 