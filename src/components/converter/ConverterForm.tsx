
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConverterFormProps {
  units: { value: string; label: string }[];
  conversionFunction: (
    value: number,
    fromUnit: string,
    toUnit: string
  ) => number;
  className?: string;
}

export default function ConverterForm({
  units,
  conversionFunction,
  className,
}: ConverterFormProps) {
  const [inputValue, setInputValue] = useState<string>("1");
  const [outputValue, setOutputValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>(units[0]?.value || "");
  const [toUnit, setToUnit] = useState<string>(units[1]?.value || "");

  useEffect(() => {
    handleConvert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromUnit, toUnit]);

  const handleConvert = () => {
    try {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        const result = conversionFunction(numericValue, fromUnit, toUnit);
        setOutputValue(result.toString());
      } else {
        setOutputValue("");
      }
    } catch (error) {
      console.error("Conversion error:", error);
      setOutputValue("Error");
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div>
          <label htmlFor="fromValue" className="block text-sm font-medium mb-1">
            Value
          </label>
          <Input
            id="fromValue"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleConvert}
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="fromUnit" className="block text-sm font-medium mb-1">
            From
          </label>
          <Select value={fromUnit} onValueChange={(value) => setFromUnit(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {units.map((unit) => (
                <SelectItem key={unit.value} value={unit.value}>
                  {unit.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="toUnit" className="block text-sm font-medium mb-1">
            To
          </label>
          <Select value={toUnit} onValueChange={(value) => setToUnit(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {units.map((unit) => (
                <SelectItem key={unit.value} value={unit.value}>
                  {unit.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={handleConvert}
          className="bg-brand-500 hover:bg-brand-600"
        >
          Convert <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
        {outputValue && (
          <div className="text-lg font-medium">
            {inputValue} {units.find(u => u.value === fromUnit)?.label} = {outputValue} {units.find(u => u.value === toUnit)?.label}
          </div>
        )}
      </div>
    </div>
  );
}
