import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
    test("Debe de mostrar el titulo inicial", () => {
        render(<GifExpertApp />);

        expect(screen.getByText("Categorias"));
    });

    test("Debe agregar una nueva categoría", async () => {
        render(<GifExpertApp  />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        const inputValue = "Dragon Ball Z";

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        const categoryTitle = await screen.findByText(inputValue);
        expect(categoryTitle).toBeTruthy();
    });

    test("No Debe de agregar una categoría duplicada", async () => {
        render(<GifExpertApp  />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        const inputValue = "Dragon Ball Z";

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        const allItems = await screen.findAllByText(inputValue);
        expect(allItems.length).toBe(1);
    });
})