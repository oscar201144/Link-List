import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina404ComponentComponent } from './pagina404-component.component';

describe('Pagina404ComponentComponent', () => {
  let component: Pagina404ComponentComponent;
  let fixture: ComponentFixture<Pagina404ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina404ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina404ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
