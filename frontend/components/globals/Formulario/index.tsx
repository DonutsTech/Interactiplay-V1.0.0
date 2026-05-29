import React, { useState } from 'react';
import styles from './Formulario.module.scss';
import { phoneMask, validarCelularBRCompleto } from '@/utils/PhoneUtils';
import { useError } from '@/context/ErrorContext';
import ButtonAcess from '@/components/acess/ButtonAcess';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const validateEmail = (email: string) => {
  if (!email) return false;
  // Regex simples, igual cadastro
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateNome = (nome: string) => {
  if (!nome) return false;
  return nome.trim().length >= 3;
};

const validateMensagem = (mensagem: string) => {
  if (!mensagem) return false;
  return mensagem.trim().length > 0;
};

const Formulario: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { showError, showSuccess } = useError();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev: FormData) => ({
      ...prev,
      [name]: name === 'telefone' ? phoneMask(value) : value
    }));
  };

  const validate = (): boolean => {
    if (!validateNome(form.nome)) {
      showError('O nome é obrigatório e deve ter pelo menos 3 caracteres.');
      return false;
    }
    const emailValido = validateEmail(form.email);
    const telefoneValido = validarCelularBRCompleto(form.telefone);
    if (!emailValido && !telefoneValido) {
      showError('Informe pelo menos um contato válido: email ou telefone.');
      return false;
    }
    if (form.email && !emailValido) {
      showError('Email inválido.');
      return false;
    }
    if (form.telefone && !telefoneValido) {
      showError('Telefone inválido.');
      return false;
    }
    if (!validateMensagem(form.mensagem)) {
      showError('A mensagem não pode estar vazia.');
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const body = {
        EMAIL: form.email,
        NAME: form.nome,
        PHONE: form.telefone,
        MESSAGE: form.mensagem,
      };
      const res = await fetch(
        "https://api.experimenteumdonuts.app.br/api/send-email-contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        },
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.MESSAGE || 'Erro ao enviar mensagem.');
      }
      showSuccess('Mensagem enviada com sucesso!');
      setForm({ nome: '', email: '', telefone: '', mensagem: '' });
    } catch (err: any) {
      showError(err.message || 'Erro ao enviar mensagem.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} autoComplete="off">
      <div className={styles.form_group}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
          required
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Digite o seu e-mail"
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="telefone">Whatsapp</label>
        <input
          id="telefone"
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          placeholder="Seu telefone"
        />
      </div>
      <div className={styles.form_group}>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Escreva sua mensagem"
          rows={4}
          required
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <ButtonAcess
          text={isSubmitting ? 'Enviando...' : 'Enviar'}
          type="submit"
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

export default Formulario;
