import styles from './styles.module.scss';

interface TextFieldProps {
    type: string;
    title: string;
    placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({
    type,
    placeholder,
    title,
}) => {
    return (
        <label htmlFor={type} className={styles.label}>
            <span>{title}</span>
            <input
                type={type}
                id={type}
                placeholder={placeholder}
            />
        </label>
    );
}

export default TextField;