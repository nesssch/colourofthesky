function myfn(){
    document.getElementById("hello").innerHTML = "button :3"
}

var totalheight = 0;

function addSky(){
    while(totalheight - window.scrollY < 4000){
        var main = document.getElementById("main");
        const newSky1 = document.createElement("div");
        // const newSky2 = document.createElement("div");
        newSky1.className = "sky lblue-dblue";
        main.appendChild(newSky1);
        totalheight += newSky1.clientHeight;

        console.log("total height = " + totalheight);
        console.log("scroll height = " + window.scrollY);

    }
}
