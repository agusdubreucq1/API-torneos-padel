import sequelize from "./conexion.ts";
// import { DataType } from "../../node_modules/sequelize/types/data-types";
import { DataTypes, HasMany } from "sequelize";
// import { Torneos } from "./torneo.ts";
import Torneos from "./torneo.ts";

const Jugadores = sequelize.define("Jugadores", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre: {
        type:DataTypes.STRING(50)
    },

    apellido: { 
        type: DataTypes.STRING(50)
    },
})

export default Jugadores;

Jugadores.hasMany(Torneos, { foreignKey: "id_jugador" })