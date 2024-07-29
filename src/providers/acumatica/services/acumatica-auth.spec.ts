import { AcumaticaAuthService } from './acumatica-auth.service';

describe('AcumaticaAuthService', () => {
  let sut: AcumaticaAuthService;

  beforeEach(async () => {
    sut = new AcumaticaAuthService();
  });
  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should authenticate', async () => {
    const login = {
      name: 'John Doe',
      password: '123456',
    };

    sut.items.push(login);

    const response = await sut.authenticateInMemory({
      name: login.name,
      password: login.password,
    });

    expect(response.status).toEqual(204);
  });
});
