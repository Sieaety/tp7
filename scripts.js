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

window.onload = function() {
  
  loadFileInto("ingredients.html", "ingredients");
  loadFileInto("equipment.html", "equipment");
  loadFileInto("directions.html", "directions");

  //adds new paragraph element to DOM after image
  comment = document.createElement('div');
  comment.className = "comment";
  comment.innerHTML = '<p>"If you have a big family, make sure to triple the batch. Otherwise they will be gone in seconds."</p>';
  console.log(comment);
  body = document.querySelector("body");
  document.body.insertBefore(comment, body.childNodes[6]);

  //changes title font size and color on click
  x = document.querySelector("#title");
  x.style.fontSize = "8vw";
  x.addEventListener("click", function() {
    x.className = "changeColor";
  });

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