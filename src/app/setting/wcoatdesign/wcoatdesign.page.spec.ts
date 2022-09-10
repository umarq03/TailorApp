import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WcoatdesignPage } from './wcoatdesign.page';

describe('WcoatdesignPage', () => {
  let component: WcoatdesignPage;
  let fixture: ComponentFixture<WcoatdesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcoatdesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WcoatdesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
