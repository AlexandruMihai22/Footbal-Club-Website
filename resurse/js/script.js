let obJson;

window.onload=function(){
	LocalStorageInit();
	salut();
	
	//creez un obiect de tip XMLHttpRequest cu care pot transmite cereri catre server
	var ajaxRequest = new XMLHttpRequest();


	//la schimbarea starii obiectului XMLHttpRequest (la schimbarea proprietatii readyState)
	/* stari posibile:
	0 - netrimis
	1 - conexiune deschisa
	2 - s-au transmis headerele
	3 - se downleadeaza datele (datele sunt impartite in pachete si el primeste cate un astfel de pachet)
	4 - a terminat
	*/
	ajaxRequest.onreadystatechange = function() {
			//daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
			if (this.readyState == 4 && this.status == 200) {
					//in proprietatea responseText am contintul fiserului JSON
					document.getElementById("afisJson").innerHTML=this.responseText;
					obJson = JSON.parse(this.responseText);
					afiseazaJsonTemplate();
			}
	};
	//deschid o conexiune cu o cerere de tip get catre server
	//json e pus in folderul static "resurse" deci calea e relativa la acel folder (fisierul e la calea absoluta /resurse/json/studenti.json)
	ajaxRequest.open("GET", "/json/studenti.json", true);
	//trimit catre server cererea
	ajaxRequest.send();
}

function afiseazaJsonTemplate(sortare = 0, afis =1, nrMinGoluri = 0, nrMinAssisturi = 0) { 
	//in acets div voi afisa template-urile   
	let container=document.getElementById("afisTemplate");

	//in textTemplate creez continutul (ce va deveni innerHTML-ul) divului "afisTemplate"
	let textTemplate ="";

	if(sortare == -1)
		obJson.studenti.sort((a,b) => b.Numar - a.Numar);
	else if(sortare == 1)
		obJson.studenti.sort((a,b) => a.Numar - b.Numar);
	let nrGoluri = 0;
	
if(afis==1){
	
	//parcurg vetorul de studenti din obJson
	for(let i=0;i<obJson.studenti.length;i++)
	{
		if(obJson.studenti[i].Goluri >= nrMinGoluri && obJson.studenti[i].Asisturi >= nrMinAssisturi)
		{
			nrGoluri += parseInt(obJson.studenti[i].Goluri);
			//creez un template ejs (primul parametru al lui ejs.render)
			//acesta va primi ca parametru un student din vectorul de studenti din json {student: obJson.studenti[i]}
			//practic obJson.studenti[i] e redenumit ca "student" in template si putem sa ii accesam proprietatile: student.id etc
			textTemplate+=ejs.render("<div class='templ_student'>\
			<p>Numar: <%= student.Numar %></p>\
			<p>Pozitie: <%= student.Pozitie %></p>\
			<p>Nume complet: <%= student.nume %> <%= student.prenume %></p>\
			<p>Meciuri jucate: <%= student.Meciuri_jucate %></p>\
			<p>Goluri: <%= student.Goluri %></p>\
			<p>Asisturi: <%= student.Asisturi %></p>\
			</div>", 
			{student: obJson.studenti[i]});
		}
} }
	//adaug textul cu afisarea studentilor in container
container.innerHTML=textTemplate;
	document.getElementById("nrGoluri").innerHTML = nrGoluri;

}
function SortCresc()
{
	afiseazaJsonTemplate(1,1);
}

function SortDescresc()
{
	afiseazaJsonTemplate(-1,1);
}

function FiltreazaGoluri()
{
	afiseazaJsonTemplate(0,1, parseInt(document.getElementById("nrMinGoluri").value));
}

function FiltreazaAssisturi()
{
	afiseazaJsonTemplate(0,1,0, parseInt(document.getElementById("nrMinAssisturi").value));
}

function Goleste()
{
	afiseazaJsonTemplate(0,0);
}