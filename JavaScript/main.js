async function consultar(e) {
	var data = {
		id: 3
	};
	try {
		const rta = await fetch('http://jsonplaceholder.typicode.com/posts/1/comments',{
			method: 'GET',
			headers: {
				'Content-type': 'application/json'
			}
		});
		if (!rta.ok) {
			throw new Error('Red Error: ' + rta.status);
		}
		const datos = await rta.json();
		
		console.log( rta.status + "----" + JSON.stringify(datos));
		
		for(let p = 0; p < datos.length ; p++) {
			//Muestra todos los datos del JSON (console.log( p + "--" + JSON.stringify(datos[p])) ;)
			for ( let u in datos[p]) {
				if (datos[p].id == 3 ) {
					console.log( u + "---" + datos[p].email );
					e.value = datos[p].email ;
				}
			} 
		}	
	}catch (error) {
			console.log('Error:', error);
		}	
}
function getData() {
	e = document.getElementById("correo");
	/*var i = document.getElementById("usuario");
	let c = i.value ;
	console.log("---->" + c);
	p = document.getElementsByTagName("p");*/
	consultar(e);
	return (true); 
}