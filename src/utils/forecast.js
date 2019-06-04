const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/623e65b79ebb12ecd7ae278df1e1a138/'+ encodeURIComponent(latitude) +',' + encodeURIComponent(longitude) + '?units=si'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                rainChance: body.currently.precipProbability,
                summary: body.daily.data[0].summary,
                high: body.daily.data[0].temperatureHigh,
                low: body.daily.data[0].temperatureLow

            })
        }
    })
}

module.exports = forecast