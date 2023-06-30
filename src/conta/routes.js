const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getContas);
router.get('/:id', controller.getContaById);
router.post("/", controller.addConta);
router.delete("/:id", controller.removeConta);
router.put("/:id", controller.updateConta);

module.exports = router;