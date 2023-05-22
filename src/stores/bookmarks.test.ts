import { setActivePinia, createPinia } from "pinia";
import { useBookmarksStore } from "./bookmarks";

describe("Bookmarks Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should add a bookmark", () => {
    const bookmarks = useBookmarksStore();
    bookmarks.addBookmark("1");
    expect(bookmarks.getBookmarks()).toEqual(["1"]);
  });

  it("should remove a bookmark", () => {
    const bookmarks = useBookmarksStore();
    bookmarks.addBookmark("1");
    bookmarks.removeBookmark("1");
    expect(bookmarks.getBookmarks()).toEqual([]);
  });

  it("should return an array of bookmarks", () => {
    const bookmarks = useBookmarksStore();
    bookmarks.addBookmark("1");
    bookmarks.addBookmark("2");
    bookmarks.addBookmark("3");
    expect(bookmarks.getBookmarks()).toEqual(["1", "2", "3"]);
  });

  it("should return true if a bookmark exists", () => {
    const bookmarks = useBookmarksStore();
    bookmarks.addBookmark("1");
    expect(bookmarks.hasBookmark("1")).toBe(true);
  });

  it("should return false if a bookmark does not exist", () => {
    const bookmarks = useBookmarksStore();
    bookmarks.addBookmark("1");
    expect(bookmarks.hasBookmark("2")).toBe(false);
  });

  it("should toggle a bookmark (add if it doesn't exist, remove if it exists)", () => {
    const bookmarks = useBookmarksStore();
    bookmarks.toggleBookmark("1");
    expect(bookmarks.getBookmarks()).toEqual(["1"]);

    bookmarks.toggleBookmark("1");
    expect(bookmarks.getBookmarks()).toEqual([]);
  });
});
