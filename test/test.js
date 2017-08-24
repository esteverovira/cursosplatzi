const expect = require('mocha').expect
const platzom = require('..') //require del platzom, va a buscar l'index d'una capa superior

describe('#platzom', function(){
    it('Si la palabra termina con "ar", se le quitan esas dos letras',function(){
            const translation = platzom("Programar")
            expect(translation).to.equal("Program")
    })
    it('Si la palabra inicia con Z, se le añade "pe" al final',function(){
        
    })
    it(' Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio',function(){
        
    })
    it('',function(){
        
    })
})