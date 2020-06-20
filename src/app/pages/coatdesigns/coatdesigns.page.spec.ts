import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoatdesignsPage } from './coatdesigns.page';

describe('CoatdesignsPage', () => {
  let component: CoatdesignsPage;
  let fixture: ComponentFixture<CoatdesignsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoatdesignsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoatdesignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
