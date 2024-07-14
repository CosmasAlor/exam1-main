// Exporting fetchCategories function
// export async function fetchCategories() {
//     const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data.categories; // Return categories array from the API response
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//         return []; // Return an empty array in case of error
//     }
// }
// Exporting fetchCategories function
export async function fetchCategories() {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.categories; // Return categories array from the API response
    } catch (error) {
        console.error('Error fetching categories:', error);
        return []; // Return an empty array in case of error
    }
}


// Exporting displayCategory function
// export async function displayCategory(categories) {
//     const rowData = document.getElementById('rowData'); // Reference to where meal cards will be inserted

//     let cartoona = "";

//     categories.forEach((category) => {
//         // Truncate description to first 30 words
//         const descriptionWords = category.strCategoryDescription.split(' ');
//         const truncatedDescription = descriptionWords.slice(0, 30).join(' ');

//         cartoona += `
//             <div class="relative overflow-hidden w-full sm:w-60 h-50 m-2">
//                 <input type="hidden" class="meal-id" value="${category.idCategory}">
//                 <div class="relative group">
//                     <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-full h-full object-cover rounded">
//                     <div class="layer rounded bg-gray-300 absolute inset-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
//                         <h2 class="text-3xl text-black p-5 w-full">${category.strCategory}</h2>
//                         <p class="text-sm text-gray-800 px-5 w-full">${truncatedDescription}...</p>
//                     </div>
//                 </div>
//             </div>


//         `;
//     });

// Exporting displayCategory function
export async function displayCategory(categories) {
    const rowData = document.getElementById('rowData'); // Reference to where meal cards will be inserted

    let cartoona = "";

    categories.forEach((category) => {
        // Truncate description to first 30 words
        const descriptionWords = category.strCategoryDescription.split(' ');
        const truncatedDescription = descriptionWords.slice(0, 30).join(' ');

        cartoona += `
            <div class="relative overflow-hidden w-full sm:w-60 h-50 m-2">
                <input type="hidden" class="meal-id" value="${category.idCategory}">
                <div class="relative group">
                    <img src="${category.strCategoryThumb}" alt="${category.strCategory}" class="w-full h-full object-cover rounded">
                    <div class="layer rounded bg-gray-300 absolute inset-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h2 class="text-3xl text-black p-5 w-full">${category.strCategory}</h2>
                        <p class="text-sm text-gray-800 px-5 w-full">${truncatedDescription}...</p>
                    </div>
                </div>
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

//     // rowData.innerHTML = cartoona;

//     // // Add event listener using event delegation on rowData
//     // rowData.addEventListener('click', function(event) {
//     //     const mealIdInput = event.target.closest('.relative').querySelector('.meal-id');
//     //     if (mealIdInput) {
//     //         const mealId = mealIdInput.value;
//     //         console.log('Clicked on meal with ID:', mealId);
//     //         // Call function to display details based on mealId
//     //         // displayDetails(mealId);
//     //     }
//     // });
// }
