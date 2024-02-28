const mongoose = require('mongoose');

const advanceSchema = new mongoose.Schema(
    {
        name: { type: String,default: null },
        empContactNo: { type: Number,default: 0 },
        employeeId: { type: String, default: null },
        advanceDate: { type: String, default: null },
        advanceAmount: { type: Number, default: 0 },
        reason: { type: String, default: null }
    });

const Advance = mongoose.model('Advance', advanceSchema);

module.exports = Advance;