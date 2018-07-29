import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';

const SERVICES = [
  DataService
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...SERVICES,
  ],
  declarations: []
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
