import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShirtdesignsPage } from './shirtdesigns.page';

describe('ShirtdesignsPage', () => {
  let component: ShirtdesignsPage;
  let fixture: ComponentFixture<ShirtdesignsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtdesignsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShirtdesignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
