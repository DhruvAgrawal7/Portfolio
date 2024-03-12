var navanchortags = document.querySelectorAll('nav a');

for(var i=0;i<navanchortags.length;i++){
    navanchortags[i].addEventListener("click",function(event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

        var interval = setInterval(() => {
            var targetCordinates = targetSection.getBoundingClientRect();
            if(targetCordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,100);

        }, 200);
    })
}

var skill_visible = document.getElementById("skills");
var skill_visible_cordinates = skill_visible.getBoundingClientRect();
console.log(skill_visible_cordinates.top);
if(window.scrollY===skill_visible_cordinates){
    console.log("hello");
}