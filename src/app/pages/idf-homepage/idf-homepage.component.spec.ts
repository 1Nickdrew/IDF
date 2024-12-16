import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdfHomepageComponent } from './idf-homepage.component';

describe('IdfHomepageComponent', () => {
  let component: IdfHomepageComponent;
  let fixture: ComponentFixture<IdfHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdfHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdfHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
