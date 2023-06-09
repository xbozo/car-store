import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

it("should add 1 to 2 and return 3", () => {
    let result = 1 + 2
    expect(result).toBe(3)
})

it("should multiply by 3 and return 15", () => {
    let result = 5 * 3
    expect(result).toBe(15)
})

it("should have a container div", () => {
    const { container } = render(       // pega o elemento HTML container através da renderização do App (retorna um array)
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )

    expect(container.getElementsByClassName("container").length).toBeGreaterThan(0)
})

it("should render NotFound component when entering a non existent route", () => {
    const { container } = render(                                                    // o initialEntries abaixo filtra e indica a rota
        <MemoryRouter initialEntries={["/blablabla"]}>        
            <App />
        </MemoryRouter>
    )

    const h2 = container.getElementsByTagName("h2")[0]
    expect(h2.innerHTML).toBe("Página não encontrada")
})

it("should go to the registration page when clicking on the register button", () => {
    const { container } = render(                                                    
        <MemoryRouter>        
            <App />
        </MemoryRouter>
    )

    act(() => {
        let registerButton = container
        .getElementsByClassName("headerRight")[0]
        .getElementsByTagName("a")[0]

        registerButton.click()
    })

    const registrationTitle = screen.getByText("Cadastro de carro")
    expect(registrationTitle).toBeInTheDocument()
})

export {}