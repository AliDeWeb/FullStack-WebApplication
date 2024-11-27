import {
  IUser,
  UserM,
} from '../models/user.model';

type idType = string | number;
export interface UserRepository {
  create(user: IUser): Promise<UserM>;

  findAll(): Promise<UserM>;

  findById(id: idType): Promise<UserM>;

  findOne(
    search: Partial<IUser>,
  ): Promise<UserM>;

  updateById(
    id: idType,
    body: UserM,
  ): Promise<UserM>;

  deleteById(id: idType): Promise<void>;
}
