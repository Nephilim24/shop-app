import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../../widgets/PrimatyButton/PrimaryButton";
import TextField from "../../../widgets/TextField/TextField";
import styles from './styles.module.scss';
import { motion } from "framer-motion";
import { useAuth } from "../../../app/providers/AuthProvider";

const AuthForm: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NTUwOTY4NzIsImV4cCI6MTc4NjYzMzYwNiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.qx6lvtHwBvZXU9o9_D_bTOBxsKYikk6PIlR_ebRN0Lg');
        navigate('/');
    }

    return (
        <motion.form
            className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={submit}
        >
            <h2>Вход</h2>
            <TextField type="email" title="Ваш email"
                placeholder="Email"
            />
            <TextField type="password" title="Ваш пароль"
                placeholder="Пароль"
            />
            <PrimaryButton onClick={() => { }} text="Войти" />
            <div>
                <span>Нет акканута? </span>
                <Link to={'/login/register'}>
                    Зарегистрироваться
                </Link>
            </div>
        </motion.form>
    )
}

export default AuthForm;
