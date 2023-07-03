import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  LocationId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setLocationId: (LocationId: number) => void;
  setSortEpisode: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId, searchText: undefined },
    })),
  setLocationId: (LocationId) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        LocationId,
        searchText: undefined,
      },
    })),
  setSortEpisode: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
}));

export default useGameQueryStore;
