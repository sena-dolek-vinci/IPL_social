import { EmailValidation } from "../emailValidation";



describe("EmailValidator" , () => {

    let emailValidator =  new EmailValidation();

    

    describe('validate methode' , () => {

        it('should return true for a valid email' ,() => {
            let actual = emailValidator.validate("test@example.com");
            expect(actual).toBe(true);
        });
        it("should return false when missing @", () => {
            let actual = emailValidator.validate("testexample.com");
            expect(actual).toBe(false);
          });


    });
}); 

