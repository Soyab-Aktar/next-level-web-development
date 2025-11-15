// Getter and Setter

class BankAccount {
  public userId: number;
  public userName: string;
  private _userBalance: number;
  protected userUDAI: string;
  constructor(userId:number, userName:string, _userBalance:number, userUDAI:string){
    this.userId = userId;
    this.userName = userName;
    this._userBalance = _userBalance;
    this.userUDAI = userUDAI;
  }
  // addBalance(addedAmount:number){
  //   this._userBalance = this._userBalance + addedAmount;
  // }
  set addBalance(amount:number){
    this._userBalance = this._userBalance +amount;
  }
  // getBalance(){
  //   return this._userBalance;
  // }
  get getBalance(){
    return this._userBalance;
  }
}

class Student extends BankAccount{
  test(){
    this.userUDAI;
  }
}

const myAccount = new BankAccount(223,'Soyab',1200,'488y44ywe48v');
// myAccount.addBalance(44);
// console.log(myAccount.getBalance());
myAccount.addBalance = 100;
console.table(myAccount);
console.log(myAccount.getBalance);