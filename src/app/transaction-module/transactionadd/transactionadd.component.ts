import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactionadd',
  templateUrl: './transactionadd.component.html',
  styleUrls: ['./transactionadd.component.css']
})
export class TransactionaddComponent implements OnInit {
  showFiller : boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log("test")
  }

}
