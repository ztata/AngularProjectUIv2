import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}from '@angular/common/http';
import { ITicket } from './Interfaces/ITicket';
import { Observable } from 'rxjs';

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

  //Returns all ticjets from the 'Tickets' Db
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
    return this.http.post('https://localhost:44305/api/ticket',ticket)
  }
}
