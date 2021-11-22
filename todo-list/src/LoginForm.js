import React, {useState} from 'react';

function Login(){
  const username = useFormInput('');
  const password =  useFormInput('');
  const[error, setError]= useState(null)
  

  const handleLogin =() =>{
    props.history.push('/dashborad');
  }

  reuturn(
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
)
}
const useFormInput = initialValue =>{
  const [value, setValue] = useState(initialValue);
  const handleChange = e =>{
    setValue(e.target.value);
  }
  return{
    value,
    onchange: handleChange
  }

}
export default Login;