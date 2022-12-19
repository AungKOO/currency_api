import express from 'express'
import getMontlyRate from "../handlers/monthHandler"

const router = express.Router()
router.get('/month/:id.json', getMontlyRate)

export default router