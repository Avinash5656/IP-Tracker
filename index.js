let checkbtn = document.getElementById('btn');

// checkbtn.onclick = function (){
//     console.log(888)
// };

let city = document.getElementById("city")
let country = document.getElementById("country")
let currency = document.getElementById("currency")
let latitude = document.getElementById("latitude")
let longitude = document.getElementById("longitude")
let version = document.getElementById("version")

checkbtn.addEventListener("click", function () {

    let iptocheck = document.getElementById("ip-input")
    let ip = iptocheck.value

    fetch(`https://ipapi.co/${ip}/json/`)
        .then(res => res.json())
        .then(data => {

            console.log(data)
            version.textContent=`IP-Version: ${data.version}`
            city.textContent=`City : ${data.city}`
            country.textContent=`Country : ${data.country_name}`
            currency.textContent=`Currency : ${data.currency}`
            latitude.textContent=`Latitude : ${data.latitude}`
            longitude.textContent=`Longitude : ${data.longitude}`
            
        })
});

