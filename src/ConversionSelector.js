import React, { useState } from "react";

function ConversionSelector() {
  const [conversion, setConversion] = useState("Celcius to Fahrenheit");

  return (
    <fieldset className="conversion-selector">
      <legend>Conversion</legend>

      <div className="conversion-option">
        <input
          type="radio"
          name="conversion-mode"
          id="c-to-f"
          value="Celcius to Fahrenheit"
          checked
          onChange={(e) => setConversion(e.target.value)}
        />
        <label htmlFor="c-to-f">Celcius to Fahrenheit</label>
      </div>

      <div className="conversion-option">
        <input
          type="radio"
          name="conversion-mode"
          id="f-to-c"
          value="Fahrenheit to Celsius"
          onChange={(e) => setConversion(e.target.value)}
        />
        <label htmlFor="f-to-c">Fahrenheit to Celsius</label>
      </div>
    </fieldset>
  );
}

export default ConversionSelector;
