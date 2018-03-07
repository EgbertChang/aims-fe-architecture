import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloComponent } from './components/hello.component';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        HelloComponent,
        AppComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
