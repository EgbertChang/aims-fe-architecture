import { NgModule } from '@angular/core'
import { Routes, RouterModule} from '@angular/router'
import { DailyDetailsComponent } from './testbed/components/daily-details/daily-details.component'

const routes: Routes = [
    // 因为这里的懒加载需要ng-cli的支持，所以这里暂时只能使用"硬加载"
    { path: 'testbed', component: DailyDetailsComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
