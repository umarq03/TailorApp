import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShirtdatabasePage } from './shirtdatabase.page';

describe('ShirtdatabasePage', () => {
  let component: ShirtdatabasePage;
  let fixture: ComponentFixture<ShirtdatabasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtdatabasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShirtdatabasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
