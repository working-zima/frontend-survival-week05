// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';

import server from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
