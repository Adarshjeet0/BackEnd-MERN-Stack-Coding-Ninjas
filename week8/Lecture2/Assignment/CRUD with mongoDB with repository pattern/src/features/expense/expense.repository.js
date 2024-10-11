import {getDB} from '../../config/mongodb.js';
import {ObjectId} from 'mongodb';
class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  // Create a new expense
  async addExpense(expense) {
    console.log(expense);
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      await collection.insertOne(expense);
      return expense;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with databases");
    }
  }

  // Get one expnese by its ID
  async getOne(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      return await collection.findOne({_id: new ObjectId(id)});
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with databases");
    }
  }

  // Get all expenses
  async getAllExpenses() {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      return await collection.find().toArray();
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with databases");
    }
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    try {
      const db = getDB();
      const collection = db.collection(this.collectionName);
      return await collection.updateOne({_id: new ObjectId(id)}, {$push: {tags: tag}})
    }catch (error) {
      console.log(error);
      throw new Error("Something went wrong with databases");
    }
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(criteria) {
    try {
      // console.log(criteria);
      const minAmount = criteria.minPrice
      const maxAmount = criteria.maxPrice
      const filterExpression = {};
      if(minAmount){
        filterExpression.amount = {$gte:parseFloat(minAmount)}
      }
      if(maxAmount){
        filterExpression.amount = {...filterExpression.amount, $lte: parseFloat(maxAmount)}
      }
      const db = getDB();
      const collection = db.collection(this.collectionName);
      // console.log(filterExpression);
      return await collection.find(filterExpression).toArray();
    }catch (error) {
      console.log(error);
      throw new Error("Something went wrong with databases");
    }
  }
}

export default ExpenseRepository;
