import { Component } from '@angular/core';
import { ProjectModel } from './project.model';

@Component({
  selector: 'app-projects-component',
  imports: [],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {
  projects: ProjectModel[] = [
    {
      name: 'PokéDex',
      techs: ['HTML', 'CSS', 'JavaScript', 'Rest-API'],
      img: '/assets/img/pokedex-preview.png',
      description:
        'Gotta catch ´em all — or at least look them up. This Pokédex pulls live data from the PokéAPI and lets you search, filter, and explore detailed cards for every Pokémon.',
      github: 'https://github.com/Xargall/Poke-Dex.git',
      demo: '',
    },
    {
      name: 'El Pollo Loco',
      techs: ['HTML', 'CSS', 'JavaScript'],
      img: '/assets/img/el-pollo-loco-preview.png',
      description:
        'Run, jump, throw — El Pollo Loco was my first dive into object-oriented JavaScript. Help Pepe collect coins and salsa bottles to take down the crazy hen.',
      github: 'https://github.com/Xargall/El-Pollo-Loco.git',
      demo: '',
    },
  ];
}
