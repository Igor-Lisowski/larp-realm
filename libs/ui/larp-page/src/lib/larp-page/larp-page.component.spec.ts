import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LarpPageComponent } from './larp-page.component';

describe('LarpPageComponent', () => {
  let component: LarpPageComponent;
  let fixture: ComponentFixture<LarpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LarpPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LarpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
