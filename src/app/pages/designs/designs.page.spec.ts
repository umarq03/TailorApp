import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesignsPage } from './designs.page';

describe('DesignsPage', () => {
  let component: DesignsPage;
  let fixture: ComponentFixture<DesignsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
