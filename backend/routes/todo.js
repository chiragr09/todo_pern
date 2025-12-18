import { Router } from "express";
import pool from "../db.js";

const router = Router();

//create a new todo
router.post("/", async (req, res) => {
    try{ 
        const {description, completed} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description, completed) VALUES ($1, $2) RETURNING *",
            [description, completed || false] /*since initially when created it is false*/
        );
        res.json(newTodo.rows[0]); /*only first row*/
    } catch (err) {
        console.error(err.message);
        console.status(500).send("Server Error");
    }
});

export default router;