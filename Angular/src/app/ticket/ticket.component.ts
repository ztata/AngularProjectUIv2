import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private api:APICallService) { }

  tickets:any = [];

  ngOnInit(): void 
  {
    // this.tickets=this.api.mockTickets
     this.api.getAllTickets().subscribe(
      (response) => {this.tickets = response;}
    ) 
  }

}
