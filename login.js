import {
signInWithEmailAndPassword,
createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


import {
auth
}
from "./firebase.js";




// ENTRAR

window.entrar = async function(){


const email =
document.getElementById("email").value;


const senha =
document.getElementById("senha").value;



if(!email || !senha){

    alert("Preencha email e senha");

    return;

}



try{


await signInWithEmailAndPassword(

    auth,

    email,

    senha

);



window.location.href =
"index.html";



}

catch(e){


console.log(e);


alert(
"Email ou senha incorretos"
);


}


}








// CRIAR CONTA


window.criarConta = async function(){



const email =
document.getElementById("email").value;


const senha =
document.getElementById("senha").value;




if(!email || !senha){

    alert("Preencha email e senha");

    return;

}




try{


await createUserWithEmailAndPassword(

    auth,

    email,

    senha

);



alert(
"Conta criada! Agora pode entrar."
);



}

catch(e){


alert(
e.message
);


}


}
