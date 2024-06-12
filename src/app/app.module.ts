import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullStackComponent } from './full-stack/full-stack.component';
import { SlideListComponent } from './slide-list/slide-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FullStackComponent,
    SlideListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
