import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UIModule} from "@frantaworkspace/web";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UIModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
