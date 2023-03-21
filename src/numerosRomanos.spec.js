import numerosRomanos from "./numerosRomanos.js"
describe("Numeros romanos", () => {
    it("un numero romano", () => {
      expect(numerosRomanos(1)).toEqual("I");
    });
    it("otro numero romano", () => {
        expect(numerosRomanos(2)).toEqual("II");
      });
  });