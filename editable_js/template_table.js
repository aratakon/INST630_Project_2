
/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// This dataset writes missing values as "------" or "N/A". Show "Not listed" instead.
function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
} 


function showTable(data) {
  // TODO: Students implement this function
  // Requirements:
  // - Use a real HTML <table>, with <th> header cells and a <caption> saying what the table shows
  // - Include the 4-6 most useful fields
  // - Show "Not listed" instead of undefined when a value is missing
  // - Optional: add sorting
  /*html*/ 
    // const headers = ["name", "category", "type", "city", "state", "zip"];
  const tableHTML = data
    .map(
       /*html*/ 
      (inspection) => `
             
                    <tr> 
                        <td> ${inspection.name}</td> 
                        <td> ${orNotListed(inspection.category)}</td> 
                        <td> ${inspection.address_line_1}</td> 
                        <td> ${inspection.city}</td> 
                        <td> ${inspection.state}</td> 
                        <td> ${inspection.zip}</td> 
                    </tr>

            `
    )
    .join("");
  return `
                <h2 class="view-title">📊 Table View</h2>
               <div class="table-container">
                <table class="restaurant-table">
                 <caption class="view-description">
                    Food Adventurer - Different restaurants to explore and where to find them in Prince George's County, Maryland. 
                    </caption>
                    <tr>
                    <th> Name </th>
                    <th> Category </th>
                    <th> Address </th>
                    <th> City </th>
                    <th> State </th>
                    <th> Zip </th>
                    </tr> 
                    ${tableHTML}
                </table>
                </div>
            `;
}

export default showTable;


    // <div class="todo-implementation">
                //     <h3>TODO: Implement Table View</h3>
                //     <p><strong>Your task:</strong> Display the data as a real HTML table, with header cells and a caption</p>
                //     <p><strong>Good for:</strong> Scanning specific data points, comparing values, finding specific information</p>
                //     <p><strong>Consider:</strong> Which columns are most important? How can you make scanning easy?</p>
                //     <p><strong>Data available:</strong> ${data.length} items loaded</p>
                // </div>