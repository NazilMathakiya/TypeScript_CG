class User {
    constructor(
        private _firstName: string,
        private _lastName: string,
        private age: number
    ) {}

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    set firstName(name: string) {
        if (name.length < 3) {
            console.log("Name is not valid. It should contain at least 3 characters");
            return;
        }

        this._firstName = name;
    }

    phone() {
        console.log("this is phone");
    }
}



class AdminUser extends User {
    constructor(firstName: String,
        lastName: String){
    }
    super(_firstName,lastName)

    manageUsers(): void {
        console.log("Managing users");
    }
}
class AdminUser extends User {
    manageUsers(): void {
        console.log("Managing users");
    }

    phone() {
        super.phone();
        console.log("This is smart phone");
    }
}

const obj1 = new User("Satyajeet", "Singh");
const obj2 = new AdminUser()
// const obj3 = new AdminUser()
// const obj4 = new AdminUser()


obj1.firstName
// obj2.manageUsers()
obj2.phone()