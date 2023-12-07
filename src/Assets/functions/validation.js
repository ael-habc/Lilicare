export const emailValidation = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email) return "L'adresse e-mail est obligatoire.";
  else if (!regex.test(email)) return "Format d'adresse e-mail invalide. ";
  else return false;
};

export const phoneValidation = (phone) => {
  const regex = /^(\+33|0)([ \-_/]*)(\d[ \-_/]*){9}$/;
  if (!phone) return "Le numéro de téléphone est obligatoire. ";
  else if (!regex.test(phone))
    return "Format de numéro de téléphone invalide. ";
  else return false;
};

export const nameValidation = (name) => {
  const regex = /^[a-zA-Z ]+$/;
  if (!name) return "Le nom est obligatoire. ";
  else if (!regex.test(name)) return "Format de nom invalide. ";
  else return false;
};
export const prenomValidation = (prenom) => {
  const regex = /^[a-zA-Z ]+$/;
  if (!prenom) return "Le prénom est obligatoire.";
  else if (!regex.test(prenom)) return "Format de prénom invalide.";
  else return false;
};

export const addresseValidation = (addresse) => {
  const regex = /^[a-zA-Z -_]+$/;
  if (!addresse) return "L'adresse est obligatoire.";
  else if (!regex.test(addresse)) return "Format d'adresse invalide.";
  else return false;
};

// export const dateValidation = (date) => {
//   const regx = /^\d{4}-\d{2}-\d{2}$/;
//   if (!date) return "La date de naissance est obligatoire. ";
//   else if (!regx.test(date)) return "Format de date invalide. ";
//   else return false;
// };

export const dateValidation = (date) => {
  const regx = /^\d{4}-\d{2}-\d{2}$/;

  if (!date) {
    return true;
  } else if (!regx.test(date)) {
    return true;
  } else {
    const inputDate = new Date(date);
    const minDate = new Date("1900-01-01");
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear());
    console.log(inputDate, minDate, maxDate);

    if (inputDate > maxDate || inputDate < minDate) {
      return true;
    }

    return false;
  }
};
export const contractValidation = (date) => {
  const regx = /^\d{4}-\d{2}-\d{2}$/;

  if (!date) return true;
  else if (!regx.test(date)) return true;
  else return false;
};
export const checkboxValidation = (checkbox) => {
  if (!checkbox)
    return "Vous devez accepter les conditions d'utilisation pour continuer.";
  else return false;
};

export const codePostalValidation = (codePostal) => {
  const regex = /^[0-9]{5}$/;
  if (!codePostal) return "Le code postal est obligatoire.";
  else if (!regex.test(codePostal)) return "Format de code postal invalide.";
  else return false;
};
