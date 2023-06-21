 // Funkcja do obsługi dodawania nowego psa
 document.getElementById('addDogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const breed = document.getElementById('breed').value;
    const weight = parseInt(document.getElementById('weight').value);
    const color = document.getElementById('color').value;
    const description = document.getElementById('description').value;

    const dogData = {
      breed: breed,
      weight: weight,
      color: color,
      description: description
    };

    fetch(Api + '/api/dogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogData)
    })
    .then(response => {
      if (response.ok) {
        window.location.href = 'dogs.html';
      } else {
        console.error('Wystąpił błąd podczas dodawania psa');
      }
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas dodawania psa:', error);
    });
  });
function goToDog() {
    window.location.href = 'dogs.html';
  }
  // Funkcja do edycji psa
  function editDog(id) {
    // Przekierowanie na podstronę edycji z odpowiednim ID
    window.location.href = `edit_dog.html?id=${id}`;
  }
  // Funkcja do przejścia do podstrony dodawania psa
  function goToAddDog() {
    window.location.href = 'add_dog.html';
  }

  // Funkcja do usuwania psa
  function deleteDog(id) {
    fetch(Api + `/api/dogs/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        // Usunięto psa, odświeżenie strony
        location.reload();
      } else {
        console.error('Wystąpił błąd podczas usuwania psa');
      }
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas usuwania psa:', error);
    });
  }
 