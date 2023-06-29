import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstApp';
  constructor(public httpClient: HttpClient) { }
  tabUser = null;
  // giveMeData() {
  //   this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((resp) => {
  //     this.tabUser = resp;
  //   });
}
