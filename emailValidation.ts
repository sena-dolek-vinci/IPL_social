export class EmailValidation {

    public validate(email: string) : boolean {
        if(this.hasSpace(email)) {
            return false; 
        }   
        return true; 
    }


    // a  
    private hasSpace(email:string) : boolean {
        for(let i = 0 ; i<email.length ; i++) {
            if(email[i]===' ') return true; 
        }
        return false; 
    }


        
}



    



    














