import { TestBed, async, } from '@angular/core/testing';
import { BookService } from 'src/app/book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('Book Service', () => {

    let service: any;
    let http: any;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpClient]
        }).compileComponents();
    }));

    beforeEach(() => {
        service = TestBed.get(BookService);
        http = TestBed.get(HttpClient);
    })

    it('should be created', () => {

        expect(service).toBeTruthy();
    });

    it('getBooks() should call get() of HttpClient', () => {

        spyOn(http, "get").and.returnValue(of(1));
        service.getBooks();
        expect(http.get).toHaveBeenCalled();
        expect(http.get).toHaveBeenCalledTimes(1);
    })

    it('addBook() should call post() of HttpClient', () => {

        spyOn(http, "post").and.returnValue(of(1));
        service.addBook();
        expect(http.post).toHaveBeenCalled();
        expect(http.post).toHaveBeenCalledTimes(1);
    })

});
