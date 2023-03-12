import { Pass } from '.';

export interface Meta {
  meta: {
    limit: number;
    offset: number;
    size: number;
  };
  passes: Pass[];
}
