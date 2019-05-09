import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignUnitComponent } from './assign-unit.component';

const routes: Routes = [
    {
        path: '', component: AssignUnitComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssignUnitRoutingModule {
}
