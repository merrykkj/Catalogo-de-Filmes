import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

export default class Filme extends Model { }

Filme.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sinopse: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ano_lancamento: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: true
    },
    url_capa: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'filmes', 
    timestamps: true,
    createdAt: 'data_cadastro',
    updatedAt: false
})