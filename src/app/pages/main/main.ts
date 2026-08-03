import { Component } from '@angular/core';
import { HeroComponent } from './components/hero-component/hero-component';
import { AboutMeComponent } from './components/about-me-component/about-me-component';
import { SkillsComponent } from './components/skills-component/skills-component';
import { ProjectsComponent } from './components/projects-component/projects-component';
import { ReferencesComponent } from './components/references-component/references-component';
import { ContactFormComponent } from './components/contact-form-component/contact-form-component';

@Component({
  selector: 'app-main',
  imports: [
    HeroComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactFormComponent,
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
