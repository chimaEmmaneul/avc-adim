import { Profile } from "@/pages/authentication/@types";
import { create } from "zustand";
interface ProfileState {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
}

// Create the Zustand store
export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
}));
