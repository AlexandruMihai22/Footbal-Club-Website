var nr_chr;// definita direct in script (nu intr-o functie,deci la incarcarea paginii
function LocalStorageInit(){
	
	//ma voi ocupa intai de setarea continutului divului cu id-ul "info"
	
		
	//voi considera in localStorage campurile asociate lui nr_chr si ultim_chr ca fiind "nr" si "ultim".
	//localStorage.getItem("nr") obtine valoarea campului "nr" din localStorage. Daca acest camp nu exista, returneaza null
	//valoarea unei atribuiri de forma (variabila=valoare), va fi valoarea, deci mai jos, ce retruneaza getItem
	if (nr_chr=localStorage.getItem("nr"))//daca nu returneaza null (null se converteste automat la false in expresie booleana)
		nr_chr=parseInt(nr_chr);//in localStorage valorile sunt doar stringuri
	else
		nr_chr=0; // getItem() a returnat null, deci e prima oara cand am incarcat pagina, sau prima oara dupa ce a fost sters campul "nr" din localStorage, asa ca setez variabila la 0
	
	//obtinem si ultim_chr
	ultim_chr=localStorage.getItem("ultim");//daca valoarea nu se gaseste in localStorage, ultim_chr oricum trebuie sa fie null, deci nu mai e nevoie de if
	
	
	seteazaInfoDiv();//functie definita mai jos, care actualizeaza informatia din divul cu id-ul "info"
	
	
	window.onkeypress=function(e){
		//preiau tasta apasata:
		ultim_chr=document.getElementById("nrMinAssisturi").value;
		nr_chr++;//a crescut numarul de taste apasate
		
		//actualizez localStorage
		//pentru localStorage.setItem("camp", valoare); daca respectivul camp nu exista, il creeaza si-i seteaza valoarea; iar daca exista deja, il actualizeaza
		localStorage.setItem("ultim", ultim_chr);
		localStorage.setItem("nr", nr_chr);
		seteazaInfoDiv();
	}
	window.onclick = function(e) {
		nr_chr++;
		localStorage.setItem("nr", nr_chr);
		seteazaInfoDiv();
	}
	
	//--------------------------------------------------------------------------------------------------
	//setam si functiile pentru click-ul pe butoane
	var btn1=document.getElementById("resteaza_numar");
	btn1.onclick=function(){		
		//resetez nr_chr
		nr_chr=0;
		//sterg si din localStorage campul asociat
		localStorage.removeItem("nr");
		seteazaInfoDiv();
	}
	
	
	var btn2=document.getElementById("resteaza_caracter");
	btn2.onclick=function(){		
		//resetez ultim_chr
		ultim_chr=null;
		//sterg si din localStorage campul asociat
		localStorage.removeItem("ultim");
		seteazaInfoDiv();
	}	

	var btn3=document.getElementById("resteaza_tot");
	btn3.onclick=function(){		
		//resetez nr_chr
		nr_chr=0;
		//resetez ultim_chr
		ultim_chr=null;
		//sterg si din localStorage campul asociat
		localStorage.clear();
		seteazaInfoDiv();
	}

}

function seteazaInfoDiv(){
	var dv=document.getElementById("info");
	dv.innerHTML="Numar taste si clickuri apasate: "+nr_chr+"<br/>Ultimul numar de asisturi: "+ultim_chr;
}



