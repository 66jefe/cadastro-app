import { Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoa: Pessoa = {
    nome: '',
    idade: '',
    cpf: '',
    sexo: '',
    telefone: ''
  }

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.pessoa).subscribe((resposta) => {
      this.router.navigate(['listar']);
      this.service.msg('Cadastro criado com sucesso!');
     }, e => {
        this.service.msg(e.error.msg);
    });
  }

  cancel(): void {
    this.router.navigate(['listar']);
  }

}
