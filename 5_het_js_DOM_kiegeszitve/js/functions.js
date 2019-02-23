function AdminAccessButton_Click_Handler() {
		/*admin div láthatóságának, méretének beállítása
		 cikkek div láthatóságának, méretének beállítása
		 vevő div, vevő kosár cellák, kosár gombok sorok végén, 
		 kosár ürítése gomb elrejtése, törlés gombok megjelenítése*/		
		
		nodeCikkekTablaDiv1.setAttribute('style', 'display: inline-block;');
		nodeCikkekTablaDiv2.setAttribute('style', 'display: none;');		
		nodeAdminDiv.setAttribute('style', 'display: inline-block; width: 50%;');
		nodeCikkekDiv.setAttribute('style', 'display: inline-block; position: absolute; width: 50%; left: 50%');
		nodeVasarloDiv.setAttribute('style', 'display: none;');		
		
	}
	
	function ClientAccessButton_Click_Handler() {
		/*vevő div láthatóságának, méretének beállítása
		 cikkek div láthatóságának, méretének beállítása
		 admin div elrejtése, vevő kosár cellák, kosár gombok sorok végén, 
		 kosár ürítése gomb megjelenítése, cikkek táblázat fejléc th kosárba cella megjelenítése, 
		 cikkek táblázat fejléc th törlés cella elrejtése, törlés gombok elrejtése*/
	
		nodeCikkekDiv.setAttribute('style', 'width: 50%;');				
		nodeAdminDiv.setAttribute('style', 'display: none;');
		nodeCikkekTablaDiv1.setAttribute('style', 'display: none;');
		nodeCikkekTablaDiv2.setAttribute('style', 'display: inline-block;');
		
		nodeVasarloDiv.setAttribute('style', 'position: absolute; display: inline-block; width: 50%; left: 50%');
		nodeBtnKosarUrit.setAttribute('style', 'display: block;')	
		
		nodeCikkekTablaTBody = document.querySelector('#cikkekTabla tbody');
		drawTableToTBodyCikkekKosarba(nodesCikkekTomb, nodeCikkekTabla2TBody);
		
		}
		
		
		
	
	function drawTableRowCikkek(termekObjektum) {
		/*cikkek és törlés tábla egy sorának kirajzoltatása*/
		var eredmenyTR = document.createElement('tr');
		
		var TD1=document.createElement('td');
		var TD2=document.createElement('td');
		var TD3=document.createElement('td');
		var TD4=document.createElement('td');
		var TD5=document.createElement('td');		
		var nodeIMG = document.createElement('img');		
		var btnAdminTorol = document.createElement('button');
		var btnAdminTorolKep = document.createElement('img');
		
		TD1.innerText=termekObjektum.termekID;
		TD2.innerText=termekObjektum.megnevezes;
		TD3.innerText=termekObjektum.ar;
		nodeIMG.setAttribute('src', termekObjektum.fotoURL);
		
		TD5.setAttribute('class', 'adminTorol');
		btnAdminTorol.setAttribute('data-termekid', termekObjektum.termekID);
		btnAdminTorol.setAttribute('class', 'btnAdminTorles');
		btnAdminTorolKep.setAttribute('src', 'design/img/torlesGomb.jpg');
		btnAdminTorol.appendChild(btnAdminTorolKep);
		
		btnAdminTorol.addEventListener('click', btnAdminTorol_Click_Handler, 'false');
	
		TD4.appendChild(nodeIMG);
		TD5.appendChild(btnAdminTorol);
		
		eredmenyTR.appendChild(TD1);
		eredmenyTR.appendChild(TD2);
		eredmenyTR.appendChild(TD3);
		eredmenyTR.appendChild(TD4);
		eredmenyTR.appendChild(TD5);
		
		return eredmenyTR;
		
	}
	
	function drawTableRowKosar(termekObjektum) {
		/*kosár tábla egy sorának kirajzoltatása*/
		var eredmenyTR = document.createElement('tr');
		
		var TD1=document.createElement('td');
		var TD2=document.createElement('td');
		var TD3=document.createElement('td');
		var TD4=document.createElement('td');
		var TD5=document.createElement('td');
		var nodeIMG = document.createElement('img');
		var btnKosarba = document.createElement('button');
		var btnKosarbaKep = document.createElement('img');
		
		TD1.innerText=termekObjektum.termekID;
		TD2.innerText=termekObjektum.megnevezes;
		TD3.innerText=termekObjektum.ar;
		nodeIMG.setAttribute('src', termekObjektum.fotoURL);
		
		TD5.setAttribute('class', 'vevoKosar');
		btnKosarba.setAttribute('data-termekid', termekObjektum.termekID);
		btnKosarbaKep.setAttribute('src', 'design/img/kosarGomb.jpg');
		btnKosarba.appendChild(btnKosarbaKep);				
		
		btnKosarba.addEventListener('click', btnKosarba_Click_Handler, 'false');
	
		TD4.appendChild(nodeIMG);
		TD5.appendChild(btnKosarba);
		
		eredmenyTR.appendChild(TD1);
		eredmenyTR.appendChild(TD2);
		eredmenyTR.appendChild(TD3);
		eredmenyTR.appendChild(TD4);
		eredmenyTR.appendChild(TD5);
		
		return eredmenyTR;
		
	}
	
	function drawTableRowCikkekKosarba(termekObjektum) {
		/*cikkek kosárba tábla egy sorának kirajzoltatása*/
		var eredmenyTR = document.createElement('tr');
		
		var TD1=document.createElement('td');
		var TD2=document.createElement('td');
		var TD3=document.createElement('td');
		var TD4=document.createElement('td');
		var TD5=document.createElement('td');
		var nodeIMG = document.createElement('img');
		var btnKosarba = document.createElement('button');
		var btnKosarbaKep = document.createElement('img');
		
		TD1.innerText=termekObjektum.termekID;
		TD2.innerText=termekObjektum.megnevezes;
		TD3.innerText=termekObjektum.ar;
		nodeIMG.setAttribute('src', termekObjektum.fotoURL);
		
		TD5.setAttribute('class', 'vevoKosar');
		btnKosarba.setAttribute('data-termekid', termekObjektum.termekID);
		btnKosarbaKep.setAttribute('src', 'design/img/kosarGomb.jpg');
		btnKosarba.appendChild(btnKosarbaKep);				
		
		btnKosarba.addEventListener('click', btnKosarba_Click_Handler, 'false');
	
		TD4.appendChild(nodeIMG);
		TD5.appendChild(btnKosarba);
		
		eredmenyTR.appendChild(TD1);
		eredmenyTR.appendChild(TD2);
		eredmenyTR.appendChild(TD3);
		eredmenyTR.appendChild(TD4);
		eredmenyTR.appendChild(TD5);
		
		return eredmenyTR;
		
	}
	
	function drawTableAllRowsCikkek(termekObjektumTomb) {
		/*A cikkek és törlés táblázat összes sorának megrajzolása, nincs felcsatolva!		  		
		*/
		var eredmenySorok = [];
		for (var i=0; i<termekObjektumTomb.length; i++) {
			eredmenySorok.push(drawTableRowCikkek(termekObjektumTomb[i]));			
		}	
		return eredmenySorok;		//tömbbel tér vissza
	}
	
	function drawTableAllRowsCikkekKosarba(termekObjektumTomb) {
		/*A cikkek kosárba táblázat összes sorának megrajzolása, nincs felcsatolva!		  		
		*/
		var eredmenySorok = [];
		for (var i=0; i<termekObjektumTomb.length; i++) {
			eredmenySorok.push(drawTableRowCikkekKosarba(termekObjektumTomb[i]));			
		}	
		return eredmenySorok;		//tömbbel tér vissza
	}
	
	function drawTableAllRowsKosar(termekObjektumTomb) {
		/*A kosár táblázat összes sorának megrajzolása, nincs felcsatolva!		  		
		*/
		var eredmenySorok = [];
		for (var i=0; i<termekObjektumTomb.length; i++) {
			eredmenySorok.push(drawTableRowKosar(termekObjektumTomb[i]));			
		}	
		return eredmenySorok;		//tömbbel tér vissza
	}
	
	function drawTableToTBodyCikkek(termekObjektumTomb, tetszolegesTBody){
		/*A cikkek és törlés táblázat sorainak felcsatolása egy tetszőleges tbody-ra*/
		var SorokTomb = drawTableAllRowsCikkek(termekObjektumTomb);							//változó lehet lokális
		for(var i=0; i<termekObjektumTomb.length; i++) {
			tetszolegesTBody.appendChild(SorokTomb[i]);			
		}		
	}
	
	function drawTableToTBodyCikkekKosarba(termekObjektumTomb, tetszolegesTBody){
		/*A cikkek kosár táblázat sorainak felcsatolása egy tetszőleges tbody-ra*/
		var SorokTomb = drawTableAllRowsCikkekKosarba(termekObjektumTomb);					//változó lehet lokális
		for(var i=0; i<termekObjektumTomb.length; i++) {
			tetszolegesTBody.appendChild(SorokTomb[i]);			
		}		
	}
	
	function drawTableToTBodyKosar(termekObjektumTomb, tetszolegesTBody){
		/*A kosár táblázat sorainak felcsatolása egy tetszőleges tbody-ra*/
		var SorokTomb = drawTableAllRowsKosar(termekObjektumTomb);					//változó lehet lokális
		for(var i=0; i<termekObjektumTomb.length; i++) {
			tetszolegesTBody.appendChild(SorokTomb[i]);			
		}		
	}
	
	function btnKosarba_Click_Handler() {
		/*A btnKosarba gombokhoz adott eseménykezelő
			termékek hozzáadása a kosár tömbjéhez(var nodesKosarTartalma), kosár kirajzoltatása, összegzés;*/ 		
		
		var btnKosarba = event.currentTarget;
		var termekID = btnKosarba.getAttribute('data-termekid');
		
		for(var i=0; i<nodesCikkekTomb.length; i++) {
			if(nodesCikkekTomb[i].termekID == termekID) {
				console.log(nodesCikkekTomb[i]);
				var kosarElem = nodesCikkekTomb[i];
			}			
		}
		nodesKosarTomb.push(kosarElem);
		nodeSzovegKosarUres.setAttribute('style', 'opacity: 0');
				
		if(nodesKosarTomb.length > 0) {
			nodeKosarTabla.setAttribute('style', 'visibility: visible');
			nodeKosarTablaTBody.innerText='';
			drawTableToTBodyCikkek(nodesKosarTomb, nodeKosarTablaTBody);			
		}
		
		var Osszesen = document.getElementById('osszegzes');
		var kosarOsszege = osszegzes(nodesKosarTomb);
		Osszesen.innerHTML='<b>'+kosarOsszege+'</b>';		 
	}
	
	function osszegzes(osszegzendoTomb) {
		/*egy tömb objektumelemeiben lévő árak összegzése*/
			var arakTomb = [];
			for(var i=0; i<osszegzendoTomb.length; i++) {
				arakTomb.push(osszegzendoTomb[i].ar);				
			}
		
			osszeg =0;
			if(osszegzendoTomb.length>0) {
			for(var i=0; i<arakTomb.length; i++) {
			osszeg += arakTomb[i]; 					
				}
			}
		return osszeg;
}
	
	function BtnKosarTartalma_Click_Handler() {
		/*A vásárlói nodeBtnKosarTartalmaFogomb gombhoz adott eseménykezelő
			a kosár táblázat kirajzolását és a hozzá tartozó láthatóságot állítja
		*/		
		nodeKosarTablaTBody.innerText = '';
		drawTableToTBodyCikkek(nodesKosarTomb, nodeKosarTablaTBody);	
		nodeKosarTabla.setAttribute('style', 'visibility: visible');		
		nodeSzovegKosarUres.setAttribute('style', 'opacity: 0');		
		nodeSzovegKosarTartalma = document.querySelector('#szovegKosarTartalma');
		nodeSzovegKosarTartalma.setAttribute('style', 'opacity: 1');
}
		
	function Kivagas(objektumTomb, termekID) {
		for(var i=0; i<objektumTomb.length; i++) {
			if(objektumTomb[i].termekID == termekID) {
				objektumTomb.splice(i, 1);				
			}			
		}
		return objektumTomb;
	}
	
	
	function btnAdminTorol_Click_Handler() {
		/*A btnAdminTorol gombokhoz adott eseménykezelő
			termékek törlése a var nodeArticlesTömb tömbből
			kosár elemeinek törlése a nodesKosarTomb-ből, kosár összegzése
			táblázat törlése és újrarajzolása fv meghívása		
		*/
		var btnAdminTorles = event.currentTarget;
		var termekID = btnAdminTorles.getAttribute('data-termekid');
		
		console.log(nodeCikkekTablaDiv1.getAttribute('style'));		//display: none
		if (nodeCikkekTablaDiv1.getAttribute('style')!==('display')) {
			Kivagas(nodesKosarTomb, termekID);
			nodeKosarTablaTBody.innerText = '';
			drawTableToTBodyCikkek(nodesKosarTomb, nodeKosarTablaTBody);
			var Osszesen = document.getElementById('osszegzes');
			var kosarOsszege = osszegzes(nodesKosarTomb);
			Osszesen.innerHTML='<b>'+kosarOsszege+'</b>';
			
		} else if (nodeCikkekTablaDiv1.getAttribute('style')==('display: inline-block')){
			Kivagas(nodesCikkekTomb, termekID);		
			nodeCikkekTablaTBody.innerText = '';
			drawTableToTBodyCikkek(nodesCikkekTomb, nodeCikkekTablaTBody);
		}
		
	}
	
	function BtnNewProduct_Click_Handler() {
			/*új termék adatainak mentése, hozzáadása a cikkek tömbhöz, összeg megjelenítése, JSON string kiírása, táblázat újrarajzolása fv*/
			nodeProductIDTextBox = document.getElementById('termek_id');
			nodeProductDescriptionTextBox = document.getElementById('termek_neve');
			nodeProductPriceTextBox = document.getElementById('termek_ara');
			nodeProductFotoURLTextBox = document.getElementById('foto_url');
			
			objTermek.termekID = nodeProductIDTextBox.value;
			objTermek.megnevezes = nodeProductDescriptionTextBox.value;
			var ar = nodeProductPriceTextBox.value;
			objTermek.ar = parseInt(ar);
			if(isNaN(objTermek.ar)) {
				alert('Ide számot kell írni!');
			}
			objTermek.fotoURL = nodeProductFotoURLTextBox.value;
			nodesCikkekTomb.push(objTermek);
			
			nodesCikkekTombJSON = JSON.stringify(nodesCikkekTomb);
			console.log(nodesCikkekTombJSON);
			nodeJsonDiv=document.getElementById('json');
			nodeJsonDiv.innerText = nodesCikkekTombJSON;
			
			nodeCikkekTablaTBody.innerText = '';
			drawTableToTBodyCikkek(nodesCikkekTomb, nodeCikkekTablaTBody);

}

