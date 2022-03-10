import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule}from '@angular/common/http';

@Injectable
({
  providedIn: 'root'
})
export class APICallService {

  constructor(private http:HttpClient) {}

  getAllTickets()
  {
    return this.http.get('https://localhost:44305/api/ticket')
  }

  addTicket(ticket: any)
  {
    return this.http.post('https://localhost:44305/api/ticket',ticket)
  }
}
