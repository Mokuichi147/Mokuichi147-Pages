import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

import { Avatar2iComponent } from './projects/avatar2i/avatar2i.component';
import { ArAppComponent } from './projects/ar-app/ar-app.component';
import { ArGrassesComponent } from './projects/ar-grasses/ar-grasses.component';
import { SfGuiComponent } from './projects/sf-gui/sf-gui.component';
import { LunchboxComponent } from './projects/lunchbox/lunchbox.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'Home', component: HomeComponent },
  { path:'Project',
    children: [
      { path:'', component: ProjectComponent },
      { path:'avatar2i', component: Avatar2iComponent },
      { path:'ar-app', component: ArAppComponent },
      { path:'ar-grasses', component: ArGrassesComponent },
      { path:'sf-gui', component: SfGuiComponent },
      { path:'lunchbox', component: LunchboxComponent }
    ]},
  { path:'About', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
