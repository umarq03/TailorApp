import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoatdatabasePage } from './coatdatabase.page';

describe('CoatdatabasePage', () => {
  let component: CoatdatabasePage;
  let fixture: ComponentFixture<CoatdatabasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatdatabasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoatdatabasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
