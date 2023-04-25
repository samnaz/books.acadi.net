import { defineStore } from 'pinia';

const fakeStoreUrl = 'https://fakestoreapi.com';

export interface Author {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface AuthorState {
  items: Record<string, Author>;
  ids: number[];
}

export const useAuthorStore = defineStore({
  id: 'Authors',

  state: (): AuthorState => ({
    items: {},
    ids: [],
  }),

  getters: {
    list(): Author[] {
      return this.ids.map((i) => this.items[i]);
    },

    loaded(): boolean {
      return this.ids.length > 0;
    },
  },

  actions: {
    async fetchAll() {
      if (this.loaded) return;

      const res = await fetch(`${fakeStoreUrl}/Authors`);
      const data: Author[] = await res.json();
      this.ids = data.map((Author) => {
        this.items[Author.id] = Author;
        return Author.id;
      });
    },
  },
});
