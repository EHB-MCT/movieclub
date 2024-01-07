const { checkGenreName } = require('../../../helpers/checkGenreName.helper');

test("Check Genre Name", () => {
    expect(checkGenreName("")).toBe(false);
    expect(checkGenreName(null)).toBe(false);
    expect(checkGenreName("i")).toBe(false);
    expect(checkGenreName(0)).toBe(false);
    expect(checkGenreName("thisisasuperlonggenrenamebutimeanreallylongsolongthatitdoesntmakeanysense")).toBe(false);
    expect(checkGenreName("action")).toBe(true);
    expect(checkGenreName("short film")).toBe(true);
    expect(checkGenreName("sci-fi")).toBe(true);
})