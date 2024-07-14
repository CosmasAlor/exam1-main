// Exporting fetcharea function
export async function fetchArea() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.meals[1]);
        return data.meals || []; // Ensure to return an array, or an empty array if data.meals is undefined.
       
    } catch (error) {
        console.error('Error fetching area:', error);
        return []; // Return an empty array in case of error
    }
}


// Exporting displayCategory function
// Exporting displayArea function
export async function displayArea(area) {
    const rowData = document.getElementById('rowData'); // Reference to where meal cards will be inserted

    let cartoona = "";

    if (!Array.isArray(area)) {
        console.error('Area is not an array:', area);
        return; // Exit function early if area is not an array
    }

    area.forEach((area) => {
        cartoona += `
    <div class=" relative sm:w-60 h-full m-2 area">
      <input type="hidden" class="meal-id" value="${area.strArea}">
      <img src="https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg" alt="" class=" rounded">
      <h2 class="text-4xl font-bold p-5 absolute top-20  ">${area.strArea}</h2>
  </div>
            
        `;
    });

    rowData.innerHTML = cartoona;

    // Add event listener using event delegation on rowData
    rowData.addEventListener('click', function(event) {
        const mealIdInput = event.target.closest('.relative').querySelector('.meal-id');
        if (mealIdInput) {
            const mealId = mealIdInput.value;
            console.log('Clicked on meal with ID:', mealId);
            // Call function to display details based on mealId
            // displayDetails(mealId);
        }
    });
}
