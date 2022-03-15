import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';
import { ITicket } from '../Interfaces/ITicket';
import { MatFormField } from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { IAPIFavTicket } from '../Interfaces/IAPIFavTicket';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {

  constructor(private api:APICallService) { }

  tickets:any = [];
  appcomponent = new AppComponent; 
  LoggedInUserID: string = this.appcomponent.loggedInUserID; 

  ngOnInit(): void 
  {
     //this.tickets=this.api.mockTickets;
     this.api.getAllTickets().subscribe(
      (response) => {this.tickets = response;}
    )
  }

  updateTicket(form: NgForm){
    console.log('update ticket button works')
    console.log(form)
    let updatedTicket: ITicket = 
    {
      id: form.form.value.id,
      ticketName: form.form.value.ticketName,
      createdBy: form.form.value.createdBy,
      ticketDescription: form.form.value.ticketDescription,
      isResolved: form.form.value.isResolved,
      completedBy: form.form.value.completedBy,
      resolutionNotes: form.form.value.resolutionNotes

    } 
    
    this.api.updateTicket(updatedTicket)
    window.location.reload();
  }

  deleteTicket(id: number) {
    console.log('delete ticket button works');
    this.api.deleteTicket(id);
    window.location.reload();
  }



  //createFavTicket(userId: string, Ticketid: number)
  createFavTicket(Ticketid: number, userId:string=this.LoggedInUserID)
  {
  let favTicket: IAPIFavTicket =
  {
    userID: userId,
    TicketId: Ticketid
  }

  this.api.addFavTicket(favTicket)
  console.log("add FavTick finished")
 }
}
