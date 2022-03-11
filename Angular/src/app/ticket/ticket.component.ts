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
  expandDetails: boolean = false;

  ngOnInit(): void 
  {
     this.api.getAllTickets().subscribe(
      (response) => {this.tickets = response;}
    )
  }

  showDetails() {
    this.expandDetails != this.expandDetails;
  }
}
