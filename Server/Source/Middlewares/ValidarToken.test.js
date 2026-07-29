import { jest } from '@jest/globals';
import jwt from 'jsonwebtoken';
import { AutenticacionRequerida } from './ValidarToken.js';

describe('AutenticacionRequerida Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { cookies: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return 401 if no token is provided', () => {
    AutenticacionRequerida(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: '⚠️ ¡No estas autorizado!' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should return 403 if token is invalid', () => {
    req.cookies.Token = 'invalid-token';
    process.env.TOKEN_SECRET = 'test-secret';
    jest.spyOn(jwt, 'verify').mockImplementation((token, secret, callback) => {
      callback(new Error('Invalid token'), null);
    });

    AutenticacionRequerida(req, res, next);
    expect(jwt.verify).toHaveBeenCalledWith('invalid-token', 'test-secret', expect.any(Function));
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: '⚠️ ¡No estas autorizado!' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next and set req.Usuario if token is valid', () => {
    req.cookies.Token = 'valid-token';
    process.env.TOKEN_SECRET = 'test-secret';
    const mockUser = { id: 1, name: 'Test User' };
    jest.spyOn(jwt, 'verify').mockImplementation((token, secret, callback) => {
      callback(null, mockUser);
    });

    AutenticacionRequerida(req, res, next);
    expect(jwt.verify).toHaveBeenCalledWith('valid-token', 'test-secret', expect.any(Function));
    expect(req.Usuario).toEqual(mockUser);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });
});
