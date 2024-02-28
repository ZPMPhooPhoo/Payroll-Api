const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
    {
        id: { type: String, default: null },
        name:{ type: String, default: null },
        empContactNo:{ type: String, default: null },
        employeeId: { type: String, default: null },
        attendanceDate: { type: String, default: null },
        inTime: { type: String, default: null },
        outTime: { type: String, default: null },
        isFullDay: { type: Boolean, default: false },
    });

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;