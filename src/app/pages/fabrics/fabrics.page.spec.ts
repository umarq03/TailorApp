import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FabricsPage } from './fabrics.page';

describe('FabricsPage', () => {
  let component: FabricsPage;
  let fixture: ComponentFixture<FabricsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FabricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
