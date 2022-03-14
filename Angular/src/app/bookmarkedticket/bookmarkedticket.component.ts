import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';
import { IFavoritedTicket } from '../Interfaces/iFavoritedTicket';
import { ITicket } from '../Interfaces/ITicket';

@Component({
  selector: 'app-bookmarkedticket',
  templateUrl: './bookmarkedticket.component.html',
  styleUrls: ['./bookmarkedticket.component.css']
})
export class BookmarkedticketComponent implements OnInit {

  constructor(private api:APICallService) { }

  tickets:any = [];
  allFavTickets: any = []; 
  filteredTickets: any = []; 

  ngOnInit(): void 
  {
        this.api.getAllTickets().subscribe(
          (response) => {this.tickets = response;}
        )

        this.api.getAllFavoriteTickets().subscribe(
          (response) => {this.allFavTickets = response;}
         ) 
     
  }

getFavortedtickets(ticketList: ITicket[], favTicketList: IFavoritedTicket[]) {

//this.filteredTickets = ticketList.filter()
//return this.filteredTickets = ticketList.filter()
}

}
