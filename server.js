const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./Models/User");
const Attendance = require("./Models/Attendance");
const Advance = require("./Models/Advance");
const Salary = require("./Models/Salary");
const Leave = require("./Models/Leave");
const cors = require('cors');
const app = express();
mongoose.connect("mongodb+srv://nainglinthant1998:nainglinthant1998@customerdb0.jg9rnlh.mongodb.net/pay-roll?retryWrites=true&w=majority&appName=customerdb0")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));
app.use(cors());
app.use(bodyParser.json());

app.post("/register",async (req,res)=>{
    try{
        res.send(await User.create(req.body));
    }catch(error){
        console.error(error);
    }
});

app.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if(!user){
            res.status(404).send({ error: 'User not found' });
        }
        res.json(user);
    }catch(error){
        console.error(error);
    }
});

const Employee = require("./Models/Employee");

app.get("/employee",async(req,res)=>{
    try{
        const employee=await Employee.find();
        if(!employee){
            res.status(404).send({ error: 'Employee not found' });
        }
        res.json(employee);
    }catch(erroe){
        console.error(error);
    }
})

app.post("/employee",async(req,res)=>{
    try{
        const employee=await Employee.create(req.body);
        if(!employee){
            res.status(404).send({ error: 'Employee not found' });
        }
        res.json(employee);
    }catch(error){
        console.error(error);
    }
})

app.get("/employee/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.findOne({ _id: id });
        if (!employee) {
            res.status(404).send({ error: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
})

app.put("/employee/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.findOneAndUpdate({ _id: id }, req.body);
        if (!employee) {
            return res.status(404).send({ error: 'Employee not found' });
        }
        return res.json(employee);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.delete("/employee/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const employee=await Employee.findOneAndDelete({ _id: id });
        if(!employee){
            res.status(404).send({ error: 'Employee not found' });
        }
        res.json(employee);
    }catch(error){
        console.error(error);
    }
})

//Attendance
app.get("/attendance",async(req,res)=>{
    try {
        const attendance = await Attendance.find();
        if (!attendance) {
            return res.status(404).send({ error: 'Attendance not found' });
        }
        return res.json(attendance);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})
app.post("/attendance",async(req,res)=>{
    try {
        const id=req.body.employeeId;
        const user=await Employee.findOne({ _id: id });
        req.body.empContactNo=user.empContactNo;
        req.body.name=user.name;
        const attendance=await Attendance.create(req.body);
        if (!attendance) {
            return res.status(404).send({ error: 'Attendance not found' });
        }
        return res.json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})

app.delete("/attendance/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const attendance=await Attendance.findOneAndDelete({ _id: id });
        if(!attendance){
            res.status(404).send({ error: 'Attendance not found' });
        }
        res.json(attendance);
    }catch(error){
        console.error(error);
    }
})

app.get("/attendance/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const attendance=await Attendance.findOne({ _id: id });
        if(!attendance){
            res.status(404).send({ error: 'Attendance not found' });
        }
        res.json(attendance);
    }catch(error){
        console.error(error);
    }
})

app.put("/attendance/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const attendance = await Attendance.findOneAndUpdate({ _id: id }, req.body);
        if (!attendance) {
            return res.status(404).send({ error: 'Employee not found' });
        }
        return res.json(attendance);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

//Advance
app.get("/advance",async(req,res)=>{
    try {
        const advance = await Advance.find();
        if (!advance) {
            return res.status(404).send({ error: 'Advance not found' });
        }
        return res.json(advance);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})
app.post("/advance",async(req,res)=>{
    try {
        const id=req.body.employeeId;
        const user=await Employee.findOne({ _id: id });
        req.body.empContactNo=user.empContactNo;
        req.body.name=user.name;
        const adv=await Advance.create(req.body);
        if (!adv) {
            return res.status(404).send({ error: 'advance not found' });
        }
        return res.json(adv);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})
app.put("/advance/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const advance = await Advance.findOneAndUpdate({ _id: id }, req.body);
        if (!advance) {
            return res.status(404).send({ error: 'advance not found' });
        }
        return res.json(advance);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});
app.get("/advance/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const advance = await Advance.findOne({ _id: id });
        if (!advance) {
            return res.status(404).send({ error: 'Advance not found' });
        }
        return res.json(advance);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})

app.delete("/advance/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const advance=await Advance.findOneAndDelete({ _id: id });
        if(!advance){
            res.status(404).send({ error: 'Advance not found' });
        }
        res.json(attendance);
    }catch(error){
        console.error(error);
    }
})


//Salary
app.get("/salary",async(req,res)=>{
    try {
        const salary = await Salary.find();
        if (!salary) {
            return res.status(404).send({ error: 'Salary not found' });
        }
        return res.json(salary);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})

app.post("/salary",async(req,res)=>{
    try {
        const id=req.body.employeeId;
        
        const user=await Employee.findOne({ _id: id });
        req.body.empContactNo=user.empContactNo;
        req.body.name=user.name;
        const salary=await Salary.create(req.body);
        if (!salary) {
            return res.status(404).send({ error: 'Salary not found' });
        }
        return res.json(salary);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})

app.get("/salary/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const salary=await Salary.findOne({ _id: id });
        if(!salary){
            res.status(404).send({ error: 'Salary not found' });
        }
        res.json(salary);
    }catch(error){
        console.error(error);
    }
})

app.put("/salary/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const salary = await Salary.findOneAndUpdate({ _id: id }, req.body);
        if (!salary) {
            return res.status(404).send({ error: 'Salary not found' });
        }
        return res.json(salary);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.delete("/salary/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const salary=await Salary.findOneAndDelete({ _id: id });
        if(!salary){
            res.status(404).send({ error: 'Salary not found' });
        }
        res.json(salary);
    }catch(error){
        console.error(error);
    }
});

//Leave
app.get("/leave",async(req,res)=>{
    try {
        const leave = await Leave.find();
        if (!leave) {
            return res.status(404).send({ error: 'Leave not found' });
        }
        return res.json(leave);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})
app.delete("/leave/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const leave=await Leave.findOneAndDelete({ _id: id });
        if(!leave){
            res.status(404).send({ error: 'Leave not found' });
        }
        res.json(leave);
    }catch(error){
        console.error(error);
    }
});

app.get("/leave/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const leave=await Leave.findOne({ _id: id });
        if(!leave){
            res.status(404).send({ error: 'Leave not found' });
        }
        res.json(leave);
    }catch(error){
        console.error(error);
    }
})

app.put("/leave/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const leave = await Leave.findOneAndUpdate({ _id: id }, req.body);
        if (!leave) {
            return res.status(404).send({ error: 'Leave not found' });
        }
        return res.json(leave);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.post("/leave",async(req,res)=>{
    try {
        const id=req.body.employeeId;
        
        const user=await Leave.findOne({ _id: id });
        req.body.empContactNo=user.empContactNo;
        req.body.name=user.name;
        const leave=await Salary.create(req.body);
        if (!leave) {
            return res.status(404).send({ error: 'Salary not found' });
        }
        return res.json(leave);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});