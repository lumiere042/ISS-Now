
async function getISSLocation(){
    const res = await fetch('http://api.open-notify.org/iss-now.json');
    const data = await res.json();

    console.log(data.iss_position)

    let latitude = data.iss_position.latitude;
    let longitude = data.iss_position.longitude;

    // console.log(`${latitude} ${longitude}`)

    const request = {
        method: 'GET',
    };
    const API_KEY = '5d87a81d061548ec8a1a1cba7407d556'

    const geoCodeRes = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${API_KEY}`)
    const geoCodeData = await geoCodeRes.json()

    let issLocation = geoCodeData.features[0].properties.address_line1

    console.log(geoCodeData) 
    console.log(`The ISS is currently floating above ${issLocation}`)
    console.log()
}

getISSLocation()

