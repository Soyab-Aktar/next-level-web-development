// Reference type : object
const user: {
  firstName: string;
  middleName?: string; // Optional Type
  lastName: string;
  isMarried: boolean;
} = {
  firstName: 'Soyab',
  lastName: 'Aktar',
  isMarried: false

}
const user2: {
  // firstName: "Jayanta" // ==> Define value as a type , called Literal Type
  readonly firstName: string; // Accrss Modifier
  middleName?: string; // Optional Type
  lastName: string;
  isMarried: boolean;
} = {
  firstName: 'Jayanta',
  middleName: "Kumar",
  lastName: 'Paul',
  isMarried: true

}
