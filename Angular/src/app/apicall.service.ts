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

  apiUri: string = 'https://localhost:44305/api/ticket';

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
    return this.http.get(this.apiUri);
  }

  returnTicketById(id: number){
    return this.http.get(`${this.apiUri}/${id}`);
  }

  //Allows tickets to be added to the 'Ticket' Db
  addTicket(ticket: ITicket)
  {
    console.log("add ticket")
    console.log(ticket)
    return this.http.post('https://localhost:44305/api/ticket',ticket)

  }
  
  //Allows ticket to be replaced at specified ID
  MarkTicketResolved(id: number){
    return this.http.put(`${this.apiUri}/${id}`, id);
  }

  //delete ticket at specified ID
  deleteTicket(id: number){
    return this.http.delete(`${this.apiUri}/${id}`);
  }
  
  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  // }
  
}
