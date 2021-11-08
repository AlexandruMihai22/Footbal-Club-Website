let ok = 1;
function afiseaza() {

    const imagini = document.getElementsByTagName('img');
    const buton = document.getElementById('ButonImagini');

    if(ok == 1){
        for(let i of imagini)
        {
            i.style.display = 'none';
    
        };
        buton.innerHTML = 'afiseaza imagini';
        ok = 0;
        return ;
    } 

    else {
        for(let i of imagini)
            i.style.display = 'inline';
    
        }
        buton.innerHTML = 'ascunde imagini';
        ok = 1;
        return ;
    }

    
