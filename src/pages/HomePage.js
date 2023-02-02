import {Redirect} from 'react-router-dom';
import {useAuth} from 'hooks/use-auth';
import {useState} from "react";



const HomePage = () => {
    const {isAuth, email} = useAuth();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    return isAuth ? (
       <div>
           <div className="info">
        <input placeholder="Имя" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
           <input placeholder="Фамилия" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
           <input placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        <button type="button" onClick={() => alert(firstname + " " + lastname + " " + phone)}>Сохранить</button>
           </div>
           <div className="screenInfo">
           <h3>Ваше имя: {firstname}</h3>
           <h3>Ваша фамилия: {lastname}</h3>
           <h3>Ваш номер телефона: {phone}</h3>
           </div>
    </div>
    ) : (
        <Redirect to="/login"/>
    )
}

export default HomePage;