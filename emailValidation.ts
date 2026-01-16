export class EmailValidation {

    public validate(email: string) : boolean {
        if(this.hasSpace(email)) {
            return false; 
        }   
        if (!this.hasAt(email)) return false;
        return true; 
        

    }


    // a  
    private hasSpace(email:string) : boolean {
        for(let i = 0 ; i<email.length ; i++) {
            if(email[i]===' ') return true; 
        }
        return false; 
    }

    // b 
    private hasAt(email: string): boolean {
        let atCount = 0;
        for (let i = 0; i < email.length; i++) {
          if (email[i] === '@') atCount++;
        }
        return atCount >= 1; 
      }



        
}



    



    














