
import Layout from "@/components/layout/Layout";
import ConverterCard from "@/components/converter/ConverterCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const VolumeConverter = () => {
  const [fromUnit, setFromUnit] = useState("liter");
  const [toUnit, setToUnit] = useState("gallon");
  const [fromValue, setFromValue] = useState<number>(1);
  const [result, setResult] = useState<number | string>(0);

  const units = {
    liter: { name: "Liter (L)", factor: 1 },
    milliliter: { name: "Milliliter (ml)", factor: 0.001 },
    cubicMeter: { name: "Cubic Meter (m³)", factor: 1000 },
    gallon: { name: "Gallon (US)", factor: 3.78541 },
    quart: { name: "Quart (US)", factor: 0.946353 },
    pint: { name: "Pint (US)", factor: 0.473176 },
    cup: { name: "Cup (US)", factor: 0.24 },
    fluidOunce: { name: "Fluid Ounce (US)", factor: 0.0295735 },
    cubicInch: { name: "Cubic Inch (in³)", factor: 0.0163871 },
    cubicFoot: { name: "Cubic Foot (ft³)", factor: 28.3168 }
  };

  const handleConvert = () => {
    const fromFactor = units[fromUnit as keyof typeof units].factor;
    const toFactor = units[toUnit as keyof typeof units].factor;
    
    const valueInLiters = fromValue * fromFactor;
    const convertedValue = valueInLiters / toFactor;
    
    setResult(convertedValue);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Volume Converter</h1>
        
        <div className="max-w-2xl mx-auto">
          <ConverterCard
            title="Convert Volume Units"
            description="Convert between liters, gallons, cubic meters, and more"
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
            title="Common Volume Conversions"
            description="Quick reference for common volume unit conversions"
          >
            <div className="grid gap-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 liter (L)</div>
                <div>0.264 gallons (US)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 gallon (US)</div>
                <div>3.785 liters (L)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 cubic meter (m³)</div>
                <div>1,000 liters (L)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 cup (US)</div>
                <div>0.24 liters (L)</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 fluid ounce (US)</div>
                <div>29.57 milliliters (ml)</div>
              </div>
            </div>
          </ConverterCard>
        </div>
      </div>
    </Layout>
  );
};

export default VolumeConverter;
