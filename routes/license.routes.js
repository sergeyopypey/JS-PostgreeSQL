const Router = require('express')
const licenseController = require('../controller/license.controller')
const router = new Router()
const LicenseController = require('../controller/license.controller')

router.post('/license', licenseController.createLicense)
router.get('/license', licenseController.getLicenses)
router.get('/license/:id', licenseController.getOneLicense)
router.put('/license', licenseController.updateLicense)
router.delete('/license/:id', licenseController.deleteLicense)


module.exports = router