// Exporting fetchIngredients function
export async function fetchIngredients() {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.meals);
        return data.meals || []; // Ensure to return an array, or an empty array if data.meals is undefined.
       
    } catch (error) {
        console.error('Error fetching Ingredients:', error);
        return []; // Return an empty array in case of error
    }
}

// Exporting displayIngredients function
export async function displayIngredients(ingredients) {
    const rowData = document.getElementById('rowData'); // Reference to where meal cards will be inserted

    if (!Array.isArray(ingredients)) {
        console.error('Ingredients is not an array:', ingredients);
        return; // Exit function early if Ingredients is not an array
    }

    let cartoona = ingredients.map(ingredient => {
        const truncatedDescription = ingredient.strDescription ? ingredient.strDescription.split(' ').slice(0, 20).join(' ') + '...' : '';

        return `
            <div class="sm:w-60 h-full m-2 Ingredients bg-slate-100 text-center p-3">
                <input type="hidden" class="meal-id" value="${ingredient.strIngredient}">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h3>${ingredient.strIngredient}</h3>
                <p>${truncatedDescription}</p>
            </div>
        `;
    }).join('');

    rowData.innerHTML = cartoona;

    // Add event listener using event delegation on rowData
    rowData.addEventListener('click', function(event) {
        const mealIdInput = event.target.closest('.Ingredients').querySelector('.meal-id');
        if (mealIdInput) {
            const mealId = mealIdInput.value;
            console.log('Clicked on meal with ID:', mealId);
            // Call function to display details based on mealId
            // displayDetails(mealId);
        }
    });
}
