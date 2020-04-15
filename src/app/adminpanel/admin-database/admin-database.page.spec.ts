import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminDatabasePage } from './admin-database.page';

describe('AdminDatabasePage', () => {
  let component: AdminDatabasePage;
  let fixture: ComponentFixture<AdminDatabasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDatabasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDatabasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
