import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { BookmarkedticketComponent } from './bookmarkedticket/bookmarkedticket.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    CreateticketComponent,
    TicketComponent,
    BookmarkedticketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
