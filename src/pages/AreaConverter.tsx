
import Layout from "@/components/layout/Layout";
import ConverterCard from "@/components/converter/ConverterCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AreaConverter = () => {
  const [fromUnit, setFromUnit] = useState("squareMeter");
  const [toUnit, setToUnit] = useState("squareFoot");
  const [fromValue, setFromValue] = useState<number>(1);
  const [result, setResult] = useState<number | string>(0);

  const units = {
    squareMeter: { name: "Square Meter (m²)", factor: 1 },
    squareFoot: { name: "Square Foot (ft²)", factor: 0.092903 },
    squareInch: { name: "Square Inch (in²)", factor: 0.00064516 },
    squareKilometer: { name: "Square Kilometer (km²)", factor: 1000000 },
    squareMile: { name: "Square Mile (mi²)", factor: 2589988.11 },
    acre: { name: "Acre", factor: 4046.86 },
    hectare: { name: "Hectare", factor: 10000 },
    squareYard: { name: "Square Yard (yd²)", factor: 0.836127 }
  };

  const handleConvert = () => {
    const fromFactor = units[fromUnit as keyof typeof units].factor;
    const toFactor = units[toUnit as keyof typeof units].factor;
    
    const valueInSquareMeters = fromValue * fromFactor;
    const convertedValue = valueInSquareMeters / toFactor;
    
    setResult(convertedValue);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Area Converter</h1>
        
        <div className="max-w-2xl mx-auto">
          <ConverterCard
            title="Convert Area Units"
            description="Convert between square meters, square feet, acres, hectares, and more"
            className="mb-8"
          >
            <div className="grid gap-6">
              <div>
                <label htmlFor="fromValue" className="block mb-2 text-sm font-medium">
                  Value
                </label>
                <Input
                  id="fromValue"
                  type="number"
                  value={fromValue}
                  onChange={(e) => setFromValue(parseFloat(e.target.value) || 0)}
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fromUnit" className="block mb-2 text-sm font-medium">
                    From
                  </label>
                  <select
                    id="fromUnit"
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {Object.entries(units).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="toUnit" className="block mb-2 text-sm font-medium">
                    To
                  </label>
                  <select
                    id="toUnit"
                    value={toUnit}
                    onChange={(e) => setToUnit(e.target.value)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {Object.entries(units).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Button 
                onClick={handleConvert} 
                className="w-full bg-brand-500 hover:bg-brand-600"
              >
                Convert
              </Button>
              
              <div className="p-4 bg-gray-50 rounded-md">
                <p className="text-center font-medium">
                  Result: {typeof result === 'number' ? result.toLocaleString('en-US', { maximumFractionDigits: 10 }) : result}
                </p>
              </div>
            </div>
          </ConverterCard>

          <ConverterCard
            title="Common Area Conversions"
            description="Quick reference for common area unit conversions"
          >
            <div className="grid gap-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 square meter (m²)</div>
                <div>10.764 square feet (ft²)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 acre</div>
                <div>4,047 square meters (m²)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 hectare</div>
                <div>10,000 square meters (m²)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 square kilometer (km²)</div>
                <div>0.386 square miles (mi²)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 square mile (mi²)</div>
                <div>640 acres</div>
              </div>
            </div>
          </ConverterCard>
        </div>
      </div>
    </Layout>
  );
};

export default AreaConverter;
