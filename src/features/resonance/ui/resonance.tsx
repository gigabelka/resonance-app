/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/shared/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
} from "@/shared/ui/select.tsx";
import { useCallback, useState } from "react";

type Value =
  | "Frequency"
  | "Inductance"
  | "Сapacitor"
  | "Resistance"
  | "FrequencyFactor"
  | "InductanceFactor"
  | "СapacitorFactor"
  | "ResistanceFactor";

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

  const [Frequency, setFrequency] = useState<number>(0);
  const [Inductance, setInductance] = useState<number>(0);
  const [Сapacitor, setСapacitor] = useState<number>(0);
  const [Resistance, setResistance] = useState<number>(0);

  const [FrequencyFactor, setFrequencyFactor] = useState<{
    value: string;
    key: number;
  }>(FrequencyFactorSelector[0]);
  const [InductanceFactor, setInductanceFactor] = useState<{
    value: string;
    key: number;
  }>(InductanceFactorSelector[0]);
  const [СapacitorFactor, setСapacitorFactor] = useState<{
    value: string;
    key: number;
  }>(СapacitorFactorSelector[0]);
  const [ResistanceFactor, setResistanceFactor] = useState<{
    value: string;
    key: number;
  }>(ResistanceFactorSelector[0]);

  const onCalculate = useCallback(
    (value: number, type: Value) => {
      if (type === "Frequency") {
        //
      } else if (type === "FrequencyFactor") {
        //
      } else if (type === "Inductance") {
        //
      } else if (type === "InductanceFactor") {
        //
      } else if (type === "Сapacitor") {
        //
      } else if (type === "СapacitorFactor") {
        //
      } else if (type === "Resistance") {
        //
      } else if (type === "ResistanceFactor") {
        //
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      Frequency,
      Inductance,
      Сapacitor,
      Resistance,
      FrequencyFactor,
      InductanceFactor,
      СapacitorFactor,
      ResistanceFactor,
    ],
  );

  const onChangeInputFrequency = (e: any) => {
    if (e.target.value) {
      setFrequency(Number(e.target.value));
    }
  };

  const onChangeInputInductance = (e: any) => {
    if (e.target.value) {
      setInductance(Number(e.target.value));
    }
  };

  const onChangeInputСapacitor = (e: any) => {
    if (e.target.value) {
      setСapacitor(Number(e.target.value));
    }
  };

  const onChangeInputResistance = (e: any) => {
    if (e.target.value) {
      setResistance(Number(e.target.value));
    }
  };

  const onChangeSelectFrequency = (e: string) => {
    FrequencyFactorSelector.forEach((item) => {
      if (item.value === e) {
        setFrequencyFactor(item);
      }
    });
  };

  const onChangeSelectInductance = (e: string) => {
    InductanceFactorSelector.forEach((item) => {
      if (item.value === e) {
        setInductanceFactor(item);
      }
    });
  };

  const onChangeSelectСapacitor = (e: string) => {
    СapacitorFactorSelector.forEach((item) => {
      if (item.value === e) {
        setСapacitorFactor(item);
      }
    });
  };

  const onChangeSelectResistance = (e: string) => {
    ResistanceFactorSelector.forEach((item) => {
      if (item.value === e) {
        setResistanceFactor(item);
      }
    });
  };

  return (
    <div>
      <div
        className={"flex flex-row"}
        style={{ width: "500px", height: "100px" }}
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
          <SelectTrigger style={{ width: "50px" }}>
            {FrequencyFactor.value}
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
        style={{ width: "500px", height: "100px" }}
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
          <SelectTrigger style={{ width: "50px" }}>
            {InductanceFactor.value}
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
        style={{ width: "500px", height: "100px" }}
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
          <SelectTrigger style={{ width: "50px" }}>
            {СapacitorFactor.value}
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
        style={{ width: "500px", height: "100px" }}
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
          <SelectTrigger style={{ width: "50px" }}>
            {ResistanceFactor.value}
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
