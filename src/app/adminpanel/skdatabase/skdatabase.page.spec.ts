import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkdatabasePage } from './skdatabase.page';

describe('SkdatabasePage', () => {
  let component: SkdatabasePage;
  let fixture: ComponentFixture<SkdatabasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkdatabasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkdatabasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
