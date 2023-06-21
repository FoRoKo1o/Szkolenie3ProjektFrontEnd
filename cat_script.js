// Funkcja do obsługi dodawania nowego kota
document.getElementById('addCatForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const breed = document.getElementById('breed').value;
    const weight = parseInt(document.getElementById('weight').value);
    const color = document.getElementById('color').value;
    const description = document.getElementById('description').value;

    const catData = {
      breed: breed,
      weight: weight,
      color: color,
      description: description
    };

    fetch(Api + '/api/cats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(catData)
    })
    .then(response => {
      if (response.ok) {
        // Dodano kota, przejście do strony głównej
        window.location.href = 'cats.html';
      } else {
        console.error('Wystąpił błąd podczas dodawania kota');
      }
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas dodawania kota:', error);
    });
  });
// Funkcja do edycji kota
function editCat(id) {
 // Przekierowanie na podstronę edycji z odpowiednim ID
 window.location.href = `edit_cat.html?id=${id}`;
}
// Funkcja do przejścia do podstrony dodawania kota
function goToAddCat() {
 window.location.href = 'add_cat.html';
}

// Funkcja do usuwania kota
function deleteCat(id) {
 fetch(Api + `/api/cats/${id}`, {
   method: 'DELETE'
 })
 .then(response => {
   if (response.ok) {
     // Usunięto kota, odświeżenie strony
     location.reload();
   } else {
     console.error('Wystąpił błąd podczas usuwania kota');
   }
 })
 .catch(error => {
   console.error('Wystąpił błąd podczas usuwania kota:', error);
 });
}