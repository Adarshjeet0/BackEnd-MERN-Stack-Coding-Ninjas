// Please don't change the pre-written code
// Import the necessary modules here

import { ObjectId } from "mongodb";
import { getClient, getDB } from "../../config/mongodb.js";

const collectionName = "students";

class studentRepository {
  async addStudent(studentData) {
    const db = getDB();
    await db.collection(collectionName).insertOne(studentData);
  }

  async getAllStudents() {
    const db = getDB();
    const students = await db.collection(collectionName).find({}).toArray();
    return students;
  }

  //You need to implement methods below:
  // Start Writing your code
  async createIndexes() {
    const db = getDB();
    try {
      // Single-field index on 'name' in ascending order
      await db.collection(collectionName).createIndex({ name: 1 });

      // Compound index on 'age' (ascending) and 'grade' (descending)
      await db.collection(collectionName).createIndex({ age: 1, grade: -1 });
      
      // Optional: Index on 'assignments.title' if frequently searched
      await db.collection(collectionName).createIndex({ "assignments.title": 1 });

    } catch (err) {
      console.log("Error creating indexes:", err);
    }
    console.log("Indexes are created");
  }

  async getStudentsWithAverageScore() {
    const db = getDB();
    const students = await db.collection(collectionName).aggregate([
      {
        $project: {
          name: 1,
          averageScore: {
            $avg: "$assignments.score"
          }
        }
      }
    ]).toArray();

    return students;
  }


  async getQualifiedStudentsCount() {
    const db = getDB();
    const count = await db.collection(collectionName).countDocuments({
      age: { $gt: 9 },
      grade: { $lte: "B" },
      assignments: {
        $elemMatch: { title: "Math", score: { $gte: 60 } }
      }
    });

    return count;
  }

  async updateStudentGrade(studentId, extraCreditPoints) {
    const db = getDB();
    const client = getClient();
  
    // Start a session to perform the operations atomically
    const session = client.startSession();
  
    try {
      session.startTransaction();
  
      // Step 1: Increment each assignment score by the extra credit points
      await db.collection(collectionName).updateMany(
        { _id: studentId },
        { $inc: { "assignments.$[].score": extraCreditPoints } },
        { session }
      );
  
      // Step 2: Calculate the new average score of the assignments
      const [student] = await db.collection(collectionName).aggregate([
        { $match: { _id: studentId } },
        { $project: { averageScore: { $avg: "$assignments.score" } } }
      ]).toArray();
  
      const averageScore = student?.averageScore ?? 0;
  
      // Step 3: Determine the new grade based on the average score
      let newGrade;
      if (averageScore >= 90) newGrade = "A";
      else if (averageScore >= 80) newGrade = "B";
      else if (averageScore >= 70) newGrade = "C";
      else if (averageScore >= 60) newGrade = "D";
      else newGrade = "F";
  
      // Step 4: Update the student's grade
      await db.collection(collectionName).updateOne(
        { _id: studentId },
        { $set: { grade: newGrade } },
        { session }
      );
  
      // Commit the transaction to apply changes
      await session.commitTransaction();
    } catch (err) {
      // Abort the transaction in case of an error
      await session.abortTransaction();
      console.log("Error updating student grade:", err);
      throw err; // Rethrow error for controller to handle
    } finally {
      // End the session
      session.endSession();
    }
  }
  
}

export default studentRepository;