function BtnKosarUrit_Click_Handler() {
		/*A kosár tartalmának ürítése*/
	
		nodeKosarTR=document.querySelectorAll('#kosarTabla tbody tr');
		nodeKosarTabla.setAttribute('style', 'visibility: hidden');
		nodeSzovegKosarUres.setAttribute('style', 'opacity: 1');
		nodeSzovegKosarTartalma.setAttribute('style', 'opacity: 0');
		nodeKosarTfoot=document.querySelector('#kosarTabla tfoot');
		
		nodesKosarTomb=[];
		var Osszesen = document.getElementById('osszegzes');
		var kosarOsszege = osszegzes(nodesKosarTomb);
		Osszesen.innerHTML='<b>'+kosarOsszege+'</b>';
	
}


function RendezesMegnevezesTH_Click_Handler() {
	
		if(nodesCikkekTomb[0].megnevezes<nodesCikkekTomb[1].megnevezes && nodesCikkekTomb[1].megnevezes<nodesCikkekTomb[2].megnevezes) {
			var nodesCikkekTombMegnevDesc= BuborekosRendezesMegnevezesDesc(nodesCikkekTomb);
			nodeCikkekTablaTBody.innerText = '';
			drawTableToTBodyCikkek(nodesCikkekTombMegnevDesc, nodeCikkekTablaTBody);
			nodeCikkekTabla2TBody.innerText = '';
			drawTableToTBodyCikkekKosarba(nodesCikkekTombMegnevDesc, nodeCikkekTabla2TBody);
		} else {
			var nodesCikkekTombMegnevAsc= BuborekosRendezesMegnevezesAsc(nodesCikkekTomb);
			nodeCikkekTablaTBody.innerText = '';
			drawTableToTBodyCikkek(nodesCikkekTombMegnevAsc, nodeCikkekTablaTBody);
			nodeCikkekTabla2TBody.innerText = '';
			drawTableToTBodyCikkekKosarba(nodesCikkekTombMegnevAsc, nodeCikkekTabla2TBody);
			
		}
	
}

