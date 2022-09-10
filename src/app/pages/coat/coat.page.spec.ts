import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoatPage } from './coat.page';

describe('CoatPage', () => {
  let component: CoatPage;
  let fixture: ComponentFixture<CoatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
