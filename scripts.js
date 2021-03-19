// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // prepares code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) {
      document.getElementById(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange

  // now that everything is set, initiate request
  ajax.send();

}


//generic object constructor
function Recipe (recipeTitle, imageURL, contributorName, ingredientFile, equipmentFile, directionsFile) {
  this.title = recipeTitle;
  this.imgsrc = imageURL;
  this.contributor = contributorName;
  this.ingredients = ingredientFile;
  this.equipment = equipmentFile;
  this.directions = directionsFile;

   
  this.displayRecipe = function() {
    document.querySelector("#title").innerHTML = this.title;
    document.querySelector("#contribute").innerHTML = "Contributed by " + this.contributor;
    document.querySelector("img").src = this.imgsrc;
    
    loadFileInto(this.ingredients, "ingredients");
    loadFileInto(this.equipment, "equipment");
    loadFileInto(this.directions, "directions");
  }
}

SoftPretzels = new Recipe(
	"Soft Pretzels", 
	"https://sieaety.com/tp4/images/pretzel.jpg",
	"Kristine Zorn",
	"ingredients.html",
	"equipment.html",
	"directions.html"
);

Cookies = new Recipe(
	"Triple Choclate Chunk Cookies", 
	"https://sieaety.com/tp4/images/cookies.jpg",
	"Jaclyn Seifert",
	"cookie-ingredients.html",
	"cookie-equipment.html",
	"cookie-directions.html"
);

Crepe = new Recipe(
	"Easy Crepes", 
	"https://sieaety.com/tp4/images/crepe.jpg",
	"Katelyn Gorman ",
	"crepe-ingredients.html",
	"crepe-equipment.html",
	"crepe-directions.html"
);

window.onload = function() {
//allows list visibility to be toggled on and off 
list = document.querySelectorAll(".list");
console.log(list);
list.item(0).addEventListener("click", function() {
  document.querySelector('#ingredients').classList.toggle('hide');
});
list.item(1).addEventListener("click", function() {
  document.querySelector('#equipment').classList.toggle('hide');
});
list.item(2).addEventListener("click", function() {
  document.querySelector('#directions').classList.toggle('hide');
});
}