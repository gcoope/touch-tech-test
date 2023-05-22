import { ref } from "vue";
import { defineStore } from "pinia";

export const useBookmarksStore = defineStore("bookmarks", () => {
  const bookmarks = ref<Set<string>>(new Set());

  function addBookmark(id: string) {
    bookmarks.value.add(id);
  }
  function removeBookmark(id: string) {
    bookmarks.value.delete(id);
  }
  function getBookmarks(): string[] {
    return Array.from(bookmarks.value);
  }
  function hasBookmark(id: string) {
    return bookmarks.value.has(id);
  }
  function toggleBookmark(id: string) {
    if (hasBookmark(id)) removeBookmark(id);
    else addBookmark(id);
  }
  return {
    addBookmark,
    removeBookmark,
    getBookmarks,
    hasBookmark,
    toggleBookmark,
  };
});
