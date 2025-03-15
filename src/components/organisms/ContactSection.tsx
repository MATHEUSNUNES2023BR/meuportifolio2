import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import { useState } from 'react';
import emailjs from '@emailjs/browser'

const ContactSectionWrapper = styled.section`
  padding: 6rem 0;
  padding-top: 8rem;
  background-color: rgba(252, 228, 132, 0.03);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div``;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 4rem;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ContactDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.light};
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ContactIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: rgba(252, 228, 132, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  font-size: 1.25rem;
`;

const ContactText = styled.div`
  font-size: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.light};
`;

const FormInput = styled.input`
  padding: 1rem;
  background-color: rgba(252, 228, 132, 0.05);
  border: 1px solid rgba(252, 228, 132, 0.2);
  border-radius: 4px;
  color: ${props => props.theme.colors.light};
  font-family: ${props => props.theme.fonts.primary};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  background-color: rgba(252, 228, 132, 0.05);
  border: 1px solid rgba(252, 228, 132, 0.2);
  border-radius: 4px;
  color: ${props => props.theme.colors.light};
  font-family: ${props => props.theme.fonts.primary};
  resize: vertical;
  min-height: 10rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  function sendEmail(e: React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    if(name === '' || email === '' || phone === '' || message === ''){
      alert('Preencha os campos obrigatórios')
      return
    }
    const templateParams = {
      from_name: name,
      phone: phone,
      message: message,
      email: email
    }
    emailjs.send("service_lvqy18s", "template_q8rhh3t", templateParams, "w6BYmIRwZjyISu7n6")
    .then((res)=>{
      if(res.status === 200){
        alert('E-mail enviado com sucesso!')
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
      }
    }, ()=>{
      alert('Falha ao enviar E-mail, tente novamente')
    })
  }
  return (
    <ContactSectionWrapper>
      <Container>
        <ContactGrid>
          <ContactInfo>
            <SectionTitle>{t('contact.title')}</SectionTitle>
            <ContactDescription>
            {t('contact.description')}
            </ContactDescription>
            <ContactDetails>
              <ContactItem>
                <ContactIcon>
                  <i className="fas fa-phone"></i>
                </ContactIcon>
                <ContactText>(62) 9 9116-6071</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <i className="fas fa-envelope"></i>
                </ContactIcon>
                <ContactText>matheustiservicos@gmail.com</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <i className="fas fa-map-marker-alt"></i>
                </ContactIcon>
                <ContactText>Goiânia, GO - Brasil</ContactText>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          <ContactForm>
            <FormGroup>
              <FormLabel>{t('contact.name')}</FormLabel>
              <FormInput onChange={ (e) => setName(e.target.value) } type="text" placeholder="John Doe" />
            </FormGroup>
            <FormGroup>
              <FormLabel>{t('contact.phone')}</FormLabel>
              <FormInput onChange={ (e) => setPhone(e.target.value) } type="text" placeholder="+55 62 9 9999-9999" />
            </FormGroup>
            <FormGroup>
              <FormLabel>{t('contact.email')}</FormLabel>
              <FormInput onChange={ (e) => setEmail(e.target.value) } type="email" placeholder="john@example.com" />
            </FormGroup>
            <FormGroup>
              <FormLabel>{t('contact.message')}</FormLabel>
              <FormTextarea onChange={ (e) => setMessage(e.target.value)}  placeholder="Como posso ajudar você?" />
            </FormGroup>
            <Button onClick={() => sendEmail(event as unknown as React.MouseEvent<HTMLButtonElement>)} type="submit" size="large">{t('contact.send')}</Button>
          </ContactForm>  
        </ContactGrid>
      </Container>  
    </ContactSectionWrapper>
  );
};

export default ContactSection;