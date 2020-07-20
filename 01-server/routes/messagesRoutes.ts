import { Router } from 'express';
import { messageController } from '../controllers/messagesController';

class MessagesRouter {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', messageController.message);
        this.router.post('/', messageController.create);
        this.router.post('/:id', messageController.show);
    }
}

const messagesRouter = new MessagesRouter();
export default messagesRouter.router;