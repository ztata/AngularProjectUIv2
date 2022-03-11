import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse}from '@angular/common/http';
import { ITicket } from './Interfaces/ITicket';
import { catchError, Observable } from 'rxjs';

@Injectable
({
  providedIn: 'root'
})
export class APICallService {

  constructor(private http:HttpClient) {}
  mockTickets: ITicket[] = [
    {id: 3, ticketName: 'wefwef', ticketDescription: 'wefwef', createdBy: 'erfh', isResolved: false, completedBy: 'sdfwef', resolutionNotes: 'rferf'},
    {id: 3, ticketName: 'wefwef', ticketDescription: 'wefwef', createdBy: 'erfh', isResolved: false, completedBy: 'sdfwef', resolutionNotes: 'rferf'},
    {id: 3, ticketName: 'wefwef', ticketDescription: 'wefwef', createdBy: 'erfh', isResolved: false, completedBy: 'sdfwef', resolutionNotes: 'rferf'}
  ];

  //mock data for testing HTML displays
  returnMockData(){
    return this.mockTickets;
  }

  //Reliable API call for testing HTML Displays
  dndAPITestCall()
  {
    return this.http.get('https://www.dnd5eapi.co/api/races');
  }

  //Returns all tickets from the 'Tickets' Db
  getAllTickets()
  {
    return this.http.get('https://localhost:44305/api/ticket');
  }

  returnTicketById(id: any){
    return this.http.get('https://localhost:44305/api/ticket', id);
  }

  //Allows tickets to be added to the 'Ticket' Db
  addTicket(ticket: any)
  {
    console.log("add ticket")
    console.log(ticket)
    return this.http.post('https://localhost:44305/api/ticket',ticket)

  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
  }
  
}
