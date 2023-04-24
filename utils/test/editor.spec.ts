import { xssFilter } from "../editor";

describe("xssFilter", () => {
  it("should filter out special characters for level 0", () => {
    const input = '<script>alert("XSS attack!");</script>';
    const output = "scriptalertXSS attack!script";
    expect(xssFilter(input)).toEqual(output);
  });

  it("should replace < and > characters with &lt; and &gt; for level 1", () => {
    const input = '<script>alert("XSS attack!");</script>';
    const output = '&lt;script&gt;alert("XSS attack!");&lt;/script&gt;';
    expect(xssFilter(input, 1)).toEqual(output);
  });

  it("should return the input string for invalid level values", () => {
    const input = '<script>alert("XSS attack!");</script>';
    expect(xssFilter(input, 2)).toEqual(input);
    expect(xssFilter(input, -1)).toEqual(input);
  });
});
