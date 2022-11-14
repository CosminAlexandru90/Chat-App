import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from "./layout/layout/layout.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnalyticsModule} from "./modules/analytics/analytics.module";
import {ArchivesModule} from "./modules/archives/archives.module";
import {BrowseModule} from "./modules/browse/browse.module";
import {HomeModule} from "./modules/home/home.module";
import {MessagingModule} from "./modules/messaging/messaging.module";
import {ProfilesModule} from "./modules/profiles/profiles.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnalyticsModule,
    ArchivesModule,
    BrowseModule,
    HomeModule,
    MessagingModule,
    ProfilesModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
