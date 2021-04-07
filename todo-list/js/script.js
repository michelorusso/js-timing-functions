// Creare una To do List.
// On click su un item verrà cancellata la riga.
// Una volta che l’item è nascosto, far comparire un modal: 
// “Item Cancellato” e farlo scomparire subito dopo.

var listItems = document.getElementsByClassName('list-item');
// console.log(listItems);
for( var i = 0; i < listItems.length; i++ ) {
    var thisListItem = listItems[i];

    thisListItem.addEventListener('click', function() {
        console.log(this);
        // La riga cliccata verrà cancellata
        this.remove();

        // faccio comparire la modale
        var modalElement = document.getElementById('modal');
        modalElement.classList.remove('hidden');

        // Dopo 2 secondi faccio scomparire la modale
        setTimeout(function() {
            modalElement.classList.add('hidden');
        }, 2000);
    });
}