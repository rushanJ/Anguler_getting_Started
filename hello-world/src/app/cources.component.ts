import { CourceService } from './cource/cources.service';
import { CourceComponent } from './cource/cource.component';
import { Component } from "@angular/core";

@Component({
    selector:'cources',
    template:`
    
    <h2>{{"Title :"+getTitle()}}</h2>
    <h2>{{"Size : "+cources.length}}</h2>
    <ul>
        <li *ngFor="let cource of cources">
    {{cource}}
    </li>
    
    `
})
export class CourcesComponent {
    title="list of Cources";
    cources;

    constructor(sercice :CourceService) {
        // let sercice= new CourceService()

        this.cources= sercice.getService();
    }
    
    getTitle() { return this.title; }
}