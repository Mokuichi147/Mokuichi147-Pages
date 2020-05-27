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
  screen_size = 'm';
  small_menu = false;
  dark_mode = false;


  constructor(private breakpointObserver: BreakpointObserver) {
    window.onload = this.changeColorMode;
  }

  changeColorMode() {
    this.dark_mode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let root = document.documentElement;

    if (this.dark_mode) {
      root.style.color = '#e0e0e0';
      root.style.backgroundColor = '#101010';
    }
  }

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
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.screen_size = 'xs';
      } else if (state.breakpoints[Breakpoints.Small]) {
        this.screen_size = 's';
      } else if (state.breakpoints[Breakpoints.Medium]) {
        this.screen_size = 'm';
      } else if (state.breakpoints[Breakpoints.Large]) {
        this.screen_size = 'l';
      } else if (state.breakpoints[Breakpoints.XLarge]) {
        this.screen_size = 'xl';
      }
      if (this.screen_size == 'xs') {
        this.small_menu = true;
        this.dark_mode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      } else {
        this.small_menu = false;
      }
    });
  }
}
