// script.js

var keyword = ""; // Variable to store the search keyword

function updateKeyword(value) {
  keyword = value;
}

function performSearch() {
  var filteredPacks = packs.filter(function (pack) {
    return (
      pack.name.toLowerCase().includes(keyword.toLowerCase()) ||
      pack.description.toLowerCase().includes(keyword.toLowerCase())
    );
  });

  updatePacks(filteredPacks);
}

function updatePacks(filteredPacks) {
  var container = document.getElementById("container");
  container.innerHTML = ""; // Clear the container before updating

  for (var i = 0; i < filteredPacks.length; i++) {
    var pack = filteredPacks[i];
    var img1 = imgs[i];

    // Create anchor element
    var anchor = document.createElement("a");
    anchor.href = "redirect.html"; // Set the href attribute
    anchor.target = "_blank";

    // Create div element
    var div = document.createElement("div");
    div.className = "pack";
    div.style.display = "inline-block";

    // Create h1 element for image
    var img = document.createElement("img");
    img.src = img1;
    //img.style.height = "50%";
    //img.style.width = "50%";
    // Create h1 element for pack name
    var h1 = document.createElement("h1");
    h1.textContent = pack.name;

    // Create h2 element for pack description
    var h2 = document.createElement("h2");
    h2.textContent = pack.description;

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(h2);

    anchor.appendChild(div); // Append div to anchor
    container.appendChild(anchor); // Append anchor to container

    anchor.addEventListener(
      "click",
      (function (index) {
        return function () {
          // Access the clicked pack information using the index
          var clickedPack = filteredPacks[index];
          var clickedImg = imgs[index];
          console.log(clickedImg);
          localStorage.setItem(
            "clickedPack",
            JSON.stringify(clickedPack)
          );
          localStorage.setItem(
            "clickedImg",
            JSON.stringify(clickedImg)
          );
        };
      })(i)
    );
  }
}
