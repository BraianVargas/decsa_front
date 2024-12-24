import { ChangeDetectionStrategy, Component, output, ViewEncapsulation } from '@angular/core';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatFormField} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Nota, OrigenOptions } from '../../../models/nota';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-carga-notas',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './carga-notas.component.html',
  styleUrl: './carga-notas.component.css',
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
  ],
  imports: [
    MatFormField,
    MatInputModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    AsyncPipe,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CargaNotasComponent {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  // Origen input
  origen_options = new FormControl<string | OrigenOptions>('');
  options: OrigenOptions[] = [
    { name : "USUARIO" },
    { name : "EPRE" },
    { name : "DRE" },
    { name : "CAMMESA" },
    { name : "ENRE" },
    { name : "Ministerio" },
    { name : "MUNICIPALIDAD CAUCETE" },
    { name : "OTRO" }
  ]
  filteredOptions: Observable<OrigenOptions[]> | undefined

  ngOnInit() {
    this.filteredOptions = this.origen_options.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }
  displayFn(origen: OrigenOptions): string{
    return origen && origen.name ? origen.name : '';
  }
  private _filter(name: string): OrigenOptions[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  // username input 
  username_control = new FormControl<string>('');

}
