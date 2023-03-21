import numerosRomanos from "./numerosRomanos.js"
describe("Numeros romanos", () => {
    it("un numero romano", () => {
      expect(numerosRomanos(1)).toEqual("I");
    });
    it("otro numero romano", () => {
        expect(numerosRomanos(2)).toEqual("II");
    });
    it("numero 5 en romano", ()=>{
        expect(numerosRomanos(5)).toEqual("V");
    });
    it("numero 4 en romano", ()=>{
        expect(numerosRomanos(4)).toEqual("IV");
    });
    it("numero 6 en romano",()=>{
        expect(numerosRomanos(6)).toEqual("VI");
    });
    it("numero 9 en romano", ()=>{
        expect(numerosRomanos(9)).toEqual("IX");
    });
    it("numero 10 en romano", ()=>{
        expect(numerosRomanos(10)).toEqual("X");
    });
  });