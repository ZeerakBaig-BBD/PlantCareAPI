USE PlantDB;
/*Insert statements for User*/
insert into AppUser (username,email,passcode, city, province) values ('nchild0','nchild0@ameblo.jp', 'ePOMNxAH', 'Johannesburg', 'Gauteng');
insert into AppUser (username,email,passcode, city, province) values ('jlongbothom1','jlongbothom1@goodreads.com', 'Na4xA8Cc8e', 'Johannesburg', 'Gauteng');
insert into AppUser (username,email,passcode, city, province) values ('gmaltster2','gmaltster2@google.it', 'mUBYrKSbJl', 'Johannesburg', 'Gauteng');
insert into AppUser (username,email,passcode, city, province) values ('ooliveras3','ooliveras3@time.com', 'gqIE2jXiflI', 'Johannesburg', 'Gauteng');
insert into AppUser (username,email,passcode, city, province) values ('jnormanvell4','jnormanvell4@ed.gov', 'bBjzNXkep5A', 'Johannesburg', 'Gauteng');
insert into AppUser (username,email,passcode, city, province) values ('gpetzolt5','gpetzolt5@webeden.co.uk', 'cfqBGCB', 'Johannesburg', 'Gauteng');
insert into AppUser (username,email,passcode, city, province) values ('nperschke6','nperschke6@aboutads.info', 't3C9A8', 'Johannesburg', 'Gauteng');
insert into AppUser (username,email,passcode, city, province) values ('mwilley7','mwilley7@msu.edu', 'PKk2tA', 'Johannesburg', 'Gauteng');
insert into AppUser (username,email,passcode, city, province) values ('cyushachkov8','cyushachkov8@surveymonkey.com', 'se11AgiT5', 'Johannesburg', 'Gauteng');
insert into AppUser (username,email,passcode, city, province) values ('aselborne9','aselborne9@fc2.com', 'kQPau4TH0','Johannesburg', 'Gauteng');


/*Insert statements for Plant Category*/
insert into PlantCategory (categoryName) values ('Poaceae');
insert into PlantCategory (categoryName) values ('Urticaceae');
insert into PlantCategory (categoryName) values ('Poaceae');
insert into PlantCategory (categoryName) values ('Fabaceae');
insert into PlantCategory (categoryName) values ('Euphorbiaceae');
insert into PlantCategory (categoryName) values ('Fabaceae');
insert into PlantCategory (categoryName) values ('Trypetheliaceae');
insert into PlantCategory (categoryName) values ('Rosaceae');
insert into PlantCategory (categoryName) values ('Cyperaceae');
insert into PlantCategory (categoryName) values ('Ericaceae');

/*Insert statements for Plant table*/

insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(1, 'European Silver Fir', 'Abies Alba','Common Silver Fir', 'img1.png', 'tree',1);
insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(2, 'Pyramidalis Silver Fir', 'Abies alba Pyramidalis','Perennia', 'img2.png', 'tree', 2);
insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(3,'White Fir','Abies concolor','Silver Fir','img3.png','tree',3);
insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(4,'Candicans White Fir','Abies concolor Candicans','Colorado Fir','img4.png','tree',4);
insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(5,'Fraser Fir','Abies fraser','Southern Fir','img5.png','tree',5);
insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(6, 'Golden Korean Fir','Abies koreana Aurea','Southern fir','img6.png','tree', 5);
insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(7, 'Alpine Fir','Abies lasiocarpa','Subalpine Fir','img7.png','tree',6);
insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(8, 'Blue Spanish Fir','Abies pinsapo Glauca','Glaucous Spanish Fir','img8.png','tree',7);
insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(9,'Noble Fir','Abies procera','Red Fir','img9.png','tree',7);
insert into Plant (plantApiId, plantName, scientificName, otherName, plantImage, plantType, categoryId) values(10,'Johin Japanese Maple','Acer Johin','Red Full Moon Mapl','img10.png','tree',7);

/*Insert statements for Plant Care Requirements Table*/

insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('full sun', 'Frequent', 'Dry', 'Summer', 1);
insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('part shade', 'Frequent', 'Moist', 'Spring', 2);
insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('partial shade', 'Average', 'Dry', 'Winter', 3);
insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('full sun', 'Not Often', 'Sandy', 'Summer', 4);
insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('full sun', 'Average', 'Moist', 'Winter', 5);
insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('shade', 'Not Often', 'Dry', 'Autumn', 6);
insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('complete shade', 'Average', 'Moist', 'Winter', 7);
insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('full sun', 'Frequent', 'Dry', 'Summer', 8);
insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('shade', 'Frequent', 'Dry', 'Summer', 9);
insert into PlantCareRequirement(sunlightRequirement, waterRequirement, suitableRegion, suitableWeather, plantId) values('full sun', 'Frequent', 'Dry', 'Summer', 10);

/*Insert statements for user plant bridge table*/
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Polemoniaceae', 1, 1);
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Alismataceae', 2, 2);
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Asteraceae', 3, 2);
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Annonaceae', 4, 3);
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Poaceae', 5, 5);
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Scrophulariaceae', 6, 7);
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Iridaceae', 7, 7);
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Primulaceae', 8, 3);
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Poaceae', 9, 9);
insert into UserPlantBridge (plantNickName, plantId, userId) values ('Pittosporaceae', 10, 10);