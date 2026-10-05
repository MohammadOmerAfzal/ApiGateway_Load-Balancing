import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Ali Khan',
      email: 'ali@example.com',
      role: 'user',
    },
    {
      id: 2,
      name: 'Sara Ahmed',
      email: 'sara@example.com',
      role: 'user',
    },
    {
      id: 3,
      name: 'Omer Afzal',
      email: 'omer@example.com',
      role: 'admin',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }
}
