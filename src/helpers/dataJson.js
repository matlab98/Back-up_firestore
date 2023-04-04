const fs = require('fs');

  async function exportToJSON(data, filename) {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFile(filename, jsonString, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Data exported to ${filename}`);
    });
  }

  async function importFromJSON(filePath) {
    try {
      // Read the JSON file
      const data = fs.readFileSync(filePath);

      // Convert the JSON to an array of objects
      const json = JSON.parse(data);

      console.log('Data imported successfully!');
      return json;
    } catch (error) {
      console.error('Error importing data: ', error);
    }
  }

module.exports = {
    exportToJSON,
    importFromJSON
  };