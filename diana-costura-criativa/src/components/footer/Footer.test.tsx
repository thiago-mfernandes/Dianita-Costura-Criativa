import { render, screen } from "@testing-library/react";
import Footer from'components/footer';

describe('Teste de informação para contato', () => {
    test('deve mostrar na pagina se há telefone para contato', () => {
        render(<Footer />)
        const telefone = screen.getByText('+55 19 983561522');
        expect(screen.getByText('+55 19 983561522')).toBeInTheDocument();
    });
    test('deve mostrar na pagina se há email para contato', () => {
        render(<Footer />)
        const email = screen.getByText('info@example.com');
        expect(screen.getByText('info@example.com')).toBeInTheDocument();
    })
})