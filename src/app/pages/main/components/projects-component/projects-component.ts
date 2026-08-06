import { Component } from '@angular/core';
import { ProjectModel } from './project.model';
import { Dialog } from './dialog/dialog';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-component',
  imports: [Dialog, TranslatePipe],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {
  hoveredIndex: number | null = null;
  selectedProject: ProjectModel | null = null;
  selectedIndex: number = 0;

  projects: ProjectModel[] = [
    {
      name: 'PokéDex',
      techs: ['HTML', 'CSS', 'JavaScript', 'Rest-API'],
      img: '/assets/img/pokedex-preview.png',
      description: 'projects.pokedex.description',
      github: 'https://github.com/Xargall/Poke-Dex.git',
      demo: '',
    },
    {
      name: 'El Pollo Loco',
      techs: ['HTML', 'CSS', 'JavaScript'],
      img: '/assets/img/el-pollo-loco-preview.png',
      description: 'projects.el_pollo_loco.description',
      github: 'https://github.com/Xargall/El-Pollo-Loco.git',
      demo: '',
    },
  ];

  onMouseEnter(index: number) {
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }

  openDialog(project: ProjectModel, i: number) {
    this.selectedProject = project;
    this.selectedIndex = i + 1;
  }
}
