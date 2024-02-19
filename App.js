// 2)შექმენით Animal კლასი კონსტრუქტორით, რომელიც იღებს სახელს და ხმას პარამეტრებად. დაამატეთ makeSound მეთოდი, რომელიც ბეჭდავს ცხოველის მიერ გამოშვებულ ხმას.

class Animal {
    constructor(Name, Sound) {
        this.Name = Name
        this.Sound = Sound

    }

    makesound() {
        console.log(this.Sound);
    }
}