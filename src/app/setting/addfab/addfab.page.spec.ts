import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddfabPage } from './addfab.page';

describe('AddfabPage', () => {
  let component: AddfabPage;
  let fixture: ComponentFixture<AddfabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddfabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
