import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';
import { ITicket } from '../Interfaces/ITicket';
import { NgForm } from '@angular/forms';
import {HttpClient, HttpErrorResponse}from '@angular/common/http';

@Component({
  selector: 'app-favoritedticket',
  templateUrl: './favoritedticket.component.html',
  styleUrls: ['./favoritedticket.component.css']
})
export class FavoritedticketComponent implements OnInit {

  constructor(private api2:APICallService) { }
  tickets2:any = []; 

  ngOnInit(): void 
  {
    this.api2.getAllTickets().subscribe(
      (response2) => {this.tickets2 = response2;}
    ) 
  }
}

