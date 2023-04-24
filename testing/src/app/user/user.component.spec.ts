import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DataService } from '../shared/data.service';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain name max', () => {
    const app = fixture.nativeElement;
    expect(app.querySelector('p').textContent).toContain('Max');
  })
  it('should contain value 101', () => {
    const app = fixture.nativeElement;
    expect(app.querySelector('h2').textContent).toContain(101);
  })
  it('should use the user name from the service',()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app=fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let userService=fixture.debugElement.injector.get(UserService)
    expect(userService.user.name).toEqual(app.user.name);
    expect(userService.user.id).toEqual(app.user.id);
  })
  it('should not display the user name if user is logged in',()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app=fixture.debugElement.componentInstance;
    app.isLoggedIn=true;
    fixture.detectChanges();
    let complied=fixture.debugElement.nativeElement;
    expect  (complied.querySelector('p').textContent).not.toContain(app.user.name);
  })
  it('should not be fetch data successfully if not called asynchronously',()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app=fixture.debugElement.componentInstance;
    let dataService=fixture.debugElement.injector.get(DataService)
    let spy=spyOn(dataService,'getDetails')
    .and.returnValue(Promise.resolve('Data '));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  })
  it('should fetch data successfully if not called asynchronously',fakeAsync(()=>{
    let fixture=TestBed.createComponent(UserComponent);
    let app=fixture.debugElement.componentInstance;
    let dataService=fixture.debugElement.injector.get(DataService)
    let spy=spyOn(dataService,'getDetails')
    .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
      expect(app.data).toBe('Data');

    })
  )
  
});
