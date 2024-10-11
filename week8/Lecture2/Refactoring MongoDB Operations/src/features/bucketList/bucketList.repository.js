// Please don't change the pre-written code
// Import the necessary modules here
import {getDB} from '../../config/mongodb.js';


class BucketListRepository {
  constructor() {
    this.collection = "bucketListItems";
  }
  async addBucketListItem(bucketListItem) {
    // Write your code here
    try {
      const db = getDB(); 
      const collection = db.collection("bucketListItems");
      const result = await collection.insertOne(bucketListItem);
      return bucketListItem;
    } catch (error) {

      console.log(error);
    }
  }

  async findOneBucketListItem(title) {
    // Write your code here
    try {
      const db = getDB(); 
      const collection = db.collection("bucketListItems");
      const result = await collection.findOne({ title });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export default BucketListRepository;
