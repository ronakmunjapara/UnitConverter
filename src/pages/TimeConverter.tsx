
import Layout from "@/components/layout/Layout";
import ConverterCard from "@/components/converter/ConverterCard";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TimeConverter = () => {
  const [fromUnit, setFromUnit] = useState("seconds");
  const [toUnit, setToUnit] = useState("minutes");
  const [fromValue, setFromValue] = useState<number>(1);
  const [result, setResult] = useState<number | string>(0);

  const units = {
    seconds: { name: "Seconds", factor: 1 },
    minutes: { name: "Minutes", factor: 60 },
    hours: { name: "Hours", factor: 3600 },
    days: { name: "Days", factor: 86400 },
    weeks: { name: "Weeks", factor: 604800 },
    months: { name: "Months (avg)", factor: 2629746 },
    years: { name: "Years", factor: 31556952 },
  };

  const handleConvert = () => {
    const fromFactor = units[fromUnit as keyof typeof units].factor;
    const toFactor = units[toUnit as keyof typeof units].factor;
    
    const valueInSeconds = fromValue * fromFactor;
    const convertedValue = valueInSeconds / toFactor;
    
    setResult(convertedValue);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Time Converter</h1>
        
        <div className="max-w-2xl mx-auto">
          <ConverterCard
            title="Convert Time Units"
            description="Convert between seconds, minutes, hours, days, weeks, months, and years"
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
            title="Common Time Conversions"
            description="Quick reference for common time unit conversions"
          >
            <div className="grid gap-3 text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 minute</div>
                <div>60 seconds</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 hour</div>
                <div>60 minutes</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 day</div>
                <div>24 hours</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 week</div>
                <div>7 days</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">1 year</div>
                <div>365.24 days</div>
              </div>
            </div>
          </ConverterCard>
        </div>
      </div>
    </Layout>
  );
};

export default TimeConverter;
