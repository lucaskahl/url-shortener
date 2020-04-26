import { Router } from 'express';
import TinyURL from 'tinyurl';

const shortenerRouter = Router();

shortenerRouter.post('/', (request, response) => {
  const { url } = request.body;
  TinyURL.shorten(url).then(
    (res: string) => {
      return response.json({
        message: 'The URL as been encurted with success',
        url: res,
      });
    },
    err => {
      return response.json({ message: err }).status(400);
    },
  );
});

export default shortenerRouter;
