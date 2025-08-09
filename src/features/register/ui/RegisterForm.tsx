import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PrimaryButton from "../../../widgets/PrimaryButton/PrimaryButton";
import TextField from "../../../widgets/TextField/TextField";
import styles from "./styles.module.scss";

const RegisterForm: React.FC = () => {
  return (
    <motion.form
      action=''
      className={styles.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Регистрация</h2>
      <TextField type='email' title='Ваш email' placeholder='Email' />
      <TextField type='password' title='Ваш пароль' placeholder='Пароль' />
      <TextField type='text' title='Ваше имя' placeholder='Имя' />
      <PrimaryButton text={"Зарегистрироваться"} onClick={() => {}} />
      <div>
        <span>Есть аккаунт?</span>
        <Link to={"/login/auth"}>Войти</Link>
      </div>
    </motion.form>
  );
};

export default RegisterForm;
