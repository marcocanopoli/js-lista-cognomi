/*
1. chiedi all'utente il cognome
2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

//last names array
var lastNamesList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

//last name prompt
var lastName = prompt("Inserisci il tuo cognome:");

//push user's last name in array
lastNamesList.push(lastName);

//sort array
lastNamesList.sort();

//print in console log
// for (var i = 0;  i < lastNamesList.length; i++) {
//     console.log('Cognome #', i + 1 , lastNamesList[i]);
//     document.getElementById('last_names').innerHTML += '<li>Cognome #' +  (i + 1) + ' ' + lastNamesList[i] + '</li>';
// }


//prints input string position only
for (var i = 0;  i < lastNamesList.length; i++) {
    if (lastNamesList[i] == lastName) {
        console.log('Cognome #', i + 1 , lastNamesList[i]);
        document.getElementById('last_names').innerHTML += '<li>Cognome #' +  (i + 1) + ' ' + lastNamesList[i] + '</li>';
    }
}

