export default function SubSection({
    subtitle,
    completed,
    index,
    sectionIndex,
    updateList,
  }) {
    return (
      <div className="flex w-full justify-between items-center text-sm transition-all duration-200 ease-in-out opacity-100">
        <h4 className="font-medium">
          <span className="inline-block mr-1">{index + 1}.</span> {subtitle}
        </h4>
        <input
          onChange={() => {
            updateList(sectionIndex, index);
          }}
          checked={completed || false}
          type="checkbox"
          className="border rounded w-4 h-4 accent-yellow-500 transition-all duration-200 ease-in-out"
        />
      </div>
    );
  }