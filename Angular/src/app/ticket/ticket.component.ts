import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';
import { ITicket } from '../Interfaces/ITicket';
import { MatFormField } from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { IAPIFavTicket } from '../Interfaces/IAPIFavTicket';
import { AppComponent } from '../app.component';
import { IBookmarkedTicket } from '../Interfaces/IBookmarkedTicket';
import { IResolvedTicket } from '../Interfaces/IResolvedTicket';


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
     this.api.getAllTickets().subscribe(
      (response) => {this.tickets = response;}
    )
  }

  updateTicket(form: NgForm){
    console.log('update ticket button works')
    console.log(form)

    let resolvedticket: IResolvedTicket = 
    {
      ticketId: form.form.value.id,
      ticketName: form.form.value.ticketName,
      createdBy: form.form.value.createdBy,
      ticketDescription: form.form.value.ticketDescription,
      isResolved: form.form.value.isResolved,
      completedBy: form.form.value.completedBy,
      resolutionNotes: form.form.value.resolutionNotes      
    }
    this.api.addResolvedTicket(resolvedticket);

    this.api.deleteTicket(form.form.value.id);

    window.location.reload();
  }

  deleteTicket(id: number) {
    console.log('delete ticket button works');
    this.api.deleteTicket(id);
    window.location.reload();
  }

  bookmarkTicket(ticket: ITicket, form: NgForm){
    console.log('called bookmarkticket function');
    let bookmarkedTicket: IBookmarkedTicket = {
      userId: form.form.value.userId,
      ticketId: ticket.id,
      ticketName: ticket.ticketName,
      createdBy: ticket.createdBy,
      ticketDescription: ticket.ticketDescription,
      isResolved: ticket.isResolved,
      completedBy: ticket.completedBy,
      resolutionNotes: ticket.resolutionNotes
    }
    this.api.bookmarkTicket(bookmarkedTicket);
    window.location.reload();


  }
}
