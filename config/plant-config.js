require('dotenv').config()

module.exports = {    
    api_key: process.env.API_KEY,
    plant_list: process.env.PLANT_LIST,
    plant_details: process.env.PLANT_DETAILS
};