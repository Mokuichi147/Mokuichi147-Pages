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
  imageArray: string[] = new Array(this.projects.length);
  images = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.projects.length; i++) {
      this.images[i] = new Image();
      this.images[i].src = this.projects[i].path;
      this.imageArray[i] = this.images[i].src
    }

    this.changeImage(this.select_index);

    // ['project_name'] -> ['p', 'r', 'o', ...]
    let count = 0;
    for (let project of this.projects) {
      this.project_names.push([]);
      for (let text of project.title) {
        this.project_names[count].push(text);
      }
      count++;
    }
  }

  changeImage(id: number) {
    this.select_index += id;
    if (this.select_index >= this.projects.length) {
      this.select_index = 0;
    } else if (this.select_index < 0) {
      this.select_index = this.projects.length - 1;
    }
    this.imagePath = this.imageArray[this.select_index]
  }

  moreClick() {
    console.log(this.projects[this.select_index].year);
  }

  trackByIdentity(index: number, item: any) {
    // DOMを再生成するためにidではなく適当な値を返す
    return Math.random();
  }
}
