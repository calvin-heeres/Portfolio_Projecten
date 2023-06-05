const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let directionButtons = {
    "noord": document.getElementById('KnopNoord'),
    "oost": document.getElementById('KnopOost'),
    "zuid": document.getElementById('KnopZuid'),
    "west": document.getElementById('KnopWest')
}

let current_index = 0;

let locaties = [ // Array
    { // 0 = object
      "title":"spot 1",
      "image":"img/1.jpg",
      "directions": {
          "oost" : 16,
          "west" : 32,
          "zuid" : 1
        }
      },
      { // 1 = Object
      "title":"spot 2",
      "image":"img/2.jpg",
      "directions" : {
          "zuid" : 2,
          "noord" : 0
        }
      },
      {
      "title":"spot 3",
      "image":"img/3.jpg",
      "directions" : {
          "noord": 1,
          "oost": 3,
          "west": 17
  
        }
      },
      {
      "title":"spot 4",
      "image":"img/4.jpg",
      "directions" : {
          "oost" :4 ,
          "west": 2
        }
      },
      {
      "title":"spot 5",
      "image":"img/5.jpg",
      "directions" : {
        "oost" :5 ,
        "west": 3
        }
      },
      {
      "title":"spot 6",
      "image":"img/6.jpg",
      "directions" : {
        "oost" :6 ,
        "west": 4
        }
      },
      {
      "title":"spot 7",
      "image":"img/7.jpg",
      "directions" : {
        "oost" :7 ,
        "west": 5
        }
      },
      {
      "title":"spot 8",
      "image":"img/8.jpg",
      "directions" : {
        "oost" :8 ,
        "west": 6
        }
      },
      {
      "title":"spot 9",
      "image":"img/9.jpg",
      "directions" : {
          "noord" : 9,
          "west": 7
        }
      },
      {
      "title":"spot 10",
      "image":"img/10.jpg",
      "directions" : {
        "noord": 10,
        "zuid": 8 
        }
      },
      {
      "title":"spot 11",
      "image":"img/11.jpg",
      "directions" : {
          "noord" : 11,
          "zuid" : 9,
        }
      },
      
  ]

//myTitle.innerHTML = "dit is door het script toegevoegd";
//myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = locaties[index].title;
    myImage.src = locaties[index].image;
    current_index = index;

    //knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    //haal de mogelijke directins op voor de current_index
    let possible = locaties[current_index].directions;

    //Zet de directionkeys in een aparte variabele
    let possible_keys = Object.keys(possible);

    //Zet de keys van de buttons in een aparte variabele
    let button_keys = Object.keys(directionButtons);
    //zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";   
    }

    //zet nu de mogelijke knoppen aan
    for(const key of possible_keys){
      directionButtons[key].style.visibility = 'visible';
    }
}

function getinput(){
    show(myInput.value);
    //console.log(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = locaties[current_index].directions[richting]
    show(punt_index);
}

show(0);