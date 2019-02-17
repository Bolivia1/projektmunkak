function AdminAccessButton_Click_Handler() {
	
		nodeAdminDiv = document.querySelector('#admin');
		nodeArticleDiv = document.getElementById('cikkek');
		nodeVasarloDiv = document.querySelector('#vasarlo');
		
		nodeArticleDeletion = document.getElementById('admin_torol');
		nodeShoppingCartTD = document.getElementById('vevo_kosarba');
		nodesVevoKosar = document.getElementsByClassName('vevoKosar');
		nodesAdminTorol = document.getElementsByClassName('adminTorol');
				
		nodeAdminDiv.setAttribute('style', 'display: inline-block; width: 50%;');
		nodeArticleDiv.setAttribute('style', 'position: absolute; width: 50%; left: 50%');
		nodeVasarloDiv.setAttribute('style', 'display: none;');
		nodeBtnKosarUrit.setAttribute('style', 'display: none;')
		
		for(var i=0; i<nodesVevoKosar.length;i++) {
			nodesVevoKosar[i].setAttribute('style', 'display: none;');
		}
		
		for(var i=0; i<nodesAdminTorol.length;i++) {
			nodesAdminTorol[i].setAttribute('style', 'display: block; width: 100%; height: 100%;');
		}
		
		nodeShoppingCartTD.setAttribute('style', 'display: none;');
		nodeArticleDeletion.setAttribute('style', 'display: block; width: 100%;'); 
		
	}
	
	function ClientAccessButton_Click_Handler() {
	
		nodeAdminDiv = document.querySelector('#admin');
		nodeArticleDiv = document.getElementById('cikkek');
		nodeVasarloDiv = document.querySelector('#vasarlo');
		
		nodeArticleDeletion = document.getElementById('admin_torol');
		nodeShoppingCartTD = document.getElementById('vevo_kosarba');
		nodesVevoKosar = document.getElementsByClassName('vevoKosar');
		nodesAdminTorol = document.getElementsByClassName('adminTorol');
						
		nodeAdminDiv.setAttribute('style', 'display: none;');
		nodeArticleDiv.setAttribute('style', 'width: 50%;');
		nodeVasarloDiv.setAttribute('style', 'position: absolute; display: inline-block; width: 50%; left: 50%');
		nodeBtnKosarUrit.setAttribute('style', 'display: block;')
		
		for(var i=0; i<nodesVevoKosar.length;i++) {
			nodesVevoKosar[i].setAttribute('style', 'display: block;');
		}
						
		for(var i=0; i<nodesAdminTorol.length;i++) {
			nodesAdminTorol[i].setAttribute('style', 'display: none;');
		}
		
		nodeShoppingCartTD.setAttribute('style', 'display: block;');
		nodeArticleDeletion.setAttribute('style', 'display: none;');
		}
	
	function drawArticleTable(){
		nodeArticlesTable = [
			new Termek('0001', 'Camera', 20000, 'design\img\kep1.jpg'),
			new Termek('0002', 'E-book reader', 15000, 'design\img\kep2.jpg'),
			new Termek('0003', 'Typewriter', 3000, 'design\img\kep3.jpg'),
			new Termek('0004', 'Laptop', 3000,'design\img\kep4.jpg'),
			new Termek('0005', 'LED TV', 150000,'design\img\kep5.jpg'),
			new Termek('0006', 'Cellphone', 120000, 'design\img\kep6.jpg'),
			new Termek('0007', 'Smartwatch', 7000, 'design\img\kep7.jpg'),
			new Termek('0008', 'Radio', 4000,'design\img\kep8.jpg'),
			new Termek('0009', 'TV', 600, 'design\img\kep9.jpg')		
		];
		
		
		nodeTBody = document.querySelector('#cikkekTabla tbody');
		
		for (var i=0; i<nodeArticlesTable.length; i++) {
			var nodeTR = document.createElement('tr');
			
			var nodeTD1 = document.createElement('td');
			var nodeTD2 = document.createElement('td');
			var nodeTD3 = document.createElement('td');
			var nodeTD4 = document.createElement('td');
			var nodeTD5 = document.createElement('td');
			var nodeTD6 = document.createElement('td');
			//var nodeIMG = document.createElement('img');
			
			nodeTD1.innerText=nodeArticlesTable[i].termekID;
			nodeTD2.innerText=nodeArticlesTable[i].megnevezes;
			nodeTD3.innerText=nodeArticlesTable[i].ar;
			nodeTD4.innerHTML = '<img src="design/img/kep'+[i+1]+'.jpg">';
			//nodeTD4.innerHTML = '<img src="'+nodeArticlesTable[i].fotoURL+'">';
			//nodeIMG.setAttribute('src', nodeArticlesTable[i].fotoURL);
			nodeTD5.setAttribute('class', 'adminTorol');
			nodeTD5.innerHTML = '<input class=artDelete type="checkbox" >';
			nodeTD6.setAttribute('class', 'vevoKosar');			
			nodeTD6.innerHTML = '<input class="shoppingCart" type="checkbox">'
			
			//nodeTD4.appendChild(nodeIMG);
			
			nodeTR.appendChild(nodeTD1);
			nodeTR.appendChild(nodeTD2);
			nodeTR.appendChild(nodeTD3);
			nodeTR.appendChild(nodeTD4);
			nodeTR.appendChild(nodeTD5);
			nodeTR.appendChild(nodeTD6);
			
			nodeTBody.appendChild(nodeTR);
	
		}
				
		
}

	function BtnNewProduct_Click_Handler() {
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
			nodeArticlesTable.push(objTermek);
			
			nodeArticlesTableJSON = JSON.stringify(nodeArticlesTable);
			console.log(nodeArticlesTableJSON);
			nodeJsonDiv=document.getElementById('json');
			nodeJsonDiv.innerText = nodeArticlesTableJSON;
			
			var nodeTR = document.createElement('tr');
			var nodeTD1 = document.createElement('td');
			var nodeTD2 = document.createElement('td');
			var nodeTD3 = document.createElement('td');
			var nodeTD4 = document.createElement('td');
			var nodeTD5 = document.createElement('td');
			var nodeTD6 = document.createElement('td');
			var nodeIMG = document.createElement('img');
			
			nodeTD1.innerText=objTermek.termekID;
			nodeTD2.innerText=objTermek.megnevezes;
			nodeTD3.innerText=objTermek.ar;
			nodeTD4.innerHTML = '<img src="'+objTermek.fotoURL+'">';
			//nodeIMG.setAttribute('src', objTermek.fotoURL);
			nodeTD5.setAttribute('class', 'adminTorol');
			nodeTD5.setAttribute('style', 'display: block; width: 100%; height: 100%;');
			nodeTD5.innerHTML = '<input class=artDelete type="checkbox" >';
			nodeTD6.setAttribute('class', 'vevoKosar');			
			nodeTD6.innerHTML = '<input class="shoppingCart" type="checkbox">'
			
			nodeTD4.appendChild(nodeIMG);
			
			nodeTR.appendChild(nodeTD1);
			nodeTR.appendChild(nodeTD2);
			nodeTR.appendChild(nodeTD3);
			nodeTR.appendChild(nodeTD4);
			nodeTR.appendChild(nodeTD5);
			nodeTR.appendChild(nodeTD6);
			
			nodeTBody.appendChild(nodeTR);

}

