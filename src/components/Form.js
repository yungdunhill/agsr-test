import {useState} from 'react';


const Form = ({handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className="form">
            <h2>Вход</h2>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите логин"/>
            <div>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Введите пароль"/>
            </div>
            <button onClick={() => handleClick(email, pass)}>Вход</button>
        </div>
    )
}

export {Form};