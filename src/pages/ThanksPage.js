import React, { useEffect } from "react";
import { Button, Result } from "antd";
export default function ThanksPage({ setSuccess, setNumber }) {
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
      setNumber(0);
    }, 6000);
  }, []);

  const handleRetour = () => {
    setSuccess(false);
    setNumber(0);
  };
  return (
    <Result
      status="success"
      title="Votre demande de comparaison a été enregistrée."
      subTitle="Un de nos conseillers vous contactera bientôt avec la meilleure
    offre correspondant à vos besoins et votre budget."
      extra={[<Button onClick={handleRetour}>Retour au formulaire</Button>]}
    />
  );
}
