import { render, screen } from "@testing-library/react";
import Contact from "components/contact";
//Jest

// 1. primeiro argumento eh a descriçao do teste
// 2. quais serao os testes?
// 3. render

describe('Testes do formulario de contato:', () => {
    test('veririfcar se todos os inputs estao no formulario', () => {

        render(<Contact />)
        
        //encontrar no DOM os input
        const inputNome = screen.getByPlaceholderText('Informe seu nome..');
        const inputEmail = screen.getByPlaceholderText('Informe seu email..');
        const inputAssunto = screen.getByPlaceholderText('Informe seu assunto..');
        const inputMensagem = screen.getByPlaceholderText('Informe sua mensagem..');
    
    
        //encontrar o botao de envio do formulario
        const inputBotao = screen.getByRole('button');
    
    
        //garantir que o input esteja habilitado
        expect(inputNome).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(inputAssunto).toBeInTheDocument();
        expect(inputMensagem).toBeInTheDocument();
    
        //garantir que o input esteja habilitado
        expect(inputBotao).toBeInTheDocument();
    
    })
})
