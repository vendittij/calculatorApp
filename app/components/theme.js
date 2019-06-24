import Component from '@ember/component';

export default Component.extend({
  actions:{
    changeTheme(theme){
      //Get every <body> step through them and change the class name
      var temp = document.getElementsByTagName("body");
      var i;
      for (i=0;i<temp.length;i++){
        temp[i].className = theme;
      }
    },
  }
});
