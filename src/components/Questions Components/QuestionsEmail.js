import React, { useState } from "react";

import { Input } from "antd";
import { MailTwoTone } from "@ant-design/icons";

import Modalx from "../Modalx";


export default function QuestionsEmail(props) {
  const { question, email, handleEmail, setCheckBoxEmailError } = props;

  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    if (checked) setCheckBoxEmailError(false);
    else setCheckBoxEmailError(true);
  }, [checked]);
  return (
    <div className="flex flex-col items-center ">
      <h1 className="question">{question}</h1>
      <p className="hint">{props?.hint}</p>
      <div className="flex flex-col w-2/6 pt-10">
        <label htmlFor="text" className="label">
          {props?.label}
        </label>
        <Input
          id="text"
          type="text"
          size="large"
          value={email}
          onChange={handleEmail}
          className="h-12"
          prefix={<MailTwoTone />}
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
            J’accepte que mon adresse email soit utilisée pour recevoir des
            offres et conseils autres que mon devis{" "}
          </label>
        </div>

        <p className=" text-[14px]">
          En renseignant votre adresse, vous acceptez de recevoir nos
          communications sur votre devis par email. .
        </p>

        <p className=" text-[14px]">
          Pour plus d'informations sur le traitement de vos données, nous vous
          invitons à consulter notre&nbsp;
          <a className="link" onClick={() => setOpen(true)}>
            protection des données personnelles
          </a>
          .
        </p>
        <Modalx open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}


