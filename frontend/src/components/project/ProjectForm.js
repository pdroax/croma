import {useState} from 'react'
import emailjs from '@emailjs/browser'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import Swal from 'sweetalert2'



function ProjectForm () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault()

        const templateParams = {
            from_name: name,
            from_email: email,
            from_number: number,
            from_subject: subject,
            message: message,

        }

        emailjs.send('service_789b6pd', 'template_8s6chc9', templateParams, 'VKzAz5-bTYCd6fCMb')
            .then((response) => {
                setName('')
                setEmail('')
                setNumber('')
                setMessage('')
                setSubject('')
                Swal.fire({
                    title: `Mensagem enviada! <br> Logo entraremos em contato!`,
                    icon: "success",
                    draggable: true
                  });
            }, (error) => {
                console.log("Erro: ", error)
            })
    }

    return (
        <div className={styles.contato}>
            <form onSubmit={(sendEmail)} className={styles.form}>
                {/* inputs necessários para armazenar dados inseridos pelo usuário */}
                {/* <Input/> */}
                <div className={styles.form_input}>
                    <label>Nome:</label>
                    <input 
                        required
                        type='text' 
                        placeholder='Preencha seu nome'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    
                    />
                    
                    <label>E-mail:</label>
                    <input 
                        required
                        type='email' 
                        placeholder='Ex: email@exemplo.com'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    
                    <label>Telefone:</label>
                    <input 
                        required
                        type='text' 
                        placeholder='(99)99999-9999)'
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                    />
                </div>


                {/* <Select/> */}
                <div className={styles.form_select}>
                    <label>Selecione o assunto:</label>
                    <select 
                        required
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                    >

                        <option value={''} disabled>Selecione</option>
                        <option >Dúvidas sobre instalação</option>
                        <option >Dúvidas sobre películas</option>
                        <option >Orçamento de pelicula Fumê</option>
                        <option >Orçamento de pelicula Metalizada</option>
                        <option >Orçamento de pelicula Segurança</option>
                        <option >Orçamento de pelicula Jateada</option>
                        <option >Orçamento de pelicula Vinil Jateado</option>
                        <option >Orçamento de pelicula Prata Espelhada</option>
                        <option >Orçamento de pelicula Silver Black</option>
                        <option >Orçamento de pelicula Espelhada (Colorida)</option>
                        <option >Orçamento de pelicula LG-80</option>
                        <option >Orçamento de pelicula Opacas</option>
                        <option >Orçamento de pelicula Nanocerâmica</option>
                        <option >Orçamento de película Venetian</option>
                    </select>
                </div>



                {/* <TextMessage/> */}
                <div className={styles.form_text}>
                    <label>Deixe sua mensagem:</label>
                    <textarea
                        required
                        type='textarea' 
                        placeholder='Descreva melhor o que deseja'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    
                    />
                </div>


                {/* Botão para enviar e-mail*/}
                <SubmitButton/>

                
            </form>
        </div>
    )
}

export default ProjectForm