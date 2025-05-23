import { Country, Profile } from "@/pages/authentication/@types";
import { create } from "zustand";
interface ProfileState {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  countries: Country[] | null;
  setCountries: (countries: Country[]) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  countries: null,
  setCountries: (countries) => set({ countries }),
}));
