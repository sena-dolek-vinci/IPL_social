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

      //c 
      private hasTextBeforeAndAfterAt(email: string): boolean {
        const atIndex = this.firstIndexOfAt(email);
        if (atIndex === -1) return false;
    
        // texte avant @ => au moins 1 char
        if (atIndex === 0) return false;
    
        // texte après @ => au moins 1 char
        if (atIndex === email.length - 1) return false;
    
        return true;
      }





      private firstIndexOfAt(email: string): number {
        for (let i = 0; i < email.length; i++) {
          if (email[i] === '@') return i;
        }
        return -1;
      }


        
}



    



    














