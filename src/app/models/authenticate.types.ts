export class AuthenticatedResponse {
  constructor(
    public id: number,
    public accessToken: string,
    public refreshToken: string,
    public firstName: string,
    public lastName: string,
    public email: string
  ) {

  }
}
