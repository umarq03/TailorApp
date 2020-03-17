import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SKameezPage } from './skameez.page';

describe('SKameezPage', () => {
  let component: SKameezPage;
  let fixture: ComponentFixture<SKameezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SKameezPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SKameezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
