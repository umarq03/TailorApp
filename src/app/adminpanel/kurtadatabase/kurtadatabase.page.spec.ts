import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KurtadatabasePage } from './kurtadatabase.page';

describe('KurtadatabasePage', () => {
  let component: KurtadatabasePage;
  let fixture: ComponentFixture<KurtadatabasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KurtadatabasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KurtadatabasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
