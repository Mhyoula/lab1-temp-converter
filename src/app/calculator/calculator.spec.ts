import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculator } from './calculator';

describe('Calculator', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculator],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it.each([
    ['+', 10, 5, 15],
    ['-', 10, 5, 5],
    ['*', 10, 5, 50],
    ['/', 10, 5, 2],
    ['+', -2.5, 1, -1.5],
    ['*', 0, 5, 0],
  ] as const)('calcule %s avec %s et %s', (operation, a, b, attendu) => {
    component.premierNombre = a;
    component.secondNombre = b;
    component.calculer(operation);
    expect(component.resultat()).toBe(attendu);
    expect(component.erreur()).toBe('');
  });

  it('refuse les champs vides', () => {
    component.calculer('+');
    expect(component.resultat()).toBeNull();
    expect(component.erreur()).toContain('deux nombres');
  });

  it('efface le précédent résultat lors de la division par zéro', () => {
    component.premierNombre = 10;
    component.secondNombre = 5;
    component.calculer('+');
    component.secondNombre = 0;
    component.calculer('/');
    expect(component.resultat()).toBeNull();
    expect(component.erreur()).toContain('zéro');
  });

  it('refuse un résultat infini', () => {
    component.premierNombre = Number.MAX_VALUE;
    component.secondNombre = 2;
    component.calculer('*');
    expect(component.resultat()).toBeNull();
    expect(component.erreur()).toContain('capacité');
  });

  it('relie les saisies et les quatre boutons au résultat affiché', async () => {
    const element = fixture.nativeElement as HTMLElement;
    const inputs = element.querySelectorAll('input');
    inputs[0].value = '10';
    inputs[0].dispatchEvent(new Event('input'));
    inputs[1].value = '5';
    inputs[1].dispatchEvent(new Event('input'));
    await fixture.whenStable();

    const buttons = element.querySelectorAll('button');
    for (const [index, attendu] of ['15', '5', '50', '2'].entries()) {
      buttons[index].click();
      await fixture.whenStable();
      expect(element.querySelector('output')?.textContent).toBe(attendu);
    }

    inputs[0].value = '';
    inputs[0].dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(element.querySelector('output')?.textContent).toBe('—');
    buttons[0].click();
    await fixture.whenStable();
    expect(element.querySelector('[role="alert"]')?.textContent).toContain('deux nombres');
  });
});
