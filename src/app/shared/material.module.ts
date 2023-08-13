import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

const MaterialComponents = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule
];

@NgModule({
  exports: [
    MaterialComponents
  ],
  imports: [
    MaterialComponents
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
})
export class MaterialModule { }
