import { Component, OnInit } from '@angular/core';
import { APICallService } from '../apicall.service';
import { NgForm } from '@angular/forms';
import { IResolvedTicket } from '../Interfaces/IResolvedTicket';


@Component({
  selector: 'app-bookmarkedticket',
  templateUrl: './bookmarkedticket.component.html',
  styleUrls: ['./bookmarkedticket.component.css'],
})
export class BookmarkedticketComponent implements OnInit {

  constructor(private api: APICallService) { }

  bookmarkedTickets: any = [];

  ngOnInit(): void {
    this.api.getAllBookmarkedTickets().subscribe(
      (response) => { this.bookmarkedTickets = response; }
    )
  }

  deleteBookmarkedTicket(id: number) {
    this.api.deleteBookmarkedTicket(id);
    window.location.reload();
  }

  updateTicket(form: NgForm) {
    let resolvedticket: IResolvedTicket =
    {
      ticketId: form.form.value.ticketId,
      ticketName: form.form.value.ticketName,
      createdBy: form.form.value.createdBy,
      ticketDescription: form.form.value.ticketDescription,
      isResolved: true,
      completedBy: form.form.value.completedBy,
      resolutionNotes: form.form.value.resolutionNotes
    }
    this.api.addResolvedTicket(resolvedticket);
    this.api.deleteBookmarkedTicket(form.form.value.id);
    window.location.reload();
  }
}
