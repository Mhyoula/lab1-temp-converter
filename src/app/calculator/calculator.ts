import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculator',
  styleUrl: './calculator.css',
  templateUrl: './calculator.html',
})
export class Calculator {
  premierNombre: number | null = null;
  secondNombre: number | null = null;
  readonly resultat = signal<number | null>(null);
  readonly erreur = signal('');

  effacerResultat(): void {
    this.resultat.set(null);
    this.erreur.set('');
  }

  calculer(operation: '+' | '-' | '*' | '/'): void {
    this.effacerResultat();
    const a = this.premierNombre;
    const b = this.secondNombre;

    // Un champ vide ne doit pas être traité comme le nombre zéro.
    if (a === null || b === null || !Number.isFinite(a) || !Number.isFinite(b)) {
      this.erreur.set('Veuillez saisir deux nombres valides.');
      return;
    }

    if (operation === '/' && b === 0) {
      this.erreur.set('Impossible de diviser par zéro.');
      return;
    }

    let valeur: number;
    switch (operation) {
      case '+': valeur = a + b; break;
      case '-': valeur = a - b; break;
      case '*': valeur = a * b; break;
      case '/': valeur = a / b; break;
    }

    if (!Number.isFinite(valeur)) {
      this.erreur.set('Le résultat dépasse la capacité de calcul.');
      return;
    }
    this.resultat.set(valeur);
  }
}
