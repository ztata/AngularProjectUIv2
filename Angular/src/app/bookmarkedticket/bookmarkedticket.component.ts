import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';

@Component({
  selector: 'app-bookmarkedticket',
  templateUrl: './bookmarkedticket.component.html',
  styleUrls: ['./bookmarkedticket.component.css']
})
export class BookmarkedticketComponent implements OnInit {

  constructor(private api:APICallService) { }

  tickets:any = [];

  ngOnInit(): void 
  {
        // this.tickets=this.api.mockTickets
        // this.api.getAllTickets().subscribe(
        //   (response) => {this.tickets = response;}
        // ) 
  }

}
