import sequelize  from "./conexion.ts";
import { DataTypes } from "sequelize";
import  Jugadores from "./jugador.ts";

const Torneos = sequelize.define("torneos", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: { type: DataTypes.STRING(50) },
  fecha: { type: DataTypes.DATE },
  lugar: { type: DataTypes.STRING },
  categoria: { type: DataTypes.STRING },
});

Torneos.hasMany(Jugadores, { foreignKey: "id_torneo" });

console.log("hola")

// Torneos.sync()

// module.exports = Torneos;
export default Torneos
