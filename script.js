//file name diri
var imgs = ["img1","img2","img3","img4","img5","img6"];
var packs = [
    { img:"image file name",name: "Pack 1", description: "Description for Pack 1",reviews:[{star: 5,description:"very nice"},{star: 4,description:"very nice"}] },
    { img:"image file name",name: "Pack 2", description: "Description for Pack 2",reviews:[{star: 5,description:"very nice"},{star: 4,description:"very nice"}]  },
    { img:"image file name",name: "Pack 3", description: "Description for Pack 3" ,reviews:[{star: 5,description:"very nice"}]},
    { img:"image file name",name: "Pack 4", description: "Description for Pack 4",reviews:[{star: 5,description:"very nice"},{star: 4,description:"very nice"}] },
    { img:"image file name",name: "Pack 5", description: "Description for Pack 5" ,reviews:[{star: 5,description:"very nice"}]},
    { img:"image file name",name: "Pack 6", description: "Description for Pack 6",reviews:[{star: 5,description:"very nice"},{star: 4,description:"very nice"}] }
];

var container = document.getElementById('container');

for (var i = 0; i < packs.length; i++) {
    var pack = packs[i];
    var img1 = imgs[i]
    // Create anchor element
    var anchor = document.createElement("a");
    anchor.href = "redirect.html"; // Set the href attribute
    anchor.target = "_blank";
    // Create div element
    var div = document.createElement("div");
    div.className = "pack";
    div.style.display = "inline-block";
    //usba ug img diri

    var img = document.createElement("h1")
    img.textContent = img1;

    var h1 = document.createElement("h1");
    h1.textContent = pack.name;

    var h2 = document.createElement("h2");
    h2.textContent = pack.description;

    div.appendChild(img);
    div.appendChild(h1);
    div.appendChild(h2);
    

    anchor.appendChild(div); // Append div to anchor
    container.appendChild(anchor); // Append anchor to container

    anchor.addEventListener("click", function (index) {
        return function () {
            // Access the clicked pack information using the index
            var clickedPack = packs[index];
            var clickedImg = imgs[index];
            console.log(clickedImg);
            localStorage.setItem("clickedPack", JSON.stringify(clickedPack));
            localStorage.setItem("clickedImg", JSON.stringify(clickedImg));
        };
    }(i));

    
}