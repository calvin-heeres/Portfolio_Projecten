"use strict"
        const timeDelay = 400; // time delay refresh data
        let refreshTimer = window.setInterval(renderData, timeDelay); // timer data opvragen van server
        
        // jouw persoonlijke URL
        const mijnDataURL = "https://data.softwaredeveloper.amsterdam/api/device/c7f40c1b/latest"; 
        
        const dataDiv = document.getElementById("dataDiv"); // hier komt de data
        
        async function getSensorData() {
            let url = mijnDataURL;
            try {
                let response = await fetch(url);
                return await response.json();
            } catch (error) {
                console.log(error);
            }
        }
        
        async function renderData() {
                let measurementRaw = await getSensorData();
                let measurement = measurementRaw.data[0];
                console.log(measurement);

                 // Nieuwe Javascript date maken met de de datum en tijd van de meting
                 let datum =  new Date(measurement.datum);
               
                 // De meting gegevens wegschrijven naar de div                
                 dataDiv.innerHTML = `<h3></h3><p>Parameters: ${measurement.sensor} 
                    </p><p>Temperatuur: ${measurement.value1}
                    </p><p> Vochtigheid: ${measurement.value2}
                    </p><p> Lichtintensiteit: ${measurement.value3}</p>`;
            }
            
        renderData(); // start immediately