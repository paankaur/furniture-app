import React, { createContext, useContext, useState, useEffect } from "react";
// Optional persistence:
// import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favoritesIds, setFavoritesIds] = useState([]);

  // Optional: load saved favorites from AsyncStorage on mount
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const raw = await AsyncStorage.getItem('@favorites_ids');
  //       if (raw) setFavoritesIds(JSON.parse(raw));
  //     } catch (e) { console.warn('Failed to load favorites', e); }
  //   })();
  // }, []);
  //
  // Optionally persist:
  // useEffect(() => {
  //   AsyncStorage.setItem('@favorites_ids', JSON.stringify(favoritesIds)).catch(() => {});
  // }, [favoritesIds]);

  const addFavorite = (id) => {
    setFavoritesIds((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const removeFavorite = (id) => {
    setFavoritesIds((prev) => prev.filter((i) => i !== id));
  };

  const toggleFavorite = (id) => {
    setFavoritesIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const isFavorite = (id) => favoritesIds.includes(id);

  const value = {
    favoritesIds,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within a FavoritesProvider");
  return ctx;
}