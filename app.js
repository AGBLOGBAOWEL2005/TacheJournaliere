document.addEventListener('DOMContentLoaded', function () {
    const enregistrer = document.getElementById('enregistrer');
    const resultat = document.getElementById('resultat');
    const supprimer = document.getElementById('supprimer');
    const fait = document.getElementById('fait');
    const annuler = document.getElementById('annuler');
    let selectedRow = null;

    enregistrer.addEventListener('click', function () {
        const tacheInput = document.getElementById('tache');
        const dateInput = document.getElementById('date');
        const tache = tacheInput.value.trim();
        const date = dateInput.value.trim();

        if (tache !== '' && date !== '') {
            const newRow = resultat.insertRow();
            const cell0 = newRow.insertCell(0);
            const cell1 = newRow.insertCell(1);
            cell0.innerHTML = tache;
            cell1.innerHTML = date;

            tacheInput.value = '';
            dateInput.value = '';

            newRow.addEventListener('click', function () {
                if (selectedRow) {
                    selectedRow.classList.remove('selected');
                }
                selectedRow = newRow;
                newRow.classList.add('selected');
                supprimer.style.display = 'block';
                fait.style.display = 'block';
                annuler.style.display = 'block';
            });
        }
    });

    supprimer.addEventListener('click', function () {
        if (selectedRow) {
            resultat.deleteRow(selectedRow.rowIndex);
            selectedRow = null;
            supprimer.style.display = 'none';
            fait.style.display = 'none';
            annuler.style.display = 'none';
        }
    });

    fait.addEventListener('click', function () {
        if (selectedRow) {
            selectedRow.classList.add('barre');
            fait.style.display = 'none';
            supprimer.style.display = 'none';
            annuler.style.display = 'none';
        }
    });

    annuler.addEventListener('click', function () {
        if (selectedRow) {
            selectedRow.classList.remove('selected');
            selectedRow = null;
            supprimer.style.display = 'none';
            fait.style.display = 'none';
            annuler.style.display = 'none';
        }
    });
});

let intervalID;
let i=1;

function defiler(){
    intervalID = setInterval(imagesuivante,3000);
}
function imagesuivante(){
    i++;
    if(i==6)
    {
        i=1
    }
    if(i==1 || i==2 || i==3 || i==5)
    {
        let nouvelleimage = "image"+i+".jpg";
        document.getElementById('image1').src = nouvelleimage;
    }
    if(i==4)
    {
        let nouvelleimage = "image"+i+".png";
        document.getElementById('image1').src = nouvelleimage;
    }
    
    
}
function arrete()
{
    clearInterval(intervalID)
}
function inferieur()
{
    i--;
    if(i==0)
    {
        i=5;
    }

    if(i==1 || i==2 || i==3 || i==5)
    {
        let nouvimage = "image"+i+".jpg";
        document.getElementById('image1').src = nouvimage;
    }
    if(i==4)
    {
        let nouvimage = "image"+i+".png";
        document.getElementById('image1').src = nouvimage;
    }
}

function superieur()
{
    i++;
    if(i==6)
    {
        i=1;
    }

    if(i==1 || i==2 || i==3 || i==5)
    {
        let nouvimage = "image"+i+".jpg";
        document.getElementById('image1').src = nouvimage;
    }
    if(i==4)
    {
        let nouvimage = "image"+i+".png";
        document.getElementById('image1').src = nouvimage;
    }
}

const bouttonhaut = document.getElementById('boutton_haut');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        bouttonhaut.style.display = "block";
    } else {
        bouttonhaut.style.display = "none";
    }
};

function buttonhaut() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}


function buttonhaut() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const hamberguer = document.querySelector('.hamberguer'); 
const numero = document.querySelector('.numero');

hamberguer.onclick = function() {
    hamberguer.classList.toggle('active');
    numero.classList.toggle('responsive'); 
    if (numero.style.display === "none" || numero.style.display === "") {
        numero.style.display = "block";
    } else {
        numero.style.display = "none";
    }
};
