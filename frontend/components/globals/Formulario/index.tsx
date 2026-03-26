import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './Formulario.module.scss';
import { phoneMask, validarCelularBRCompleto } from '@/utils/PhoneUtils';

const formSchema = z.object({
  nome: z.string().min(3, 'O nome é obrigatório'),
  email: z.string().email('Email inválido'),
  telefone: z.string().refine(validarCelularBRCompleto, {
    message: 'Telefone inválido.',
  }),
  mensagem: z
    .string()
    .min(10, 'A mensagem muito curta. Por favor, forneça mais detalhes.'),
});

type FormData = z.infer<typeof formSchema>;

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Formulário enviado:', data);
    // #completar Adicionar a lógica para enviar os dados para o backend ou API
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_group}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          {...register('nome')}
          placeholder="Digite seu nome"
          required
        />
        <span className={styles.errorMsg}>{errors.nome ? errors.nome.message : ''}</span>
      </div>
      <div className={styles.form_group}>
        <label htmlFor="email">Email</label>
        <input 
          id="email"
          {...register('email')}
          placeholder="Digite o seu e-mail"
          required
        />
        <span className={styles.errorMsg}>{errors.email ? errors.email.message : ''}</span>
      </div>
      <div className={styles.form_group}>
        <label htmlFor="telefone">Whatsapp</label>
        <input 
          id='telefone'
          {...register('telefone')}
          placeholder='Seu telefone'
          onChange={(e) => {
            const masked = phoneMask(e.target.value);
            setValue('telefone', masked);
          }}
        />
        <span className={styles.errorMsg}>{errors.telefone ? errors.telefone.message : ''}</span>
      </div>
      <div className={styles.form_group}>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea 
          id="mensagem"
          {...register('mensagem')}
          placeholder="Escreva sua mensagem"
          rows={4}
          
        />
        <span className={styles.errorMsg}>{errors.mensagem ? errors.mensagem.message : ''}</span>
      </div>  
      <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default Formulario;
