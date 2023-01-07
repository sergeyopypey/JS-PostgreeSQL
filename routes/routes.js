const Router = require('express')
const licenseController = require('../controller/license.controller')
const userController = require('../controller/user.controller')
const router = new Router()


//router.post('/license/file', licenseController.postLicenseFile)
//router.get('/license/file', licenseController.getLicenseFile)

router.post('/license', licenseController.createLicense)
router.get('/license', licenseController.getLicenses)
//router.get('/license/:id', licenseController.getOneLicense)
router.put('/license', licenseController.updateLicense)
router.delete('/license/:id', licenseController.deleteLicense)

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/user/:id', userController.checkOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)


module.exports = router