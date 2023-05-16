import moment from "moment/moment";
import 'moment/locale/fr'
moment().locale('fr')



const un = document.getElementById('un').querySelectorAll('div');
const deux = document.getElementById('deux').querySelectorAll('div');
const troi = document.getElementById('troi').querySelectorAll('div');
const quatre = document.getElementById('quatre').querySelectorAll('div');
const cinq = document.getElementById('cinq').querySelectorAll('div')
const six = document.getElementById('six').querySelectorAll('div')



let minuteur = [un, deux, troi, quatre, cinq, six]

let obj = {
    0: [1, 2, 3, 5, 6, 7],
    1: [3, 6],
    2: [1, 3, 4, 5, 7],
    3: [1, 3, 4, 6, 7],
    4: [2, 3, 4, 6],
    5: [1, 2, 4, 6, 7],
    6: [1, 2, 4, 5, 6, 7],
    7: [1, 3, 6],
    8: [1, 2, 3, 4, 5, 6, 7],
    9: [1, 2, 3, 4, 6, 7]
};

let duree = moment().seconds() + moment().minutes() * 60 + moment().hours() * 3600 + 1
const interv = setInterval(() => {
    
    const seconde = remise(duree % 60);
    const minute = remise(Math.floor(duree / 60) % 60);
    const heur = remise(Math.floor(duree / 3600))

    const minuteries = `${heur}${minute}${seconde}`

    for (let i = 0; i < minuteur.length; i++) {

        for (let j = 0; j < minuteur[i].length; j++) {

            if (obj[minuteries[i]].includes(j + 1)) {
        
                minuteur[i][j].style.opacity = 1
            }
  
            if (!obj[minuteries[i]].includes(j + 1)) {
                minuteur[i][j].style.opacity = 0.1
            }

        }
    }

    duree++

}, 1000);


function remise(str) {
    return str < 10 ? `0${str}` : `${str}`
}

















































































































// const button = document.getElementById('button');
// const time = document.getElementById('time');
// time.setAttribute('value', '2007-08-04T19:30')

// button.addEventListener('click', () => {

//     let valeur = time.value;
//     let b = document.body
//     let p = document.createElement('p');
//     p.textContent = 'Vous avez reserver le creneau le ' + valeur.replace('T', ' à ') ;
//     b.appendChild(p)
//     let bou = document.createElement('button')
//     bou.textContent = 'changer le jour'
//     b.appendChild(bou)
//     bou.addEventListener('click' , () => {
//         let plus = document.createElement('button')
//         plus.textContent = '+ 1'
//         b.appendChild(plus)
//         let moin = document.createElement('button')
//         moin.textContent = '- 1'
//         b.appendChild(moin)
//         plus.addEventListener('click', () => {
//             p.textContent = 'Vous avez changer votre creneau pour le ' + valeur.replace('T', ' à ') ;
//             const splitted = valeur.split("-")
//             let chang = splitted[2].split("T")
//             let np = parseInt(chang[0])
//             np += 1
//             if (np < 10) {
//                 np = "0" + np
//             }
//             const r = `${splitted[0]}-${splitted[1]}-${np}`
//             time.removeAttribute('value')
//             valeur = r
//             time.setAttribute('value', moment(r).format('').split('').slice(0, -9).join(''))
//             console.log(np);
//             b.appendChild(p)
//             console.log(moment(r).minutes()/*.format('').split('').slice(0, -9).join('')*/)
//         })
//     })
// })



