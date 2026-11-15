/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories
 */

// stole from table view 
function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
} 
  
function showCategories(data) {
  // Requirements:
  // - Group data by one meaningful field (category, city, inspection result, etc.)
  // - Show how many records are in each group, plus one other number per group
  //   (an average, a highest, a lowest)
  // - Show items within each group
  // - Make the groups easy to compare, and visually distinct from their items
  /*html*/
   const arr = {};
   const totalRestaurants = data.length;

    data.forEach((restaurant) => {
       const result = orNotListed(restaurant.inspection_results);
      //  results[result] = (results[result] || 0) + 1;
      // i searched this up 
        if (!arr[result]) {
        arr[result] = [];
        }
        arr[result].push(restaurant.name); // add name
    });

    let categoryHTML = "";

    Object.keys(arr).forEach((result) => {
      let count = arr[result].length;
      let percentage = ((count / totalRestaurants) * 100).toFixed(1);
      categoryHTML += `
        <div class="category-section">
            <h2 class="category-header">
                ${result} = ${arr[result].length} restaurants (${percentage}% of total)
            </h2>
            <div class="category-items">
                ${arr[result].map((name) => `<div class="category-item"> ${name} </div>`).join("")}
            </div>
        </div>
    `;
    });

  return `
                <h2 class="view-title">📂 Category View</h2>
                <p class="view-description">Reporter - Different Inspection results at Prince George County. What resturants to avoid? </p>
                ${categoryHTML}
            `;
} 

              

export default showCategories;

// <div class="todo-implementation">
//                     <h3>TODO: Implement Category View</h3>
//                     <p><strong>Your task:</strong> Group the data by categories to show relationships</p>
//                     <p><strong>Good for:</strong> Understanding patterns, finding similar items, exploring by type</p>
//                     <p><strong>Consider:</strong> Group by type of business? City? Inspection result? What tells the best story?</p>
//                     <p><strong>Types of business in this data:</strong> ${[
//                       ...new Set(data.map((item) => item.category)),
//                     ].join(", ")}</p>
//                 </div>