function RendezesArTH_Click_Handler() {
		console.log('Hello');
		console.log(BuborekosRendezesArDesc(nodesCikkekTomb));
		if(nodesCikkekTomb[0].ar<nodesCikkekTomb[1].ar && nodesCikkekTomb[1].ar<nodesCikkekTomb[2].ar) {
			var nodesCikkekTombArDesc= BuborekosRendezesArDesc(nodesCikkekTomb);
			nodeCikkekTablaTBody.innerText = '';
			drawTableToTBodyCikkek(nodesCikkekTombArDesc, nodeCikkekTablaTBody);
			nodeCikkekTabla2TBody.innerText = '';
			drawTableToTBodyCikkekKosarba(nodesCikkekTombArDesc, nodeCikkekTabla2TBody);
		} else {
			var nodesCikkekTombArAsc= BuborekosRendezesArAsc(nodesCikkekTomb);
			nodeCikkekTablaTBody.innerText = '';
			drawTableToTBodyCikkek(nodesCikkekTombArAsc, nodeCikkekTablaTBody);
			nodeCikkekTabla2TBody.innerText = '';
			drawTableToTBodyCikkekKosarba(nodesCikkekTombArAsc, nodeCikkekTabla2TBody);
			
		}
	
}

function RendezesIdTH_Click_Handler() {
		console.log('Hello');
		if(nodesCikkekTomb[0].termekID<nodesCikkekTomb[1].termekID && nodesCikkekTomb[1].termekID<nodesCikkekTomb[2].termekID) {
			var nodesCikkekTombIdDesc= BuborekosRendezesIdDesc(nodesCikkekTomb);
			nodeCikkekTablaTBody.innerText = '';
			drawTableToTBodyCikkek(nodesCikkekTombIdDesc, nodeCikkekTablaTBody);
			nodeCikkekTabla2TBody.innerText = '';
			drawTableToTBodyCikkekKosarba(nodesCikkekTombIdDesc, nodeCikkekTabla2TBody);
		} else {
			var nodesCikkekTombIdAsc= BuborekosRendezesIdAsc(nodesCikkekTomb);
			nodeCikkekTablaTBody.innerText = '';
			drawTableToTBodyCikkek(nodesCikkekTombIdAsc, nodeCikkekTablaTBody);
			nodeCikkekTabla2TBody.innerText = '';
			drawTableToTBodyCikkekKosarba(nodesCikkekTombIdAsc, nodeCikkekTabla2TBody);
			
		}
	
}

