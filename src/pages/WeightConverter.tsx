
import Layout from "@/components/layout/Layout";
import ConverterCard from "@/components/converter/ConverterCard";
import ConverterForm from "@/components/converter/ConverterForm";

const weightUnits = [
  { value: "kilogram", label: "Kilogram (kg)" },
  { value: "gram", label: "Gram (g)" },
  { value: "milligram", label: "Milligram (mg)" },
  { value: "pound", label: "Pound (lb)" },
  { value: "ounce", label: "Ounce (oz)" },
  { value: "stone", label: "Stone (st)" },
  { value: "ton", label: "Metric Ton (t)" },
  { value: "us_ton", label: "US Ton" },
];

// Conversion factors to kilograms (1 unit = X kilograms)
const toKilogram: Record<string, number> = {
  kilogram: 1,
  gram: 0.001,
  milligram: 0.000001,
  pound: 0.45359237,
  ounce: 0.0283495,
  stone: 6.35029,
  ton: 1000,
  us_ton: 907.18474,
};

const convertWeight = (value: number, fromUnit: string, toUnit: string): number => {
  // Convert from source unit to kilograms, then from kilograms to target unit
  const valueInKilograms = value * toKilogram[fromUnit];
  const result = valueInKilograms / toKilogram[toUnit];
  return parseFloat(result.toFixed(6));
};

export default function WeightConverter() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Weight Converter</h1>
        
        <ConverterCard title="Weight and Mass Converter">
          <ConverterForm 
            units={weightUnits}
            conversionFunction={convertWeight}
          />
        </ConverterCard>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">About Weight and Mass Conversion</h2>
          <div className="prose max-w-none">
            <p>
              Weight is the measurement of the gravitational force acting on an object, while mass is the amount of matter in an object.
              In the International System of Units (SI), the base unit of mass is the kilogram (kg).
            </p>
            <h3 className="text-lg font-medium mt-4">Common Conversions</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>1 kilogram = 1,000 grams</li>
              <li>1 gram = 1,000 milligrams</li>
              <li>1 pound = 16 ounces</li>
              <li>1 pound = 0.45359237 kilograms</li>
              <li>1 stone = 14 pounds</li>
              <li>1 US ton = 2,000 pounds</li>
              <li>1 metric ton = 1,000 kilograms</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
