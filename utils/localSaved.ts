import { ExchangeNamesEnum } from "../constants/enums";

interface LocalSavedActions<T, V = void> {
  set: (value: T) => void;
  get: () => Nullable<T>;
  remove: (value: V) => void;
}

interface LocalSaved {
  savedExchange: LocalSavedActions<ExchangeNamesEnum>;
}

const getSavedParsedItem = <T>(item: string): Nullable<T> => {
  const savedCurrentItem = localStorage.getItem(item);

  return savedCurrentItem ? JSON.parse(savedCurrentItem) : null;
};

export const localSaved: LocalSaved = {
  savedExchange: {
    set: (value: ExchangeNamesEnum) =>
      localStorage.setItem("savedExchange", value),
    get: () => getSavedParsedItem<ExchangeNamesEnum>("savedExchange"),
    remove: () => localStorage.removeItem("savedExchange"),
  },
};
