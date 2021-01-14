import { ResultBookDetailComponent } from './components2/result-book-detail/result-book-detail.component';
import { ResultBooksComponent } from './components2/result-books/result-books.component';
import { ResultBookComponent } from './components2/result-book/result-book.component';
import { SimpleSearchFieldComponent } from './components2/simple-search-field/simple-search-field.component';
import { SearchContainerComponent } from './components2/search-container/search-container.component';
import { BookComponent } from './components/book/book.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SearchContainerComponent,
    SimpleSearchFieldComponent,
    ResultBookComponent,
    ResultBooksComponent,
    ResultBookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
