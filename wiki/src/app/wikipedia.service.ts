import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, pluck} from "rxjs";

// interface Car {
//     year: number;
//     color: string;
//     running: boolean;
//     make: {
//         name: string;
//         dateCreated: number
//     }
// }

// const observable = new Observable<number>((observer) => {
//     observer.next(1);
// });

// const observable = new Observable<Car>((observer) => {
//
//     observer.next({
//         year: 2007,
//         color: 'black',
//         running: true,
//         make: {
//             name: "Toyota",
//             dateCreated: 20070101
//         }
//     });
// }).pipe(
//     //pluck('make', 'name'),
//     // Note: this is the same as pluck, used because pluck is deprecated
//     map(value => value.make.name)
// );
//
//
// observable.subscribe((value) => {
//     console.log(`Received ${value}`);
// })

interface WikipediaResponse {
    query: {
        search: {
            title: string,
            snippet: string,
            wordcount: number
            pageid: number
        }[]
    }
}

@Injectable({
    providedIn: 'root'
})

export class WikipediaService {

    constructor(private httpClient: HttpClient) {
        console.log("Instance of Wikipedia Service created");
    }

    search(term: string) {
        return this.httpClient.get<WikipediaResponse>("https://en.wikipedia.org/w/api.php", {
            params: {
                action: 'query', format: 'json', list: 'search', utf8: '1', srsearch: term, origin: '*'
            }
        })
            .pipe(
                //map((value) => value.query.search)
                pluck('query', 'search')
            )
    }
}
