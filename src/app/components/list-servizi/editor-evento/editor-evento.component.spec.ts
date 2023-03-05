import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEventoComponent } from './editor-evento.component';

describe('EditorEventoComponent', () => {
  let component: EditorEventoComponent;
  let fixture: ComponentFixture<EditorEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
