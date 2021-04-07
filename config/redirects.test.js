import redirects from './redirects';

describe('config/redirects', () => {
  test('renders all current redirect', () => {
    expect(redirects).toMatchSnapshot(); // Fotografia
  });
});
