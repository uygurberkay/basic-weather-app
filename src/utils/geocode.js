const request = require('postman-request');

const geoCode = (address,callback) =>{
    const token_key = 'pk.eyJ1IjoidXlndXJiZXJrYXkiLCJhIjoiY2xkOTBoMGhmMDJxdjN2bnp6bWh4bHlvdSJ9.55bkeOEB6ncrfaNm2si1Sg'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token_key}&limit=1`
    request({url: url,json:true} , (error,response)=>{
        if(error){
            callback('Unable to connect to location services',undefined)
        }else if(response.body.features.length ===0){
            callback('Unable to find location. Try another search',undefined)
        }else{
            const latitute = response.body.features[0].center[1]
            const longtitute = response.body.features[0].center[0]
            callback(undefined,{
                latitude : response.body.features[0].center[1],
                longtitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode
