import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() addUser: EventEmitter<any> = new EventEmitter<any>();
  idUser: number = 13;
  profileForm = new FormGroup({
    id: new FormControl(this.idUser),
    lastname: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    avatar: new FormControl('https://i.pravatar.cc/100')
  })

  remetAvatar() {
    this.profileForm.patchValue({ avatar: "https://i.pravatar.cc/100" });
  }

  onSubmitForm() {
    if (this.profileForm.valid) {
      const newUser = this.profileForm.value;
      newUser.id = this.idUser++;
      console.log(newUser);
      this.addUser.emit(newUser);
      this.profileForm.reset();
      this.remetAvatar();
    }
  }
}
