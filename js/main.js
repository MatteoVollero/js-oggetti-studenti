/*l'esercizio di oggi è composto da 3 punti:
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Concentratevi prima sulla logica stampando il risultato in console, poi quando avete terminato, provate ad utilizzare il template engine Handlebars e a stampare i risultati direttamente nel documento HTML.*/


$(document).ready(function(){


  var scroll = 1;
  //Array di studenti
  var studenti =
  [
    {
      "nome":"giovanna",
      "cognome":"russo",
      "eta": 3
    },

    {
      "nome":"matteo",
      "cognome":"vollero",
      "eta": 24
    },

    {
      "nome":"marcello",
      "cognome":"muto",
      "eta": 98
    },
  ];

  for(var i = 0 ; i < studenti.length ; i ++){
    var studente = $("li:first-child").clone();
    for(k in studenti[i]){
      console.log("---[DEBUG]---" + studenti[i][k]);
      switch(k){
        case "nome":
          console.log("Ho inserito il nome");
          studente.find("#nome").text("NOME ---> " + studenti[i][k])
          break;
        case "cognome":
          console.log("Ho inserito il cognome");
          studente.find("#cognome").text("COGNOME ---> " + studenti[i][k])
          break;
        case "eta":
          console.log("Ho inserito l'eta");
          studente.find("#eta").text("ETA ---> " + studenti[i][k])
          break;
      }
    }
    console.log("---[DEBUG]---" + studente)
    $("ul").append(studente);
  }

  // $("html").scrollTop(scroll * 100);

  $(".aggiungi-studente").click(function(){
    var nome;
    var cognome;
    var eta;
    var studente = $("li:first-child").clone();

    nome = prompt("Inserisci il nome dello studente");
    console.log(nome);
    cognome = prompt("Inserisci il cognome dello studente");
    console.log(cognome);
    eta = parseInt(prompt("Inserisci l'età dello studente"));
    console.log(eta);

    studenti.push({"nome": nome,"cognome":cognome,"eta":eta});

    studente.find("#nome").text("NOME ---> " + nome);
    studente.find("#cognome").text("COGNOME ---> " + cognome);
    studente.find("#eta").text("ETA ---> " + eta);
    $("ul").append(studente);
    scroll++;
    $("html").scrollTop(scroll*200);
  });




});
