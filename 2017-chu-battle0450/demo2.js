var calculator = {
    height: 'Default',
    weight: 'Default',
    getBMI: function(){
        return this.weight/(this.height*this.height);
    }
}

var Me =Object.create(calculator);
    Me.height=1.71;
    Me.weight=65;
console.log('BMI :'+Me.getBMI()); 
var getMessage = function()
{ 
  var BMI=Me.getBMI();
  if(BMI<18.5) 
   return "體重過輕";
  else if(BMI<24&&BMI>=18.5)
   return "正常範圍";
  else if(BMI>=24&&BMI<30)
   return "過重";
}
console.log(getMessage());