import * as Yup from "yup";

export const validation1 = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatorio"),
  cpf: Yup.string()
    .required("cpf é obgitario"),
  password: Yup.string().required(),
});
