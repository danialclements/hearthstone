
  function getvalues(){

   function comperatorfieldset(field1, field2, reverse1, reverse2){
      var reverser1 = reverse1  ? -1 : 1;
      var reverser2 = reverse2  ? -1: 1;

   return function comperator(a,b)
    if(a.get(field1) > b.get(field1){
      return 1*flip1
    }
    else if(a.get(field1) == b.get(field1){
      if(a.get(field2) > b.get(field2)){
        return 1*flip2;
      }
      else if(a.get(field2) > b.get(field2)){
        return 0;
      }
      else{
        return -1*flip2; //this is actually a.get(field2) < b.get(field2)
      }
    }
    else{
      return -1*flip1 //this is actually a.get(field1) < b.get(field1)
    }

  }
  
  }

  getvalues()


  I need a function that gets values  then decides what the values are of field1, and field2. Then 