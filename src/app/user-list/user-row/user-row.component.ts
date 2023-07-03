import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserApiService } from '../../user-crud/user-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {
  constructor(public restApi: UserApiService, public currentRout: ActivatedRoute, public router: Router) { }
  @Input() user!: User;

  ngOnInit() {

  }
  // idUser = this.currentRout.snapshot.params['id'];
  // userData: any = {};
  userData = new FormGroup({
    // id: new FormControl(this.idUser),
    lastname: new FormControl<string>('', Validators.required),
    firstname: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    username: new FormControl<string>('', Validators.required),
    avatar: new FormControl<string>('https://i.pravatar.cc/100')
  })

  getUserInfo(user: any) {
    this.userData = user;
  }


  modifyUser(id: any) {
    if (window.confirm('Êtes-vous sûr de vouloir modifier ?')) {
      return this.restApi.updateUser(id, this.userData).subscribe(() => {
        window.location.reload();
      });
    }
    return null;
  }
  deleteThisUser(id: any) {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ?')) {
      return this.restApi.deleteUser(id).subscribe(() => {
        window.location.reload();
      });
    }
    return null;
  }
}
