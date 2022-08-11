import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { BookService } from 'src/app/book.service';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let service: any;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [BookService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    service = TestBed.get(BookService);
  })

  it('should be created', () => {

    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render app-header', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand')).not.toBeNull("App Component must contain '<app-header></app-header>'");
  });


  it('should contain a submit button with the text "Add Book"', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn').textContent).toBe("Add Book", "Must contain '<button type=\"submit\" class=\"btn btn-primary\">Add Book</button>'");
  });

  it("getBooksFromServer() should fetch books by calling getBooks() of BookService", () => {
    const compiled = fixture.debugElement.componentInstance;
    spyOn(service, "getBooks").and.returnValue(of(1));
    compiled.getBooksFromServer();
    expect(service.getBooks).toHaveBeenCalled();
    expect(service.getBooks).toHaveBeenCalledTimes(1);
  })

  it("when all the fields of a book to be added is provided, newBook() should add a new book by calling addBook() of BookService", () => {
    const compiled = fixture.debugElement.componentInstance;
    spyOn(service, "addBook").and.returnValue(of(1));
    compiled.book = { name: "Dummy Book", author: "xyz", year: 2000, language: "English" };
    compiled.newBook();
    expect(service.addBook).toHaveBeenCalled();
    expect(service.addBook).toHaveBeenCalledTimes(1);
  })

  it("when any of the field of the book to be added is missing, newBook() should not call addBook()", () => {
    const compiled = fixture.debugElement.componentInstance;
    spyOn(service, "addBook").and.returnValue(of(1));
    compiled.book = { name: "", author: "", year: 0, language: "" };
    compiled.newBook();
    expect(service.addBook).toHaveBeenCalledTimes(0);
  })
});
