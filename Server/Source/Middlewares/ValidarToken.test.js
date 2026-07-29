import { describe, it, expect, vi, beforeEach } from 'vitest';
import jwt from 'jsonwebtoken';
import { AutenticacionRequerida } from './ValidarToken.js';

// Mock jsonwebtoken
vi.mock('jsonwebtoken');

describe('AutenticacionRequerida Middleware', () => {
    let req;
    let res;
    let next;

    beforeEach(() => {
        req = {
            cookies: {}
        };
        res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn()
        };
        next = vi.fn();

        // Reset mocks before each test
        vi.clearAllMocks();

        // Mock process.env.TOKEN_SECRET
        process.env.TOKEN_SECRET = 'test_secret';
    });

    it('should return 401 if no token is provided', () => {
        AutenticacionRequerida(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: '⚠️ ¡No estas autorizado!' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should return 403 if token is invalid (jwt.verify throws error)', () => {
        req.cookies.Token = 'invalid_token';

        // Mock jwt.verify to return an error
        jwt.verify.mockImplementation((token, secret, callback) => {
            callback(new Error('Invalid token'), null);
        });

        AutenticacionRequerida(req, res, next);

        expect(jwt.verify).toHaveBeenCalledWith('invalid_token', 'test_secret', expect.any(Function));
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({ message: '⚠️ ¡No estas autorizado!' });
        expect(next).not.toHaveBeenCalled();
    });

    it('should call next and set req.Usuario if token is valid', () => {
        req.cookies.Token = 'valid_token';
        const mockUsuario = { id: 1, username: 'testuser' };

        // Mock jwt.verify to succeed and return a user
        jwt.verify.mockImplementation((token, secret, callback) => {
            callback(null, mockUsuario);
        });

        AutenticacionRequerida(req, res, next);

        expect(jwt.verify).toHaveBeenCalledWith('valid_token', 'test_secret', expect.any(Function));
        expect(req.Usuario).toEqual(mockUsuario);
        expect(next).toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
    });
});
