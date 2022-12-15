const router = require('express').Router()
router.get('/month/:id.json', (req:any, res:any) =>
{
    console.log(req.params.id)
})

export default router