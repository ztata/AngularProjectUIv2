import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';
import { ITicket } from '../Interfaces/ITicket';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {

  constructor(private api:APICallService) { }

  tickets:any = [];

  ngOnInit(): void 
  {
     //this.tickets=this.api.mockTickets;
     this.api.getAllTickets().subscribe(
      (response) => {this.tickets = response;}
    )
  }

  markAsResolved(id: number){
    this.api.MarkTicketResolved(id)

  }
  
}
