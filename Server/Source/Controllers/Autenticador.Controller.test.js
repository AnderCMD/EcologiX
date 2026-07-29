import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Registro } from './Autenticador.Controller.js';
import UsuarioModel from '../Models/Usuario.Model.js';
import bcrypt from 'bcryptjs';
import CrearTokenAcceso from '../Libs/JWT.js';

// Mock dependencies
const { mockSave } = vi.hoisted(() => ({
	mockSave: vi.fn(),
}));

vi.mock('../Models/Usuario.Model.js', () => {
	const MockModel = vi.fn().mockImplementation(function(data) {
		this.Usuario = data.Usuario;
		this.Correo = data.Correo;
		this.Password = data.Password;
		this.save = mockSave;
	});
	MockModel.findOne = vi.fn();
	MockModel.findById = vi.fn();
	return {
		default: MockModel,
	};
});

vi.mock('bcryptjs');
vi.mock('../Libs/JWT.js');

describe('Autenticador.Controller - Registro', () => {
	let req, res;

	beforeEach(() => {
		// Reset mocks before each test
		vi.clearAllMocks();

		// Setup request and response mocks
		req = {
			body: {
				Usuario: 'TestUser',
				Correo: 'test@example.com',
				Password: 'password123',
			},
		};

		res = {
			status: vi.fn().mockReturnThis(),
			json: vi.fn(),
			cookie: vi.fn(),
		};
	});

	it('should register a new user successfully (Happy Path)', async () => {
		// Arrange
		UsuarioModel.findOne.mockResolvedValue(null); // User does not exist
		bcrypt.hash.mockResolvedValue('hashedPassword');
		const mockSavedUser = {
			_id: '12345',
			Usuario: 'TestUser',
			Correo: 'test@example.com',
		};

		mockSave.mockResolvedValue(mockSavedUser);

		CrearTokenAcceso.mockResolvedValue('mockToken');

		// Act
		await Registro(req, res);

		// Assert
		expect(UsuarioModel.findOne).toHaveBeenCalledWith({ Correo: 'test@example.com' });
		expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
		expect(UsuarioModel).toHaveBeenCalledWith({
			Usuario: 'TestUser',
			Correo: 'test@example.com',
			Password: 'hashedPassword',
		});
		expect(mockSave).toHaveBeenCalled();
		expect(CrearTokenAcceso).toHaveBeenCalledWith({ ID: '12345' });
		expect(res.cookie).toHaveBeenCalledWith('Token', 'mockToken');
		expect(res.json).toHaveBeenCalledWith({
			ID: '12345',
			Usuario: 'TestUser',
			Correo: 'test@example.com',
		});
	});

	it('should return 400 if user already exists (Edge Case)', async () => {
		// Arrange
		UsuarioModel.findOne.mockResolvedValue({ Correo: 'test@example.com' }); // User exists

		// Act
		await Registro(req, res);

		// Assert
		expect(UsuarioModel.findOne).toHaveBeenCalledWith({ Correo: 'test@example.com' });
		expect(res.status).toHaveBeenCalledWith(400);
		expect(res.json).toHaveBeenCalledWith(['⚠️ Correo ya registrado']);
		expect(bcrypt.hash).not.toHaveBeenCalled();
		expect(mockSave).not.toHaveBeenCalled();
		expect(CrearTokenAcceso).not.toHaveBeenCalled();
	});

	it('should return 500 if an internal error occurs (Error Case)', async () => {
		// Arrange
		const errorMessage = 'Database error';
		UsuarioModel.findOne.mockRejectedValue(new Error(errorMessage));

		// Act
		await Registro(req, res);

		// Assert
		expect(UsuarioModel.findOne).toHaveBeenCalledWith({ Correo: 'test@example.com' });
		expect(res.status).toHaveBeenCalledWith(500);
		expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
	});
});
