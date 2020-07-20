import { Request, Response, request } from 'express';

class MessagesController {

    public message(req: Request, res: Response) {
        res.json({
            ok: true,
            mensaje: 'Todo bien'
        });
    }

    public create(req: Request, res: Response) {

        const hola = req.body.Hola;

        res.json({
            ok: true,
            hola
        });
    }

    public show(req: Request, res: Response) {

        const hola = req.body.Hola;
        const id = req.params.id;
        res.json({
            ok: true,
            hola,
            id
        });
    }
}

export const messageController = new MessagesController();