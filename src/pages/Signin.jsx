import { joiResolver } from "@hookform/resolvers/joi";
import { Button, TextField, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  BUTTON_VALUES,
  COMPONENT_TYPES,
  MATERIAL_STYLE_CONSTANTS,
  ROUTE_CONFIG_NAMES,
  SIGNUP_CONSTANTS,
  FIELD_TYPE,
  REGISTER_FIELDS_FOR_REACT_FORM_HOOK,
  SIGNIN_CONSTANTS,
} from "../services/utils/constantValues";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/auth/authSlice";
import Joi from "joi";
import formValidation from "../services/validations/formValidations";
import signinApi from "../services/web/apis/signinApi";

const SignIn = () => {
  const { password, name } = formValidation;
  const signInSchema = Joi.object({
    password,
    name,
  });
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: joiResolver(signInSchema),
  });
  const onSubmit = async (data) => {
    dispatch(authActions.login({ token: 1234553 }));
    navigate(`/${ROUTE_CONFIG_NAMES.dashboard}`);
  };

  return (
    <Box m={2}>
      <Typography m={2} variant="h5" align={MATERIAL_STYLE_CONSTANTS.center}>
        {t(SIGNIN_CONSTANTS.title)}
      </Typography>
      <Box component={COMPONENT_TYPES.form} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label={t(SIGNUP_CONSTANTS.username)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.name)}
            error={errors.name ? true : false}
            helperText={errors.name && `${errors?.name?.message}`}
          />
          <TextField
            type={FIELD_TYPE.password}
            label={t(SIGNUP_CONSTANTS.password)}
            {...register(REGISTER_FIELDS_FOR_REACT_FORM_HOOK.password)}
            error={errors.password ? true : false}
            helperText={errors.password && `${errors.password?.message}`}
          />
        </Stack>
        <Box
          mt={2}
          sx={{
            display: MATERIAL_STYLE_CONSTANTS.flex,
            alignItems: MATERIAL_STYLE_CONSTANTS.center,
            justifyContent: MATERIAL_STYLE_CONSTANTS.center,
          }}
        >
          <Button
            type={BUTTON_VALUES.buttonType}
            variant={BUTTON_VALUES.buttonVariant}
          >
            {t(SIGNIN_CONSTANTS.signinBtn)}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default SignIn;
