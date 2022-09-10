import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainHomePage } from './main-home.page';

describe('MainHomePage', () => {
  let component: MainHomePage;
  let fixture: ComponentFixture<MainHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
