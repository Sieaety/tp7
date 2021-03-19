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
function Recipe (recipeTitle, imageURL, contributorName, commentText, recipeLink, photoAttribution, ingredientFile, equipmentFile, directionsFile) {
  this.title = recipeTitle;
  this.imgsrc = imageURL;
  this.contributor = contributorName;
  this.comment = commentText;
  this.link = recipeLink;
  this.attribute = photoAttribution;
  this.ingredients = ingredientFile;
  this.equipment = equipmentFile;
  this.directions = directionsFile;

   
  this.displayRecipe = function() {
    document.querySelector("#title").innerHTML = this.title;
    document.querySelector("#contribute").innerHTML = "Contributed by " + this.contributor;
    document.querySelector("#comment").innerHTML = this.comment;
    document.querySelector("img").src = this.imgsrc;
    document.querySelector("#recipeLink").innerHTML = "<span>Original recipe at " + this.link;
    document.querySelector("#photoAttribution").innerHTML = "Photo by " + this.attribute;
    
    loadFileInto(this.ingredients, "ingredients");
    loadFileInto(this.equipment, "equipment");
    loadFileInto(this.directions, "directions");
  }
}

SoftPretzels = new Recipe(
	"Soft Pretzels", 
	"https://sieaety.com/tp4/images/pretzel.jpg",
	"Kristine Zorn",
  '"My father and brother beg for these pretzels every week. They\'re just that good!"',
  "<a href='https://www.foodnetwork.com/recipes/alton-brown/homemade-soft-pretzels-recipe-1948242'>foodnetwork.com</a>.",
  "<a href='https://unsplash.com/@pear?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Pierre Gui</a> on <a href='https://unsplash.com/s/photos/pretzel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Unsplash</a></span>",
	"ingredients.html",
	"equipment.html",
	"directions.html"
);

Cookies = new Recipe(
	"Triple Choclate Chunk Cookies", 
	"https://sieaety.com/tp4/images/cookies.jpg",
	"Jaclyn Seifert",
  '"This cookie recipe will melt in you mouth. After you eat this cookie you will never want to eat anything else again."',
  "<a href='https://www.allrecipes.com/recipe/278882/triple-chocolate-chunk-cookies/'>AllRecipes.com</a>.",
  "<a href='https://unsplash.com/@starvingartistfoodphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Christina Branco</a> on <a href='/s/photos/cookies?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>",
	"cookie-ingredients.html",
	"cookie-equipment.html",
	"cookie-directions.html"
);

Crepe = new Recipe(
	"Easy Crepes", 
	"https://sieaety.com/tp4/images/crepe.jpg",
	"Katelyn Gorman ",
  '"The perfect crepe recipe to make for any occasion and completely delicious!"',
  "<a href= 'https://www.iheartnaptime.net/perfect-crepe-recipe/'>www.iheartnaptime.net</a>.",
  "<a href='https://unsplash.com/@sklepacki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Stephanie Klepacki</a> on <a href='/s/photos/crepes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>",
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