const express = require('express')
const taskCtrl = require('../controller/task')
const router = express.Router()

router.post("/task", taskCtrl.postTask)
router.get("/task", taskCtrl.getTask)
router.patch("/task/:id", taskCtrl.patchTask)
router.delete("/task/:id", taskCtrl.deleteTask)

module.exports = router