import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { DailyDetailsComponent } from './testbed/components/daily-details/daily-details.component'


@NgModule({
    declarations: [
        AppComponent,
        DailyDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
