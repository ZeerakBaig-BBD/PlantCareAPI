const plantcareQueries = require('../data-access/queries/plantcareQueries');
const connection = require('../data-access/db').con;

class PlantCare{
    constructor({sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantEnvironment, plantId}) {
        this.sunlightRequirement = sunlightRequirement;
        this.waterRequirement = waterRequirement;
        this.suitableRegion = suitableRegion;
        this.suitableWeather = suitableWeather;
        this.plantEnvironment = (plantEnvironment == 1)?true:false;
        this.plantId = plantId;
    }

    async getPlantCare({plantId}) {
        return new Promise((resolve, reject) => {
            connection.query(plantcareQueries.getPlantCare, [plantId] , (err, result, fields) => {
                if (err) {
                    reject(err);
                } else {
                    let plantcare = {};
                    if (result.length != 0) {
                      plantcare = new PlantCare(result[0]);
                    } else {
                      resolve(false);
                    }
                    resolve(plantcare);
                }
            });
        });
    }
}

module.exports = {PlantCare}