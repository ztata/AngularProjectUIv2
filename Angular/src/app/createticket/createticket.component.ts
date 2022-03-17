import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';
import { NgForm } from '@angular/forms';
import { ITicket } from '../Interfaces/ITicket';
import { IAPITicket } from '../Interfaces/IAPITicket'
@Component
  ({
    selector: 'app-createticket',
    templateUrl: './createticket.component.html',
    styleUrls: ['./createticket.component.css']
  })
export class CreateticketComponent implements OnInit {
  ticket: ITicket | any;
  showHiddenText: boolean = false;

  constructor(private api: APICallService) { }

  createTicket(form: NgForm) {
    let ticket: IAPITicket =
    {
      ticketName: form.form.value.ticketName,
      createdBy: form.form.value.createdBy,
      ticketDescription: form.form.value.ticketDescription,
      completedBy: form.form.value.completedBy,
      resolutionNotes: form.form.value.resolutionNotes
    }
    this.api.addTicket(ticket)
    this.showHiddenText = true;
  }

  ngOnInit(): void {

  }

}
