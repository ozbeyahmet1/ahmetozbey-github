import { CSSProperties } from "react";

export type PropsWithIdAndName<P = unknown> = P & { readonly id: number; readonly name: string };

export interface BackgroundProperties extends PropsWithIdAndName {
  style: CSSProperties;
}
