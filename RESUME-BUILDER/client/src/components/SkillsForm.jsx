

import { Plus, Sparkles, X } from "lucide-react";
import { useState } from "react";

const SkillsForm = ({ data = [], onChange }) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    const skill = newSkill.trim();

    if (skill && !data.includes(skill)) {
      onChange([...data, skill]);
      setNewSkill("");
    }
  };

  const removeSkill = (indexToRemove) => {
    onChange(data.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <Sparkles className="size-5" />
          Skills
        </h3>

        <p className="text-sm text-gray-500">
          Add your technical and soft skills
        </p>
      </div>

      {/* Add Skill */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a skill (e.g., JavaScript, Project Management)"
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          type="button"
          onClick={addSkill}
          disabled={!newSkill.trim()}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Plus className="size-4" />
          Add
        </button>
      </div>

      {/* Skills */}
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
            >
              {skill}

              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="ml-1 rounded-full p-0.5 transition-colors hover:bg-blue-200"
                title={`Remove ${skill}`}
              >
                <X className="size-3" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <div className="py-6 text-center text-gray-500">
          <Sparkles className="mx-auto mb-2 size-10 text-gray-300" />

          <p>No skills added yet.</p>

          <p className="text-sm">
            Add your technical and soft skills above.
          </p>
        </div>
      )}

      {/* Tip */}
      <div className="rounded-lg bg-blue-50 p-3">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Add 8-12 relevant skills. Include both
          technical skills (programming languages, tools) and soft skills
          (leadership, communication).
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;
