import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlIconComponent } from './sl-icon.component';

describe('SlIconComponent', () => {
  let component: SlIconComponent;
  let fixture: ComponentFixture<SlIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
