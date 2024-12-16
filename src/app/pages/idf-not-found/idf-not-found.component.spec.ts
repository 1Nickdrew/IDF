import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdfNotFoundComponent } from './idf-not-found.component';

describe('IdfNotFoundComponent', () => {
  let component: IdfNotFoundComponent;
  let fixture: ComponentFixture<IdfNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdfNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdfNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
