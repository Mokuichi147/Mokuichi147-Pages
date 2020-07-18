import { Component, OnInit } from '@angular/core';

import { Projects } from '../projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})

export class ProjectComponent implements OnInit {
  projects = Projects;

  constructor() {}

  ngOnInit(): void {
  }

}
