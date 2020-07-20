import { Component, OnInit } from '@angular/core';

import { Projects } from '../projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl'],
})
export class HomeComponent implements OnInit {
  projects = Projects;
  select_index: number = 0;
  project_names = [];
  project_name_show = true;
  imagePath: string;

  constructor() {}

  ngOnInit(): void {
    this.changeImage(this.select_index);

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

  changeImage(id: number) {
    console.log(id);
    this.select_index += id;
    if (this.select_index >= this.projects.length) {
      this.select_index = 0;
    } else if (this.select_index < 0) {
      this.select_index = this.projects.length - 1;
    }

    console.log(this.projects[this.select_index].path);
    this.imagePath = this.projects[this.select_index].path;
  }

  moreClick() {
    console.log(this.projects[this.select_index].year);
  }

  trackByIdentity(index: number, item: any) {
    // DOMを再生成するためにidではなく適当な値を返す
    return Math.random();
  }
}
