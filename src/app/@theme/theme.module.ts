import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const COMPONENTS = [
  HeaderComponent
];

const BASE_MODULES = [CommonModule];

@NgModule({
  imports: [
    NgbModule,
    ...BASE_MODULES
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
