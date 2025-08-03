import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
    test("Debe de cambiar el valor de la caja de texto", () => {
        render(<AddCategory handleAddCategory={ () => { } } />);

        const input = screen.getByRole("textbox");

        fireEvent.input(input, { target: { value: "Dragon Ball Z" } });

        expect(input.value).toBe("Dragon Ball Z");
    });

    test("Debe de llamar A handleAddCategory() si el input tiene un valor", () => {
        const inputValue = "Dragon Ball Z";
        const handleAddCategory = jest.fn();

        render(<AddCategory handleAddCategory={ handleAddCategory }/>);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe("");

        expect(handleAddCategory).toHaveBeenCalled();
        expect(handleAddCategory).toHaveBeenCalledTimes(1);
        expect(handleAddCategory).toHaveBeenCalledWith(inputValue)
    });

    test("Debe de estar habilitado el input:submit si el input tiene texto", () => {
        render(<AddCategory handleAddCategory={ () => { } }/>);

        const input = screen.getByRole("textbox");
        const inputSubmit = screen.getByRole("button", { name: "Buscar" });

        fireEvent.input(input, { target: { value: "Dragon Ball Z" } });

        expect(inputSubmit.disabled).toBeFalsy();
    });
    
    test("Debe de estar desahabilitado el input:submit si el input está vacio", () => {
        render(<AddCategory handleAddCategory={ () => { } }/>);

        const inputSubmit = screen.getByRole("button", { name: "Buscar" });

        expect(inputSubmit.disabled).toBeTruthy();
    });
});