const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema(
    {
        name: { type: String, default: null },
        empContactNo: { type: Number, default: 0 },
        employeeId: { type: String, default: null },
        leaveDate: { type: String, default: null },
        leaveReason: { type: String, default: null },
        noOfFullDayLeaves: { type: Number, default: 0 },
        noofHalfDayLeaves: { type: Number, default: 0 }
    });

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;