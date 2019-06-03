var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active-accordion");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var modals = document.getElementsByClassName("modal");
var minis = document.getElementsByClassName("modal-mini");
var modimgs = document.getElementsByClassName("modal-img");
var j = 0;

for (j = 0; j < modals.length; j++)
{
    console.log(j);
    var mod = modals[j];
    var imaj = modimgs[j];
    minis[j].addEventListener("click", function()
    {
        // var mod = this.nextElementSibling;
        mod.style.display = "block";
        // var imaj = mod.img.children[0];
        imaj.src = this.src;
    })
    var span = document.getElementsByClassName("close")[j];
    span.addEventListener("click", function()
    {
        mod.style.display = "none";
    })
}