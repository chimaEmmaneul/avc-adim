// import { Country, Profile } from "@/pages/authentication/@types";
import {
  Country,
  Currency,
  Profile,
  State,
} from "@/modules/authentication/@types";
import { create } from "zustand";
interface ProfileState {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  countries: Country[];
  setCountries: (countries: Country[]) => void;

  states: State[] | null;
  setStates: (states: State[]) => void;

  currencies: Currency[] | null;
  setCurrencies: (currencies: Currency[]) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  countries: [],
  setCountries: (countries) => set({ countries }),

  states: null,
  setStates: (states) => set({ states }),

  currencies: null,
  setCurrencies: (currencies) => set({ currencies }),
}));


