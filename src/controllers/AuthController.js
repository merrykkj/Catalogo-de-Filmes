import User from "../models/User.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || 'aH3$dG7@kLp9!zXy2_bN0*Mq8_eRt6(oPv4)uIj1/cW5';

export default class AuthController {
    
    static generateToken(userId) {
        return jwt.sign({ id: userId }, JWT_SECRET, {
            expiresIn: '1d' 
        });
    }

    static async register(req, res) {
        const { email, password } = req.body;
        try {
            const newUser = await User.create({ email, password });
            
            const userResponse = newUser.toJSON();
            delete userResponse.password;
            
            return res.status(201).json({ 
                message: "Usuário registrado com sucesso!",
                user: userResponse
            });
        } catch (err) {
            console.error("ERRO NO REGISTRO:", err); 
            
            if (err.name === 'SequelizeUniqueConstraintError') {
                return res.status(409).json({ error: "O e-mail fornecido já está em uso." });
            }
            
            return res.status(500).json({ error: "Erro interno do servidor ao registrar usuário." });
        }
    }

    static async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(401).json({ message: "Credenciais inválidas." });
            }

            const isPasswordValid = await user.isValidPassword(password); 

            if (!isPasswordValid) {
                return res.status(401).json({ message: "Credenciais inválidas." });
            }

            const token = AuthController.generateToken(user.id);

            return res.status(200).json({ 
                message: "Login realizado com sucesso!",
                token 
            });

        } catch (err) {
            console.error("ERRO INTERNO NA FUNÇÃO LOGIN:", err);
            
            return res.status(500).json({ error: "Erro interno do servidor durante o login." });
        }
    }
}