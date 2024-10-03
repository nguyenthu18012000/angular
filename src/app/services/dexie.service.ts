import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { RegisterModel } from '../models/register';
import { LoginModel } from '../models/login';

@Injectable({ providedIn: 'root' })
export class AppDB extends Dexie {
  user!: Table<RegisterModel, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      user: '++id, email',
    });
    // this.delete();
  }
  async createNewUser(newUser: RegisterModel) {
    if (newUser.password !== newUser.rePassword) {
      console.log('Password không trùng khớp');
      return;
    }
    const existUser = await this.user
      .where({ email: newUser?.email })
      .toArray();
    console.log(existUser);
    if (existUser.length > 0) {
      console.log('User is existed');
      return;
    }
    await this.user.add(newUser);
    return 'success';
  }

  async getUser(newUser: LoginModel) {
    const existUser = await this.user
      .where({ email: newUser?.email })
      .toArray();
    if (
      existUser.length !== 1 ||
      existUser[0]?.password !== newUser?.password
    ) {
      console.log('User is existed');
      return;
    }
    await this.user.add(newUser);
  }
}
