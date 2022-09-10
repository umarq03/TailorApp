import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaistcoatfabPage } from './waistcoatfab.page';

describe('WaistcoatfabPage', () => {
  let component: WaistcoatfabPage;
  let fixture: ComponentFixture<WaistcoatfabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaistcoatfabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaistcoatfabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
