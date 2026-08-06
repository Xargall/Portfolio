import { Component, computed, signal } from '@angular/core';
import { ReferenceModel } from './reference.model';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references-component',
  imports: [TranslatePipe],
  templateUrl: './references-component.html',
  styleUrl: './references-component.scss',
})
export class ReferencesComponent {
  currentIndex = signal(0);

  references: ReferenceModel[] = [
    {
      name: 'S.Jobs',
      role: 'references.jobs.role',
      reference: 'references.jobs.text',
    },
    {
      name: 'B.Gates',
      role: 'references.gates.role',
      reference: 'references.gates.text',
    },
    {
      name: 'M.Zuckerberg',
      role: 'references.zuckerberg.role',
      reference: 'references.zuckerberg.text',
    },
    {
      name: 'G.Newell',
      role: 'references.newell.role',
      reference: 'references.newell.text',
    },
  ];

  visibleReferences = computed(() => {
    const total = this.references.length;
    const index = this.currentIndex();

    const leftIndex = (index - 1 + total) % total;
    const rightIndex = (index + 1) % total;

    return [
      { ref: this.references[leftIndex], state: 'left' },
      { ref: this.references[index], state: 'active' },
      { ref: this.references[rightIndex], state: 'right' },
    ];
  });

  setActive(index: number) {
    this.currentIndex.set(index);
  }

  nextReference() {
    this.currentIndex.update((i) => (i + 1) % this.references.length);
  }

  previousReference() {
    this.currentIndex.update((i) => (i - 1 + this.references.length) % this.references.length);
  }

  getCardOffset(index: number): number {
    const total = this.references.length;
    let diff = index - this.currentIndex();

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  }
}
