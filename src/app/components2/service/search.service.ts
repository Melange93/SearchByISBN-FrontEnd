import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../model/book.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class SearchService {

	private serverMainUrl = environment.serverMainUrl;

	constructor(
		private http: HttpClient
	) { 
	}

	getSimpleSearchList(searchISBN: string): Observable<Book> {
		return this.http.get<Book>(this.serverMainUrl + '/searchbook?isbn=' + searchISBN)
			.pipe();
	}
}