function CikkekTablaDiv1SzuresArSzerintKisebb_Change_Handler() {
		var evtTarget = event.target;
		var keresettAr = parseInt(evtTarget.value);
		console.log(keresettAr);
		
		if(isNaN(keresettAr)) {
				alert('Ide számot kell írni!');
			}
		var arSzerintSzurtTermekek = [];	
		for(i=0; i<nodesCikkekTomb.length; i++) {
			if (nodesCikkekTomb[i].ar< keresettAr) {
				arSzerintSzurtTermekek.push(nodesCikkekTomb[i]);				
			}
		}		
		arSzerintSzurtTermekek=BuborekosRendezesArAsc(arSzerintSzurtTermekek);
		nodeCikkekTablaTBody.innerText = '';
		drawTableToTBodyCikkek(arSzerintSzurtTermekek, nodeCikkekTablaTBody);
		
		console.log(arSzerintSzurtTermekek);
		
}

function CikkekTablaDiv2SzuresArSzerintKisebb_Change_Handler() {
		var evtTarget = event.target;
		console.log(evtTarget);
		var keresettAr = parseInt(evtTarget.value);
		console.log(keresettAr);
		
		if(isNaN(keresettAr)) {
				alert('Ide számot kell írni!');
			}
		var arSzerintSzurtTermekek = [];	
		for(i=0; i<nodesCikkekTomb.length; i++) {
			if (nodesCikkekTomb[i].ar< keresettAr) {
				arSzerintSzurtTermekek.push(nodesCikkekTomb[i]);				
			}
		}		
		arSzerintSzurtTermekek=BuborekosRendezesArAsc(arSzerintSzurtTermekek);
		nodeCikkekTabla2TBody.innerText = '';
		drawTableToTBodyCikkekKosarba(arSzerintSzurtTermekek, nodeCikkekTabla2TBody);
		
		console.log(arSzerintSzurtTermekek);
		
}

