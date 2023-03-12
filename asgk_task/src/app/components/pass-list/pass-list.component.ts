import { Component, OnInit } from '@angular/core';

import { Pass } from '../../models';

import { PassService } from '../../services';

@Component({
  selector: 'app-pass-list',
  templateUrl: './pass-list.component.html',
  styleUrls: ['./pass-list.component.css'],
})
export class PassListComponent implements OnInit {
  passes$: Pass[];

  searchText: string;
  sortByParam: string;
  sortDirection: string = 'asc';

  constructor(private passService: PassService) {}

  ngOnInit(): void {
    this.passService.getPasses().subscribe((data) => (this.passes$ = data));
  }

  onSort() {
    if (this.sortDirection == 'asc') this.sortDirection = 'desc';
    else this.sortDirection = 'asc';
  }

  onClearFilter() {
    this.searchText = '';
  }
}
