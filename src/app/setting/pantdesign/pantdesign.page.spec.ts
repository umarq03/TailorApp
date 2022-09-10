import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantdesignPage } from './pantdesign.page';

describe('PantdesignPage', () => {
  let component: PantdesignPage;
  let fixture: ComponentFixture<PantdesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantdesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantdesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
