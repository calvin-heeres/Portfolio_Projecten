let allGames = document.getElementsByClassName ("game"); 
let filters = document.getElementsByClassName ("filter");

window.scrollTo(0,0);

setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 1500);


for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}

// soulslike filter
let FPSFilter = document.getElementById("checkbox-FPS");
FPSFilter.onchange = function(){
     if(FPSFilter.checked === true){
        for (let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "FPS"){
            allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "FPS"){
            allGames[i].style.display = "none";
            }
        }
    }
}

let RPGFilter = document.getElementById ("checkbox-RPG") ;
RPGFilter.onchange = function(){
    if(RPGFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){ 
            if(allGames[i].dataset.category === "RPG"){ 
                allGames[i].style.display = "block"; 
            } 
        }
    }
    else { 
        for(let i = 0; i < allGames.length; i++){ 
            if(allGames[i].dataset.category === "RPG"){
                allGames[i].style.display = "none";
            }
        }
    }
}


let SLGFilter = document.getElementById ("checkbox-SLG") ;
SLGFilter.onchange = function(){
    if(SLGFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){ 
            if(allGames[i].dataset.category === "SLG"){ 
                allGames[i].style.display = "block"; 
            } 
        }
    }
    else { 
        for(let i = 0; i < allGames.length; i++){ 
            if(allGames[i].dataset.category === "SLG"){
                allGames[i].style.display = "none";
            }
        }
    }
}