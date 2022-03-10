import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { BookmarkedticketComponent } from './bookmarkedticket/bookmarkedticket.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = 
[
  {path:'welcomepage', component:WelcomepageComponent},
  {path:'createticket', component:CreateticketComponent},
  {path:'ticket', component:TicketComponent},
  {path:'bookmarkedticket', component:BookmarkedticketComponent},
  {path:'**',component:CreateticketComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    CreateticketComponent,
    TicketComponent,
    BookmarkedticketComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
