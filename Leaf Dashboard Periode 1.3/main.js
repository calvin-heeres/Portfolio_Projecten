link = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=d09bd6a00bb40655fa75dc89a1f1b806&units=metric&lang=nl";
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    let milliSecondsSindsEpoch = obj.sys.sunrise * 1000;
    let milliSecondsSindsEpoch1 = obj.sys.sunset * 1000;
    datum = new Date(milliSecondsSindsEpoch);
    datum2 = new Date(milliSecondsSindsEpoch1);
    console.log(obj);
    document.getElementById('location').innerHTML = obj.name;
    document.getElementById('weather').innerHTML = obj.weather[0].description;
    document.getElementById('temp').innerHTML = obj.main.temp + "°C";
    document.getElementById('sunset').innerHTML = "zon onder  " + (datum2.toLocaleString());;
    document.getElementById('sunrise').innerHTML = "zon op  " + (datum.toLocaleString());;
}

if(request.status==200){
    console.log("ERROR");
}
request.send();
let datum2;
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=d09bd6a00bb40655fa75dc89a1f1b806&units=metric';
fetch(URL)
  .then(response => response.json())
  .then(weather => {
    console.log(weather);
    let milliSecondsSindsEpoch = weather.sys.sunrise * 1000;
    datum2 = new Date(milliSecondsSindsEpoch);
    console.log(datum2.toLocaleString());
  });

let datum1;
const URL1 = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam&APPID=d09bd6a00bb40655fa75dc89a1f1b806&units=metric';
fetch(URL)
  .then(response => response.json())
  .then(weather => {
    console.log(weather);
    let milliSecondsSindsEpoch1 = weather.sys.sunset * 1000;
    datum1 = new Date(milliSecondsSindsEpoch1);
    console.log(datum.toLocaleString());
  });



var ctx = document.getElementById('myChart');
var stars = [1240.60, 1248.41, 1249.16, 1249.95, 1253.67];
var frameworks = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5'];
  var myChart = new Chart(ctx, {
       type: 'bar',
       data:  {
       labels: frameworks,     
       datasets: [{ 
           label: 'Waterverbruik Maart per m³',
           borderRadius: 0,  
           data: stars,
           backgroundColor: [ 
            "#94c49456", 
            "#94c49456",
            "#94c49456", 
            "#94c49456", 
            "#94c49456" 
            ],
            
            borderColor: [  
                "#94c494", 
                "#94c494", 
                "#94c494", 
                "#94c494",
                "#94c494", 
            ],

            barPercentage: 0.3,
            borderWidth: 02,
            
          
          
        
        }]
    }

    
 }
 )
 

var ctx = document.getElementById('myChart1');
var stars = [250, 500, 1000, 1500, 2000];
var frameworks = ['Januari', 'Februari', 'Maart', 'April', 'Mei'];
  var myChart = new Chart(ctx, {
       type: 'doughnut',
       data:  {
       labels: frameworks,     
       datasets: [{ 
           label: 'Water',
           borderRadius: 0,  
           data: stars,
           backgroundColor: [ 
            "#94c49456", 
            "#94c49456",
            "#94c49456", 
            "#94c49456", 
            "#94c49456" 
            ],

            

           
            
            borderColor: [  
                "#94c494", 
                "#94c494", 
                "#94c494", 
                "#94c494",
                "#94c494", 
            ],

            barPercentage: 0.1,
            borderWidth: 02,
           
            
          
          
        
        }]
    }

    
 }
 )



 var ctx = document.getElementById('myChart2');
var stars = [1325.143, 1327.889, 1332.413, 1334.461, 1337.461];
var frameworks = ['week 1', 'week 2', 'week 3', 'week 4', 'week 5'];
  var myChart = new Chart(ctx, {
       type: 'line',
       data:  {
       labels: frameworks,     
       datasets: [{ 
           label: 'gasverbruik maart in m³',
           borderRadius: 0,
             
           data: stars,
           backgroundColor: [ 
            "#94c49456", 
            "#94c49456",
            "#94c49456", 
            "#94c49456", 
            "#94c49456" 
            ],

            fill: true,
            pointRadius: 2,


            
               
                  
               

          
            

            

           
            
            borderColor: [  
                "#94c494", 
                "#94c494", 
                "#94c494", 
                "#94c494",
                "#94c494", 
            ],

            barPercentage: 0.1,
            borderWidth: 02,


            
           
            
          
          
        
        }]
    }

    
 }
 )

 



 
 
 