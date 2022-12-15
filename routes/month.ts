import getMontlyRate from "../handlers/monthHandler"

const router = require('express').Router()
router.get('/month/:id.json', getMontlyRate)

export default router