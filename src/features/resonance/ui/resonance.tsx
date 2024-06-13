/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/shared/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/shared/ui/select.tsx";
import { useEffect, useState } from "react";

export const Resonance = () => {
  const [FrequencyFactorSelector] = useState<{ value: string; key: number }[]>([
    {
      value: "Гц",
      key: 1,
    },
    {
      value: "КГц",
      key: 1000,
    },
    {
      value: "MГц",
      key: 1000000,
    },
  ]);

  const [InductanceFactorSelector] = useState<{ value: string; key: number }[]>(
    [
      {
        value: "мкГн",
        key: 0.000001,
      },
      {
        value: "мГн",
        key: 0.001,
      },
      {
        value: "Гн",
        key: 1,
      },
    ],
  );

  const [СapacitorFactorSelector] = useState<{ value: string; key: number }[]>([
    {
      value: "пФ",
      key: 0.000000000001,
    },
    {
      value: "нФ",
      key: 0.000000001,
    },
    {
      value: "мкФ",
      key: 0.000001,
    },
    {
      value: "мФ",
      key: 0.001,
    },
    {
      value: "Ф",
      key: 1,
    },
  ]);

  const [ResistanceFactorSelector] = useState<{ value: string; key: number }[]>(
    [
      {
        value: "Ом",
        key: 1,
      },
      {
        value: "КОм",
        key: 1000,
      },
      {
        value: "МОм",
        key: 1000000,
      },
    ],
  );

  const [Frequency, setFrequency] = useState<number | undefined>(0);
  const [Inductance, setInductance] = useState<number | undefined>(0);
  const [Сapacitor, setСapacitor] = useState<number | undefined>(0);
  const [Resistance, setResistance] = useState<number | undefined>(0);

  const [FrequencyFactor, setFrequencyFactor] = useState<number>(
    FrequencyFactorSelector[0].key,
  );
  const [InductanceFactor, setInductanceFactor] = useState<number>(
    InductanceFactorSelector[0].key,
  );
  const [СapacitorFactor, setСapacitorFactor] = useState<number>(
    СapacitorFactorSelector[0].key,
  );
  const [ResistanceFactor, setResistanceFactor] = useState<number>(
    ResistanceFactorSelector[0].key,
  );

  const [FrequencyFactorText, setFrequencyFactorText] = useState<string>(
    FrequencyFactorSelector[0].value,
  );
  const [InductanceFactorText, setInductanceFactorText] = useState<string>(
    InductanceFactorSelector[0].value,
  );
  const [СapacitorFactorText, setСapacitorFactorText] = useState<string>(
    СapacitorFactorSelector[0].value,
  );
  const [ResistanceFactorText, setResistanceFactorText] = useState<string>(
    ResistanceFactorSelector[0].value,
  );

  const onChangeInputFrequency = (e: any) => {
    setFrequency(Number(e.target.value));
  };

  const onChangeInputInductance = (e: any) => {
    setInductance(Number(e.target.value));
  };

  const onChangeInputСapacitor = (e: any) => {
    setСapacitor(Number(e.target.value));
  };

  const onChangeInputResistance = (e: any) => {
    setResistance(Number(e.target.value));
  };

  const onChangeSelectFrequency = (e: string) => {
    FrequencyFactorSelector.forEach((item) => {
      if (item.value === e) {
        setFrequencyFactor(item.key);
        setFrequencyFactorText(item.value);
      }
    });
  };

  const onChangeSelectInductance = (e: string) => {
    InductanceFactorSelector.forEach((item) => {
      if (item.value === e) {
        setInductanceFactor(item.key);
        setInductanceFactorText(item.value);
      }
    });
  };

  const onChangeSelectСapacitor = (e: string) => {
    СapacitorFactorSelector.forEach((item) => {
      if (item.value === e) {
        setСapacitorFactor(item.key);
        setСapacitorFactorText(item.value);
      }
    });
  };

  const onChangeSelectResistance = (e: string) => {
    ResistanceFactorSelector.forEach((item) => {
      if (item.value === e) {
        setResistanceFactor(item.key);
        setResistanceFactorText(item.value);
      }
    });
  };

  // useEffect(() => {
  //   // console.log(Frequency, Inductance, Сapacitor, Resistance);
  // }, [
  //   Frequency,
  //   Inductance,
  //   Сapacitor,
  //   Resistance,
  //   FrequencyFactor,
  //   InductanceFactor,
  //   СapacitorFactor,
  //   ResistanceFactor,
  // ]);

  return (
    <div>
      <div
        className={"flex flex-row"}
        style={{ width: "500px", height: "50px" }}
      >
        <span>{"Частота:"}</span>
        <Input
          className={"w-[200px]"}
          type="number"
          min={0}
          max={1000000000000}
          value={Frequency}
          onChange={onChangeInputFrequency}
        ></Input>
        <Select
          defaultValue={FrequencyFactorSelector[0].value}
          onValueChange={onChangeSelectFrequency}
        >
          <SelectTrigger style={{ width: "50px", height: "20px" }}>
            {FrequencyFactorText}
          </SelectTrigger>
          <SelectContent>
            {FrequencyFactorSelector.map((item) => {
              return <SelectItem value={item.value}>{item.value}</SelectItem>;
            })}
          </SelectContent>
        </Select>
      </div>
      <div
        className={"flex flex-row"}
        style={{ width: "500px", height: "50px" }}
      >
        <span>{"Индуктивность:"}</span>
        <Input
          className={"w-[200px]"}
          type="number"
          min={0}
          max={1000000000000}
          value={Inductance}
          onChange={onChangeInputInductance}
        ></Input>
        <Select
          defaultValue={InductanceFactorSelector[0].value}
          onValueChange={onChangeSelectInductance}
        >
          <SelectTrigger style={{ width: "50px", height: "20px" }}>
            {InductanceFactorText}
          </SelectTrigger>
          <SelectContent>
            {InductanceFactorSelector.map((item) => {
              return <SelectItem value={item.value}>{item.value}</SelectItem>;
            })}
          </SelectContent>
        </Select>
      </div>
      <div
        className={"flex flex-row"}
        style={{ width: "500px", height: "50px" }}
      >
        <span>{"Конденсатор:"}</span>
        <Input
          className={"w-[200px]"}
          type="number"
          min={0}
          max={1000000000000}
          value={Сapacitor}
          onChange={onChangeInputСapacitor}
        ></Input>
        <Select
          defaultValue={СapacitorFactorSelector[0].value}
          onValueChange={onChangeSelectСapacitor}
        >
          <SelectTrigger style={{ width: "50px", height: "20px" }}>
            {СapacitorFactorText}
          </SelectTrigger>
          <SelectContent>
            {СapacitorFactorSelector.map((item) => {
              return <SelectItem value={item.value}>{item.value}</SelectItem>;
            })}
          </SelectContent>
        </Select>
      </div>
      <div
        className={"flex flex-row"}
        style={{ width: "500px", height: "50px" }}
      >
        <span>{"Сопротивление:"}</span>
        <Input
          className={"w-[200px]"}
          type="number"
          min={0}
          max={1000000000000}
          value={Resistance}
          onChange={onChangeInputResistance}
        ></Input>
        <Select
          defaultValue={ResistanceFactorSelector[0].value}
          onValueChange={onChangeSelectResistance}
        >
          <SelectTrigger style={{ width: "50px", height: "20px" }}>
            {ResistanceFactorText}
          </SelectTrigger>
          <SelectContent>
            {ResistanceFactorSelector.map((item) => {
              return <SelectItem value={item.value}>{item.value}</SelectItem>;
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
