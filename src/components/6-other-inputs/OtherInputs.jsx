import { useState } from "react";

const frameworks = ["react", "angular", "vue", "svelet"];

export const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log(`Shipping: ${e.target.checked}`);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    console.log(`Framework: ${e.target.value}`);
    setFramework(e.target.value);
  };

  return (
    <div>
      <h4>Other Inputs</h4>
      <form className="form">
        <div className="form-row">
          <input
            type="checkbox"
            checked={shipping}
            id="shipping"
            name="shipping"
            onChange={handleShipping}
            style={{ padding: "5px", "margin-right": "5px" }}
          />
          <label htmlFor="shipping">Free Shipping</label>
        </div>
        <div className="form-row">
          <label htmlFor="frameworks">Frameworks</label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}>
            {frameworks.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
