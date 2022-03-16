import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse}from '@angular/common/http';
import { ITicket } from './Interfaces/ITicket';
import { catchError, Observable } from 'rxjs';
import { IAPITicket } from './Interfaces/IAPITicket';
import { IFavoritedTicket } from './Interfaces/iFavoritedTicket';
import { IAPIFavTicket }    from './Interfaces/IAPIFavTicket'
import { AppComponent } from './app.component';
import { tick } from '@angular/core/testing';
import { IBookmarkedTicket } from './Interfaces/IBookmarkedTicket';
import { IResolvedTicket } from './Interfaces/IResolvedTicket';

@Injectable
({
  providedIn: 'root'
})
export class APICallService {

  constructor(private http:HttpClient) {}
   mockTickets: ITicket[] = [
     {id: 3, ticketName: 'wefwef', ticketDescription: 'wefwef', createdBy: 'erfh', isResolved: false, completedBy: 'sdfwef', resolutionNotes: 'rferf'},
     {id: 4, ticketName: 'wefwef', ticketDescription: 'wefwef', createdBy: 'erfh', isResolved: false, completedBy: 'sdfwef', resolutionNotes: 'rferf'},
     {id: 5, ticketName: 'wefwef', ticketDescription: 'wefwef', createdBy: 'erfh', isResolved: false, completedBy: 'sdfwef', resolutionNotes: 'rferf'}
  ];

  apiUri: string = 'https://localhost:44305/api/ticket';
  

  //mock ticket data for testing HTML displays
   returnMockData(){
     return this.mockTickets;
   }

  //Returns all tickets from the 'Tickets' Db
  getAllTickets()
  {
    return this.http.get(this.apiUri);
  }

   //Allows tickets to be added to the 'Ticket' Db
   addTicket(ticket: IAPITicket)
   {
     console.log("add ticket")
     console.log(ticket)
     return this.http.post('https://localhost:44305/api/ticket',ticket).subscribe()
   }

    //Marks ticket as resolved
  updateTicket(updatedTicket: ITicket){
    console.log(`calling updated ticket api service function`)
    console.log(updatedTicket)
    return this.http.put(`${this.apiUri}/${updatedTicket.id}`, updatedTicket).subscribe();
  }

  //delete ticket from ticket db
  deleteTicket(id: number){
    return this.http.delete(`${this.apiUri}/${id}`).subscribe();
  }

  //returns bookmarked tickets from bookmarked db
  getAllBookmarkedTickets(){
    return this.http.get('https://localhost:44305/api/bookmarkedticket')
  }

  //add bookmarked ticket to database
  bookmarkTicket(ticket: IBookmarkedTicket){
    return this.http.post('https://localhost:44305/api/bookmarkedticket', ticket).subscribe();
  }

  //deletes bookmarked ticket from bookmarked db
  deleteBookmarkedTicket(id: number){
    return this.http.delete(`https://localhost:44305/api/bookmarkedticket/${id}`).subscribe();
  }

  //returns all resolved tickets 
  getAllResolvedTickets(){
    return this.http.get('https://localhost:44305/api/resolvedticket');
  }

  addResolvedTicket(ticket: IResolvedTicket){
    return this.http.post('https://localhost:44305/api/resolvedticket', ticket).subscribe();
  }

  deleteResolvedTicket(id:number){
    return this.http.delete(`https://localhost:44305/api/resolvedticket/${id}`).subscribe();
  }
}
