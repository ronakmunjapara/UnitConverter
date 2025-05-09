
import Layout from "@/components/layout/Layout";
import ConverterCard from "@/components/converter/ConverterCard";
import ConverterForm from "@/components/converter/ConverterForm";

const lengthUnits = [
  { value: "meter", label: "Meter (m)" },
  { value: "kilometer", label: "Kilometer (km)" },
  { value: "centimeter", label: "Centimeter (cm)" },
  { value: "millimeter", label: "Millimeter (mm)" },
  { value: "foot", label: "Foot (ft)" },
  { value: "inch", label: "Inch (in)" },
  { value: "yard", label: "Yard (yd)" },
  { value: "mile", label: "Mile (mi)" },
];

// Conversion factors to meters (1 unit = X meters)
const toMeter: Record<string, number> = {
  meter: 1,
  kilometer: 1000,
  centimeter: 0.01,
  millimeter: 0.001,
  foot: 0.3048,
  inch: 0.0254,
  yard: 0.9144,
  mile: 1609.344,
};

const convertLength = (value: number, fromUnit: string, toUnit: string): number => {
  // Convert from source unit to meters, then from meters to target unit
  const valueInMeters = value * toMeter[fromUnit];
  const result = valueInMeters / toMeter[toUnit];
  return parseFloat(result.toFixed(6));
};

export default function LengthConverter() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Length Converter</h1>
        
        <ConverterCard title="Length Converter">
          <ConverterForm 
            units={lengthUnits}
            conversionFunction={convertLength}
          />
        </ConverterCard>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">About Length Conversion</h2>
          <div className="prose max-w-none">
            <p>
              Length is a measure of distance. In the International System of Units (SI), the base unit of length is the meter (m).
              Common length units include millimeters, centimeters, kilometers, inches, feet, yards, and miles.
            </p>
            <h3 className="text-lg font-medium mt-4">Common Conversions</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>1 foot = 12 inches</li>
              <li>1 yard = 3 feet</li>
              <li>1 mile = 5,280 feet</li>
              <li>1 meter = 100 centimeters</li>
              <li>1 kilometer = 1,000 meters</li>
              <li>1 inch = 2.54 centimeters</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
