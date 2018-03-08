import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { DailyDetailsComponent } from './components/daily-details/daily-details.component'

const routes: Routes = [
    { path: '', component: DailyDetailsComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }];

@NgModule({
    declarations: [
        DailyDetailsComponent
    ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class TestbedRoutingModule {
}
