import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WcoatdatabasePage } from './wcoatdatabase.page';

describe('WcoatdatabasePage', () => {
  let component: WcoatdatabasePage;
  let fixture: ComponentFixture<WcoatdatabasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WcoatdatabasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WcoatdatabasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
