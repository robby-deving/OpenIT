import React from "react";
import recent from "@/assets/recent-alert.svg";

export default function Alerts() {
  return (
    <div className="p-8">
      <h1 className="pb-5 font-bold text-2xl">Alerts</h1>

      <div className="w-full border-orange-400 border-4 rounded-xl bg-orange-50 p-4 mb-10 flex items-center gap-4">
        <img
          src={recent}
          alt="Recent Alert"
          className="h-24 w-24 object-contain"
        />

        <div className="flex flex-col">
          <p className="text-red-600 font-bold text-2xl">
            Earthquake Alert: M 4.8 Near Manila Bay
          </p>
          <p className="font-medium text-sm">
            📍 Manila Bay, Philippines
          </p>
          <p className="font-bold text-sm pt-1">
            A magnitude 4.8 earthquake was detected near Manila Bay, Philippines
            at 8:45 AM local time. Please follow safety protocols: Drop, Cover,
            and Hold On. Check your surroundings for hazards and stay tuned for
            updates.
          </p>
          <div className="pt-1">
            <p className="text-gray-400 text-sm font-semibold">
              Date Posted: November 8, 2025
            </p>
            <p className="text-gray-400 text-sm font-semibold">
              Expires at: November 8, 2025
            </p>
          </div>
        </div>
      </div>

      <h1 className="pb-5 font-bold text-2xl">Other Alerts</h1>
      <div
        className="inline-flex items-center gap-6 rounded-lg p-4 bg-white px-7 py-5"
        style={{ boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.15)" }}
      >
        {/* Circle */}
        <div className="bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
          <p className="text-white font-bold">M 6.8</p>
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="font-bold text-lg">
            M 6.8 Near Manila Bay
          </p>
          <p className="font-medium text-sm">
            📍 Manila Bay, Philippines
          </p>
          <p className="text-gray-700 text-sm mt-1">
            A magnitude 4.8 earthquake was detected near Manila Bay, Philippines
            at 8:45 AM local time. Please follow safety protocols: Drop, Cover,
            and Hold On. Check your surroundings for hazards and stay tuned for
            updates.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Date Posted: Nov 8, 2025, 8:46 AM
          </p>
          <p className="text-gray-500 text-xs">
            Expires At: Nov 8, 2025, 9:46 AM
          </p>
        </div>
      </div>
    </div>
  );
}
