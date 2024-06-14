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

type Calc = {
  frequency: number;
  inductance: number;
  capacitor: number;
  resistance: number;
  frequencyFactor: number;
  inductanceFactor: number;
  capacitorFactor: number;
  resistanceFactor: number;
};

export const Resonance = () => {
  const [Pi] = useState<number>(3.14159265358979);

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

  const [Frequency, setFrequency] = useState<number>(1);
  const [Inductance, setInductance] = useState<number>(1);
  const [Сapacitor, setСapacitor] = useState<number>(1);
  const [Resistance, setResistance] = useState<number>(1);

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

  const onCalculateFrequency = (val: Calc) => {
    if (val.inductance !== 0 && val.capacitor !== 0) {
      const Frequency: number = Number(
        (
          1 /
          (2 *
            Pi *
            Math.sqrt(
              val.inductance *
                val.inductanceFactor *
                val.capacitor *
                val.capacitorFactor,
            ))
        ).toFixed(6),
      );
      setFrequency(Frequency);
    }
  };

  const onCalculateInductance = (val: Calc) => {
    if (val.frequency !== 0 && val.capacitor !== 0) {
      const Inductance: number = Number(
        (
          1 /
          (4 *
            Math.pow(Pi, 2) *
            Math.pow(val.frequency * val.frequency, 2) *
            val.capacitor *
            val.capacitorFactor)
        ).toFixed(6),
      );
      setInductance(Inductance);
    }
  };

  const onCalculateСapacitor = (val: Calc) => {
    if (val.frequency !== 0 && val.inductance !== 0) {
      const Сapacitor: number = Number(
        (
          1 /
          (4 *
            Math.pow(Pi, 2) *
            Math.pow(val.frequency * val.frequency, 2) *
            val.inductance *
            val.inductanceFactor)
        ).toFixed(6),
      );
      setСapacitor(Сapacitor);
    }
  };

  const onCalculateResistance = (val: Calc) => {
    //
  };

  const onCalculate = useCallback(
    (value: number, type: Value) => {
      // eslint-disable-next-line prefer-const
      let data: Calc = {
        frequency: Frequency,
        inductance: Inductance,
        capacitor: Сapacitor,
        resistance: Resistance,
        frequencyFactor: FrequencyFactor.key,
        inductanceFactor: InductanceFactor.key,
        capacitorFactor: СapacitorFactor.key,
        resistanceFactor: ResistanceFactor.key,
      };

      if (type === "Frequency") {
        data.frequency = value;
        onCalculateInductance(data);
        onCalculateСapacitor(data);
      } else if (type === "FrequencyFactor") {
        data.frequencyFactor = value;
        onCalculateInductance(data);
        onCalculateСapacitor(data);
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

  const onChangeFrequency = (e: any) => {
    if (e.target.value) {
      const Val: number = Number(e.target.value);
      setFrequency(Val);
      onCalculate(Val, "Frequency");
    }
  };

  const onChangeInductance = (e: any) => {
    if (e.target.value) {
      setInductance(Number(e.target.value));
    }
  };

  const onChangeСapacitor = (e: any) => {
    if (e.target.value) {
      setСapacitor(Number(e.target.value));
    }
  };

  const onChangeResistance = (e: any) => {
    if (e.target.value) {
      setResistance(Number(e.target.value));
    }
  };

  const onSelectFrequency = (e: string) => {
    FrequencyFactorSelector.forEach((item) => {
      if (item.value === e) {
        setFrequencyFactor(item);
        const Val: number = Number(item.key);
        onCalculate(Val, "FrequencyFactor");
      }
    });
  };

  const onSelectInductance = (e: string) => {
    InductanceFactorSelector.forEach((item) => {
      if (item.value === e) {
        setInductanceFactor(item);
      }
    });
  };

  const onSelectСapacitor = (e: string) => {
    СapacitorFactorSelector.forEach((item) => {
      if (item.value === e) {
        setСapacitorFactor(item);
      }
    });
  };

  const onSelectResistance = (e: string) => {
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
          onChange={onChangeFrequency}
        ></Input>
        <Select
          defaultValue={FrequencyFactorSelector[0].value}
          onValueChange={onSelectFrequency}
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
          onChange={onChangeInductance}
        ></Input>
        <Select
          defaultValue={InductanceFactorSelector[0].value}
          onValueChange={onSelectInductance}
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
          onChange={onChangeСapacitor}
        ></Input>
        <Select
          defaultValue={СapacitorFactorSelector[0].value}
          onValueChange={onSelectСapacitor}
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
          onChange={onChangeResistance}
        ></Input>
        <Select
          defaultValue={ResistanceFactorSelector[0].value}
          onValueChange={onSelectResistance}
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
