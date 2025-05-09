
import Layout from "@/components/layout/Layout";
import ConverterCard from "@/components/converter/ConverterCard";
import ConverterForm from "@/components/converter/ConverterForm";

const temperatureUnits = [
  { value: "celsius", label: "Celsius (°C)" },
  { value: "fahrenheit", label: "Fahrenheit (°F)" },
  { value: "kelvin", label: "Kelvin (K)" },
];

const convertTemperature = (value: number, fromUnit: string, toUnit: string): number => {
  // First convert to Celsius as our base unit
  let celsius: number;
  
  switch (fromUnit) {
    case "celsius":
      celsius = value;
      break;
    case "fahrenheit":
      celsius = (value - 32) * (5/9);
      break;
    case "kelvin":
      celsius = value - 273.15;
      break;
    default:
      return NaN;
  }
  
  // Now convert from Celsius to the target unit
  switch (toUnit) {
    case "celsius":
      return parseFloat(celsius.toFixed(2));
    case "fahrenheit":
      return parseFloat((celsius * (9/5) + 32).toFixed(2));
    case "kelvin":
      return parseFloat((celsius + 273.15).toFixed(2));
    default:
      return NaN;
  }
};

export default function TemperatureConverter() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Temperature Converter</h1>
        
        <ConverterCard title="Temperature Converter">
          <ConverterForm 
            units={temperatureUnits}
            conversionFunction={convertTemperature}
          />
        </ConverterCard>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">About Temperature Conversion</h2>
          <div className="prose max-w-none">
            <p>
              Temperature is a physical quantity that expresses hot and cold. In the International System of Units (SI), 
              the base unit of temperature is the kelvin (K), but Celsius (°C) and Fahrenheit (°F) are commonly used in everyday life.
            </p>
            <h3 className="text-lg font-medium mt-4">Conversion Formulas</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Celsius to Fahrenheit: (°C × 9/5) + 32 = °F</li>
              <li>Fahrenheit to Celsius: (°F − 32) × 5/9 = °C</li>
              <li>Celsius to Kelvin: °C + 273.15 = K</li>
              <li>Kelvin to Celsius: K − 273.15 = °C</li>
            </ul>

            <h3 className="text-lg font-medium mt-4">Common Reference Points</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Water freezes: 0°C / 32°F / 273.15K</li>
              <li>Water boils: 100°C / 212°F / 373.15K</li>
              <li>Room temperature: ~20-22°C / ~68-72°F / ~293-295K</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
