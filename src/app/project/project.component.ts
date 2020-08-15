import { Component, OnInit } from '@angular/core';

import { Projects } from '../projects';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})

export class ProjectComponent implements OnInit {
  projects = Projects;
  project_bg_image: string;
  show_more = false;
  more = '';

  constructor() {}

  ngOnInit(): void {
  }

  backgroundImage(path: string) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.project_bg_image = 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(' + path + ')';
    } else {
      this.project_bg_image = 'linear-gradient(rgba(224,224,224,0.9), rgba(224,224,224,0.9)), url(' + path + ')';
    }
  }

  projectMore(name: string) {
    this.more = name;
  }
}
