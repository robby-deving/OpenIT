import React, { useState, useEffect } from "react";
import checklist from "@/assets/material-symbols_checklist.svg";
import landslide from "@/assets/material-symbols_landslide-outline.svg";
import caution from "@/assets/icon-park-solid_caution.svg";
import badge from "@/assets/badge.svg";
import safety from "@/assets/safety.svg";
import { Checkbox } from "@/components/ui/checkbox";

interface ModalProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onClose: () => void;
}

const ChecklistModal: React.FC<ModalProps> = ({ title, items, isOpen, onClose }) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(items.map(() => false));

  useEffect(() => {
    if (isOpen) {
      setCheckedItems(items.map(() => false));
    }
  }, [isOpen, items]);

  const handleCheck = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  const allChecked = checkedItems.every(Boolean);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <h2 className="text-lg font-bold mb-4">{title}</h2>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Checkbox checked={checkedItems[idx]} onCheckedChange={() => handleCheck(idx)} />
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
          "Make an Emergency Plan: Create a family emergency communications plan that has an out-of-state contact.",
          "Protect Your Home: Secure heavy items in your home like bookcases, refrigerators, water heaters, televisions and objects that hang on walls."
        ]);
        break;

      case "during":
        setModalTitle("Stay Safe During an Earthquake");
        setModalItems([
          "If you are inside, stay and do not run outside and avoid doorways.",
          "If you are in bed, turn face down and cover your head and neck with a pillow.",
          "If you are in a car, pull over and stop. Set your parking brake.",
          "If you're outside, stay there. Move to an open area away from buildings, trees, streetlights, and power lines."
        ]);
        break;

      case "after":
        setModalTitle("Stay Safe After an Earthquake");
        setModalItems([
          "Expect aftershocks to follow the main shock of an earthquake. Be ready to Drop, Cover, and Hold On if you feel an aftershock.",
          "If you are in a damaged building, go outside and quickly move away from the building. Do not enter damaged buildings.",
          "If you are trapped, send a text or bang on a pipe or wall. Cover your mouth with your shirt for protection and instead of shouting, use a whistle.",
          "If you are in an area that may experience tsunamis, go inland or to higher ground immediately after the shaking stops.",
          "Check yourself to see if you are hurt and help others if you have training. Learn how to be the help until help arrives."
        ]);
        break;

      default:
        setModalItems([]);
    }
    setModalOpen(true);
  };

  return (
    <div className="p-8 pr-56">
      <h1 className="pb-5 font-bold text-2xl">Safety Tips</h1>

      <div className="flex gap-3 mb-5">
        <button className="border border-blue-500 rounded-lg w-32" onClick={() => scrollTo("before")}>
          <h3 className="p-1 text-center text-sm">Prepare Before</h3>
        </button>

        <button className="border border-blue-500 rounded-lg w-32" onClick={() => scrollTo("during")}>
          <h3 className="p-1 text-center text-sm">Stay Safe During</h3>
        </button>

        <button className="border border-blue-500 rounded-lg w-32" onClick={() => scrollTo("after")}>
          <h3 className="p-1 text-center text-sm">Stay Safe After</h3>
        </button>
      </div>

      <section className="mt-10 space-y-20">
        {/* Before */}
        <div id="before" className="mt-5">
          <h2 className="font-semibold text-lg">Prepare Before an Earthquake</h2>
          <div className="flex items-center gap-3 mt-3">
            <img src={checklist} className="w-10 h-10" />
            <p className="text-sm font-semibold">The best time to prepare for any disaster is before it happens.</p>
          </div>

          <div className="bg-green-100 rounded-md w-[920px] mt-3 p-3 space-y-2">
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">Practice how to protect yourself during earthquakes.</p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">Create a family emergency communications plan.</p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">Secure heavy items in your home.</p>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="border-green-600 border w-28 h-8 flex items-center justify-center rounded-md m-4"
              onClick={() => handlePrepareClick("before")}
            >
              <p className="text-xs font-bold text-center">Prepare Now</p>
            </button>
          </div>
        </div>

        {/* During */}
        <div id="during" className="mt-5">
          <h2 className="font-semibold text-lg">Stay Safe During an Earthquake</h2>
          <div className="flex items-center gap-3 mt-3">
            <img src={landslide} className="w-10 h-10" />
            <p className="text-sm font-semibold">If an earthquake happens, protect yourself right away.</p>
          </div>

          <div className="bg-green-100 rounded-md w-[920px] mt-3 p-3 space-y-2">
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">If you are inside, stay inside and avoid doorways.</p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">If in bed, cover your head and neck with a pillow.</p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">If in a car, pull over and stop.</p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">If outside, move to an open space.</p>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="border-green-600 border w-28 h-8 flex items-center justify-center rounded-md m-4"
              onClick={() => handlePrepareClick("during")}
            >
              <p className="text-xs font-bold text-center">Prepare Now</p>
            </button>
          </div>
        </div>

        {/* After */}
        <div id="after" className="mt-5">
          <h2 className="font-semibold text-lg">Stay Safe After an Earthquake</h2>
          <div className="flex items-center gap-3 mt-3">
            <img src={caution} className="w-10 h-10" />
            <p className="text-sm font-semibold">
              There can be serious hazards after an earthquake.
            </p>
          </div>

          <div className="bg-green-100 rounded-md w-[920px] mt-3 p-3 space-y-2">
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">Expect aftershocks. Be ready to Drop, Cover, Hold On.</p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">If in a damaged building, move away from it.</p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">If trapped, send a text or make noise. Use a whistle.</p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">If near tsunami areas, go to higher ground.</p>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">Check yourself for injuries and help others if trained.</p>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="border-green-600 border w-28 h-8 flex items-center justify-center rounded-md m-4"
              onClick={() => handlePrepareClick("after")}
            >
              <p className="text-xs font-bold text-center">Prepare Now</p>
            </button>
          </div>
        </div>
      </section>

      <ChecklistModal
        isOpen={modalOpen}
        title={modalTitle}
        items={modalItems}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}