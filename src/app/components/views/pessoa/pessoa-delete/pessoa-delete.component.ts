import { Pessoa } from './../pessoa.model';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-delete',
  templateUrl: './pessoa-delete.component.html',
  styleUrls: ['./pessoa-delete.component.css']
})
export class PessoaDeleteComponent implements OnInit {

  pessoa: Pessoa = {
    id: '',
    nome: '',
    idade: '',
    cpf: '',
    sexo: '',
    telefone: ''
  }

  constructor(private service: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pessoa.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.pessoa.id!).subscribe((resposta) => {
      this.pessoa.nome = resposta.nome;
      this.pessoa.idade = resposta.idade;
      this.pessoa.cpf = resposta.cpf;
      this.pessoa.sexo = resposta.sexo;
      this.pessoa.telefone = resposta.telefone;
    });
  }

  delete(): void {
    this.service.delete(this.pessoa.id!).subscribe((resposta) => {
      this.router.navigate(['listar']);
      this.service.msg('Pessoa deletada com sucesso!')
    }, e => {
      this.service.msg(e.error.msg);
    });
  }

  cancel(): void {
    this.router.navigate(['listar']);
  }

}
