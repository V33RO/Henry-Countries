const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const CountryRoutes = require('./r_countries.js');
const ActivityRoutes = require('./r_activities.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries',CountryRoutes);
router.use('/activities',ActivityRoutes);

module.exports = router;
