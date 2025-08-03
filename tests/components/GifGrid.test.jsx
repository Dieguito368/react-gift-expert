import { getByText, render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs")

describe("Pruebas en <GifGrid />", () => {
    const category = "Dragon Ball Z";

    test("Debe de mostrar el Spinner inicialmente", () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        expect(screen.getByTestId("spinner")).toBeTruthy();
    });

    test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
        const gifs = [
            { id: 'abc', title: 'Goku', url: 'https://localhost/goku.gif' },
            { id: '123', title: 'Vegeta', url: 'https://localhost/vegeta.gif' }
        ];

        useFetchGifs.mockReturnValue({
            gifs,
            isLoading: false
        }); 

        render(<GifGrid category={ category } />);

        expect(screen.getAllByRole("img").length).toBe(gifs.length);
        expect(screen.getByText(gifs[0].title)).toBeTruthy();
        expect(screen.getByText(`${gifs.length} GIFs encontrados`)).toBeTruthy();
    });

    test("Debe mostrar <-- Sin resultados --> si no hay gifs", () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: false
        });

        render(<GifGrid category="fjdjfdsjfsdj" />);

        expect(screen.getByText("Sin resultados")).toBeTruthy();
    });

    test("Debe de mostrar el titulo de la categoria", () => {
        useFetchGifs({
            gifs: [],
            isLoading: false
        });

        render(<GifGrid category={ category } />);

        expect(screen.getByText(category)).toBeTruthy();
    });
});