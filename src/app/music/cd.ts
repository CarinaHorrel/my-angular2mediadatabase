// Class bestand, dus geen component!
// Naamgeving MOET overeenkomen met naamgeving backend (getters/setters -> postman)
export class CD {
  id?: number;  // ? heeft te maken met autogenerated id
  title: string;
  year: number;
  origin: string;
  remarks: string;
  checked: boolean;
}