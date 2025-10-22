import Filme from "../models/Filme.js";

export default class FilmeController {

    static async getAll(req, res) {
        try {
            const filmes = await Filme.findAll({ raw: true }); 

            const filmesComUrlCapa = filmes.map(filme => {
                const url_capa_completa = filme.url_capa; 
                
                return {
                    ...filme,
                    url_capa: url_capa_completa 
                };
            });

            return res.status(200).send(filmesComUrlCapa);
        } catch (err) {
            return res.status(500).send(err);
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const filme = await Filme.findByPk(id);
            if (!filme) return res.status(404).json({ message: "Filme não encontrado" });
            return res.status(200).send(filme)
        } catch (err) {
            return res.status(500).send(err)
        }
    }

    static async create(req, res) {
        const { titulo, sinopse, ano_lancamento, genero } = req.body;
        const file = req.file; 
        
        let url_capa = null;
        if (file) {
            url_capa = `http://localhost:${process.env.PORT || 3001}/uploads/${file.filename}`;
        }
        
        try {
            const novoFilme = await Filme.create({ titulo, sinopse, ano_lancamento, genero, url_capa });
            return res.status(201).send(novoFilme)
        } catch (err) {
            return res.status(500).send(err)
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { titulo, sinopse, ano_lancamento, genero, url_capa } = req.body;
        try {
            const filme = await Filme.findByPk(id);
            if (!filme) return res.status(404).json({ message: "Filme não encontrado" });
            await filme.update({ titulo, sinopse, ano_lancamento, genero, url_capa });
            return res.status(200).json(filme);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            const deleted = await Filme.destroy({ where: { id } });
            if (!deleted) return res.status(404).json({ message: "Filme não encontrado" });
            return res.status(200).json({ message: "Filme deletado com sucesso" });
        } catch (err) {
            return res.status(500).send(err)
        }
    }
}