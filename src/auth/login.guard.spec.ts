import { LoginGuard } from './login.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new LoginGuard()).toBeDefined();
  });
});
