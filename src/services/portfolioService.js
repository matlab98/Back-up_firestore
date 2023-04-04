const { exportToJSON, importFromJSON } = require("../helpers/dataJson");

class PortfolioService {
  constructor(firebase) {
    this.firebase = firebase;
    this.db = this.firebase.firestore();
    this.firestore = this.firebase.firestore;
  }

  async exportPortfolio() {
    const collectionName = "0001";
    const snapshot = await this.db.collection(collectionName).get();
    //const documents = snapshot.docs.map(doc => doc.data());
    const outputArr = [];

    snapshot.forEach((doc) => {
      const docData = doc.data();
      const docObj = {};
      for (const [key, value] of Object.entries(docData)) {
        if (value instanceof this.firestore.Timestamp) {
          docObj[key] = value.toDate().toISOString(); // Convert timestamp to ISO string format
        } else if (value instanceof this.firebase.firestore.GeoPoint) {
          docObj[key] = {
            latitude: value.latitude,
            longitude: value.longitude,
          };
        } else {
          docObj[key] = value;
        }
      }
      outputArr.push(docObj);
    });
    exportToJSON(outputArr, collectionName + ".json"); // Convert array to JSON string with 2-space indentation

    return outputArr;
  }

  async importPortfolio() {
    const collectionName = "0001";
    const json = await importFromJSON(collectionName + ".json");

    // Import the data to Firestore
    const dataArray = Object.keys(json).map((key) => {
      return {
        id: key,
        ...json[key],
      };
    });

    dataArray.map(async (data) => {
      await this.db.collection("0002").doc("vaEex1cAFeskfHcx32Z7").set(data);
    });

    return dataArray;
  }
}

module.exports = { PortfolioService };
