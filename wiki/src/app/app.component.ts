import {Component} from '@angular/core';
import {WikipediaService} from "./wikipedia.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    pages: any = [];

    constructor(private wikipedia: WikipediaService) {
    }

    onTerm(term: string) {
        // console.log(`Received ${term}, executing search ...`)
        // const results = this.wikipedia.search(term);
        // console.log("Received from Wikipedia: " + results);
        this.wikipedia.search(term).subscribe((response) => {
            //console.log("Received from Wikipedia: ", pages);
            //this.pages = response.query.search;
            this.pages = response
        })

    }
}
