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
  more: string;

  constructor() {}

  ngOnInit(): void {
  }

  backgroundImage(path: string) {
    this.project_bg_image = 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(' + path + ')';
  }
}
