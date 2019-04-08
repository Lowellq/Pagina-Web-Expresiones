
	var Menu1 = document.getElementById('Menu1');
	var Introduccion = document.getElementById('Introducion');
	var Infija = document.getElementById('Infija');
	var Prefija = document.getElementById('Prefija');
	var Posfija = document.getElementById('Posfija');

function Op1()
{
	

	if(Introduccion.style.display == 'none' || Introduccion.style.display == 'block' || Introduccion.style.display == '')
	{
		Introduccion.style.display = "inline";	
		Infija.style.display = "none";
		Prefija.style.display = "none";
		Posfija.style.display = "none";
		
	} 	
	
}
function Op2()
{


	if(Infija.style.display == 'none' || Infija.style.display == 'block' || Infija.style.display == '')
	{
		Introduccion.style.display = "none";	
		Infija.style.display = "inline";
		Prefija.style.display = "none";
		Posfija.style.display = "none";
		
	} 	
}
function Op3()
{


	if(Prefija.style.display == 'none' || Prefija.style.display == 'block' || Prefija.style.display == '')
	{
		Introduccion.style.display = "none";	
		Infija.style.display = "none";
		Prefija.style.display = "inline";
		Posfija.style.display = "none";
		
	} 	
}
function Op4()
{
	if(Posfija.style.display == 'none' || Posfija.style.display == 'block' || Posfija.style.display == '')
	{
		Introduccion.style.display = "none";	
		Infija.style.display = "none";
		Prefija.style.display = "none";
		Posfija.style.display = "inline";
	} 	
}


