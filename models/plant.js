var config = require('../config/plant-config');
const plantQueries = require('../data-access/queries/plantQueries');
const {PlantCare} = require('./plantCare');
const connection = require('../data-access/db').con;

class Plant{
    constructor({plantId, plantApiId, plantName, scientificName, otherName, plantImage, plantType}) {
        this.plantId = plantId;
        this.plantApiId = plantApiId;
        this.plantName = plantName;
        this.scientificName = scientificName;
        this.otherName = otherName;
        this.plantImage = plantImage;
        this.plantType = plantType;
    }

    async getPlantList() {
        return new Promise((resolve, reject) => {
            connection.query(plantQueries.getPlants, (err, result, fields) => {
                if (err) {
                    reject(err);
                } else {
                    let plantArray = [];
                    if (result.length != 0) {
                        result.map(plant => {plantArray.push( new Plant(plant));})
                    } else {
                      resolve(false);
                    }
                    resolve(plantArray);
                }
            });
        });
    }

    async getPlantById({plantId}) {
        return new Promise((resolve, reject) => {
            connection.query(plantQueries.getPlantById, [plantId] , (err, result, fields) => {
                if (err) {
                    reject(err);
                } else {
                    let plant = {};
                    if (result.length != 0) {
                      plant = new Plant(result[0]);
                      plant.plantId = plantId;
                      let plantCare = new PlantCare(plant);
                      plantCare.getPlantCare(plantCare)
                      .then((responseData) => {
                        plant.plantCare = responseData
                        resolve(plant);
                      });
                    } else {
                      resolve(false);
                    }
                }
            });
        });
    }

    async getPlantByName(plantName) {
        plantName = `%${plantName}%`;
        return new Promise((resolve, reject) => {
            connection.query(plantQueries.getPlantByName, [plantName, plantName, plantName] , (err, result, fields) => {
                if (err) {
                    reject(err);
                } else {
                    let plantArray = [];
                    if (result.length != 0) {
                        result.map(plant => {plantArray.push( new Plant(plant));})
                    } else {
                        resolve(false);
                    }
                    resolve(plantArray);
                }
            });
        });
    }
    
    async insertPlant({plantApiId, plantName, scientificName, otherName, plantImage, plantType}) {
        return new Promise((resolve, reject) => {
            connection.query(plantQueries.insertPlant, [plantApiId, plantName, scientificName, otherName, plantImage, plantType] , (err, result, fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });
    }
}

// async function getPlantList(query) {

//     const params = new URLSearchParams();
//     if (!isNaN(query)) {
//         params.append('page', query);   
//     }
//     else{
//         params.append('q', query);
//     }
//     params.append('key', config.api_key);

//     const response = await fetch(`${config.plant_list}?${params}`);
//     return await response.json();
// }

// async function getPlantDetails(plantId = 1) {

//     const params = new URLSearchParams();
//     params.append('key', config.api_key);
//     const response = await fetch(`${config.plant_details}${plantId}?${params}`);
//     return await response.json();
// }

module.exports = {Plant}