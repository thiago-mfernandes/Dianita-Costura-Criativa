import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Produtos from '../index';

//bloco describe agrupa unidades de teste, recebe uma string e funcoes
describe('teste do componente de busca', () => {
    test('deve mostrar um produto apos inserção de texto', () => {
        // 1.renderizar o produto
        render(<Produtos />)
        // 2.capturar o componente com os matchers
        const input = screen.getByPlaceholderText('Filtre por categoria');
        // 3. inserir um texto de pesquisa de produto
        // 3.1 userEvent recebe o alvo e o que sera feito
        userEvent.type(input, 'Estojo Escolar')

        // 4. descrevo o que espero que aconteça agora:
        expect(screen.getByTestId('produto'));
    });

    test('deve mostrar uma lista de itens', () => {
        render(<Produtos />)
        expect(screen.getAllByRole('product_Item')).toBeDefined();
    });

    test('deve mostrar "produto não encontrado" se o texto nao tiver correspondência', () => {
        render(<Produtos />);
        const input = screen.getByPlaceholderText('Filtre por categoria');
        // A string banana não tem correspondência com nenhum produto
        userEvent.type(input, 'banana');
        expect(screen.getByRole('itemNaoEncontrado')).toBeInTheDocument();

        userEvent.type(input, '3');
        expect(screen.getByRole('itemNaoEncontrado')).toBeInTheDocument();
    });
})