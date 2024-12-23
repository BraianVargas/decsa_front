import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, TemplateRef, viewChild } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-base',
  imports: [NgTemplateOutlet, AdminComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  isAdmin = input(false);

  carga_notas : any = viewChild('carga_notas',{ read : TemplateRef })
  profileTemplate = computed(() => this.isAdmin() ? this.carga_notas() : this.carga_notas());

} 
