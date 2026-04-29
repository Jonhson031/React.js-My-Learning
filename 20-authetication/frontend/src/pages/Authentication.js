import AuthForm from '../components/AuthForm';
import { redirect } from 'react-router-dom';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;


export async function authAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'signup';

  if (mode !== 'login' && mode !== 'signup') {
    throw new Response(JSON.stringify({
      message: 'Unssuported mode',
      status: 422
    }))
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }
  const res = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData)
  })

  if (res.status === 401 || res.status === 422) {
    return res;
  }

  if (!res.ok) {
    throw new Response({
      message: 'Could not autheticate user!',
      status: 500
    })
  }

  const resData = await res.json();
  const token = resData.token;

  localStorage.setItem('token', token);

  // Manage token from backend:
  return redirect('/')
}