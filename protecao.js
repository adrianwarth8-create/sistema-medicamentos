import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
auth
} from "./firebase.js";


onAuthStateChanged(auth, (usuario)=>{

    if(!usuario){

        window.location.href = "login.html";

    }

});
