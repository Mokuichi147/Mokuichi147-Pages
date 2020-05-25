import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'Mokuichi147-Pages';
  screen_size = 'm';
  small_menu = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        console.log( 'Matches XSmall viewport');
        this.screen_size = 'xs';
      }
      if (state.breakpoints[Breakpoints.Small]) {
        console.log( 'Matches Small viewport');
        this.screen_size = 's';
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log( 'Matches Medium  viewport');
        this.screen_size = 'm';
      }
      if (state.breakpoints[Breakpoints.Large]) {
        console.log( 'Matches Large viewport');
        this.screen_size = 'l';
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        console.log( 'Matches XLarge viewport');
        this.screen_size = 'xl';
      }
      if (this.screen_size == 'xs') {
        this.small_menu = true;
      } else {
        this.small_menu = false;
      }
    });
  }
}
