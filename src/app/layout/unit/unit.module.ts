import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitRoutingModule } from './unit-routing-module';
import { UnitComponent } from './unit.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, UnitRoutingModule, PageHeaderModule],
    declarations: [UnitComponent]
})
export class UnitModule {}
