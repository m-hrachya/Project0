/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    writeYourGenres: function () {
        let favouriteFilms;
        for (let i = 0; i < 3; i++) {
            favouriteFilms = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (favouriteFilms == '' || favouriteFilms == null) {
                i--;
            } else {
                personalMovieDB.genres.push(favouriteFilms);
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const question = prompt('Один из последних просмотренных фильмов?', '');
            if (question == '' || question == null || question.length > 50) {
                i--;
            } else {
                personalMovieDB.movies[question] = +prompt('На сколько оцените его?', '');
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count < 0){
            console.log('Error');
        } else {
            console.log('Вы киноман');
        }
    }, 
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();

