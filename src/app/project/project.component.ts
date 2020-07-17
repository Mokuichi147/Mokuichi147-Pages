import { Component, OnInit } from '@angular/core';

import { Projects } from '../projects';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})

export class ProjectComponent implements OnInit {
  projects = Projects;
  select_index = 0;
  project_names = [];
  project_name_show = true;

  constructor() { }

  ngOnInit(): void {
    // ['project_name'] -> ['p', 'r', 'o', ...]
    let count = 0;
    for (let project of this.projects) {
      this.project_names.push([]);
      for (let text of project.title) {
        this.project_names[count].push(text);
      }
      count += 1;
    }
  }

  nextClick() {
    this.project_name_show = !this.project_name_show;
    this.select_index++;
    console.log(this.select_index);
    if (this.select_index >= this.projects.length) {
      this.select_index = 0;
    }

    var target_img = <HTMLImageElement>document.getElementById('main-img');
  }

  prevClick() {
    this.project_name_show = !this.project_name_show;
    this.select_index--;
    console.log(this.select_index);
    if (this.select_index < 0) {
      this.select_index = this.projects.length - 1;
    }

    var target_img = <HTMLImageElement>document.getElementById('main-img');
  }

  trackByIdentity (index: number, item: any) {
    // DOMを再生成するためにidではなく適当な値を返す
    return Math.random();
  }
}
