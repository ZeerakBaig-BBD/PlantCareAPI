const express = require("express");
const db = require("./data-access/db");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const userRoute = require("./routes/user");
// const plantController = require("./controllers/plantController");
// const plantCareController = require("./controllers/plantCareController");
// const userPlantBridgeController = require("./controllers/userPlantBridgeController");

const app = express();
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "API endpoints for managing users",
    },
    tags: [
      {
        name: "User",
        description: "API endpoints for managing users",
      },
      //   {
      //     name: "PlantCare",
      //     description: "API endpoints for managing plants",
      //   },
      //   {
      //     name: "UserPlantBridge",
      //     description: "API endpoints for managing bridging table",
      //   },
    ],
  },
  apis: [
    "./routes/user.js",
    // "./controllers/plantController.js",
    // "./controllers/plantCareController.js",
    // "./controllers/userPlantBridgeController.js",
  ],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Mount userController as middleware
app.use("/users", userRoute);

// Mount plantController as middleware
// app.use("/plants", plantController);

// // Mount plantCareController as middleware
// app.use("/plantcare", plantCareController);

// // Mount userPlantBridge as middleware
// app.use("/bridge", userPlantBridgeController);

// Start the server
const port = 3000; // Specify the port number you want to use
app.listen(port, () => {
  db.connect();
  console.log(`Server is running on port ${port}`);
});
