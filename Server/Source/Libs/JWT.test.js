import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import CrearTokenAcceso from './JWT.js';
import jwt from 'jsonwebtoken';

vi.mock('jsonwebtoken', () => ({
  default: {
    sign: vi.fn(),
  },
}));

describe('CrearTokenAcceso', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env = { ...originalEnv, TOKEN_SECRET: 'test_secret' };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('should resolve with a token on success', async () => {
    const payload = { userId: 123 };
    const expectedToken = 'mocked_token_string';

    jwt.sign.mockImplementation((payload, secret, options, callback) => {
      callback(null, expectedToken);
    });

    const token = await CrearTokenAcceso(payload);

    expect(token).toBe(expectedToken);
    expect(jwt.sign).toHaveBeenCalledWith(
      payload,
      'test_secret',
      { expiresIn: '12h' },
      expect.any(Function)
    );
  });

  it('should reject with an error on failure', async () => {
    const payload = { userId: 123 };
    const expectedError = new Error('mocked error');

    jwt.sign.mockImplementation((payload, secret, options, callback) => {
      callback(expectedError, null);
    });

    await expect(CrearTokenAcceso(payload)).rejects.toThrow(expectedError);
    expect(jwt.sign).toHaveBeenCalledWith(
      payload,
      'test_secret',
      { expiresIn: '12h' },
      expect.any(Function)
    );
  });
});
