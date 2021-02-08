var app = new Vue({
 el: '#root',
 data: {
   backcolor: '',
   numRand: 0,
   colorArray: [],
   r: '',
   g: '',
   b: '',
   invR: '',
   invG: '',
   invB: '',
   colorData: 'black',
   picture: 'img/palette-icon.svg',
   colorDataInvArray: [],
   filteredArrayFromInput: [],
   activeIndex: 0,
   colorPaletteChoosen: false
 },
 methods: {
   randomNumFx: function() {
     this.numRand= Math.floor((Math.random() * 255));
     // console.log('Numero Randomico: ',this.numRand);
     return this.numRand;
  },
   boxColorRandomFx: function() {
     this.r = this.randomNumFx();
     console.log('Saturazione del Rosso: ',this.r);
     this.g = this.randomNumFx();
     console.log('Saturazione del Verde: ',this.g);
     this.b = this.randomNumFx();
     console.log('Saturazione del Blu: ',this.b);
     this.invR = 255 - this.r;
     console.log('Saturazione Invertita del Rosso: ',this.invR);
     this.invG = 255 - this.g;
     console.log('Saturazione Invertita del Verde: ',this.invG);
     this.invB = 255 - this.b;
     console.log('Saturazione Invertita del Blu: ',this.invB);
     let that = this;
     this.backcolor= 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
     if (!this.colorArray.includes(this.backcolor)) {
       this.colorArray.push(this.backcolor);
       console.log('Ultimo Colore Aggiunto: ',this.backcolor);
       console.log('Array dei Colori: ',this.colorArray);
       this.colorData = 'rgb(' + that.invR + ',' + that.invG + ',' + that.invB + ')';
       this.colorDataInvArray.push(this.colorData);
       console.log('Array dei Colori Invertiti/Testo: ',this.colorDataInvArray);
     }
   },
   rejectFx: function(index) {
    this.colorArray.splice(index,1);
    console.log('Array dei Colori Filtrato Manualmente: ', this.colorArray);
    this.colorDataInvArray.splice(index,1);
    console.log('Array dei Colori Invertiti/Testo Filtrati Risultante: ', this.colorDataInvArray);
  },
  filteredArrayFx: function(index) {
    this.activeIndex = index;
    console.log('Index Attivo: ', this.activeIndex);
    this.filteredArrayFromInput.push(this.colorArray[this.activeIndex]);
    console.log('La mia Palette di Colori: ', this.filteredArrayFromInput);
    this.colorPaletteChoosen = true;
  },
  rejectFxFiltered: function(index) {
    this.filteredArrayFromInput.splice(index,1);
    console.log('Array dei Colori Filtrato Manualmente: ', this.filteredArrayFromInput);
  }
 }
});
Vue.config.devtools = true;
