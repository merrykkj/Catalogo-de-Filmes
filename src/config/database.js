import { Sequelize } from "sequelize";

const sequelize = new Sequelize("filmes", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false, 
});

try {
    await sequelize.authenticate();
    console.log("Conexão com o banco MySQL realizada com sucesso!");
} catch (error) {
    console.error("Não foi possível conectar ao banco:", error);
}

export default sequelize;
