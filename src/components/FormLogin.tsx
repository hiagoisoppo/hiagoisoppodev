import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

function FormLogin() {
  const { loginWithEmail } = useAuth();
  const { isEnglish } = useLanguage();

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        loginWithEmail('', '');
      } }
    >
      { /* FAZER INPUTS COM USEREF */}
      <button
        type="submit"
      >
        { isEnglish ? 'Login' : 'Entrar'}
      </button>
    </form>
  );
}

export default FormLogin;
