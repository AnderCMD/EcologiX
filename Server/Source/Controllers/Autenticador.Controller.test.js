import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Login } from './Autenticador.Controller.js';
import UsuarioModel from '../Models/Usuario.Model.js';
import bcrypt from 'bcryptjs';
import CrearTokenAcceso from '../Libs/JWT.js';

// Mock the dependencies
vi.mock('../Models/Usuario.Model.js', () => {
    return {
        default: {
            findOne: vi.fn(),
        }
    };
});

vi.mock('bcryptjs', () => {
    return {
        default: {
            compare: vi.fn(),
        }
    };
});

vi.mock('../Libs/JWT.js', () => {
    return {
        default: vi.fn(),
    };
});

describe('Login Controller', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                Correo: 'test@example.com',
                Password: 'password123'
            }
        };

        res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn().mockReturnThis(),
            cookie: vi.fn().mockReturnThis()
        };

        // Reset all mocks before each test
        vi.clearAllMocks();
    });

    it('should return 400 if user is not found', async () => {
        // Arrange
        UsuarioModel.findOne.mockResolvedValue(null);

        // Act
        await Login(req, res);

        // Assert
        expect(UsuarioModel.findOne).toHaveBeenCalledWith({ Correo: 'test@example.com' });
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: '⚠️ Correo o contraseña incorrecta' });
    });

    it('should return 400 if password does not match', async () => {
        // Arrange
        const fakeUser = {
            _id: 'user123',
            Usuario: 'TestUser',
            Correo: 'test@example.com',
            Password: 'hashedPassword123'
        };
        UsuarioModel.findOne.mockResolvedValue(fakeUser);
        bcrypt.compare.mockResolvedValue(false);

        // Act
        await Login(req, res);

        // Assert
        expect(UsuarioModel.findOne).toHaveBeenCalledWith({ Correo: 'test@example.com' });
        expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashedPassword123');
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: '⚠️ Contraseña incorrecta' });
    });

    it('should return 200 with user data and set cookie on successful login', async () => {
        // Arrange
        const fakeUser = {
            _id: 'user123',
            Usuario: 'TestUser',
            Correo: 'test@example.com',
            Password: 'hashedPassword123'
        };
        const fakeToken = 'mocked.jwt.token';

        UsuarioModel.findOne.mockResolvedValue(fakeUser);
        bcrypt.compare.mockResolvedValue(true);
        CrearTokenAcceso.mockResolvedValue(fakeToken);

        // Act
        await Login(req, res);

        // Assert
        expect(UsuarioModel.findOne).toHaveBeenCalledWith({ Correo: 'test@example.com' });
        expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashedPassword123');
        expect(CrearTokenAcceso).toHaveBeenCalledWith({ ID: 'user123' });
        expect(res.cookie).toHaveBeenCalledWith('Token', fakeToken);
        expect(res.json).toHaveBeenCalledWith({
            ID: 'user123',
            Usuario: 'TestUser',
            Correo: 'test@example.com'
        });
    });

    it('should return 500 if an exception is thrown', async () => {
        // Arrange
        const errorMessage = 'Database connection failed';
        UsuarioModel.findOne.mockRejectedValue(new Error(errorMessage));

        // Act
        await Login(req, res);

        // Assert
        expect(UsuarioModel.findOne).toHaveBeenCalledWith({ Correo: 'test@example.com' });
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
    });
});
