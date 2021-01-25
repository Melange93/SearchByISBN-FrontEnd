import { ResultBookDetailComponent } from './components/result-book-detail/result-book-detail.component';
import { ResultBooksComponent } from './components/result-books/result-books.component';
import { ResultBookComponent } from './components/result-book/result-book.component';
import { SimpleSearchFieldComponent } from './components/simple-search-field/simple-search-field.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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
