/*TRACCIA
Proseguendo l'esercitazione (snackone) in classe, creare una todolist dove l'utente potrà:
scrivere in un input
premendo invio nell'input oppure cliccando sul submit, salvare nella lista la nuova nota
visualizzare tutte le note nel box sottostante
cancellare la nota, cliccando sulla X corrispondente
Bonus:
lavorate lato CSS, per rendere la todolist più carina seguendo la vostra creatività.
Vi lascio un esempio di todolist.*/


new Vue({
 el: '#root',
 data: {
   text: '',
   toDoList: []
 },
 methods: {
   submitFx: function() {
     this.toDoList.push(this.text);
     this.text = '';
   }
 }
});
Vue.config.devtools = true;
