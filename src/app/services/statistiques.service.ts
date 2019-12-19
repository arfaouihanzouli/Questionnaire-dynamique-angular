import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService implements OnInit{

  private nbrRepParQuest=[];
  nbrRepParQuestSubject= new Subject<any[]>();

  private nbrRepParEmail=[];
  nbrRepParEmailSubject= new Subject<any[]>();

  test1=[
    {
      titre: "quest1",
      nbrRep: 5
    },
    {
      titre: "quest2",
      nbrRep: 15
    },
    {
      titre:"quest3",
      nbrRep: 25
    },
    {
      titre:"quest4",
      nbrRep: 66
    }
  ]

  test2=[
    {
      email: "marwenhanzouli@gmail.com",
      nbrRep: 10
    },
    {
      email: "arfaouinoureddine@gmail.com",
      nbrRep: 14
    },
    {
      email:"pap@hotmail.fr",
      nbrRep: 9
    },
    {
      email:"messi@yahoo.com",
      nbrRep: 17
    }
  ]

  constructor(private httpClient: HttpClient) { }

  emitNbrRepParQuestSubject(){
    this.nbrRepParQuestSubject.next(this.nbrRepParQuest.slice());
  }
  emitNbrRepParEmailSubject(){
    this.nbrRepParEmailSubject.next(this.nbrRepParEmail.slice());
  }
  ngOnInit(){
  }
  getReponsesParQuestionnaire(){
    /*this.httpClient.get<any[]>('http://127.0.0.1:3000/----')
    .subscribe(
      (reponse) => {
        this.nbrRepParQuest=reponse;
        this.emitNbrRepParQuestSubject();
      },
      (error) => {
        console.log(error);
      }
    );*/
    this.nbrRepParQuest=this.test1;
    this.emitNbrRepParQuestSubject();
  }

  getReponsesParEmail(){
    /*this.httpClient.get<any[]>('http://127.0.0.1:3000/----')
    .subscribe(
      (reponse) => {
        this.nbrRepParEmail=reponse;
        this.emitNbrRepParEmailSubject();
      },
      (error) => {
        console.log(error);
      }
    );*/
    this.nbrRepParEmail=this.test2;
    this.emitNbrRepParEmailSubject();
  }
}