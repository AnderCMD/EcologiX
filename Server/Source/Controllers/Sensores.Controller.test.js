import { jest } from '@jest/globals';

jest.unstable_mockModule('../Models/Sensor.Model.js', () => {
    const mockSave = jest.fn();
    return {
        default: jest.fn().mockImplementation(() => ({
            save: mockSave
        })),
        mockSave // Exported for assertions
    };
});

const { CrearSensor } = await import('./Sensores.Controller.js');
const { default: SensorModel, mockSave } = await import('../Models/Sensor.Model.js');

describe('CrearSensor', () => {
    let req;
    let res;

    beforeEach(() => {
        req = {
            body: {
                Nombre: 'Test Sensor',
                Descripcion: 'Test Desc',
                Puerto: 'COM1',
                Velocidad_Transmision: 9600,
                Imagen: 'test.jpg'
            },
            Usuario: {
                ID: 'user123'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        jest.clearAllMocks();
    });

    it('should create a sensor successfully and return 201', async () => {
        const mockSensorData = { ...req.body, _id: 'sensor123', Usuario: req.Usuario.ID };
        mockSave.mockResolvedValueOnce(mockSensorData);

        await CrearSensor(req, res);

        expect(SensorModel).toHaveBeenCalledWith({
            Nombre: 'Test Sensor',
            Descripcion: 'Test Desc',
            Puerto: 'COM1',
            Velocidad_Transmision: 9600,
            Imagen: 'test.jpg',
            Usuario: 'user123'
        });
        expect(mockSave).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockSensorData);
    });

    it('should handle errors and return 500 status', async () => {
        const errorMessage = 'Database error';
        mockSave.mockRejectedValueOnce(new Error(errorMessage));

        await CrearSensor(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
    });
});
