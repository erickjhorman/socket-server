import { Request, Response, request } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({
            ok: true,
            mensaje: 'Desde index'
        });
    }
}

export const indexController = new IndexController();
