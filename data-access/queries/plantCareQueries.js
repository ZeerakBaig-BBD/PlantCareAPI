exports.getPlantCare = `SELECT sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantEnvironment FROM plantcarerequirement WHERE plantId = ?`;
