import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    firstName: new FormControl(''),
    email: new FormControl(''),
    userName: new FormControl(''),
  })
}
