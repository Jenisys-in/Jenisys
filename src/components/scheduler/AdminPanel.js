"use client";

import React, { useState, useEffect } from "react";
import { MoreVertical, Edit, Trash2, AlertCircle } from "lucide-react";
import RescheduleModal from "./RescheduleModal";

const AdminPanel = () => {
  const [meetings, setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const fetchMeetings = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/meetings", {
        headers: { "x-api-key": process.env.ADMIN_API_KEY || "" },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch meetings");
      }
      const data = await res.json();
      setMeetings(data.meetings);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  const handleDelete = async (meetingId) => {
    if (window.confirm("Are you sure you want to cancel this meeting?")) {
      try {
        const res = await fetch(`/api/meetings/${meetingId}`, {
          method: "DELETE",
          headers: { "x-api-key": process.env.ADMIN_API_KEY || "" },
        });
        if (!res.ok) throw new Error("Failed to cancel meeting");
        fetchMeetings();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleReschedule = async (meetingId, startTime, endTime) => {
    try {
      const res = await fetch(`/api/meetings/${meetingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ADMIN_API_KEY || "",
        },
        body: JSON.stringify({ startTime, endTime }),
      });
      if (!res.ok) throw new Error("Failed to reschedule meeting");
      fetchMeetings();
      setIsModalOpen(false);
      setSelectedMeeting(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const openModal = (meeting) => {
    setSelectedMeeting(meeting);
    setIsModalOpen(true);
    setOpenMenuId(null);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-white">
      {isModalOpen && selectedMeeting && (
        <RescheduleModal
          meeting={selectedMeeting}
          onClose={() => setIsModalOpen(false)}
          onReschedule={handleReschedule}
        />
      )}
      <h2 className="text-2xl font-semibold mb-6">Scheduled Meetings</h2>
      {isLoading && <p>Loading meetings...</p>}
      {error && (
        <div className="flex items-center text-red-400">
          <AlertCircle className="mr-2" />
          <p>Error: {error}</p>
        </div>
      )}
      {!isLoading && !error && meetings.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">No meetings scheduled yet.</p>
        </div>
      )}
      {!isLoading && !error && meetings.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-4">Attendee</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((meeting) => (
                <tr
                  key={meeting._id}
                  className="border-b border-gray-700 hover:bg-gray-700"
                >
                  <td className="p-4">
                    <div className="font-semibold">{meeting.userName}</div>
                    <div className="text-sm text-gray-400">
                      {meeting.userEmail}
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      {new Date(meeting.startTime).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(meeting.startTime).toLocaleTimeString()} -{" "}
                      {new Date(meeting.endTime).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        meeting.status === "Scheduled"
                          ? "bg-green-500 text-white"
                          : meeting.status === "Rescheduled"
                          ? "bg-yellow-500 text-black"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {meeting.status}
                    </span>
                  </td>
                  <td className="p-4 relative">
                    <button
                      onClick={() =>
                        setOpenMenuId(
                          openMenuId === meeting._id ? null : meeting._id
                        )
                      }
                      className="p-2 hover:bg-gray-600 rounded-full"
                    >
                      <MoreVertical size={18} />
                    </button>
                    {openMenuId === meeting._id && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
                        <div className="py-1">
                          <button
                            onClick={() => openModal(meeting)}
                            className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                          >
                            <Edit size={16} className="mr-2" />
                            Reschedule
                          </button>
                          <button
                            onClick={() => handleDelete(meeting._id)}
                            className="w-full text-left flex items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-600"
                          >
                            <Trash2 size={16} className="mr-2" />
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
