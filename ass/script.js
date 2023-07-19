//  Create a variable and call it 'modal'
let modal;

//  Make 'modal' equal to the HTML DOM element with the id 'welcomeModal' (which we will create later on)
document.addEventListener('DOMContentLoaded', function () {
  modal = document.getElementById('welcomeModal');
});

//  Create a Function called 'modalOpen()'
function modalOpen() {
  // Step 5: Inside this function, set the style display for the 'modal' variable to 'block'
  modal.style.display = 'block';
}

//  Now create a new Function called 'modalClose()'
function modalClose() {
//  Inside this function, set the style display for the 'modal' variable to 'none'
  modal.style.display = 'none';
}


var para = document.createElement("p2");
		var text = document.createTextNode("Plz click again");
		para.appendChild(text);
		// Design the information shown when clicked for different times
		var i =0;
		function myclick(){
			if(i==0){
				var parent = document.getElementById("box");
				parent.appendChild(para);
				i++;
			}else if(i==1){
				document.getElementById("p1").innerHTML="I'm Tony and this is my first website";
				para.style.display="none";
				i++;
			}else if(i==2){
				document.getElementById("p1").innerHTML="Thanks for visiting!";
				i++;
			}else if(i==3){
				document.getElementById("box").style.display="none";
			}
		}

