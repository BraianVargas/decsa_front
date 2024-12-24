import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, TemplateRef, viewChild } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base',
  imports: [NgTemplateOutlet, RouterLink, RouterOutlet],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  isAdmin = input(false);

  carga_notas : any = viewChild('carga_notas',{ read : TemplateRef })
  cargaNotasTemplate = computed(() => this.isAdmin() ? this.carga_notas() : this.carga_notas());

  constructor(public router: Router) {}

} 
