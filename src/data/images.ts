// Photography sourced from Unsplash (free license). Used as stand-ins for a
// fictional brand concept — see the README for full credits.
const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  heroNight: (w = 2200) => u("photo-1752773462774-16e3b911a90f", w), // JDM taillights, night
  gtr: (w = 1600) => u("photo-1580427331730-b38f8dc1f355", w), // Nissan GTR, Shibuya
  mustang: (w = 1600) => u("photo-1567818668259-e66acac21610", w), // Mustang, night
  rx7: (w = 1600) => u("photo-1762095209218-d109b5ffc162", w), // RX-7, spoiler + exhaust
  engineBay: (w = 1600) => u("photo-1587004461511-ded665a2e4b9", w), // S13 SR20DET bay
  wheelCaliper: (w = 1600) => u("photo-1770834807387-820280f8270b", w), // wheel, red caliper
  garage: (w = 1600) => u("photo-1649288687380-a945562fabfb", w), // underground parking garage
  highway: (w = 1600) => u("photo-1679120594739-7d2695cfc4f6", w), // long exposure overpass
  nightMeet: (w = 1600) => u("photo-1708063784957-c8d33e68e090", w), // night car meet
};
