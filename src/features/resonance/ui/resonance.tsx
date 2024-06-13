/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/shared/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
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

  const onChangeSelectFrequency = (e: any) => {
    console.log(e);
    // setFrequencyFactor(Number(e));
  };

  const onChangeSelectInductance = (e: number) => {
    // setInductanceFactor(Number(e));
  };

  const onChangeSelectСapacitor = (e: number) => {
    // setСapacitorFactor(Number(e));
  };

  const onChangeSelectResistance = (e: number) => {
    // setResistanceFactor(Number(e));
  };

  useEffect(() => {
    // console.log(Frequency, Inductance, Сapacitor, Resistance);
  }, [
    Frequency,
    Inductance,
    Сapacitor,
    Resistance,
    FrequencyFactor,
    InductanceFactor,
    СapacitorFactor,
    ResistanceFactor,
  ]);

  return (
    <div>
      <div className={"flex flex-row gap-2"}>
        <div className={"w-[200px]"}>{"Частота:"}</div>
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
          <SelectTrigger className="w-200"></SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {FrequencyFactorSelector.map((item) => {
                return <SelectItem value={item.value}>{item.value}</SelectItem>;
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={"flex flex-row gap-2"}>
        <div className={"mr-5"}>{"Индуктивность:"}</div>
        <Input
          className={"w-[200px]"}
          type="number"
          min={0}
          max={1000000000000}
          value={Inductance}
          onChange={onChangeInputInductance}
        ></Input>
      </div>
      <div className={"flex flex-row gap-2"}>
        <div className={"mr-5"}>{"Конденсатор:"}</div>
        <Input
          className={"w-[200px]"}
          type="number"
          min={0}
          max={1000000000000}
          value={Сapacitor}
          onChange={onChangeInputСapacitor}
        ></Input>
      </div>
      <div className={"flex flex-row gap-2"}>
        <div className={"mr-5"}>{"Сопротивление:"}</div>
        <Input
          className={"w-[200px]"}
          type="number"
          min={0}
          max={1000000000000}
          value={Resistance}
          onChange={onChangeInputResistance}
        ></Input>
      </div>
    </div>
  );
};
