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

  getSimpleSearchListByParam(searchingOption: string, searchInput: string): Observable<BookComponent[]> {
    const searchUrl = this.serverMainUrl + '/searchbook?param=' + searchingOption + '&input=' + searchInput;
    return this.http.get<BookComponent[]>(searchUrl)
      .pipe();
  }
}
