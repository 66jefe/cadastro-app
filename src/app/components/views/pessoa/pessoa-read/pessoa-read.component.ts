import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements OnInit {

  pessoas: Pessoa[] = [];
  
  displayedColumns: string[] = ['id', 'nome', 'idade', 'cpf', 'sexo', 'telefone', 'acoes'];

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.pessoas = resposta;
    });
  }

  navCatCreate() {
    this.router.navigate(["listar/create"]);
  }

}
