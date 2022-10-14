import { Trash, PencilSimple } from "phosphor-react";

export default function Card({ title, description }) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-3">
      <div className="border border-blue-700 border-opacity-75 p-6 rounded-lg">
        <h2 className="text-lg text-white font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
        <div className="flex justify-end">
          <Trash size={24} className="mr-3"/>
          <PencilSimple size={24} />
        </div>
      </div>
    </div>
  );
}
