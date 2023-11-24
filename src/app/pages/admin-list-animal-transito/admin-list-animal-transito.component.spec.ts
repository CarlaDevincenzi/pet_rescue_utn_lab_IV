import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListAnimalTransitoComponent } from './admin-list-animal-transito.component';

describe('AdminListAnimalTransitoComponent', () => {
  let component: AdminListAnimalTransitoComponent;
  let fixture: ComponentFixture<AdminListAnimalTransitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminListAnimalTransitoComponent]
    });
    fixture = TestBed.createComponent(AdminListAnimalTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
