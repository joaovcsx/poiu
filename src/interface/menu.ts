export interface Menu {
    title: string;
    icon: string;
    name?: string;
    componentIds?: Array<string>;
    separator?: boolean;
    submenuOpened?: boolean;
    // subPages?: Array<SubPage>;
    disable?: boolean;
}