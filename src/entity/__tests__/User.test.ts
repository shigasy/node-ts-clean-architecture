import { UserBusinessRule } from "../user";

describe("entity", () => {
  describe("user", () => {
    test("名前の文字数が1~11文字以内を受け入れる", () => {
      const name = "ほげほげ";
      expect(UserBusinessRule.isNameLengthValid(name)).toBe(true);
    });
    describe("境界値テスト", () => {
      test("名前の文字数が0文字の場合は弾く", () => {
        const name = "";
        expect(UserBusinessRule.isNameLengthValid(name)).toBe(false);
      });
      test("名前の文字数が1文字の場合は許可", () => {
        const name = "1";
        expect(UserBusinessRule.isNameLengthValid(name)).toBe(true);
      });
      test("名前の文字数が11文字の場合は許可する", () => {
        const name = "12345678901";
        expect(UserBusinessRule.isNameLengthValid(name)).toBe(true);
      });
      test("名前の文字数が12文字の場合は弾く", () => {
        const name = "123456789012";
        expect(UserBusinessRule.isNameLengthValid(name)).toBe(false);
      });
    });
  });
});
