import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CreateticketComponent } from './createticket/createticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { BookmarkedticketComponent } from './bookmarkedticket/bookmarkedticket.component';
import { ResolvedTicketsComponent } from './resolved-tickets/resolved-tickets.component';

const routes: Routes = 
[
  {path:'',redirectTo:'ticket', pathMatch: 'full' },
  {path:'bookmarkedticket', component:BookmarkedticketComponent},
  {path:'resolved-tickets', component:ResolvedTicketsComponent},
  {path:'ticket', component:TicketComponent},
  {path:'createticket', component:CreateticketComponent},
  {path:'**',component:CreateticketComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateticketComponent,
    TicketComponent,
    BookmarkedticketComponent,
    ResolvedTicketsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule ,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
