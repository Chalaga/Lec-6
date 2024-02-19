// // // 2)შექმენით Animal კლასი კონსტრუქტორით, რომელიც იღებს სახელს და ხმას პარამეტრებად. დაამატეთ makeSound მეთოდი, რომელიც ბეჭდავს ცხოველის მიერ გამოშვებულ ხმას.

// // class Animal {
// //     constructor(Name, Sound) {
// //         this.Name = Name
// //         this.Sound = Sound

// //     }

// //     makesound() {
// //         console.log(this.Sound);
// //     }
// // }

// // 1)დავალება: შექმენით კლასი სახელად Book კონსტრუქტორით, რომელიც იღებს ორ არგუმენტს: სათაური და ავტორი. დაამატეთ მეთოდი სახელად getDetails, რომელიც აბრუნებს სტრიქონს, რომელიც აერთიანებს წიგნის სათაურსა და ავტორს.

// class Book {
//     constructor (title , author) {
//         this.title  = title 
//         this.author = author
//     }

//     getDetails() {
//         return `This ${this.title} is written by ${this.author}`
//     } 
// }

// const ThisBook = new Book();
// ThisBook.title = '"The Right Hand of the Grand Master"'
// ThisBook.author = ' Konstantine Gamsaxurdia'
// console.log(ThisBook.getDetails());