function ArtDelete_Click_Handler() {
		console.log(nodeArticlesTable);
		nodeTR=document.querySelectorAll('#cikkekTabla tbody tr');
		console.log(nodeTR);
		
		for (var i=0; i<nodeArticlesTable.length; i++) {
			if (nodeArtDelete[i].getAttribute('checked')!='false') {
				nodeArticlesTable.splice(nodeArticlesTable[i], 1);
				nodeTBody.removeChild(nodeTR[i]);
			}			
		}
		console.log(nodeArticlesTable);		
	
}

function KosarTablaTorles_Click_Handler() {				
						
		nodeKosarTR=document.querySelectorAll('#kosarTabla tbody tr');
		
		for (var i=0; i<nodesKosarTartalma.length; i++) {
			if (nodeKosarTablaTorles[i].getAttribute('checked')!='false') {
				nodesKosarTartalma.splice(nodesKosarTartalma[i], 1);
				nodeKosarTabla.removeChild(nodeKosarTR[i]);
			}			
		}
		
}

function ShoppingCart_Click_Handler() {
				
		nodesKosarTartalma = [];
		nodeKosarTabla = document.querySelector('#kosarTabla tbody');
		nodeOsszegzes = document.querySelector('#osszegzes');
		for (var i=0; i<nodeShoppingCart.length; i++) {
			if (nodeShoppingCart[i].getAttribute('checked')!='false') {
				nodesKosarTartalma.push(nodeArticlesTable[i]);							
			}
			
		}
	
		
		for (var i=0; i<nodesKosarTartalma.length; i++) {
			
			var nodeTR = document.createElement('tr');
			
			var nodeTD1 = document.createElement('td');
			var nodeTD2 = document.createElement('td');
			var nodeTD3 = document.createElement('td');
			var nodeTD4 = document.createElement('td');			
			
			nodeTD1.innerText=nodesKosarTartalma[i].termekID;
			nodeTD2.innerText=nodesKosarTartalma[i].megnevezes;
			nodeTD3.innerText=nodesKosarTartalma[i].ar;
			nodeTD4.innerHTML = '<input class="kosarTablaTorles" type="checkbox">'
				
			nodeTR.appendChild(nodeTD1);
			nodeTR.appendChild(nodeTD2);
			nodeTR.appendChild(nodeTD3);
			nodeTR.appendChild(nodeTD4);
		
			nodeKosarTabla.appendChild(nodeTR);
			
		}

		
		var osszesen = 0;
		for (var i=0; i<nodesKosarTartalma.length; i++) {
			osszesen += nodesKosarTartalma[i].ar;
		}
		console.log(osszesen);
		
		nodeOsszegzes.innerText = osszesen;
		
		
		
		nodeSzovegKosarUres = document.querySelector('#szovegKosarUres');
		nodeSzovegKosarUres.setAttribute('style', 'opacity: 0');
		
		nodeSzovegKosarTartalma = document.querySelector('#szovegKosarTartalma');
		nodeSzovegKosarTartalma.setAttribute('style', 'opacity: 0');
}



