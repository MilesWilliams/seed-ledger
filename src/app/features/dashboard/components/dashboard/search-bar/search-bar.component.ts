import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ClearSearchResults, StartSearch } from '../../../store/actions/search.actions';
import { SearchState } from '../../../store/state/search.state';

@Component({
  selector: 'sl-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Select(SearchState.results) searchResults$: Observable<any[]>;
  @Select(SearchState.isLoading) isSearching$: Observable<boolean>;
  private destroy$ = new Subject<void>();
  public searchForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: this.fb.control('')
    });

    this.searchForm.get('query').valueChanges
      .pipe(
        debounceTime(700),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: res => this.searchCompanies(res)
      })
  }

  private searchCompanies(query: string) {
    console.info(`query: ${query}`);

    if (query === '') return this.store.dispatch(new ClearSearchResults);

    this.store.dispatch(new StartSearch(query));
  }

  public selectCompany(symbol: string) {
    // this.store.dispatch(new SetViewCompanySymbol(symbol));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
