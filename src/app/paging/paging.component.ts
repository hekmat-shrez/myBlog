import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page;

  @Output() newPage = new EventEmitter();

  previousPage() {
    if (this.page > 1 ) {
      this.newPage.emit(this.page - 1); 
    }
  }

  nextPage() { 
    this.newPage.emit(this.page + 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
