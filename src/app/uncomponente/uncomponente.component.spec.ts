import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UncomponenteComponent } from './uncomponente.component';

describe('UncomponenteComponent', () => {
  let component: UncomponenteComponent;
  let fixture: ComponentFixture<UncomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UncomponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UncomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
