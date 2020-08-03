import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/376856?s=460&u=a72e6c5e00639eaed8aad35b597a81e71860cbb5&v=4" alt="Jairo Tuboi" />
                <div>
                    <strong>Jairo Tuboi</strong>
                    <span>Desenvolvedor de software</span>
                </div>
            </header>
            <p>
                Bla blabla blablabla bla blabla bla blablabla bla bla bla.
                Bla blabla blablabla bla blabla bla blablabla bla bla bla.
                <br />
                <br />
                Bla blabla blablabla bla blabla bla blablabla bla bla bla.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;