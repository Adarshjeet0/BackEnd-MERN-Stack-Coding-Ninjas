import ExpenseRepository from "./expense.repository.js";
import ExpenseModel from './expense.model.js';

export default class ExpenseController {
  constructor() {
    this.expenseRepository = new ExpenseRepository();
  }

  // Create new expense
  add = async (req, res) => {
    try {
      const {title, amount, date, isRecurring, tags} = req.body;
      const newExpense = {title, amount, date, isRecurring, tags};
      await this.expenseRepository.addExpense(newExpense);
      res.status(201).send(newExpense);
    } catch (error) {
      console.log(error);
      res.send("Something went wrong with databases to add your products");
    }

  };

  // Get a specific expense
  getOne = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const expense = await this.expenseRepository.getOne(id);
      res.status(200).send(expense);
    } catch (error) {
      console.log(error);
      res.status(404).send("Something went wrong with databases to get your products");
    }
    
  };

  // Get all expenses
  getAll = async (req, res) => {
    try {
      const expenses = await this.expenseRepository.getAllExpenses();
      res.status(200).send(expenses);
    }catch (error) {
      console.log(error);
      res.send("Something went wrong with databases to get all products");
    }
  };

  // Add a tag to an expense
  addTag = async (req, res) => {
    try {
      const id = req.params.id;
      const tag = req.body.tag;
      await this.expenseRepository.addTagToExpense(id, tag)
      res.status(200).send("Tag added successfully");
      // res.status(200).send({id, tag});
    } catch (error) {
      console.log(error);
      res.send("Something went wrong with databases to add tag");
    }
  };

  // Filter expenses based on given criteria
  filter = async (req, res) => {
    try {
      // console.log(req.query);
      const {minPrice, maxPrice} = req.query;
      const criteria = {minPrice, maxPrice};
      const expenses = await this.expenseRepository.filterExpenses(criteria);
      res.status(200).send(expenses);
    } catch (error) {
      console.log(error);
      res.status(404).send("Something went wrong with databases to filter products");
    }
  };
}
