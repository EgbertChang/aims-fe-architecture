import { Component, OnInit } from '@angular/core';
import './hello.component.css'

@Component({
    selector: 'app-root',
    template: require('./hello.component.html'),
    // styles: [String(require('./hello.component.css'))]
    // styles: [String(require('./hello.component.css'))]
    // styleUrls: ['../src/app/components/hello.component.css']
    // styleUrls: ['../src/app/components/hello.component.css']
})
export class HelloComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('1234500')
    }
}