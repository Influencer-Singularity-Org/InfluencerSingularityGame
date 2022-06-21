window.onload = () =>
{
	var daysText = document.getElementById("digititle");
	var daysLocal = localStorage.getItem("day");
	if (!daysLocal) daysLocal = 1;
	daysText.innerText = 100-daysLocal+1 + " DAYS REMAINING...";
}

function phaser_game()
{
	let name = prompt("User name");
	if (name != "null") // Al apretar cancel, no fa res
	{
		var nameProcessed = name.replace(/\s/g, ''); // Esborra els espais del nom en una variable temporal
		while (nameProcessed.length == 0) // Si el string resultant es buit, el nom no es valid
		{
			alert("Please enter a valid name")
			name = prompt("User name");
			if (name == "null") return;
			nameProcessed = name.replace(/\s/g, '');
		}
		localStorage.setItem("username", name);
		if (!localStorage.getItem("day"))
		{
			localStorage.setItem("day", 1);
		}

		loadpage("./html/phasergame.html");
	}
}

function options()
{
	loadpage("./html/options.html");
}

function load()
{
	loadpage("./html/load.html");
}

/*
function exit ()
{
	var nameProcessed = name.replace(/\s/g, '') // Esborra els espais del nom en una variable temporal
	if (nameProcessed != "" && nameProcessed != "null")
	{
		alert("Leaving " + name + "'s game");
	}
	name = "";
}
*/

function imgAnim(logo)
{
	logo.src = "./resources/logo_anim.gif"
}

function imgStill(logo)
{
	logo.src = "./resources/logo.svg"
}