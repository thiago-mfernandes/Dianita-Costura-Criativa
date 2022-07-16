import styles from './ItemNotFound.module.scss';

export default function ItemNotFound() {
  return (
    <div className={styles.itemNotFound} role="itemNaoEncontrado">
      <p className={styles.itemNotFound__content}>Item não encontrado. Tente novamente!</p>
    </div>
  );
}
