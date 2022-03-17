import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITicket } from './Interfaces/ITicket';
import { IAPITicket } from './Interfaces/IAPITicket';
import { IBookmarkedTicket } from './Interfaces/IBookmarkedTicket';
import { IResolvedTicket } from './Interfaces/IResolvedTicket';

@Injectable
  ({
    providedIn: 'root'
  })
export class APICallService {

  constructor(private http: HttpClient) { }

  apiTicketUri: string = 'https://localhost:44305/api/ticket';
  apiBookmarkedUri: string = 'https://localhost:44305/api/bookmarkedticket';
  apiResolvedUri: string = 'https://localhost:44305/api/resolvedticket';


  /*
        TICKET DATABASE METHODS
  */

  //Returns all tickets from the 'Tickets' Db
  getAllTickets() {
    return this.http.get(this.apiTicketUri);
  }

  //Allows tickets to be added to the 'Ticket' Db
  addTicket(ticket: IAPITicket) {
    return this.http.post(this.apiTicketUri, ticket).subscribe()
  }

  //delete ticket from ticket db
  deleteTicket(id: number) {
    return this.http.delete(`${this.apiTicketUri}/${id}`).subscribe();
  }

  /*
       BOOKMARKED TICKET DATABASE METHODS
 */

  //returns bookmarked tickets from bookmarked db
  getAllBookmarkedTickets() {
    return this.http.get(this.apiBookmarkedUri)
  }

  //add bookmarked ticket to bookmarked database
  bookmarkTicket(ticket: IBookmarkedTicket) {
    return this.http.post(this.apiBookmarkedUri, ticket).subscribe();
  }

  //deletes bookmarked ticket from bookmarked db
  deleteBookmarkedTicket(id: number) {
    return this.http.delete(`${this.apiBookmarkedUri}/${id}`).subscribe();
  }

  /*
       RESOLVED TICKET DATABASE METHODS
 */

  //returns all resolved tickets 
  getAllResolvedTickets() {
    return this.http.get(this.apiResolvedUri);
  }

  //adds resolved ticket to resolve db
  addResolvedTicket(ticket: IResolvedTicket) {
    return this.http.post(this.apiResolvedUri, ticket).subscribe();
  }

  //deletes resolved ticket from resolved db
  deleteResolvedTicket(id: number) {
    return this.http.delete(`${this.apiResolvedUri}/${id}`).subscribe();
  }
}