function BtnKosarTartalma_Click_Handler() {
		nodeKosarTablaTartalma = document.querySelector('#kosarTabla');
		nodeKosarTablaTartalma.setAttribute('style', 'visibility: visible');
		
		nodeSzovegKosarUres = document.querySelector('#szovegKosarUres');
		nodeSzovegKosarUres.setAttribute('style', 'opacity: 0');
		
		nodeSzovegKosarTartalma = document.querySelector('#szovegKosarTartalma');
		nodeSzovegKosarTartalma.setAttribute('style', 'opacity: 1');
}

function BtnKosarUrit_Click_Handler() {
	
		nodeKosarTR=document.querySelectorAll('#kosarTabla tbody tr');
		nodeKosarTablaTartalma.setAttribute('style', 'visibility: hidden');
		nodeSzovegKosarUres.setAttribute('style', 'opacity: 1');
		nodeSzovegKosarTartalma.setAttribute('style', 'opacity: 0');
		nodeKosarTfoot=document.querySelector('#kosarTabla tfoot');
		
		
		for (var i=0; i<nodesKosarTartalma.length; i++) {
			nodeKosarTabla.removeChild(nodeKosarTR[i]);
		}
		nodeKosarTablaTartalma.removeChild(nodeKosarTfoot);
	
}