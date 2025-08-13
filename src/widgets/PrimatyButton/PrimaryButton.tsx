import styles from './styles.module.scss';

interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    text,
    onClick,
}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <span>{text}</span>
        </button>
    );
}

export default PrimaryButton;