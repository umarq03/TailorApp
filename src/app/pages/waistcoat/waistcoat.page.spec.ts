import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaistcoatPage } from './waistcoat.page';

describe('WaistcoatPage', () => {
  let component: WaistcoatPage;
  let fixture: ComponentFixture<WaistcoatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaistcoatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaistcoatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
