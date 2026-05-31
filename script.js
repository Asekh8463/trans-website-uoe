window.addEventListener('scroll', function() {
    // Get window height, scroll position, and total document height
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Check if at bottom (with a small buffer for precision)
    if (windowHeight + scrollPosition >= documentHeight - 10) {
        // Do something when at bottom
        console.log('At the bottom!');
        //loadMoreContent(); // Your function here
    }
});


function changeopac1()
{
	document.getElementById("downbtn").src = "assets/down.png";
}

function returnopac1()
{
	document.getElementById("downbtn").src = "assets/downlop.png";
}

function changeopac2()
{
	document.getElementById("upbtn").src = "assets/up.png";
}

function returnopac2()
{
	document.getElementById("upbtn").src = "assets/uplop.png";
}

function movedown()
{
	if(document.getElementById("page9").style.display == "block")
	{
		console.log("end!");
	}
	if(document.getElementById("page8").style.display == "block")
	{
		document.getElementById("page8").style.display = "none";
		document.getElementById("page9").style.display = "block";
	}
	if(document.getElementById("page7").style.display == "block")
	{
		document.getElementById("page7").style.display = "none";
		document.getElementById("page8").style.display = "block";
	}
	if(document.getElementById("page6").style.display == "block")
	{
		document.getElementById("page6").style.display = "none";
		document.getElementById("page7").style.display = "block";
	}
	if(document.getElementById("page5").style.display == "block")
	{
		document.getElementById("page5").style.display = "none";
		document.getElementById("page6").style.display = "block";
	}
	if(document.getElementById("page4").style.display == "block")
	{
		document.getElementById("page4").style.display = "none";
		document.getElementById("page5").style.display = "block";
	}
	if(document.getElementById("page3").style.display == "block")
	{
		document.getElementById("page3").style.display = "none";
		document.getElementById("page4").style.display = "block";
	}
	if(document.getElementById("page2").style.display == "block")
	{
		document.getElementById("page2").style.display = "none";
		document.getElementById("page3").style.display = "block";
	}
	if(document.getElementById("page1").style.display == "block")
	{
		document.getElementById("page1").style.display = "none";
		document.getElementById("page2").style.display = "block";
	}
}

function moveup()
{
	if(document.getElementById("page1").style.display == "block")
	{
		console.log("start!");
	}
	if(document.getElementById("page2").style.display == "block")
	{
		document.getElementById("page1").style.display = "block";
		document.getElementById("page2").style.display = "none";
	}
	if(document.getElementById("page3").style.display == "block")
	{
		document.getElementById("page2").style.display = "block";
		document.getElementById("page3").style.display = "none";
	}
	if(document.getElementById("page4").style.display == "block")
	{
		document.getElementById("page3").style.display = "block";
		document.getElementById("page4").style.display = "none";
	}
	if(document.getElementById("page5").style.display == "block")
	{
		document.getElementById("page4").style.display = "block";
		document.getElementById("page5").style.display = "none";
	}
	if(document.getElementById("page6").style.display == "block")
	{
		document.getElementById("page5").style.display = "block";
		document.getElementById("page6").style.display = "none";
	}
	if(document.getElementById("page7").style.display == "block")
	{
		document.getElementById("page6").style.display = "block";
		document.getElementById("page7").style.display = "none";
	}
	if(document.getElementById("page8").style.display == "block")
	{
		document.getElementById("page7").style.display = "block";
		document.getElementById("page8").style.display = "none";
	}
	if(document.getElementById("page9").style.display == "block")
	{
		document.getElementById("page8").style.display = "block";
		document.getElementById("page9").style.display = "none";
	}
}




function onload1()
{
	document.getElementById("page1").style.display = "none";
	document.getElementById("page2").style.display = "none";
	document.getElementById("page3").style.display = "none";
	document.getElementById("page4").style.display = "none";
	document.getElementById("page5").style.display = "none";
	document.getElementById("page6").style.display = "none";
	document.getElementById("page7").style.display = "none";
	document.getElementById("page8").style.display = "none";
	document.getElementById("page9").style.display = "block";
}


