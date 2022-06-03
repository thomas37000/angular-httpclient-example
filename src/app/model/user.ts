export class User {
  private _id!: number;
  private _name!: string;
  private _devLanguage!: string;
  private _startProgramming!: number;
  private _age!: number;
  private _avatar!: string;
  private _location?: string;

  constructor(
    id: number,
    name: string,
    devLanguage: string,
    startProgramming: number,
    age: number,
    avatar: string,
    location?: string
  ) {
    (this._id = id),
      (this._name = name),
      (this._devLanguage = devLanguage),
      (this._startProgramming = startProgramming),
      (this._age = age),
      (this._avatar = avatar),
      (this._location = location);
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get devLanguage(): string {
    return this._devLanguage;
  }

  set devLanguage(value: string) {
    this._devLanguage = value;
  }

  get startProgramming(): number {
    return this._startProgramming;
  }

  set startProgramming(value: number) {
    this._startProgramming = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }

  // get location(): string | undefined {
  //   return this._location;
  // }

  // set location(value: string) {
  //   this._location = value;
  // }
}
