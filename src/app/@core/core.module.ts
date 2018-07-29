import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule } from './data/data.module';

export const CORE_PROVIDERS = [
  ...DataModule.forRoot().providers
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: CoreModule,
      providers: [
        ...CORE_PROVIDERS
      ],
    };
  }
}
