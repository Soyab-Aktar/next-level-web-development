// Access Modifiers

class BankAccount {
  public userId: number;
  public userName: string;
  private userBalance: number;
  protected userUDAI: string;
  constructor(userId:number, userName:string, userBalance:number, userUDAI:string){
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
    this.userUDAI = userUDAI;
  }
  addBalance(addedAmount:number){
    this.userBalance = this.userBalance + addedAmount;
  }
}

class Student extends BankAccount{
  test(){
    this.userUDAI;
  }
}

const myAccount = new BankAccount(223,'Soyab',1200,'488y44ywe48v');