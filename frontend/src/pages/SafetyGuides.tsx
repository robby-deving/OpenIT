import React, { useState, useEffect } from "react";
import checklist from "@/assets/material-symbols_checklist.svg";
import landslide from "@/assets/material-symbols_landslide-outline.svg";
import caution from "@/assets/icon-park-solid_caution.svg";
import safety from "@/assets/safety.svg";
import { Checkbox } from "@/components/ui/checkbox";

interface ModalProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void; 
}

const ChecklistModal: React.FC<ModalProps> = ({
  title,
  items,
  isOpen,
  onClose,
  onComplete,
}) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    items.map(() => false)
  );
    const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCheckedItems(items.map(() => false));
      setCompleted(false);
    }
  }, [isOpen, items]);

  const handleCheck = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

    const allChecked = checkedItems.length > 0 && checkedItems.every(Boolean);

  useEffect(() => {
        if (allChecked && !completed) {
      onComplete();
      setCompleted(true);
    }
  }, [allChecked, completed, onComplete]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <h2 className="text-lg font-bold mb-4">{title}</h2>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Checkbox
                checked={checkedItems[idx]}
                onCheckedChange={() => handleCheck(idx)}
              />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>

        {allChecked && (
          <div className="mt-4 flex justify-center">
            <img src={safety} className="w-56 h-16" />
          </div>
        )}

        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default function SafetyGuides() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItems, setModalItems] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState("");

  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrepareClick = (section: string) => {
    switch (section) {
      case "before":
        setModalTitle("Prepare Before an Earthquake");
        setModalItems([
          "Practice how to protect yourself during earthquakes, with family and coworkers.",
          "Create a family emergency communications plan.",
          "Secure heavy items in your home.",
        ]);
        break;

      case "during":
        setModalTitle("Stay Safe During an Earthquake");
        setModalItems([
          "If you are inside, stay inside and avoid doorways.",
          "If in bed, cover your head and neck with a pillow.",
          "If in a car, pull over and stop.",
          "If outside, move to an open space.",
        ]);
        break;

      case "after":
        setModalTitle("Stay Safe After an Earthquake");
        setModalItems([
          "Expect aftershocks. Be ready to Drop, Cover, Hold On.",
          "If in a damaged building, move away from it.",
          "If trapped, send a text or make noise.",
          "If near tsunami areas, go to higher ground.",
          "Check yourself for injuries and help others if trained.",
        ]);
        break;

      default:
        setModalItems([]);
    }
    setModalOpen(true);
  };

  const handleSectionComplete = () => {
    if (!completedSections.includes(modalTitle)) {
      setCompletedSections((prev) => [...prev, modalTitle]);
    }
  };

  const renderCompletedBadge = (sectionTitle: string) =>
    completedSections.includes(sectionTitle) ? (
      <p className="text-green-600 font-bold mt-2">🎉 Section Completed!</p>
    ) : null;

  return (
    <div className="flex justify-center">
    <div className="p-8 flex flex-col max-w-5xl">
      <h1 className="pb-5 font-bold text-2xl">Safety Tips</h1>

      {/* Responsive Buttons */}
      <div className="flex flex-col gap-3 mb-5 sm:flex-row">
        <button
          className="border border-blue-500 hover:bg-blue-500 rounded-lg w-full sm:w-32"
          onClick={() => scrollTo("before")}
        >
          <h3 className="p-1 text-center text-sm font-semibold hover:text-white">Prepare Before</h3>
        </button>

        <button
          className="border border-blue-500 hover:bg-blue-500 rounded-lg w-full sm:w-32"
          onClick={() => scrollTo("during")}
        >
          <h3 className="p-1 text-center text-sm font-semibold hover:text-white">Stay Safe During</h3>
        </button>

        <button
          className="border border-blue-500 hover:bg-blue-500 rounded-lg w-full sm:w-32"
          onClick={() => scrollTo("after")}
        >
          <h3 className="p-1 text-center text-sm font-semibold hover:text-white">Stay Safe After</h3>
        </button>
      </div>

      <section className="mt-10 space-y-20">
        {/* BEFORE */}
        <div id="before">
          <h2 className="font-semibold text-lg">
            Prepare Before an Earthquake
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <img src={checklist} className="w-10 h-10" />
            <p className="text-sm font-semibold">
              The best time to prepare for any disaster is before it happens.
            </p>
          </div>
          <div className="w-full max-w-[920px]">
            <div className="bg-green-100 rounded-md w-full mt-3 p-3 space-y-2">
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">Practice earthquake safety drills.</p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">Create a family emergency plan.</p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">
                  Secure heavy items and furniture at home.
                </p>
              </div>
            </div>

            {renderCompletedBadge("Prepare Before an Earthquake")}

            <div className="flex justify-end">
              <button
                className="bg-green-400 hover:bg-white hover:border-green-600 text-white hover:text-green-400 border w-28 h-8 flex items-center justify-center rounded-md mt-3"
                onClick={() => handlePrepareClick("before")}
              >
                <p className="text-xs font-bold ">Prepare Now</p>
              </button>
            </div>
          </div>
        </div>

        {/* DURING */}
        <div id="during">
          <h2 className="font-semibold text-lg">
            Stay Safe During an Earthquake
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <img src={landslide} className="w-10 h-10" />
            <p className="text-sm font-semibold">
              If an earthquake happens, protect yourself right away.
            </p>
          </div>
          <div className="w-full max-w-[920px]">
            <div className="bg-green-100 rounded-md w-full mt-3 p-3 space-y-2">
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">Stay inside and avoid doorways.</p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">Cover your head with a pillow in bed.</p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">Pull over safely if driving.</p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">Move to an open space if you are outside.</p>
              </div>
            </div>

            {renderCompletedBadge("Stay Safe During an Earthquake")}

            <div className="flex justify-end">
              <button
                className="bg-green-400 hover:bg-white hover:border-green-600 text-white hover:text-green-400 border w-28 h-8 flex items-center justify-center rounded-md mt-3"
                onClick={() => handlePrepareClick("during")}
              >
                <p className="text-xs font-bold ">Prepare Now</p>
              </button>
            </div>
          </div>
        </div>

        {/* AFTER */}
        <div id="after">
          <h2 className="font-semibold text-lg">
            Stay Safe After an Earthquake
          </h2>
          <div className="flex items-center gap-3 mt-3">
            <img src={caution} className="w-10 h-10" />
            <p className="text-sm font-semibold">
              There can be serious hazards after an earthquake.
            </p>
          </div>
          <div className="w-full max-w-[920px]">
            <div className="bg-green-100 rounded-md w-full mt-3 p-3 space-y-2">
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">Expect aftershocks. Be ready to Drop, Cover, Hold On.</p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">If in a damaged building, move away immediately.</p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">If trapped, send a text or make noise.</p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">Move to higher ground if tsunami risk exists.</p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox defaultChecked className="mt-1" />
                <p className="text-sm">Check yourself and assist others if trained.</p>
              </div>
            </div>

            {renderCompletedBadge("Stay Safe After an Earthquake")}

            <div className="flex justify-end">
              <button
                className="bg-green-400 hover:bg-white hover:border-green-600 text-white hover:text-green-400 border w-28 h-8 flex items-center justify-center rounded-md mt-3"
                onClick={() => handlePrepareClick("after")}
              >
                <p className="text-xs font-bold ">Prepare Now</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ChecklistModal
        isOpen={modalOpen}
        title={modalTitle}
        items={modalItems}
        onClose={() => setModalOpen(false)}
        onComplete={handleSectionComplete}
      />
    </div>
  </div>
  );
}