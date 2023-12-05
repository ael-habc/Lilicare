import React from "react";

import { Input } from "antd";
import { PhoneTwoTone } from "@ant-design/icons";

export default function QuestionsTelephone(props) {
  const { question, telephone, handleTelephone, setCheckBoxPhoneError } = props;
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  React.useEffect(() => {
    if (checked && checked2 && checked3) {
      setCheckBoxPhoneError(false);
    } else {
      setCheckBoxPhoneError(true);
    }
  }, [checked, checked2, checked3]);
  return (
    <div className="flex flex-col items-center ">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex flex-col w-4/6 pt-10">
        <label htmlFor="text" className="label">
          {props?.label}
        </label>
        <Input
          id="text"
          type="text"
          size="large"
          value={telephone}
          onChange={handleTelephone}
          className="h-12"
          prefix={<PhoneTwoTone />}
        />
      </div>
      <div className="flex flex-col gap-3 mt-5 w-4/6">
        <div className="flex gap-4 justify-between items-center">
          <input
            type="checkbox"
            id="1"
            name="1"
            value="1"
            onChange={() => setChecked(!checked)}
            className="h-7 w-7 checkbox"
          />
          <label for="1" className=" text-sm">
            J'accepte d'être également contacté par SMS à propos de mon devis.
          </label>
        </div>
        <div className="flex gap-4 justify-between items-center">
          <input
            type="checkbox"
            id="2"
            name="2"
            value="2"
            onChange={() => setChecked2(!checked2)}
            className="h-7 w-7 checkbox"
          />
          <label for="2" className=" text-sm">
            Je ne souhaite pas recevoir d'appel pour me présenter d'autres
            offres que le devis.
          </label>
        </div>
        <div className="flex gap-4 justify-between items-center">
          <input
            type="checkbox"
            id="3"
            name="3"
            value="3"
            onChange={() => setChecked3(!checked3)}
            className="h-7 w-7 checkbox"
          />
          <label for="3" className=" text-sm">
            J'accepte de recevoir des SMS pour d'autres offres que mon devis.
          </label>
        </div>

        <p className=" text-[14px]">
          Vous serez rappelé par un expert de nos sociétés Social Care Digital,
          courtier immatriculé au registre ORIAS sous le n° 210 07 867, ou
          Social Care Consulting, courtier immatriculé au registre ORIAS sous le
          n° 190 01 021. Conformément à la réglementation, nous vous informons
          que vous disposez du droit de vous opposer au démarchage téléphonique
          en vous inscrivant gratuitement sur la liste BLOCTEL. Pour plus
          d’information sur le traitement de vos données, nous vous invitons à
          consulter notre politique de<a className="link" href="./pages/protection"> protection des données personnelles </a> .
        </p>
      </div>
    </div>
  );
}
