function sumWithClosure(firstNum= 0) {
    // Tu código aquí 👈
    return function suma(secondNum=0) {
      const result = firstNum + secondNum;
      return console.log(result)
    }
}

sumWithClosure(2)(3)
