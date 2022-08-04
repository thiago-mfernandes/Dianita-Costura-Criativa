import styles from './ExchangePolicy.module.scss';
import { motion } from 'framer-motion';
import { titleOfSectionVariants } from 'animation/titleOfSectionVariants';
import { showContentVariants } from 'animation/showContentVariants';

export default function ExchangePolicy() {
  return (
    <section className={styles.containerExchange}>
      <motion.h2  
        variants={titleOfSectionVariants}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8, margin: '10px' }} 
        className={styles.containerExchange__title}
      >
        Política de Troca e Devolução
      </motion.h2>
      <motion.article 
        variants={showContentVariants}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8, margin: '10px' }}
        className={styles.containerExchange__content}
      >- Se arrependeu da sua compra? Você pode trocar ou devolver seus produtos comprados na Dianita Costura Criativa em até 30 dias a contar da data da compra.</motion.article>

      <motion.article 
        variants={showContentVariants}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8, margin: '10px' }}
        className={styles.containerExchange__content}
      >
        As condições para a troca e devolução são as seguintes:<br />
        <q className={styles.containerExchange__content}> Em caso de compra de um produto com defeito de fabricação você pode trocar ou devolver em até 30 dias. O frete na troca ou devolução por esse motivo é por nossa conta sempre.</q>
      </motion.article>

      <motion.article 
        variants={showContentVariants}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8, margin: '10px' }}
        className={styles.containerExchange__content}
      > Em caso de troca ou devolução por ter escolhido o produto errado você pode trocar em até 30 dias desde que o produto esteja sem uso e nas mesmas condições da data da compra. O frete na troca por esse motivo é gratuito quando for a sua primeira troca através do seu CPF. Nas demais trocas você arca com o custo de devolução da mercadoria e nós arcamos com o custo de reenvio da mercadoria para você. Justo, né?        
      </motion.article>

      <motion.article 
        variants={showContentVariants}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8, margin: '10px' }}
        className={styles.containerExchange__content}
      >- Se optar por devolver a sua mercadoria e receber um reembolso você poderá optar por receber o valor em créditos de compras no site sem validade de expiração ou receber o reembolso em sua conta corrente. Nesse último caso, o reembolso é feito em até 5 dias úteis após a solicitação e informação dos dados para pagamento.
      </motion.article>

      <motion.article 
        variants={showContentVariants}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8, margin: '10px' }}
        className={styles.containerExchange__content}
      >- Em todas as trocas ou devoluções você obrigatoriamente precisa enviar a mercadoria embalada e também a declaração de conteúdo recebida no ato da compra.</motion.article>
      <motion.article 
        variants={showContentVariants}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8, margin: '10px' }}
        className={styles.containerExchange__content}
      >- Não fazemos devoluções de vale-presentes.        
      </motion.article>

      <motion.article 
        variants={showContentVariants}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8, margin: '10px' }}
        className={styles.containerExchange__content}
      >
        Como funciona a 1ª troca grátis na Dianita Costura Criativa?<br />
        A sua primeira troca de mercadorias será grátis, ou seja, se por algum motivo você não gostou do que escolheu ou comprou errado, você poderá nos enviar o produto para troca e nós iremos arcar com os custos de frete tanto na devolução quanto no reenvio do seu produto.
      </motion.article>

      <motion.article 
        variants={showContentVariants}
        initial='offScreen'
        whileInView='onScreen'
        viewport={{ once: true, amount: 0.8, margin: '10px' }}
        className={styles.containerExchange__content}
      >
        As condições para a 1ª troca grátis são as seguintes:<br />
        <q className={styles.containerExchange__content}> Apenas uma troca grátis por CPF. O que determinará se você tem direito ou não à 1ª  troca grátis é o fato de que se o CPF usado na compra já usufruiu do benefício da 1ª troca grátis.
        </q>
        <br />
        <q className={styles.containerExchange__content}> A 1ª troca grátis está restrita a pedidos com endereço de entrega em território nacional e a pedidos cujo endereço de entrega estejam fora de áreas remotas ou de difícil acesso ou área de grande periculosidade. Em caso de dúvida é só escrever pra gente: diana@costuracriativa.com.br
        </q>
      </motion.article>
    </section>
  );
}
