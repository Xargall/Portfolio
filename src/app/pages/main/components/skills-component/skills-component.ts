import { Component, signal } from '@angular/core';
import { Skills } from './skills';
import { Button } from '../../../../shared/button/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-component',
  imports: [Button, TranslatePipe],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss',
})
export class SkillsComponent {
  activeTooltip = signal<string | null>(null);

  skills: Skills[] = [
    { name: 'HTML', icon: '/assets/icons/html-logo.svg' },
    { name: 'CSS', icon: '/assets/icons/css-logo.svg' },
    { name: 'JavaScript', icon: '/assets/icons/java-script-logo.svg' },
    { name: 'TypeScript', icon: '/assets/icons/type-script-logo.svg' },
    { name: 'Git', icon: '/assets/icons/git-logo.svg' },
    { name: 'Rest-API', icon: '/assets/icons/rest-api-logo.svg' },
    { name: 'Angular', icon: '/assets/icons/angular-logo.svg' },
    { name: 'Supabase', icon: '/assets/icons/supabase-logo.svg' },
    { name: 'Growth Mindset', icon: '/assets/icons/mindset-logo.svg', tooltip: true },
  ];

  onPointerEnter(skill: Skills, event: PointerEvent) {
    if (!skill.tooltip || event.pointerType !== 'mouse') return;
    this.activeTooltip.set(skill.name);
  }

  onPointerLeave(skill: Skills, event: PointerEvent) {
    if (!skill.tooltip || event.pointerType !== 'mouse') return;
    this.activeTooltip.set(null);
  }

  onPointerDown(skill: Skills, event: PointerEvent) {
    if (!skill.tooltip || event.pointerType === 'mouse') return;
    event.preventDefault();
    this.activeTooltip.set(skill.name);
  }

  onPointerUp(skill: Skills) {
    if (!skill.tooltip) return;
    this.activeTooltip.set(null);
  }
}
