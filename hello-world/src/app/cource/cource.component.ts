import { Component, OnInit } from '@angular/core';
import { CourceService } from './cources.service';
@Component({
  selector: 'cource',
  templateUrl: './cource.component.html',
  styleUrls: ['./cource.component.css']
})
export class CourceComponent implements OnInit {

  title="list of Cources";
    cources;

    constructor(sercice :CourceService) {
        // let sercice= new CourceService()

        this.cources= sercice.getService();
    }
    
    getTitle() { return this.title; }

  ngOnInit(): void {
  }

}
