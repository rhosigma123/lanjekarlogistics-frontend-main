// types.ts (or types/layoutTypes.ts if you want to organize better)
export type CleanedLayout = Omit<
typeof import("../app/layout"), // Adjust path based on file location
  | "metadata"
  | "default"
  | "config"
  | "generateStaticParams"
  | "revalidate"
  | "dynamic"
  | "fetchCache"
  | "preferredRegion"
  | "runtime"
  | "maxDuration"
  | "generateMetadata"
  | "viewport"
  | "generateViewport"
  | "mergeMetadata"
>;
