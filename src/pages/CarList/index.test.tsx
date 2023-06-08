import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarList } from './index';

it('should have a list of cars', () => {
    const { container } = render(
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );
    const listElement = container.getElementsByClassName('list');
    expect(listElement.length).toBeGreaterThan(0);
});

it('should have 5 cars in the list', () => {
    const { container } = render(       // repete o render acima por que o teste deve ser independente
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );

    const carsList = container.getElementsByClassName('carItem');
    expect(carsList.length).toEqual(5);
});

export {};