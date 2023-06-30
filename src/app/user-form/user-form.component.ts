import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserApiService } from '../user-crud/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  constructor(public restApi: UserApiService, public router: Router) { }
  ngOnInit() { }

  // @Output() addUser: EventEmitter<any> = new EventEmitter();
  // idUser: number = 13;
  profileForm = new FormGroup({
    // id: new FormControl(this.idUser),
    lastname: new FormControl<string>('', Validators.required),
    firstname: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    username: new FormControl<string>('', Validators.required),
    avatar: new FormControl<string>('https://i.pravatar.cc/100')
  })

  addAnUser() {
    this.restApi.createUser(this.profileForm.value).subscribe((data: {}) => {
      this.router.navigate(['/list']);
    })
  }

  // remetAvatar() {
  //   this.profileForm.patchValue({ avatar: "https://i.pravatar.cc/100" });
  // }

  // onSubmitForm() {
  //   if (this.profileForm.valid) {
  //     const newUser = this.profileForm.value;
  //     newUser.id = this.idUser++;
  //     console.log(newUser);
  //     // this.addUser.emit(newUser);
  //     this.profileForm.reset();
  //     this.remetAvatar();
  //   }
  // }
}
