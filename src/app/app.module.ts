import { ResultBookDetailComponent } from './components/result-book-detail/result-book-detail.component';
import { ResultTableComponent } from './components/result/result-table/result-table.component';
import { SimpleSearchFieldComponent } from './components/search/simple-search-field/simple-search-field.component';
import { SearchContainerComponent } from './components/search/search-container/search-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BofhLogoComponent } from './components/bofh-logo/bofh-logo.component';
import { ResultBooksPaginationComponent } from './components/result/result-table-pagination/result-table-pagination.component';
import { ResultTablePaginationPagesizeComponent } from './components/result/result-table-pagination-pagesize/result-table-pagination-pagesize.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    SimpleSearchFieldComponent,
    ResultTableComponent,
    ResultBookDetailComponent,
    BofhLogoComponent,
    ResultBooksPaginationComponent,
    ResultTablePaginationPagesizeComponent
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
