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

  getSimpleSearchList(searchingOption: string, searchISBN: string): Observable<BookComponent> {
    const searchingUrl = this.serverMainUrl + '/searchbook?' + searchingOption + '=' + searchISBN;
    return this.http.get<BookComponent>(searchingUrl)
      .pipe();
  }
}
