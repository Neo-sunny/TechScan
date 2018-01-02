import { Item } from './item';

export interface Repos{
    total_count:number;
    incomplete_results:Boolean;
    items: Item[];
    
}