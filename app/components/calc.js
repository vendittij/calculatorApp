import Component from '@ember/component';

export default Component.extend({

  init(){
    this._super();
    var temp = document.getElementsByTagName("body");
    this.set('theme', temp[1].className);
  },

  number: '0',
  total: 0,
  theme: 'Light',
  equal: false,

  actions:{
    setNum(value){

      var operands = ['/','*','-','+'];

      var audio = document.getElementById("myAudio")
      audio.play();

      if(value === '='){
        this.set('equal',true);
        //Parse the string and create an equation array
        var array = this.number.split(/([\*\+\-\/])/g);

        //parse the array and apply PEMDAS

        var i;
        var j;
        var newNum = 0;

        for(i=0;i<4;i++){
          for(j=0;j<array.length;j+=2){

            var curNum = Number(array[j]);
            var operation = array[j+1];
            var secondNum = Number(array[j+2]);
            if(operation === operands[i]){
              switch(i){
                case 0:
                  newNum = curNum / secondNum;
                  break;
                case 1:
                  newNum = curNum * secondNum;
                  break;
                case 2:
                  newNum = curNum - secondNum;
                  break;
                case 3:
                  newNum = curNum + secondNum;
                  break;
              }
              array.splice(j+1,2);
              array[j] = newNum;

            }
          }
        }
        this.set('number',newNum);
      }
      else if(value === 'c'){
        this.set('number', '0');
        this.set('equal', false);
      }
      else if(this.number === '0' && !operands.includes(value)){
        this.set('number', value);
      }else{

        if(this.equal === true && !operands.includes(value)){
          this.set('number', value);
        }else {
          this.set("number", this.number + value);
        }
        this.set('equal', false);
      }
    },



  }
});
