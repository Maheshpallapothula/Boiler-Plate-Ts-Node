import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {res.send("Intial Route.")});
router.post('/',(req,res) => {res.send("Intial Route.")});

export default router;
