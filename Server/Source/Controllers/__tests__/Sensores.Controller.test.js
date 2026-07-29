import { jest } from '@jest/globals';
import SensorModel from '../../Models/Sensor.Model.js';
import { ObtenerSensores } from '../Sensores.Controller.js';

describe('ObtenerSensores', () => {
  let req, res;

  beforeEach(() => {
    req = { Usuario: { ID: '12345' } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('debería obtener los sensores exitosamente', async () => {
    const mockSensores = [{ id: 1, name: 'Sensor 1' }];
    const mockPopulate = jest.fn().mockResolvedValue(mockSensores);
    jest.spyOn(SensorModel, 'find').mockReturnValue({ populate: mockPopulate });

    await ObtenerSensores(req, res);

    expect(SensorModel.find).toHaveBeenCalledWith({ Usuario: '12345' });
    expect(mockPopulate).toHaveBeenCalledWith('Usuario');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockSensores);
    expect(console.log).toHaveBeenCalledWith('✅ ¡Sensores obtenidos exitosamente!');
  });

  it('debería manejar errores y devolver status 500', async () => {
    const error = new Error('Database error');
    const mockPopulate = jest.fn().mockRejectedValue(error);
    jest.spyOn(SensorModel, 'find').mockReturnValue({ populate: mockPopulate });

    await ObtenerSensores(req, res);

    expect(SensorModel.find).toHaveBeenCalledWith({ Usuario: '12345' });
    expect(mockPopulate).toHaveBeenCalledWith('Usuario');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
    expect(console.log).toHaveBeenCalledWith('❌ ¡Error al obtener sensores!');
  });
});
