function goToCat() {
    window.location.href = 'cats.html';
  }
  function goToDog() {
    window.location.href = 'dogs.html';
  }
  document.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var windowWidth = window.innerWidth;

    var leftImage = document.querySelector('.left-image');
    var rightImage = document.querySelector('.right-image');

    if (x < windowWidth / 2) {
      leftImage.style.width = '55%';
      rightImage.style.width = '45%';
    } else {
      leftImage.style.width = '45%';
      rightImage.style.width = '55%';
    }
  });
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

    fetch('https://localhost:7008/api/cats', {
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
 // Pobranie danych z API
 fetch('https://localhost:7008/api/cats')
 .then(response => response.json())
 .then(data => {
   const catsTable = document.getElementById('catsTable');
   const tbody = catsTable.getElementsByTagName('tbody')[0];

   // Wygenerowanie wierszy tabeli na podstawie danych z API
   data.forEach(cat => {
     const row = document.createElement('tr');
     row.innerHTML = `
       <td>${cat.id}</td>
       <td>${cat.breed}</td>
       <td>${cat.weight}</td>
       <td>${cat.color}</td>
       <td>${cat.description}</td>
       <td>
         <button class="btn btn-primary" onclick="editCat(${cat.id})">Edit</button>
       </td>
       <td>
         <button class="btn btn-danger" onclick="deleteCat(${cat.id})">Delete</button>
       </td>
     `;
     tbody.appendChild(row);
   });
 })
 .catch(error => {
   console.error('Wystąpił błąd podczas pobierania danych z API:', error);
 });

// Funkcja do edycji kota
function editCat(id) {
 // Przekierowanie na podstronę edycji z odpowiednim ID
 window.location.href = `edit_cat.html?id=${id}`;
}
function goToIndex() {
 window.location.href = 'index.html';
}
// Funkcja do przejścia do podstrony dodawania kota
function goToAddCat() {
 window.location.href = 'add_cat.html';
}

// Funkcja do usuwania kota
function deleteCat(id) {
 fetch(`https://localhost:7008/api/cats/${id}`, {
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