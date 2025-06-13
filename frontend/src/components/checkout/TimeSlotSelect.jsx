// components/checkout/TimeSlotSelect.jsx
"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "2:00 PM - 4:00 PM",
  "6:00 PM - 8:00 PM",
];

export const TimeSlotSelect = ({ value, onChange, error }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Delivery Time Slot <span className="text-red-500">*</span>
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={error ? "border-red-500" : ""}>
          <SelectValue placeholder="Select time slot" />
        </SelectTrigger>
        <SelectContent className="min-w-[var(--radix-select-trigger-width)] bg-white rounded-md shadow-lg border border-gray-200 data-[state=checked]:hidden">
          {timeSlots.map((slot) => (
            <SelectItem
              className="flex justify-end px-4 py-2 hover:bg-gray-50 text-gray-700 data-[state=checked]:hidden"
              key={slot}
              value={slot}
            >
              {slot}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
