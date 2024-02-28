const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
{
    id: { type: String,default: null },
    name: { type: String,default: null },
    empContactNo: { type: Number,default: 0 },
    email: { type: String,default: null },
    address1: { type: String,default: null },
    address2:{ type: String,default: null },
    zipCode:{ type: Number,default: 0 },
    city: { type: String,default: null },
    state: { type: String,default: null },
    bankName: { type: String,default: null },
    ifsc: { type: String,default: null },
    accountNo: { type: Number,default: 0 },
    bankBranch: { type: String,default: null },
    salary:{ type: Number,default: 0 },
  
    });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;