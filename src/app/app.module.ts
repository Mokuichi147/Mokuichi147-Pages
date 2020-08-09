import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { Avatar2iComponent } from './projects/avatar2i/avatar2i.component';
import { ArAppComponent } from './projects/ar-app/ar-app.component';
import { ArGrassesComponent } from './projects/ar-grasses/ar-grasses.component';
import { SfGuiComponent } from './projects/sf-gui/sf-gui.component';
import { LunchboxComponent } from './projects/lunchbox/lunchbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    AboutComponent,
    Avatar2iComponent,
    ArAppComponent,
    ArGrassesComponent,
    SfGuiComponent,
    LunchboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
