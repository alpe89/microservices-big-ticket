import { Router } from "express";

const router = Router();

router.post('/api/users/signin', (req, res) => {
    res.send('Hi There! 2');
});

export { router as signinRouter };