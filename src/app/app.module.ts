import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { MiddlePaneComponent } from './middle-pane/middle-pane.component';
import { NavComponent } from './left-pane/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPaneComponent,
    RightPaneComponent,
    MiddlePaneComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
