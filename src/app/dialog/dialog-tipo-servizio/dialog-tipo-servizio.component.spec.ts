import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTipoServizioComponent } from './dialog-tipo-servizio.component';

describe('DialogTipoServizioComponent', () => {
  let component: DialogTipoServizioComponent;
  let fixture: ComponentFixture<DialogTipoServizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTipoServizioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTipoServizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