function CikkekTablaDiv1SzuresArSzerintNagyobb_Change_Handler() {
	var evtTarget = event.target;
		var keresettAr = parseInt(evtTarget.value);
		console.log(keresettAr);
		
		if(isNaN(keresettAr)) {
				alert('Ide számot kell írni!');
			}
		var arSzerintSzurtTermekek = [];	
		for(i=0; i<nodesCikkekTomb.length; i++) {
			if (nodesCikkekTomb[i].ar> keresettAr) {
				arSzerintSzurtTermekek.push(nodesCikkekTomb[i]);				
			}
		}		
		arSzerintSzurtTermekek=BuborekosRendezesArAsc(arSzerintSzurtTermekek);
		nodeCikkekTablaTBody.innerText = '';
		drawTableToTBodyCikkek(arSzerintSzurtTermekek, nodeCikkekTablaTBody);
		
		console.log(arSzerintSzurtTermekek);
	
}

function CikkekTablaDiv2SzuresArSzerintNagyobb_Change_Handler() {
		var evtTarget = event.target;
		console.log(evtTarget);
		var keresettAr = parseInt(evtTarget.value);
		console.log(keresettAr);
		
		if(isNaN(keresettAr)) {
				alert('Ide számot kell írni!');
			}
		var arSzerintSzurtTermekek = [];	
		for(i=0; i<nodesCikkekTomb.length; i++) {
			if (nodesCikkekTomb[i].ar> keresettAr) {
				arSzerintSzurtTermekek.push(nodesCikkekTomb[i]);				
			}
		}		
		arSzerintSzurtTermekek=BuborekosRendezesArAsc(arSzerintSzurtTermekek);
		nodeCikkekTabla2TBody.innerText = '';
		drawTableToTBodyCikkekKosarba(arSzerintSzurtTermekek, nodeCikkekTabla2TBody);
		
		console.log(arSzerintSzurtTermekek);
		
}

