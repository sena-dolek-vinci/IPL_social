export class EmailValidation {

    public validate(email: string) : boolean {
        if(this.hasSpace(email)) return false; 
        if (!this.hasAt(email)) return false;
        if (!this.hasTextBeforeAndAfterAt(email)) return false;
        if (!this.domainHasDotNotLast(email)) return false;
        
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
        if (atIndex === 0) return false;
        if (atIndex === email.length - 1) return false;

        return true;
      }

      //d
      private domainHasDotNotLast(email: string): boolean {
        const atIndex = this.firstIndexOfAt(email);
        if (atIndex === -1) return false;
    
        // domaine = tout après le premier @
        let domain = "";
        for (let i = atIndex + 1; i < email.length; i++) {
          domain += email[i];
        }
    
        // doit contenir un '.' et pas en dernier caractère du domaine
        let hasDot = false;
        for (let i = 0; i < domain.length; i++) {
          if (domain[i] === '.') hasDot = true;
        }
    
        if (!hasDot) return false;
        if (domain[domain.length - 1] === '.') return false;
    
        return true;
      }
    
      private firstIndexOfAt(email: string): number {
        for (let i = 0; i < email.length; i++) {
          if (email[i] === '@') return i;
        }
        return -1;
      }


        
}



    



    














