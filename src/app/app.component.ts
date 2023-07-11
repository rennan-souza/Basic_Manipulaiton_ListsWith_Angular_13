import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from './models/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cliente: Cliente = new Cliente();

  clientes: Cliente[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.cliente.cpf && !this.isCPFRepetido(this.cliente.cpf)) {
      this.clientes.push(this.cliente);
      this.cliente = new Cliente();
    } else {
      alert('CPF já adicionado');
    }
  }
  

  isCPFRepetido(cpf: string): boolean {
    return this.clientes.some(cliente => cliente.cpf === cpf);
  }

  removerCliente(cliente: Cliente) {
    const index = this.clientes.indexOf(cliente);
    if (index !== -1) {
      this.clientes.splice(index, 1);
    }
  }

  salvarClientes() {
    console.log(this.clientes);
  }

}
