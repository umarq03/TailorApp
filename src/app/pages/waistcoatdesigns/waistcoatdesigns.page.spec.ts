import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaistcoatdesignsPage } from './waistcoatdesigns.page';

describe('WaistcoatdesignsPage', () => {
  let component: WaistcoatdesignsPage;
  let fixture: ComponentFixture<WaistcoatdesignsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaistcoatdesignsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaistcoatdesignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
