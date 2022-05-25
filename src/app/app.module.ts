import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { RessourcesComponent } from './components/ressources/ressources.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NextStepsComponent } from './components/next-steps/next-steps.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CardComponent,
    MenuComponent,
    RessourcesComponent,
    NextStepsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
