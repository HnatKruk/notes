import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:4000/avatar', async (req, res, ctx) => {
    return res(ctx.json('testImage'));
  }),
];
