import { EmailValidation } from "../emailValidation";



describe("EmailValidator" , () => {

    let EmailValidator =  new EmailValidation();

    

    describe('validate methode' , () => {

        it('should return true for a valid email' ,() => {
            let actual = EmailValidator.validate("test@example.com");
            expect(actual).toBe(true);
        })

    })
})

