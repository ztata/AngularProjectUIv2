import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';
import { NgForm } from '@angular/forms';
import { ITicket } from '../Interfaces/ITicket';
import { formatNumber } from '@angular/common';
import {IAPITicket} from '../Interfaces/IAPITicket'
@Component
({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit 
{
   ticket: ITicket | any

  constructor(private api: APICallService) { }
  
  createTicket( form: NgForm )
  {
    console.log("creating ticket")
     let ticket: IAPITicket = 
    {
      ticketName: form.form.value.ticketName,
      createdBy: form.form.value.createdBy,
      ticketDescription: form.form.value.ticketDescription,
      completedBy: form.form.value.completedBy,
      resolutionNotes: form.form.value.resolutionNotes

    } 
    this.api.addTicket(ticket)
    console.log("finished")
  }

  ngOnInit(): void 
  {

  }
  
}
