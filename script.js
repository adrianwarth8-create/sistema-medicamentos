import {
auth
} from "./firebase.js";


import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";



let baixas = [];



// VERIFICA LOGIN

onAuthStateChanged(auth, (usuario)=>{


    if(!usuario){

        window.location.href =
        "login.html";

        return;

    }


    carregarBaixas();


});






async function registrarBaixa() {


    const militar =
        document.getElementById("militar").value;


    const medicamento =
        document.getElementById("medicamento").value;


    const quantidade =
        Number(document.getElementById("quantidade").value);


    const observacao =
        document.getElementById("observacao").value;



    if(!militar || !medicamento || quantidade <= 0){


        alert("Preencha todos os campos");


        return;

    }




    await addDoc(
        collection(db,"baixasMedicamentos"),
        {

            militar,

            medicamento,

            quantidade,

            observacao,

            data:
            new Date().toLocaleString()

        }

    );




    document.getElementById("militar").value = "";

    document.getElementById("medicamento").value = "";

    document.getElementById("quantidade").value = "";

    document.getElementById("observacao").value = "";



    carregarBaixas();


}







async function carregarBaixas(){



    const snap =
    await getDocs(
        collection(db,"baixasMedicamentos")
    );



    baixas = [];



    snap.forEach(docSnap=>{


        baixas.push({

            id: docSnap.id,

            ...docSnap.data()

        });


    });



    renderizar();


}








async function excluirBaixa(id){



    if(!confirm("Excluir registro?")){

        return;

    }




    await deleteDoc(

        doc(
            db,
            "baixasMedicamentos",
            id
        )

    );



    carregarBaixas();


}








function renderizar(){



    const lista =
    document.getElementById("listaBaixas");



    lista.innerHTML = "";




    baixas.reverse().forEach(item=>{


        lista.innerHTML += `


        <li>


        <b>👤 ${item.militar}</b><br>


        💊 ${item.medicamento}<br>


        🔢 Quantidade: ${item.quantidade}<br>


        📝 ${item.observacao || "-"}<br>


        📅 ${item.data}<br><br>



        <button onclick="excluirBaixa('${item.id}')">

        🗑️ Excluir

        </button>



        </li>


        `;


    });


}










// PDF

function gerarRelatorio(){



    const { jsPDF } =
    window.jspdf;



    const pdf =
    new jsPDF();




    pdf.setFontSize(16);


    pdf.text(
        "Relatorio de Medicamentos",
        15,
        15
    );



    pdf.setFontSize(12);



    let totais = {};




    baixas.forEach(item=>{


        let nome =
        item.medicamento.toUpperCase();



        if(!totais[nome]){


            totais[nome]=0;


        }



        totais[nome] +=
        Number(item.quantidade);



    });




    let y = 30;



    Object.keys(totais).forEach(med=>{


        pdf.text(

        `${med} ........ Quantidade: ${totais[med]}`,

        15,

        y

        );


        y += 10;


    });




    pdf.save(
        "relatorio_medicamentos.pdf"
    );


}








window.registrarBaixa =
registrarBaixa;
window.excluirBaixa =
excluirBaixa;
window.gerarRelatorio =
gerarRelatorio;
console.log(
"Sistema carregado"
);

window.registrarBaixa = registrarBaixa;
window.excluirBaixa = excluirBaixa;
window.gerarRelatorio = gerarRelatorio;
