import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompareComponent } from './compare/compare.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CompareComponent]
})
export class AppModule { }
