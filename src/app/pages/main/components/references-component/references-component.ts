import { Component, computed, signal } from '@angular/core';
import { ReferenceModel } from './reference.model';

@Component({
  selector: 'app-references-component',
  imports: [],
  templateUrl: './references-component.html',
  styleUrl: './references-component.scss',
})
export class ReferencesComponent {
  currentIndex = signal(0);

  references: ReferenceModel[] = [
    {
      name: 'S.Jobs',
      role: 'Fruit Salesman',
      reference:
        'I asked Mathias to think different. He did. Then he made it look good AND work. I would have fired everyone else.',
    },
    {
      name: 'B.Gates',
      role: 'Professional Window Cleaner',
      reference:
        'Mathias wrote cleaner code in one afternoon than my entire team managed in a decade. Also he never crashed once.',
    },
    {
      name: 'M.Zuckerberg',
      role: 'Definitely a Human Person',
      reference:
        'Mathias is a great developer. I have analyzed 4.2 billion data points to confirm this. I feel emotions about it.',
    },
    {
      name: 'G.Newell',
      role: 'Professional Counter',
      reference:
        'Mathias delivered so fast I almost announced a release date. Almost. We do not do that here. But I was tempted.',
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
