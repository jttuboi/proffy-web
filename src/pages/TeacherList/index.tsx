import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
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
                            <img src={WhatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    );
}

export default TeacherList;