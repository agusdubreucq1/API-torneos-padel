import { config } from "./node_modules/dotenv/lib/main.js";
config();

import express from "express";
import sequelize from "./src/models/conexion.ts";
import Torneos from "./src/models/torneo.ts";
import Jugadores from "./src/models/jugador.ts";


const app = express();

app.get("/", (req, res) => {
  res.send("hola");
});

app.listen(3000, async () => {

  try {
    // sequelize.authenticate();
    // 
    
    await sequelize.sync({alter:true});
    // await Jugadores.sync({alter:true});
    // await Torneos.sync({alter:true});
    // sequelize.sync({})
    // Torneos.findAll({})
  } catch (e) {
    console.log(e);
  }
  console.log("escuchando http://localhost:3000");
});
