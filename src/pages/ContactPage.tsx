import { useEffect, useState } from 'react';
import Header from "../components/Header";
import '../css/form.css';
import { sendContactEmail } from "../reducers/contact_email";
import WhatsAppQR from '../assets/whatsapp-qr.svg';

const ContactPage = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get('status');

        if (status === 'success') {
            setMessage('¡Correo enviado exitosamente! Te responderemos pronto.');
            setMessageType('success');
            setTimeout(() => {
                window.history.replaceState({}, document.title, window.location.pathname);
                setMessage(null);
                setMessageType(null);
            }, 5000);
        } else if (status === 'error') {
            setMessage('Lo sentimos. No se pudo enviar su mensaje en este momento. Por favor, inténtelo de nuevo más tarde.');
            setMessageType('error');
            setTimeout(() => {
                window.history.replaceState({}, document.title, window.location.pathname);
                setMessage(null);
                setMessageType(null);
            }, 5000);
        }
    }, []);

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const subject = formData.get('subject') as string;
        const messageText = formData.get('message') as string;

        try {
            const success = await sendContactEmail(email ?? '', subject ?? '', messageText ?? '');

            if (success) {
                window.location.href = `${window.location.pathname}?status=success`;
            } else {
                window.location.href = `${window.location.pathname}?status=error`;
            }
        } catch (error) {
            window.location.href = `${window.location.pathname}?status=error`;
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="container page">
            <div className="row">
                <div className="col-12 col-lg-6 order-1 order-lg-1">
                    <Header />
                </div>
                <div className="col-12 col-lg-6 py-5 py-lg-0 order-2 order-lg-2">
                    {/* Mostrar mensaje de estado */}
                    {message && (
                        <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                            <div className="d-flex align-items-center">
                                <i className={`bi ${messageType === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-2`}></i>
                                {message}
                            </div>
                        </div>
                    )}

                    <form onSubmit={submitForm}>
                        <div className="mb-3">
                            <label htmlFor="email-input">Correo</label>
                            <input name="email" id="email-input" type="email" className="form-input" required={true} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject-input">Asunto</label>
                            <input name="subject" id="subject-input" type="text" className="form-input" required={true} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message-input">Mensaje</label>
                            <textarea rows={10} name="message" id="message-input" className="form-input" required={true}></textarea>
                        </div>
                        <button type="submit" className="btn btn-light w-100" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Enviando...
                                </>
                            ) : (
                                'Enviar'
                            )}
                        </button>
                    </form>
                    <div className="mt-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <a href="https://wa.link/bqfm75">
                                    <img src={WhatsAppQR} className="img-fluid rounded" alt='Código QR de WhatsApp' />
                                </a>
                            </div>
                            <div className="col-md-8">
                                <div className="p-3">
                                    <h5 className="card-title">WhatsApp</h5>
                                    <hr />
                                    <p className="card-text text"><b>Escanea</b> o <b>haz click</b> en el código QR para contactarme directamente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
