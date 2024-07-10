export interface DataObjectInterface {
    name: string;
    title: string;
    description: string;
    metadata: ObjectMetaData;
    tags: string[];
  }
  
export interface ObjectMetaData {
    date: string;
    time: string;
    status: string;
}