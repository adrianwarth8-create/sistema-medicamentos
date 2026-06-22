import { 
getAuth,
signInWithEmailAndPassword,
createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


import { auth }
from "./firebase.js";



window.entrar = async function(){


const email =
document.getElementById("email").value;


const senha =
document.getElementById("senha").value;



try {


await signInWithEmailAndPassword(
auth,
email,
senha
);


window.location =
"index.html";


}

catch(e){

alert(
"Login inválido"
);

}


}




window.criarConta = async function(){


const email =
document.getElementById("email").value;


const senha =
document.getElementById("senha").value;



try{


await createUserWithEmailAndPassword(
auth,
email,
senha
);


alert(
"Conta criada com sucesso"
);


}

catch(e){

alert(
e.message
);

}


}
