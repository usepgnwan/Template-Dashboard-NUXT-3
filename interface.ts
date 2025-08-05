export interface itemMenu { 
    label: string;
    icon?: string;
    class?: string;
    to?: string;
    parent_to?: string;
    active?: boolean;
    defaultOpen? : boolean;
    children?: {
                label: string;
                description?: string;
                class?: string;
                to?: string;
                active?: boolean;
            }[] | null 
}