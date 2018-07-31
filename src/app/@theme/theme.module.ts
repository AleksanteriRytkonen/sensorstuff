import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ChartComponent } from './components/';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

const COMPONENTS = [
  HeaderComponent,
  ChartComponent
];

const BASE_MODULES = [CommonModule];

@NgModule({
  imports: [
    NgbModule,
    ...BASE_MODULES,
    ChartsModule
  ],
  exports: [...COMPONENTS, NgbModule, ...BASE_MODULES],
  declarations: [...COMPONENTS]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule
    }
  }
 }
