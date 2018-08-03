import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

//
import { HttpClientModule } from '@angular/common/http';
//
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsCompteComponent } from './details-compte/details-compte.component';

const tableRoutage = [
  { path: 'comptes', component: ContentComponent},
  { path: '', component: WelcomeComponent},
  { path: 'comptes/:id', component: DetailsCompteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    WelcomeComponent,
    DetailsCompteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(tableRoutage) // Routage Links
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
