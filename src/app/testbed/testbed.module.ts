import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TestbedRoutingModule } from './testbed-routing.module'

import { DailyDetailsComponent } from './components/daily-details/daily-details.component'


@NgModule({
    imports: [
        CommonModule,
        TestbedRoutingModule
    ],
    declarations: [DailyDetailsComponent],
})
export class TestbedModule {
}
