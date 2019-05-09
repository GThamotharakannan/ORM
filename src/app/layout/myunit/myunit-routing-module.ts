import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyunitComponent } from './myunit.component';

const routes: Routes = [
    {
        path: '', component: MyunitComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyunitRoutingModule {
}
