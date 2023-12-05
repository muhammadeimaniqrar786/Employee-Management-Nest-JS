import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
};

@Injectable()
export class UserService {}
