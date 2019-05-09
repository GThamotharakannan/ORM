import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyunitRoutingModule } from './myunit-routing-module';
import { MyunitComponent } from './myunit.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, MyunitRoutingModule, PageHeaderModule],
    declarations: [MyunitComponent]
})
export class MyunitModule {}
