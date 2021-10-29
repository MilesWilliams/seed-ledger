import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedVaultComponent } from './seed-vault.component';

describe('SeedVaultComponent', () => {
  let component: SeedVaultComponent;
  let fixture: ComponentFixture<SeedVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedVaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
