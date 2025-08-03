import { getGifs } from "../../src/helpers";

describe("Pruebas en getGifs()", () => {
    test("Debe de retornar un arreglo de gifs", async () => {
        const gifs = await getGifs("Dragón Ball Z");

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            height: expect.any(Number),
            id: expect.any(String), 
            title: expect.any(String), 
            url: expect.any(String), 
            width: expect.any(Number)
        });
    });
});
