import { Component, input, output, viewChild, effect, ElementRef } from '@angular/core';
import { Button } from '../../../../../shared/button/button';
import { ProjectModel } from '../project.model';
import { DecimalPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog',
  imports: [Button, DecimalPipe, TranslatePipe],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  selectedProject = input<ProjectModel>();
  selectedIndex = input<number>(0);
  totalProjects = input<number>(0);
  nextProject = output();
  closeDialog = output();
  dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialogRef');

  techIcons: Record<string, string> = {
    HTML: '/assets/icons/html-dialog.svg',
    CSS: '/assets/icons/css-dialog.svg',
    JavaScript: '/assets/icons/java-script-dialog.svg',
    'Rest-API': '/assets/icons/rest-api-dialog.svg',
    TypeScript: '/assets/icons/type-script-dialog.svg',
    Angular: '/assets/icons/angular-dialog.svg',
    Supabase: '/assets/icons/supabase-dialog.svg',
  };

  constructor() {
    effect(() => {
      const dialog = this.dialogRef()?.nativeElement;
      dialog?.showModal();
      dialog?.focus();
      document.body.style.overflow = 'hidden';

      dialog?.addEventListener('close', () => {
        document.body.style.overflow = '';
      });
    });
  }

  close() {
    this.dialogRef()?.nativeElement.close();
  }
}
