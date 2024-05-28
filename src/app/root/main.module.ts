import { LayoutModule } from './../core/layout/layout.module';
import { MainComponent } from './main.component';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
