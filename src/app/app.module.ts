import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddingComponent } from './component/adding/adding.component';
import { MultiplicationComponent } from './component/multiplication/multiplication.component';
import { DivisionComponent } from './component/division/division.component';
import { SubtractionComponent } from './component/subtraction/subtraction.component';

@NgModule({
    declarations: [
        AppComponent,
        AddingComponent,
        MultiplicationComponent,
        DivisionComponent,
        SubtractionComponent,
        SubtractionComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
