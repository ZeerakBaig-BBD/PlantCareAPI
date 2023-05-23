const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const plantRoute = require("./routes/plant");
const userplantRoute = require("./routes/userplant");
const redirectRoute = require("./routes/redirect");


const db = require("./data-access/db");
const config = require('./config/config.js');

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
        name: "Authentication",
        description: "API endpoints for creating keys",
      },
      {
        name: "User",
        description: "API endpoints for managing users",
      },
      {
        name: "Plant",
        description: "API endpoints for managing plants",
      },
      {
        name: "User Plants",
        description: "API endpoints for managing user's plants",
      },
    ],
  },
  apis: [
    "./routes/auth.js",
    "./routes/user.js",
    "./routes/plant.js",
    "./routes/userplant.js",
  ],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/v1/authentication", authRoute);
app.use("/v1/users", userRoute);
app.use("/v1/plants", plantRoute);
app.use("/v1/user/plants", userplantRoute);
app.use("/", redirectRoute);
app.use("*", redirectRoute);


// Start the server
app.listen(config.port, () => {
  db.connect();
  console.log(`API started successfully.\nApp listening at http://localhost:${config.port}`);
})
