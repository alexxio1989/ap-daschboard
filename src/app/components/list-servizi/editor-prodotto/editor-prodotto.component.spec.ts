import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorProdottoComponent } from './editor-prodotto.component';

describe('EditorProdottoComponent', () => {
  let component: EditorProdottoComponent;
  let fixture: ComponentFixture<EditorProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorProdottoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
