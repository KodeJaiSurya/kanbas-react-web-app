export default function QTFEdit({ questionId }: { questionId: string }) {
  const options = [
    { id: "True", label: "True" },
    { id: "False", label: "False" },
  ];

  return (
    <div className="wd">
      <div className="row">
        {options.map(({ id, label }) => (
          <div className="form-check ms-4" key={id}>
            <input
              className="form-check-input"
              type="radio"
              name={`flexRadio-${questionId}`}
              id={`flexRadio${id}`}
            />
            <label className="form-check-label" htmlFor={`flexRadio${id}`}>
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
