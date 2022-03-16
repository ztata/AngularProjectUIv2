import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';

@Component({
  selector: 'app-resolved-tickets',
  templateUrl: './resolved-tickets.component.html',
  styleUrls: ['./resolved-tickets.component.css']
})
export class ResolvedTicketsComponent implements OnInit {

  constructor(private api: APICallService) { }
  resolvedTickets: any = []

  ngOnInit(): void {
    this.api.getAllResolvedTickets().subscribe(
      (response) => {this.resolvedTickets = response;}
    )
  }

  deleteResolvedTicket(id: number){
    console.log('delete ticket button works');
    this.api.deleteResolvedTicket(id);
    window.location.reload();
  }

}
