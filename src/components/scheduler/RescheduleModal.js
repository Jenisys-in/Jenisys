"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const RescheduleModal = ({ meeting, onClose, onReschedule }) => {
  const [newDate, setNewDate] = useState(
    new Date(meeting.startTime).toISOString().split("T")[0]
  );
  const [newTime, setNewTime] = useState(
    new Date(meeting.startTime).toTimeString().slice(0, 5)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStartTime = new Date(`${newDate}T${newTime}`);
    const newEndTime = new Date(
      newStartTime.getTime() +
        (new Date(meeting.endTime) - new Date(meeting.startTime))
    );
    onReschedule(meeting._id, newStartTime, newEndTime);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Reschedule Meeting</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">New Date</label>
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">New Time</label>
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Confirm Reschedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RescheduleModal;
