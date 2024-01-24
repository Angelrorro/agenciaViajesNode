// controladores.test.js

import {
    paginaInicio
} from './controllers/paginasController';

describe('Pruebas de página de inicio', () => {
    test('Debería renderizar la página de inicio correctamente', async () => {
        // Simulamos la solicitud y la respuesta utilizando mocks
        const req = {};
        const res = {
            render: jest.fn()
        };

        await paginaInicio(req, res);

        // Verificamos que la función render se llamó con los parámetros correctos
        expect(res.render).toHaveBeenCalledWith('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: expect.any(Array), // Aseguramos que viajes sea un arreglo
            testimoniales: expect.any(Array), // Aseguramos que testimoniales sea un arreglo
        });
    });

    // Puedes agregar más pruebas para casos específicos aquí
});
