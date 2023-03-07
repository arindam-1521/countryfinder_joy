const url = "https://restcountries.com/v3.1/all"
let divv = document.getElementById("ctn")

const apifunc = async () => {
    let response = await fetch(url)
    let result = await response.json()
    let ihtml = ""
    for (x in result) {
        // console.log(result[x])
        ihtml += `<div class="card mx-2 my-2 shadow p-1" style="width: 20rem;border-radius: 20px;">
        <img src="${result[x].flags.png}" class="card-img-top" style="    border-radius: 20px;">
        <div class="card-body">
          <h5 class="card-title">
          <strong>
          Country:
          </strong>
           ${result[x].name.common}</h5>
          <p class="card-text" style="font-size:18px">
          <strong>
          Capital: 
          </strong>
          ${result[x].capital}
          </p>
          <p class="card-text" style="font-size:18px">
          <strong>
          Continent: 
          </strong>
          ${result[x].continents}
          </p>
          <p class="card-text" style="font-size:18px">
          <strong>
          Area: 
          </strong>
          ${result[x].area} sqKm
          </p>
          <p class="card-text" style="font-size:18px">
          <strong>
          Population: 
          </strong>
          ${result[x].population}
          </p>
          <a href="https://www.bing.com/search?q=${result[x].name.common}" class="btn btn-primary" target = "_blank">Go to Google</a>
          <a href="${result[x].maps.googleMaps}" class="btn btn-success">Go to Map</a>
        </div>
      </div>`
    }
    divv.innerHTML = ihtml;
}

apifunc()