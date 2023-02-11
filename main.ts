abstract class Account{
    Acc_no:number=0;
    Balance:number=0;
    GetBalance(){
        return this.Balance;
    }
   debitAmount(){}
   creditAmount(){}
}


interface IAccount{
date_of_opening:string;
addCustomer():void;
removeCustomer():void;

}


class Current_Account extends Account implements IAccount {
    date_of_opening:string;
   interest_rate: number;
constructor(_date_of_opening:string, _interest_rate:number,_acc_num:number,
    ){

        super();
       this.date_of_opening=_date_of_opening;
       this.interest_rate=_interest_rate;
       this.Acc_no=_acc_num;

    }
    

addCustomer(): void {
    throw new Error("notimplemted");
    
}

removeCustomer(): void {
    throw new Error("notimplemted");
}
}


 class Saving_Account extends Account implements IAccount {
    date_of_opening:string;
    min_balance:string;
   
constructor(_date_of_opening:string, _min_balance:string,_Acc_num:number,
    ){

       super();
       this.date_of_opening=_date_of_opening;
       this.min_balance=_date_of_opening;
       this.Acc_no=_Acc_num;

    }

addCustomer(): void {
    throw new Error("notimplemted");
    
}

removeCustomer(): void {
    throw new Error("notimplemted");
}
 }





    





