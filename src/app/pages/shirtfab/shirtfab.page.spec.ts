import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShirtfabPage } from './shirtfab.page';

describe('ShirtfabPage', () => {
  let component: ShirtfabPage;
  let fixture: ComponentFixture<ShirtfabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShirtfabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShirtfabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
