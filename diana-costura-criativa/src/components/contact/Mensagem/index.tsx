import styles from './Mensagem.module.scss';

interface MessageType {
  type: string
}

export default function Message({type}:MessageType) {
  return (
    <div className={
      type === 'form'
        ? styles.messageContainerForm 
        : styles.messageContainerFooter
    }>
      <span className={
        type === 'form'
          ? styles.messageContentForm 
          : styles.messageContentFooter
      }>
        Mensagem enviada com sucesso!
      </span>
    </div>
  );
}
