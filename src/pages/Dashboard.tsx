import FormLogin from '../components/FormLogin';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { user } = useAuth();

  return (
    user ? <span>{user.email}</span> : <FormLogin />
  );
}

export default Dashboard;
