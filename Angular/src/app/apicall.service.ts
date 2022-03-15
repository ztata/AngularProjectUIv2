import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse}from '@angular/common/http';
import { ITicket } from './Interfaces/ITicket';
import { catchError, Observable } from 'rxjs';
import { IAPITicket } from './Interfaces/IAPITicket';
import { IFavoritedTicket } from './Interfaces/iFavoritedTicket';
import { IAPIFavTicket }    from './Interfaces/IAPIFavTicket'
import { AppComponent } from './app.component';

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
 
  //Get logged user ID for FavTicket record creation. 
  appcomponent = new AppComponent; 
  LoggedInUserID = this.appcomponent.loggedInUserID; 

  apiUri: string = 'https://localhost:44305/api/ticket';
  
  apiUriFT: string = 'https://localhost:44305/api/FavoritedTicket';

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

  //Returns all Favorite tickets from the 'FavoritedTickets' Db
  getAllFavoriteTickets()
  {
    return this.http.get(this.apiUriFT)
  }

  returnTicketById(id: number){
    return this.http.get(`${this.apiUri}/${id}`);
  }

  //Allows tickets to be added to the 'Ticket' Db
  addTicket(ticket: IAPITicket)
  {
    console.log("add ticket")
    console.log(ticket)
    return this.http.post('https://localhost:44305/api/ticket',ticket).subscribe()
  }
   //Allows fav tickets to be added to the 'FavoritedTickets' Db
  addFavTicket(favTicket: IAPIFavTicket)
  {
    console.log("add fav ticket")
    console.log(favTicket)
    return this.http.post('https://localhost:44305/api/FavoritedTicket',favTicket).subscribe()
  }

  //Marks ticket as resolved
  updateTicket(updatedTicket: ITicket){
    console.log(`calling updated ticket api service function`)
    console.log(updatedTicket)
    return this.http.put(`${this.apiUri}/${updatedTicket.id}`, updatedTicket).subscribe();
  }

  //delete ticket at specified ID
  deleteTicket(id: number){
    return this.http.delete(`${this.apiUri}/${id}`).subscribe();
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
