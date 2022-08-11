import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from 'src/app/header/header.component';

let fixture: ComponentFixture<HeaderComponent>;

describe('Header Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
    })

    it('should be created', () => {

        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });


    it('should render Apptitle, "BookApp" in the navbar', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.navbar-brand').textContent).toBe('BookApp', "Text 'BookApp' must be present inside '<a class=\"navbar-brand\" href=\"#\"> </a>'");
    });
});
