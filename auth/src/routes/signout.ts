import { Router } from "express";

const router = Router();

router.post('/api/users/signout', (req, res) => {
    res.send('Hi There! 2');
});

export { router as signoutRouter };