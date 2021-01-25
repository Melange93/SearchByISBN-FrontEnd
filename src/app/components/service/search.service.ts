import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {BookComponent} from '../model/book.model';
import {environment} from 'src/environments/environment';

@Injectable()
export class SearchService {

  private serverMainUrl = environment.serverMainUrl;

  constructor(
    private http: HttpClient
  ) {
  }

  getSimpleSearchList(searchISBN: string): Observable<BookComponent> {
    console.log(searchISBN)
    return this.http.get<BookComponent>(this.serverMainUrl + '/searchbook?isbn=' + searchISBN)
      .pipe();
  }
}
