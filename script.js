 async function abc(){
            var city = document.getElementById("inp").value
            var div = document.getElementById("div")

            var api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25635cc378ddec6539376173e35f0e5d&units=metric`)
            try {
                if (!api.ok) {
                    throw new Error("Invalid City")
                } else {
                    var data = await api.json()
                    console.log(data)
                    div.innerHTML=`
                    <p>Name : ${data.name}</p>
                    <p>Temperature : ${data.main.temp}</p>
                    <p>Humidity : ${data.main.humidity}</p>
                     <p>Pressure : ${data.main.pressure}</p>
                      <p>Wind Speed : ${data.wind.speed}</p>`
                }
            }
            catch(err){
                 div.innerHTML=`
                    <p>Error : ${err.message}</p>`
            }
        }