import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignUnitRoutingModule } from './assign-unit-routing.module';
import { AssignUnitComponent } from './assign-unit.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AssignUnitRoutingModule, PageHeaderModule],
    declarations: [AssignUnitComponent]
})
export class AssignUnitModule {}
