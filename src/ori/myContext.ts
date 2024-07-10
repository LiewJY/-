import { createContext } from "@lit/context";
import { DataObjectInterface } from "./my.interfaces";

export const myContext = createContext<DataObjectInterface>(Symbol('my-context'));
