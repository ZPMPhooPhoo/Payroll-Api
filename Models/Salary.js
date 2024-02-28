const mongoose = require('mongoose');

const SalarySchema = new mongoose.Schema(
    {
        name: { type: String, default: null },
        empContactNo: { type: String, default: null },
        employeeId: { type: String, default: null },
        saleryDate: { type: String, default: null },
        totalAdvance: { type: Number, default: 0 },
        presentDays: { type: Number, default: 0 },
        salaryAmount: { type: Number, default: 0 },
    });

const Salary = mongoose.model('Salary', SalarySchema);

module.exports = Salary;