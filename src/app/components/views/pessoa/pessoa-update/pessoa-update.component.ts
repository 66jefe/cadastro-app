import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.css']
})
export class PessoaUpdateComponent implements OnInit {

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

  update(): void {
    this.service.update(this.pessoa).subscribe((resposta) => {
      this.router.navigate(['listar']);
      this.service.msg('Cadastro atualizado com sucesso!');
    }, e => {
      this.service.msg('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['listar']);
  }

}
