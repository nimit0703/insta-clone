import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeftPaneComponent } from './components/left-pane/left-pane.component';
import { RightPaneComponent } from './components/right-pane/right-pane.component';
import { MiddlePaneComponent } from './components/middle-pane/middle-pane.component';
import { NavComponent } from './components/left-pane/nav/nav.component';
import { AccDescSmComponent } from './components/right-pane/acc-desc-sm/acc-desc-sm.component';
import { StoriesComponent } from './components/middle-pane/stories/stories.component';
import { FeedsComponent } from './components/middle-pane/feeds/feeds.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SearchComponent } from './components/search/search.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ReelComponent } from './components/reel/reel.component';
import { MessageComponent } from './components/message/message.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CreateComponent } from './components/create/create.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MoreComponent } from './components/more/more.component';



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
    HomeComponent,
    SearchComponent,
    ExploreComponent,
    ReelComponent,
    MessageComponent,
    NotificationComponent,
    CreateComponent,
    ProfileComponent,
    MoreComponent
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
