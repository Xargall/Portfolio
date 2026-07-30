import { Component, input, output, viewChild, effect, ElementRef } from '@angular/core';
import { Button } from '../../../../../shared/button/button';
import { ProjectModel } from '../project.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dialog',
  imports: [Button, DecimalPipe],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  selectedProject = input<ProjectModel>();
  selectedIndex = input<number>();
  closeDialog = output();
  dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialogRef');

  techIcons: Record<string, string> = {
    HTML: '/assets/icons/html-logo.svg',
    CSS: '/assets/icons/css-logo.svg',
    JavaScript: '/assets/icons/java-script-logo.svg',
    'Rest-API': '/assets/icons/rest-api-logo.svg',
    TypeScript: '/assets/icons/type-script-logo.svg-logo.svg',
    Angular: '/assets/icons/angular-logo.svg',
    Supabase: '/assets/icons/supabase-logo.svg',
  };

  constructor() {
    effect(() => {
      const dialog = this.dialogRef()?.nativeElement;
      dialog?.showModal();
      document.body.style.overflow = 'hidden';

      dialog?.addEventListener('close', () => {
        document.body.style.overflow = '';
      });
    });
  }
}
