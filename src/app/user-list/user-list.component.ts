import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { USERS } from './users.mock';
import { UserApiService } from '../user-crud/user-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(public restApi: UserApiService) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit(): any {
    this.loadUsers();
  }

  loadUsers() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      this.users = data;
    });
  }

  // users: User[] = USERS;
  users: any = [];
  // onAddUser(newUser: User) {
  //   this.users.push(newUser);
  // }
}