function CikkekTablaAdminSzurokTorlese_Click_Handler() {
		nodeCikkekTablaTBody.innerText = '';
		drawTableToTBodyCikkek(nodesCikkekTomb, nodeCikkekTablaTBody);
	
}

function CikkekTablaVasarloSzurokTorlese_Click_Handler() {
		nodeCikkekTabla2TBody.innerText = '';
		drawTableToTBodyCikkekKosarba(nodesCikkekTomb, nodeCikkekTabla2TBody);
	
}

function CikkekTablaDiv1Keresomezo_Change_Handler() {
		var evtTarget = event.target;
				
		var talalatok = [];		
		
		for(var i=0;i<nodesCikkekTomb.length; i++) {
			if (nodesCikkekTomb[i].megnevezes.toLowerCase().indexOf(evtTarget.value.toLowerCase()) != -1){			
				talalatok.push(nodesCikkekTomb[i]);				
			}			
		}		
		nodeCikkekTablaTBody.innerText = '';
		drawTableToTBodyCikkek(talalatok, nodeCikkekTablaTBody);
	
}

function CikkekTablaDiv2Keresomezo_Change_Handler() {
		var evtTarget = event.target;
		
		var talalatok = [];		
		
		for(var i=0;i<nodesCikkekTomb.length; i++) {
			if (nodesCikkekTomb[i].megnevezes.toLowerCase().indexOf(evtTarget.value.toLowerCase()) != -1){			
				talalatok.push(nodesCikkekTomb[i]);				
			}			
		}		
		nodeCikkekTabla2TBody.innerText = '';
		drawTableToTBodyCikkekKosarba(talalatok, nodeCikkekTabla2TBody);
	
}