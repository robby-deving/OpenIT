import React from "react";
import checklist from "@/assets/material-symbols_checklist.svg";
import landslide from "@/assets/material-symbols_landslide-outline.svg";
import caution from "@/assets/icon-park-solid_caution.svg";
import { Checkbox } from "@/components/ui/checkbox";

export default function SafetyGuides() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-8">
      <h1 className="pb-5 font-bold text-2xl">Safety Tips</h1>

      <div>
        <button
          className="border border-blue-500 rounded-lg w-32 mr-3"
          onClick={() => scrollTo("before")}
        >
          <h3 className="p-1 text-center text-sm">Prepare Before</h3>
        </button>

        <button
          className="border border-blue-500 rounded-lg w-32"
          onClick={() => scrollTo("during")}
        >
          <h3 className="p-1 text-center text-sm">Stay Safe During</h3>
        </button>

        <button
          className="border border-blue-500 rounded-lg w-32 m-3"
          onClick={() => scrollTo("after")}
        >
          <h3 className="p-1 text-center text-sm">Stay Safe After</h3>
        </button>
      </div>

      <section className="mt-10 space-y-20">
        <div id="before" className="mt-5">
          <h2 className="font-semibold text-lg">Prepare Before an Emergency</h2>

          <div className="flex items-center gap-3 mt-3">
            <img src={checklist} alt="Checklist" className="w-10 h-10" />
            <p className="text-sm font-semibold">
              The best time to prepare for any disaster is before it happens.
            </p>
          </div>

          <div className="bg-green-100 rounded-md w-[920px] mt-3 p-3 space-y-2">
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                Practice how to protect yourself during earthquakes, with family
                and coworkers.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                Make an Emergency Plan: Create a family emergency communications plan that has an out-of-state contact.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                Protect Your Home: Secure heavy items in your home like bookcases, refrigerators, water heaters, televisions and objects that hang on walls.
              </p>
            </div>
          </div>
        </div>

        <div id="during" className="mt-5">
          <h2 className="font-semibold text-lg">
            Stay Safe During an Emergency
          </h2>

          <div className="flex items-center gap-3 mt-3">
            <img src={landslide} alt="Checklist" className="w-10 h-10" />
            <p className="text-sm font-semibold">
              If an earthquake happens, protect yourself right away:
            </p>
          </div>

          <div className="bg-green-100 rounded-md w-[920px] mt-3 p-3 space-y-2">
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                If you are inside, stay and do not run outside and avoid doorways.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                If you are in bed, turn face down and cover your head and neck with a pillow.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                If you are in a car, pull over and stop. Set your parking brake.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                If you're outside, stay there. Move to an open area away from buildings, trees, streetlights, and power lines.
              </p>
            </div>
          </div>
        </div>

        <div id="after" className="mt-5">
          <h2 className="font-semibold text-lg">
            Stay Safe After an Emergency
          </h2>

          <div className="flex items-center gap-3 mt-3">
            <img src={caution} alt="Checklist" className="w-10 h-10" />
            <p className="text-sm font-semibold">
              There can be serious hazards after an earthquake, such as damage to the building, leaking gas and water lines, or downed power lines.
            </p>
          </div>

          <div className="bg-green-100 rounded-md w-[920px] mt-3 p-3 space-y-2">
            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                Expect aftershocks to follow the main shock of an earthquake. Be ready to Drop, Cover, and Hold On if you feel an aftershock.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                If you are in a damaged building, go outside and quickly move away from the building. Do not enter damaged buildings.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                If you are trapped, send a text or bang on a pipe or wall. Cover your mouth with your shirt for protection and instead of shouting, use a whistle.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                If you are in an area that may experience tsunamis, go inland or to higher ground immediately after the shaking stops.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox defaultChecked className="mt-1" />
              <p className="text-sm">
                Check yourself to see if you are hurt and help others if you have training. Learn how to be the help until help arrives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
