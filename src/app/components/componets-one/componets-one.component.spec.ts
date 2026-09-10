import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetsOneComponent } from './componets-one.component';

describe('ComponetsOneComponent', () => {
  let component: ComponetsOneComponent;
  let fixture: ComponentFixture<ComponetsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponetsOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
