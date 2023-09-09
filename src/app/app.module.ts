import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { RightPaneComponent } from './right-pane/right-pane.component';
import { MiddlePaneComponent } from './middle-pane/middle-pane.component';
import { NavComponent } from './left-pane/nav/nav.component';
import { AccDescSmComponent } from './right-pane/acc-desc-sm/acc-desc-sm.component';
import { StoriesComponent } from './middle-pane/stories/stories.component';
import { FeedsComponent } from './middle-pane/feeds/feeds.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeComponent } from './components/home/home.component';



const appRoutes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: '' , component:FirstPageComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    LeftPaneComponent,
    RightPaneComponent,
    MiddlePaneComponent,
    NavComponent,
    AccDescSmComponent,
    StoriesComponent,
    FeedsComponent,
    FirstPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
