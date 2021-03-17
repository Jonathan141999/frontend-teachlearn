import React from 'react';
import styles from '../styles/contact.module.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Button from "@material-ui/core/Button";
import Image from 'next/image'
import {LinkedinOutlined, MailOutlined, WhatsAppOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";
import Link from "@material-ui/core/Link";

const Contact= () =>{
    return (
        <div>
            <div>
                <h1 style={{textAlign: 'Center'}}>CONTÁCTANOS</h1>
                <div className={styles.container}>
                    <p style={{margin: '0px'}}>
                        Bienvenido a nuestro sitio web. Estamos contentos de atender tu requerimiento.
                    </p>
                    <div className="row">
                        <div className="col-md-8" style={{float:'left'}}>
                            <img src="https://suempresa.com/wp-content/uploads/2020/03/asesoria-personalizada.png" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="col-md-4" style={{float:'right'}}>
                            <ul>
                                <li><a href='https://web.whatsapp.com/' target="_blank" rel="noopener noreferrer"><WhatsAppOutlined/> 02-201010 / 0961628542</a></li>
                                <li><a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer"><LinkedinOutlined/> 0961628542 / 0997918338 </a></li>
                                <li><a href='https://mail.google.com/' target="_blank" rel="noopener noreferrer"><MailOutlined/> yomara.diaz@epn.edu.ec</a></li>
                                <li><a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><InstagramOutlined/> Teachleanr2021</a></li>
                                <li><a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><YoutubeOutlined/> JEGY Empresa de Desarrollo de Software</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <h3>Av. Ladrón de Guevara 253, Quito 170517</h3><h3>-----</h3><h3>Escuela Politécnica Nacional, Universidad pública de Quito</h3>
                    </div>
                    <div><Map/></div>

                </div>
            </div>
        </div>
    )
};
export default Contact