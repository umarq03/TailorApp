import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddesignPage } from './addesign.page';

describe('AddesignPage', () => {
  let component: AddesignPage;
  let fixture: ComponentFixture<AddesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
