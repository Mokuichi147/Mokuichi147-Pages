import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'Mokuichi147-Pages';

  // screen size
  small_menu = false;


  constructor(private breakpointObserver: BreakpointObserver) {}

  showMenu() {
    console.log('menu button clicked');
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      this.small_menu = state.breakpoints[Breakpoints.XSmall];
    });
  }
}
