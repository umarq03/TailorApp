import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkfabPage } from './skfab.page';

describe('SkfabPage', () => {
  let component: SkfabPage;
  let fixture: ComponentFixture<SkfabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkfabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkfabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
