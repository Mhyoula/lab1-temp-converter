import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempConverter } from './temp-converter';

describe('TempConverter', () => {
  let component: TempConverter;
  let fixture: ComponentFixture<TempConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempConverter],
    }).compileComponents();

    fixture = TestBed.createComponent(TempConverter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
