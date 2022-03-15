import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';
import { ITicket } from '../Interfaces/ITicket';
import { IFavoritedTicket } from '../Interfaces/iFavoritedTicket';
import { NgForm } from '@angular/forms';


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

  mockFavTickets: IFavoritedTicket[] = [
    {FavoriteId: 1, userID: "wed6", TicketId: 1}
   ]; 

   mockTickets: ITicket[] = [
    {id: 1, ticketName: 'wefwef', ticketDescription: 'wefwef', createdBy: 'erfh', isResolved: false, completedBy: 'sdfwef', resolutionNotes: 'rferf'},
    {id: 4, ticketName: 'wefwef', ticketDescription: 'wefwef', createdBy: 'erfh', isResolved: false, completedBy: 'sdfwef', resolutionNotes: 'rferf'},
    {id: 5, ticketName: 'wefwef', ticketDescription: 'wefwef', createdBy: 'erfh', isResolved: false, completedBy: 'sdfwef', resolutionNotes: 'rferf'}
 ];

  ngOnInit(): void 
  {
        this.api.getAllTickets().subscribe(
          (response) => {this.tickets = response;}
        )

        //console.log(this.tickets); 

       /*  this.api.getAllFavoriteTickets().subscribe(
          (response) => {this.allFavTickets = response;}
         )  */

         //console.log(this.allFavTickets); 

         //this.getFavortedtickets(this.tickets, this.allFavTickets)
         
         //this.getFavortedtickets(this.mockTickets, this.mockFavTickets)
  }

getFavortedtickets(ticketList: ITicket[], favTicketList: IFavoritedTicket[]) {

this.filteredTickets = ticketList.filter((el) =>{
  return favTicketList.some((f) => {
    return f.TicketId === el.id; 
  });
});

//console.log(this.filteredTickets); 

}

}
