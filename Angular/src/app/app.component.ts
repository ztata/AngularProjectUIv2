import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  loggedInUserID: string = 'User1';

  // changeUserID(newUser:string,) {
  //   this.loggedInUserID = newUser;
  // }

  get LogUserID() {
    return this.loggedInUserID; 
  }
  
  changeUserIDform(form: NgForm){
    let newUserId = form.form.value.LogUserID; 
    this.loggedInUserID = newUserId; 
  }

}
