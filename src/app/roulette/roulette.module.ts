import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouletteRoutingModule } from './roulette-routing.module';
import { NodesCompanyModule } from './create-bet-roulette/nodes-company.module';
import { ManualTrayInboxModule } from './view-roulette/manual-tray-inbox.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouletteRoutingModule,
    NodesCompanyModule,
    ManualTrayInboxModule
  ]
})
export class RouletteModule { }
