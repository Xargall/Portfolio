import { Component, input, output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Button } from '../../../../../shared/button/button';
import { ProjectModel } from '../project.model';

@Component({
  selector: 'app-dialog',
  imports: [Button],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog implements AfterViewInit {
  selectedProject = input<ProjectModel>();
  selectedIndex = input<number>();
  closeDialog = output();
  @ViewChild('dialogRef') dialogRef!: ElementRef;

  techIcons: Record<string, string> = {
    HTML: '/assets/icons/html-logo.svg',
    CSS: '/assets/icons/css-logo.svg',
    JavaScript: '/assets/icons/java-script-logo.svg',
    'Rest-API': '/assets/icons/rest-api-logo.svg-logo.svg',
    TypeScript: '/assets/icons/type-script-logo.svg-logo.svg',
    Angular: '/assets/icons/angular-logo.svg',
    Supabase: '/assets/icons/supabase-logo.svg',
  };

  ngAfterViewInit(): void {
    this.dialogRef.nativeElement.showModal();
  }
}
