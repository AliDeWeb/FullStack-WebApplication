export interface IUser {
  id: string;
  username: string;
  name: string;
  password: string;
}

export class UserM implements IUser {
  id: string;
  username: string;
  name: string;
  password: string;
}
