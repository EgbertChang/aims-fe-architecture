import { Component, OnInit } from '@angular/core';
import './daily-details.component.css'


@Component({
    selector: 'app-root',
    template: require('./daily-details.component.html'),
    // template: '<h1>Hello World</h1>',
    // styles: [String(require('./daily-details.component.css'))]
    // styleUrls: ['../src/app/components/daily-details.component.css']
})
export class DailyDetailsComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('123456000')
    }
}
